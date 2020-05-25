<template>
  <div class="addToVault">
    <div class="dropdown">
      <button
        class="dropdown-toggle"
        type="button"
        id="dropdownMenu"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >Choose a Vault</button>
      <div class="dropdown-menu">
        <VaultTarget
          v-for="vault in vaults"
          :key="vault.id"
          :vaultData="vault"
          :keepData="keepData"
        />
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
    return {}
  },
  computed: {
    vaults() {
      return this.$store.state.vaults.userVaults;
    }
  },
  methods: {},
  components: {
    VaultTarget
  }
}
</script>


<style scoped>
</style>