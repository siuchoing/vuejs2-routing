<template>
    <div>
        <h1>The User Page</h1>
        <hr>
        <p>Loaded ID: {{ id }}</p>
        <button class="btn btn-primary" @click="navigrateToHome">Go to Home</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                // $route is route object provided by vuejs
                id: this.$route.params.id
            }
        },
        watch: {
            '$route'(to, from) {
                this.id = to.params.id;
            }
        },
        methods: {
            navigrateToHome() {
                this.$router.push('/');
            }
        }
    }
</script>