<template>
  <div class="vaultKeep col-md-3 m-3">
    <img :src="vaultKeepData.img" />
    <p>{{vaultKeepData.name}}</p>
    <p>{{vaultKeepData.description}}</p>
    <p>Private: {{vaultKeepData.isPrivate}}</p>
    <button @click="deletePrompt()">Remove from Vault</button>
  </div>
</template>


<script>
import LargeModal from "../components/LargeModal"
import KeepDetails from "../views/KeepDetails"
export default {
  name: 'vaultKeep',
  props: ["vaultKeepData"],
  data() {
    return {}
  },
  computed: {
    vault() {
      return this.$store.state.vaults.activeVault;
    }
  },
  methods: {
    deletePrompt() {
      let d = confirm("Are you sure you want to delete?\nYou will need to add this Keep to your Vault again");
      if (d == true) {
        this.deleteVaultKeep();
      }
    },
    deleteVaultKeep() {
      this.$store.dispatch("deleteVaultKeep", {
        vaultKeepId: this.vaultKeepData.vaultKeepId,
        user: this.$auth.user,
        vaultId: this.vault.id      })
    }
  },
  components: {
    LargeModal,
    KeepDetails,
  }
}
</script>


<style scoped>
</style>