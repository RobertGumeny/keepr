<template>
  <div class="keepDetails container-fluid">
    <div class="row">
      <img :src="keep.img" alt />
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