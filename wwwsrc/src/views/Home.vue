<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card-columns mx-1">
          <Keep v-for="keep in keeps" :key="keep.id" :keepData="keep"></Keep>
        </div>
      </div>
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
<style scoped>
</style>
