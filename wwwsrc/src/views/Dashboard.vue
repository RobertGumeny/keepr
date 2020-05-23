<template>
  <div class="dashboard container-fluid">
    <h1>Welcome back {{ user.name }}</h1>
    <button type="button" data-toggle="modal" data-target="#createKeepModal">Add a Keep</button>
    <DefaultModal title="Create a Keep" id="createKeepModal">
      <CreateKeep />
    </DefaultModal>
    <p>User</p>
    <h2>{{user.sub}}</h2>
    <div class="row">
      <Keep v-for="keep in userKeeps" :key="keep.id" :keepData="keep"></Keep>
    </div>
  </div>
</template>

<script>
import DefaultModal from "../components/DefaultModal"
import CreateKeep from "../forms/CreateKeep"
import Keep from "../components/Keep"
export default {
  mounted() {
    this.$store.dispatch("getUserKeeps", this.$auth.user);
  },
  computed: {
    user() {
      return this.$auth.user;
    },
    userKeeps() {
      return this.$store.state.keeps.userKeeps;
    }
  },
  components: {
    DefaultModal,
    CreateKeep,
    Keep
  }
};
</script>

<style></style>
