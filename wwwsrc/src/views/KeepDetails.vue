<template>
  <div class="keepDetails container-fluid">
    <div class="row flex-column align-items-center">
      <div>
        <img class="img-fluid" :src="keep.img" alt />
      </div>
      <p>{{keep.name}}</p>
      <p>{{keep.description}}</p>
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
  methods: {},
  components: {}
}
</script>


<style scoped>
</style>