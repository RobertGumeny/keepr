<template>
  <div class="addToVault">
    <div class="input-group">
      <select v-model="selected" class="custom-select">
        <option disabled value>Select a Vault</option>
        <VaultTarget
          v-for="vault in vaults"
          :key="vault.id"
          :vaultData="vault"
          :keepData="keepData"
        />
      </select>
      <div class="input-group-append">
        <button @click="addToVault()">Add</button>
      </div>
    </div>
  </div>
</template>


<script>
import VaultTarget from "./VaultTarget"
export default {
  name: 'addToVault',
  props: ["keepData"],
  data() {
    return {
      selected: 'Select a Vault',
      newVaultKeep: {}
    }
  },
  computed: {
    vaults() {
      return this.$store.state.vaults.userVaults;
    }
  },
  methods: {
    addToVault() {
      this.newVaultKeep.vaultId = this.selected;
      this.newVaultKeep.keepId = this.keepData.id;
      this.newVaultKeep.user = this.$auth.user;
      this.$store.dispatch("createVaultKeep", this.newVaultKeep)
      alert(`Added to vault!`)
    }
  },
  components: {
    VaultTarget
  }
}
</script>


<style scoped>
</style>