<template>
  <div class="vaultDetails container-fluid">
    <div class="row flex-column align-items-center">
      <p>{{vault.name}}</p>
      <p>{{vault.description}}</p>
      <Keep v-for="keep in vaultKeeps" :key="keep.id" :keepData="keep"></Keep>
      <button @click="deletePrompt()" data-dismiss="modal">Delete Vault</button>
    </div>
  </div>
</template>


<script>
import Keep from "../components/Keep"
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
    Keep
  }
}
</script>


<style scoped>
</style>