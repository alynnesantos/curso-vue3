<template>
    <div class="users-edit">
        <h1>Users</h1>
        <h3>This is an users-edit page</h3>
        <div>
            {{ $route.query.page }}
        </div>
        <button @click="login()">
            Login
        </button>
    </div>
</template>

<script>
export default {
    created() {
        //console.log(this.$route);
        console.log(this.$router)
    },
    methods: {
        login() {
            this.$router.push({ name: 'services' })
        }
    }
}
</script>