<template>
  <div class="addToVault">
    <div class="input-group">
      <select v-model="selected" class="custom-select">
        <option disabled selected value>Select a Vault</option>
        <VaultTarget
          v-for="vault in vaults"
          :key="vault.id"
          :vaultData="vault"
          :keepData="keepData"
        />
      </select>
      <div class="input-group-append">
        <button class="btn btn-success" @click="addToVault()">
          <i class="fas fa-box-open"></i>
        </button>
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
      this.keepData.keeps++;
      this.$store.dispatch("updateKeep", { id: this.keepData.id, keepToBeUpdated: this.keepData, user: this.$auth.user });
      alert(`Added to vault!`)
    },

  },
  components: {
    VaultTarget
  }
}
</script>


<style scoped>
.input-group-append {
  border-radius: 10px;
}
</style>