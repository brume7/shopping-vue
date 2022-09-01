<template>
    <div>
        <h1 class="h1">Check out</h1>
        <table class="table table-hover" v-if="cart.length">
            <caption class="text-end h3">
              <b>Total:</b>
              <Price class="d-block text-success font-weight-light" :value="Number(cartTotal)"></Price>
            </caption>
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Item</th>
                <th scope="col" class="text-center">Qty</th>
                <th scope="col" class="text-right">Price</th>
                <th scope="col" class="text-right">Sub-total</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(val, index) in cart" :key="val.item.id">
                <td class="text-center">
                  <div class="btn-group" role="group" aria-label="Basic example">
                    <button @click="$emit('add', val.item)" class="btn btn-info">+</button>
                    <button @click="$emit('delete', index)" class="btn btn-outline-info">-</button>
                  </div>
                </td>
                <th scope="row">{{val.item.title}}</th>
                <td class="text-center">{{val.qty}}</td>
                <td class="text-right">{{Number(val.item.price)}}</td>
                <td class="text-right">{{Number(val.qty * val.item.price)}}</td>
              </tr>
            </tbody>
          </table>
          <h1 v-else class="display-1 text-center text-info">Add products to cart</h1>

          <router-link class="btn btn-sm btn-info text-dark" to="/">Continue shopping</router-link>

    </div>
</template>

<script>
import Price from '@/components/Price.vue';
export default {
    name: 'Checkout',
    components: {
        Price
    },
    props: ['cart', 'cartTotal']
}
</script>