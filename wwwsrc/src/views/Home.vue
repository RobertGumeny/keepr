<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col-3 m-3" v-for="keep in keeps" :key="keep.id" :keepData="keep">
        <img :src="keep.img" />
        <p>{{keep.name}}</p>
        <p>{{keep.description}}</p>
        <p>Private: {{keep.isPrivate}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
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
  }
};
</script>
