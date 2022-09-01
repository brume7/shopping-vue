<template>
    <transition-group name="fade" tag="div" enter-active-class="animate__animated animate__fadeInRight"
        leave-active-class="animate__animated animate__fadeOut">
        <div class="row d-flew mb-3 align-items-center" v-for="(val, index) in products" :key="index"
            :data-index="index">
            <div class="row d-flew mb-3 align-items-center"
                v-if="val.price <= Number(maximum) && val.price >= Number(minimum)">
                <div class="col-sm-1">
                    <button class="btn btn-info" @click.stop="$parent.$emit('add', val)">+</button>
                </div>
                <div class="col-sm-4">
                    <img class="img-fluid d-block" :src="val.image" :alt="val.name" />
                </div>
                <div class="col">
                    <h3 class="h3 text-info " v-text="val.name"></h3>
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