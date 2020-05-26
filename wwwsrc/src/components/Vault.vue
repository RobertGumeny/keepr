<template>
  <div class="vault col-md-3 m-3">
    <p>{{vaultData.name}}</p>
    <p>{{vaultData.description}}</p>
    <button @click="viewDetails()" data-toggle="modal" data-target="#viewVaultModal">View Details</button>
    <button @click="deletePrompt()">Delete</button>
    <LargeModal :title="vaultData.name" id="viewVaultModal">
      <VaultDetails />
    </LargeModal>
  </div>
</template>


<script>
import LargeModal from "../components/LargeModal"
import SmallModal from "./SmallModal"
import VaultDetails from "../views/VaultDetails"
export default {
  name: 'vault',
  props: ["vaultData"],
  data() {
    return {}
  },
  computed: {},
  methods: {
    viewDetails() {
      this.$store.commit("setActiveVault", this.vaultData)
      this.$store.dispatch("getKeepsByVaultId", this.vaultData.id)
    },
    deletePrompt() {
      let d = confirm("Are you sure you want to delete?\nThis Vault cannot be recovered");
      if (d == true) {
        this.deleteVault();
      }
    },
    deleteVault() {
      this.$store.dispatch("deleteVault", { vaultId: this.vaultData.id, user: this.$auth.user })
    }
  },
  components: {
    LargeModal,
    SmallModal,
    VaultDetails
  }
}
</script>


<style scoped>
</style>