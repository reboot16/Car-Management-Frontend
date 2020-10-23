<template>
    <div class="tambah-mobil">
        <h1>Tambah Mobil</h1>
        <b-form @submit="onSubmit" @reset="onReset">
            <b-form-group
                    id="input-group-1"
                    label="nama Mobil"
                    label-for="input-1"
            >
                <b-form-input
                        id="input-1"
                        v-model="form.nama_mobil"
                        type="text"
                        required
                        placeholder="Nama Mobil"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Harga" label-for="input-2">
                <b-form-input
                        id="input-2"
                        v-model="form.harga"
                        required
                        type="number"
                        placeholder="harga"
                ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-2" label="Stock" label-for="input-2">
                <b-form-input
                        id="input-2"
                        v-model="form.stock"
                        required
                        type="number"
                        placeholder="Stock"
                ></b-form-input>
            </b-form-group>


            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
    </div>
</template>

<script>
    export default {
        name: "TambahMobil",
        data() {
            return {
                form: {
                    nama_mobil: '',
                    harga: '',
                    stock: null
                },
            }
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault()
                this.$store.dispatch('addMobil', this.form)
            },
            onReset(evt) {
                evt.preventDefault()
                // Reset our form values
                this.form.nama_mobil = ''
                this.form.harga = ''
                this.form.stock = ''
                this.form.checked = []
            }
        }
    }
</script>

<style scoped>

</style>
