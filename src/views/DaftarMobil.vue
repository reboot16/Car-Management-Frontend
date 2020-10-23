<template>
  <div class="about">
    <h1>Daftar Mobil</h1>
    <b-button class="btn" variant="outline-primary" @click="tambahMobil">Tambah Mobil</b-button>
    <mobil></mobil>
  </div>
</template>

<script>
  import Mobil from '@/components/Mobil'

  export default {
    name : "daftar-mobil",
    components: {
      Mobil
    },
    methods: {
      tambahMobil() {
        this.$router.push({path: '/mobil-tambah'})
      }
    }
  }
</script>
<style>
  .btn{
    margin: 5px 100px 20px 5px;
    float: right;
  }
</style>
