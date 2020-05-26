<template>
  <div class="vaultDetails container-fluid">
    <div class="row justify-content-between mt-0 align-items-center">
      <p class="align-self-start ml-1">{{vault.description}}</p>
      <button
        class="btn btn-sm btn-danger"
        @click="deletePrompt()"
        data-dismiss="modal"
      >Delete Vault</button>
    </div>
    <div class="row">
      <VaultKeep v-for="vaultKeep in vaultKeeps" :key="vaultKeep.id" :vaultKeepData="vaultKeep"></VaultKeep>
    </div>
  </div>
</template>


<script>
import VaultKeep from "../components/VaultKeep"
export default {
  name: 'vaultDetails',
  data() {
    return {}
  },
  computed: {
    vault() {
      return this.$store.state.vaults.activeVault;
    },
    vaultKeeps() {
      return this.$store.state.vaults.activeVaultKeeps;
    }
  },
  methods: {
    deletePrompt() {
      let d = confirm("Are you sure you want to delete?\nThis Vault cannot be recovered");
      if (d == true) {
        this.deleteVault();
      }
    },
    deleteVault() {
      this.$store.dispatch("deleteVault", { vaultId: this.vault.id, user: this.$auth.user })
    }
  },
  components: {
    VaultKeep
  }
}
</script>


<style scoped>
</style>