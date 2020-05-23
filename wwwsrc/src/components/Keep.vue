<template>
  <div class="keep col-md-3 m-3">
    <img :src="keepData.img" />
    <p>{{keepData.name}}</p>
    <p>{{keepData.description}}</p>
    <p>Private: {{keepData.isPrivate}}</p>
    <button @click="viewDetails()" data-toggle="modal" data-target="#viewKeepModal">View Details</button>
    <DefaultModal title="Keep Details" id="viewKeepModal">
      <KeepDetails />
    </DefaultModal>
  </div>
</template>


<script>
import DefaultModal from "../components/DefaultModal"
import KeepDetails from "../views/KeepDetails"
export default {
  name: 'keep',
  props: ["keepData"],
  data() {
    return {}
  },
  computed: {},
  methods: {
    viewDetails() {
      this.$store.commit("setActiveKeep", this.keepData)
    }
  },
  components: {
    DefaultModal,
    KeepDetails
  }
}
</script>


<style scoped>
</style>