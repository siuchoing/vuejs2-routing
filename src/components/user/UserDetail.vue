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
        },

        /***************************************************
         * !!! with next(), you can load this component
         * !!! without next(), the object in this file hasn't been fully initialized.
         * !!! So, you can't access vue instance, and data. So, it fail loading component
         * !!! and this link to access this property here will not to work,
         * !!! because this component hasn't been created yet.
         ***************************************************/
        beforeRouteEnter(to, from, next) {

            /************************************************
             * To set up view and access right for authenticated user
             ************************************************/
            let accessRight = true;
            if (accessRight) {
                    next();             // To load whole vue instance of link in this component, with next()
            } else {
                next(false);        // Cannot access the path and cannot load whole vue instance in this component
            }
            console.log('next');

            /************************************************
             * To load data properties of link in this component
             ************************************************/
            // next(vm => {
            //     vm.link;
            // });
        }
    }
</script>