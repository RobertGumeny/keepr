<template>
  <div class="vault col-md-3 m-3">
    <p>{{vaultData.name}}</p>
    <p>{{vaultData.description}}</p>
    <button @click="viewDetails()" data-toggle="modal" data-target="#viewVaultModal">View Details</button>
    <DefaultModal title="Vault Details" id="viewVaultModal">
      <VaultDetails />
    </DefaultModal>
  </div>
</template>


<script>
import DefaultModal from "../components/DefaultModal"
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
    }
  },
  components: {
    DefaultModal,
    VaultDetails
  }
}
</script>


<style scoped>
</style>