<template>
    <nav class="navbar navbar-expand-lg fixed-top">
        <div class="navbar-text ms-auto d-flex">
            <button class="btn btn-sm btn-outline-success" @click="$parent.$emit('toggle')">
                <font-awesome-icon icon="dollar-sign"></font-awesome-icon>
            </button>
            <div class="dropdown ms-2" v-if="cart.length > 0">
                <button class="btn btn-success btn-sm dropdown-toggle" id="cartDropdown" data-bs-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                    <span class="badge badge-pill bg-light text-dark">{{ cartQty }}</span>
                    <font-awesome-icon icon="cart-shopping" class="mx-2"></font-awesome-icon>
                    <Price :value="cartTotal"></Price>
                </button>
                <div class="dropdown-menu dropdown-menu-end" aria-labelledby="cartDropdown">
                    <div v-for="(val, index) in cart">
                        <div class="dropdown-item-text text-nowrap text-end">
                            <span class="badge badge-pill bg-warning align-text-top me-1">{{ val.qty }}</span>
                            {{ val.item.name }}
                            <b>
                                <price :value="cartItemPrice(index)"></price>
                            </b>
                            <span @click.stop="$parent.$emit('delete', index)"
                                class="badge bg-danger text-light mx-1 btn">-</span>
                        </div>
                    </div>
                    <hr class="dropdown-divider">
                    <div class="dropdown-item-text text-end">
                        <b>Total : </b>
                        <price :value="cartTotal"></price>
                    </div>
                    <router-link class="btn btn-sm btn-warning text-dark float-end mx-2" to="/checkout">Proceed to checkout</router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Price from "./Price.vue";

export default {
    name: 'NavBar',
    props: ['cart', 'cartQty', 'cartTotal'],
    components: {
        FontAwesomeIcon,
        Price
    },
    methods: {
        cartItemPrice: function (index) {
            return this.cart[index].item.price * this.cart[index].qty;
        }
    }
}
</script>

<style>
</style>