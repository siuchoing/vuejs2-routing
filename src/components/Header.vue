<!----------------------------------------------------------------------
|  to="/"  // only loading routes, without sending request to server
|  exact   // only match this url '/', rather than match the url '/'.'user' as well
------------------------------------------------------------------------>
<template>
    <ul class="nav nav-pills">
        <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
        <router-link to="/user" tag="li" active-class="active"><a>User</a></router-link>
    </ul>
</template>
