<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Routing</h1>
                <hr>
                <!-- Display header in the top of Home Page -->
                <router-view name="header-top"></router-view>
                <!-- Display specific content from related component by different url -->
                <router-view></router-view><br>
                <!-- Display header in the bottom of User Page -->
                <router-view name="header-bottom"></router-view>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style>
</style>
