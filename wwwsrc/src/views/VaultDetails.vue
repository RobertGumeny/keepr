<template>
  <div class="vaultDetails container-fluid">
    <div class="row flex-column align-items-center">
      <p>{{vault.name}}</p>
      <p>{{vault.description}}</p>
    </div>
  </div>
</template>


<script>
export default {
  name: 'vaultDetails',
  data() {
    return {}
  },
  computed: {
    vault() {
      return this.$store.state.vaults.activeVault;
    }
  },
  methods: {},
  components: {}
}
</script>


<style scoped>
</style>