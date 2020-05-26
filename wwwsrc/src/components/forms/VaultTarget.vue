<template>
  <option :value="vaultData.id">{{vaultData.name}}</option>
</template>


<script>
export default {
  name: 'vaultTarget',
  props: ["vaultData", "keepData"],
  data() {
    return {
      newVaultKeep: {}
    }
  },
  computed: {
    keep() {
      return this.$store.state.keeps.activeKeep;
    }
  },
  methods: {
    createVaultKeep() {
      this.newVaultKeep.vaultId = this.vaultData.id;
      this.newVaultKeep.keepId = this.keep.id;
      this.newVaultKeep.user = this.$auth.user;
      this.$store.dispatch("createVaultKeep", this.newVaultKeep)
    }
  },
  components: {}
}
</script>


<style scoped>
</style>