<template>
  <div class="home">
    <!--    <b-navbar type="dark" variant="success" class="nav">
      <b-navbar-brand href="#"> HappyHouse </b-navbar-brand>

      <b-navbar-nav class="ml-auto">
        <b-nav-item href="/house/search"> House </b-nav-item>

        <b-nav-item-dropdown text="Board" right>
          <b-dropdown-item href="/board/notice">공지사항</b-dropdown-item>
          <b-dropdown-item href="/board/community">커뮤니티</b-dropdown-item>
          <b-dropdown-item href="/board/list">All</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item> <member-login /> </b-nav-item>
      </b-navbar-nav>
    </b-navbar> -->
    <br /><br />
    <house-search />
    <div>
      <img
        src="https://play-lh.googleusercontent.com/7o1FLAP6HwbioxRmZrg6Luat4cIXKeLAj2N-c62blvHXgPlQ1TypGHAvMs2YOvcFUwg"
      />
    </div>
    <table>
      <tr>
        <td><board-notice /></td>
        <td><board-comm /></td>
      </tr>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src
import BoardNotice from "@/components/board/BoardNotice.vue";
import BoardComm from "@/components/board/BoardComm.vue";
import HouseSearch from "@/components/house/HouseSearch.vue";

export default {
  name: "HomeView",
  components: {
    BoardNotice,
    BoardComm,
    HouseSearch,
  },
};
</script>
