<template>
    <transition-group name="fade" class="row" tag="div" enter-active-class="animate__animated animate__fadeInRight"
        leave-active-class="animate__animated animate__fadeOut">
        <div class="row d-flex mb-3 mt-2 align-items-center col-sm-6" v-for="(val, index) in products" :key="index"
            :data-index="index">
            <div v-if="val.price <= Number(maximum) && val.price >= Number(minimum)"
                class="row d-flex mb-3 align-items-center">
                <div class="col-sm-1">
                    <button class="btn btn-info" @click.stop="$parent.$emit('add', val)">+</button>
                </div>
                <div class="col-sm-4">
                    <img class="img-fluid d-block" :src="val.thumbnail" :alt="val.title" />
                </div>
                <div class="col">
                    <h3 class="h3 text-info " v-text="val.title"></h3>
                    <p class="mb-0" v-text="val.description"></p>
                    <div class="h5 float-end">
                        <Price :value="val.price"></Price>
                    </div>
                </div>
            </div>
        </div>
    </transition-group>
</template>

<script>
import Price from './Price.vue';

export default {
    name: 'ProductList',
    props: ['products', 'maximum', 'minimum'],
    components: {
        Price,
    },
    methods: {

    },
}
</script>

<style>
</style>