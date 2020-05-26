<template>
  <div class="home container-fluid">
    <div class="row my-2">
      <Keep v-for="keep in keeps" :key="keep.id" :keepData="keep"></Keep>
    </div>
  </div>
</template>

<script>
import Keep from "../components/Keep"
export default {
  name: "home",
  mounted() {
    this.$store.dispatch("getKeeps");
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    keeps() {
      return this.$store.state.keeps.publicKeeps;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
  },
  components: { Keep }
};
</script>
