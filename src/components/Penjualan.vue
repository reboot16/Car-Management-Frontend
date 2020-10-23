<template>
    <b-table hover :items="listPenjualan"></b-table>
</template>

<script>
    export default {
        name: "Penjualan",
        data() {
            return {
            }
        },
        computed: {
            listPenjualan: function () {
                return this.$store.getters.PENJUALAN
            }
        },
        mounted() {
            this.$store.dispatch('getPenjualan')
        }
    }
</script>

<style scoped>

</style>
