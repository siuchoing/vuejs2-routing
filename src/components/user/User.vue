<template>
    <div>
        <h1>The User Page</h1>
        <hr>
        <button class="btn btn-primary" @click="navigrateToHome">Go to Home</button>
    </div>
</template>

<script>
    export default {
        methods: {
            navigrateToHome() {
                this.$router.push('/');
            }
        }
    }
</script>