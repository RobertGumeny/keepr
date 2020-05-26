<template>
  <div class="vault col-md-3 my-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{vaultData.name}}</h5>
        <h6 class="card-subtitle">{{vaultData.description}}</h6>
        <div class="row mt-5 justify-content-center">
          <button
            class="btn btn-sm btn-primary"
            @click="viewDetails()"
            data-toggle="modal"
            data-target="#viewVaultModal"
          >View</button>
          <button class="btn btn-sm btn-danger ml-1" @click="deletePrompt()">Delete</button>
        </div>
      </div>
    </div>
    <LargeModal :title="vault.name" id="viewVaultModal">
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
  computed: {
    vault() {
      return this.$store.state.vaults.activeVault;
    }
  },
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