<template>
    <div>
        <NavBar :cart="cart" :cartQty="cartQty" :cartTotal="cartTotal" >
        </NavBar>
        <h1 class="h1 animate__animated animate__bounce">H-plus</h1>
        <PriceSlider :sliderStatus="sliderStatus" v-model:maximum.number="maximum"></PriceSlider>
        <ProductList :products="products" :maximum="maximum" :minimum="minimum" ></ProductList>
    </div>
</template>
<script>
import ProductList from "../components/ProductList.vue";
import PriceSlider from "../components/PriceSlider.vue";
import NavBar from "../components/NavBar.vue";

export default {
    name: "Products",
    data() {
        return {
        };
    },
    props: ['cart', 'products', 'maximum', 'minimum', 'cartQty', 'cartTotal', 'sliderStatus'],
    components: {
        NavBar,
        PriceSlider,
        ProductList,
    },

};
</script>

<style>
</style>