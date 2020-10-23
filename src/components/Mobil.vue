<template>
    <b-table hover :items="listMobil"></b-table>
</template>

<script>
    export default {
        name: "mobil",
        data() {
            return {
                mobil: []
            }
        },
        computed: {
            listMobil: function () {
                return this.$store.getters.MOBILS
            }
        },
        mounted() {
            this.$store.dispatch('getMobils')
        }
    }
</script>

<style scoped>

</style>
