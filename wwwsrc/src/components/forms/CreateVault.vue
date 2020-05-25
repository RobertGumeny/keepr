<template>
  <div class="createVault">
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          name="name"
          class="form-control"
          placeholder="Please enter a Name..."
          v-model="newVault.name"
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input
          type="text"
          name="description"
          class="form-control"
          placeholder="Please enter a Description..."
          v-model="newVault.description"
        />
      </div>
      <button type="submit" data-dismiss="modal" @click="createNewVault()">Create Vault</button>
    </form>
  </div>
</template>


<script>
export default {
  name: 'createVault',
  data() {
    return {
      newVault: {}
    }
  },
  mounted() {
  },
  computed: {},
  methods: {
    createNewVault() {
      this.$store.dispatch("createVault", { newVault: this.newVault, user: this.$auth.user });
    }
  },
  components: {}
}
</script>


<style scoped>
</style>