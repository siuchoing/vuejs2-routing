<template>
    <div>
        <h3>Some User Details</h3>
        <p>User loaded has ID: {{ $route.params.id }}</p>
        <!-- Passing query parameters with Named Routes from routes.js -->
        <router-link
                tag="button"
                :to="link"
                class="btn btn-primary">Edit User</router-link>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                link: {
                    name: 'userEdit',
                    params: {
                        id: this.$route.params.id
                    },
                    query: {
                        locale: 'en',
                        q: 100
                    },
                    // prevent data jump at the bottom while navigating to edit page with '#data', where "http://localhost:8080/user/3/edit?locale=en&q=100#data"
                    hash: '#data'
                }
            }
        }
    }
</script>