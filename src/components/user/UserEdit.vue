<template>
    <div>
        <h3>Edit the User</h3>
        <p>Locale: {{ $route.query.locale }}</p>
        <p>Analytics: {{ $route.query.q }}</p>
        <hr>
        <button class="btn btn-primary" @click="confirmed = true">Confirm to leave</button>
        <div style="height: 700px"></div>
        <p id="data">Some extra Data</p>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                confirmed : false
            }
        },
        beforeRouteLeave (to, from, next) {
            if(this.confirmed) {
                next();                 // Confirm to leave
            } else {
                if( confirm('Are you sure') ) {
                    next();             // Confirm to leave
                } else {
                    console.log('Cancel to leave');
                }
            }

        }
    }
</script>