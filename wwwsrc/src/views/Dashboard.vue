<template>
  <div class="dashboard container-fluid">
    <div class="row">
      <div class="col-12">
        <h1>Welcome back {{ user.name }}</h1>
        <button type="button" data-toggle="modal" data-target="#createKeepModal">Add a Keep</button>
        <button type="button" data-toggle="modal" data-target="#createVaultModal">Create a Vault</button>
      </div>
      <DefaultModal title="Create a Keep" id="createKeepModal">
        <CreateKeep />
      </DefaultModal>
      <DefaultModal title="Create a Vault" id="createVaultModal">
        <CreateVault />
      </DefaultModal>
      <h2>User ID: {{user.sub}}</h2>
    </div>
    <div class="row">
      <div class="col-12">
        <h2>Vaults:</h2>
      </div>
      <Vault v-for="vault in userVaults" :key="vault.id" :vaultData="vault"></Vault>
    </div>
    <div class="row">
      <div class="col-12">
        <h2>Keeps:</h2>
      </div>
      <Keep v-for="keep in userKeeps" :key="keep.id" :keepData="keep"></Keep>
    </div>
  </div>
</template>

<script>
import DefaultModal from "../components/DefaultModal"
import CreateKeep from "../components/forms/CreateKeep"
import CreateVault from "../components/forms/CreateVault"
import Keep from "../components/Keep"
import Vault from "../components/Vault"
export default {
  mounted() {
    this.$store.dispatch("getUserKeeps", this.$auth.user);
    this.$store.dispatch("getUserVaults", this.$auth.user)
  },
  methods: {

  },
  computed: {
    user() {
      return this.$auth.user;
    },
    userKeeps() {
      return this.$store.state.keeps.userKeeps;
    },
    userVaults() {
      return this.$store.state.vaults.userVaults;
    }
  },
  components: {
    DefaultModal,
    CreateKeep,
    CreateVault,
    Keep,
    Vault
  }
};
</script>

<style></style>
