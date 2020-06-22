<template>
  <div class="dashboard container">
    <div class="row">
      <div class="col-12 text-center text-primary">
        <h1>Welcome back {{ user.name }}</h1>
        <button
          class="btn btn-outline-success"
          type="button"
          data-toggle="modal"
          data-target="#createKeepModal"
        >Add a Keep</button>
        <button
          class="btn btn-outline-info"
          type="button"
          data-toggle="modal"
          data-target="#createVaultModal"
        >Create a Vault</button>
      </div>
      <LargeModal title="Create a Keep" id="createKeepModal">
        <CreateKeep />
      </LargeModal>
      <LargeModal title="Create a Vault" id="createVaultModal">
        <CreateVault />
      </LargeModal>
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
    </div>
    <div class="row">
      <div class="col-12">
        <div class="card-columns mx-1">
          <Keep v-for="keep in userKeeps" :key="keep.id" :keepData="keep"></Keep>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LargeModal from "../components/LargeModal"
import SmallModal from "../components/SmallModal"
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
    LargeModal,
    SmallModal,
    CreateKeep,
    CreateVault,
    Keep,
    Vault
  }
};
</script>

<style></style>
