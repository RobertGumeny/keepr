<template>
  <div class="createKeep">
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          name="name"
          class="form-control"
          placeholder="Please enter a Name..."
          v-model="newKeep.name"
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input
          type="text"
          name="description"
          class="form-control"
          placeholder="Please enter a Description..."
          v-model="newKeep.description"
        />
      </div>
      <div class="form-group">
        <label for="img">Image URL</label>
        <input
          type="text"
          name="img"
          class="form-control"
          placeholder="Please enter an Image URL.."
          v-model="newKeep.img"
        />
      </div>
      <div class="form-group">
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="private" @click="togglePrivate()" />
          <label class="form-check-label" for="private">Private?</label>
        </div>
      </div>
      <button type="submit" data-dismiss="modal" @click="createNewKeep()">Post Keep</button>
    </form>
  </div>
</template>


<script>
export default {
  name: 'createKeep',
  data() {
    return {
      isPrivate: false,
      newKeep: {}
    }
  },
  mounted() {
  },
  computed: {},
  methods: {
    togglePrivate() {
      if (this.isPrivate) {
        this.isPrivate = false;
      } else {
        this.isPrivate = true;
      }
    },
    createNewKeep() {
      this.newKeep.isPrivate = this.isPrivate;
      this.$store.dispatch("createKeep", this.newKeep);
    }
  },
  components: {}
}
</script>


<style scoped>
</style>