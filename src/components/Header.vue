<template>
    <div class="header-component">
        <b-navbar toggleable="lg" type="dark" variant="secondary">
            <b-navbar-brand href="/">Car Store Management</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>

                </b-navbar-nav>

                <b-navbar-nav class="ml-auto">
                    <b-nav-item href="/#/mobil">Mobil</b-nav-item>
                    <b-nav-item href="/#/penjualan">Penjualan</b-nav-item>
                    <b-nav-item-dropdown right>
                        <template #button-content>
                            <em>User</em>
                        </template>
                        <b-dropdown-item href="#">Profile</b-dropdown-item>
                        <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>
