<template>
  <div class="about">
    <div v-if="logined"><member-detail /></div>
    <div v-else><member-insert /></div>
  </div>
</template>

<script>
import MemberDetail from "@/components/member/MemberDetail.vue";
import MemberInsert from "@/components/member/MemberInsert.vue";

export default {
  name: "MemberView",
  components: {
    MemberDetail,
    MemberInsert,
  },
  methods: {
    logined() {
      if (this.$store.state.logined) {
        return true;
      }
    },
  },
};
</script>
