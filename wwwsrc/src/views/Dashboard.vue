<template>
  <div class="dashboard container-fluid">
    <h1>Welcome back {{ user.name }}</h1>
    <button type="button" data-toggle="modal" data-target="#createKeepModal">Add a Keep</button>
    <DefaultModal title="Create a Keep" id="createKeepModal">
      <CreateKeep />
    </DefaultModal>
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
import DefaultModal from "../components/DefaultModal"
import CreateKeep from "../forms/CreateKeep"
export default {
  mounted() {
    this.$store.dispatch("getKeeps");
  },
  computed: {
    user() {
      return this.$auth.user;
    },
    keeps() {
      return this.$store.state.keeps.publicKeeps;
    }
  },
  components: {
    DefaultModal,
    CreateKeep
  }
};
</script>

<style></style>
