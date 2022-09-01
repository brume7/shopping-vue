<template>
    <transition name="custom" enter-active-class="animate__animated animate__fadeInDown"
        leave-active-class="animate__animated animate__fadeOut">
        <div v-if="sliderStatus">
            <div class="align-items-center" :class="sliderState">
                <label class="font-weight-bold me-2" for="formMax">Max :</label>
                <input id="formMax" type="text" class="form-control w-25  mx-2 text-center" v-model="maxAmount"
                    @change="$parent.$emit('update:maximum', maxAmount)" />
                <input type="range" class="form-range w-25" min="0" max="250" v-model="maxAmount"
                    @input="$parent.$emit('update:maximum', maxAmount)" />
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'PriceSlider',
    data() {
        return {
            maxAmount: 99,
        };
    },
    props: ['sliderStatus'],
    computed: {
        sliderState: function () {
            return this.sliderStatus ? 'd-flex' : 'd-none';
        },
    }
}
</script>