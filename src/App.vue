<template>
  <div class="container mt-5">
    <router-view :cart="cart" :cartQty="cartQty" :cartTotal="cartTotal" @add="addItem" @delete="deleteItem"
      :sliderStatus="sliderStatus" v-model:maximum.number="maximum" :products="products" :minimum="minimum"
      @toggle="toggleSliderStatus">
    </router-view>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  name: "App",
  data() {
    return {
      sliderStatus: false,
      minimum: 0,
      maximum: 1000,
      products: [],
      cart: [],
    };
  },
  mounted: function () {
    this.loadProducts();
  },
  computed: {
    cartTotal: function () {
      let total = 0;

      for (const el of this.cart) {

        total += (el.item.price * el.qty);
      }
      return total
    },
    cartQty: function () {
      let total = 0;

      for (const el of this.cart) {

        total += (el.qty);
      }
      return total;
    }
  },
  methods: {
    async loadProducts() {

      let url = 'https://dummyjson.com/products'
      //let url = 'https://hplussport.com/api/products/order/price'
      const req = new XMLHttpRequest();
      req.open("GET", url, true);
      req.send();
      req.onload = () => {
        let store = JSON.parse(req.responseText);
        let goods = store.products;
        goods  = _.sortBy(goods, [function(o) { return o.price; }])
        this.products = goods;
      }
    },
    addItem: function (products) {
      // this.cart.push(products);
      let index = 0;
      if (this.cart.length === 0) {
        return this.cart.push({
          item: products,
          qty: 1
        });
      } else {
        for (const el of this.cart) {
          if (products.id === el.item.id) {
            this.cart[index].qty += 1
            break;
          } else if (products.id !== el.item.id && this.cart.length - 1 === index) {
            this.cart.push({
              item: products,
              qty: 1
            });
            break;
          }
          index += 1;

        }
      }

    },
    deleteItem: function (index) {
      if (this.cart[index].qty > 1) {
        this.cart[index].qty -= 1
      } else {
        this.cart.splice(index, 1);
      }
    },
    toggleSliderStatus: function () {
      this.sliderStatus = !this.sliderStatus
    }
  },
};
</script>

<style>
</style>
