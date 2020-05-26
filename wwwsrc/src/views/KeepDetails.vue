<template>
  <div class="keepDetails container-fluid">
    <div class="row flex-column align-items-center">
      <div>
        <img class="img-fluid" :src="keep.img" alt />
      </div>
      <p>{{keep.description}}</p>
      <button
        class="btn btn-danger"
        v-if="$auth.isAuthenticated"
        @click="deletePrompt()"
        data-dismiss="modal"
      >Delete Keep</button>
    </div>
  </div>
</template>


<script>
export default {
  name: 'keepDetails',
  data() {
    return {}
  },
  computed: {
    keep() {
      return this.$store.state.keeps.activeKeep;
    }
  },
  methods: {
    deletePrompt() {
      let d = confirm("Are you sure you want to delete?\nThis Keep cannot be recovered");
      if (d == true) {
        this.deleteKeep();
      }
    },
    deleteKeep() {
      this.$store.dispatch("deleteKeep", { keepId: this.keep.id, user: this.$auth.user })
    }
  },
  components: {}
}
</script>


<style scoped>
</style>