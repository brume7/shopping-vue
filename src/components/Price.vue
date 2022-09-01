<template>
    <span>{{ prefix + Number.parseFloat(value * conversion).toFixed(precision) }}</span>
</template>

<script>
export default {
    name: 'Price',
    props: {
        value: {

        },
        prefix: {

            default: '$'
        },
        precision: {

            default: 2
        },
        conversion: {

            default: 1
        }
    },
}
</script>