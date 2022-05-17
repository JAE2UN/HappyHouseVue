<template>
  <div id="app">
    <b-navbar type="dark" class="nav nb">
      <b-navbar-brand
        ><router-link to="/" class="rl"
          ><h2>HappyHouse</h2></router-link
        ></b-navbar-brand
      >
      <b-navbar-nav>
        <b-nav-item
          ><router-link to="/member" class="rl">Member</router-link></b-nav-item
        >
        <b-nav-item
          ><router-link to="/board" class="rl">Board</router-link></b-nav-item
        >
        <b-nav-item
          ><router-link to="/house" class="rl">Search</router-link></b-nav-item
        >
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item> <member-login /> </b-nav-item>
      </b-navbar-nav>
    </b-navbar>

    <router-view />
  </div>
</template>

<script>
import MemberLogin from "@/components/member/MemberLogin.vue";
export default {
  name: "App",
  components: {
    MemberLogin,
  },
};
</script>

<style>
.rl {
  text-decoration: none;
  color: #ebfff1;
}
.rl:hover {
  text-decoration: none;
  color: rgb(0, 25, 107);
}
.nb {
  background-color: #8d90ff;
}
</style>
