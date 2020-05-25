<template>
  <div class="keep col-md-3 m-3">
    <img :src="keepData.img" />
    <p>{{keepData.name}}</p>
    <p>{{keepData.description}}</p>
    <p>Private: {{keepData.isPrivate}}</p>
    <button @click="setActive()" data-toggle="modal" data-target="#viewKeepModal">View Details</button>
    <button @click="setActive()" data-toggle="modal" data-target="#addToVaultModal">Add to Vault</button>
    <slot></slot>
    <DefaultModal title="Keep Details" id="viewKeepModal">
      <KeepDetails />
    </DefaultModal>
    <DefaultModal title="Add to which vault?" id="addToVaultModal">
      <AddToVault :keepData="keepData" />
    </DefaultModal>
  </div>
</template>


<script>
import DefaultModal from "../components/DefaultModal"
import KeepDetails from "../views/KeepDetails"
import AddToVault from "../components/forms/AddToVault"
export default {
  name: 'keep',
  props: ["keepData"],
  data() {
    return {}
  },
  computed: {},
  methods: {
    setActive() {
      this.$store.commit("setActiveKeep", this.keepData)
    }
  },
  components: {
    DefaultModal,
    KeepDetails,
    AddToVault
  }
}
</script>


<style scoped>
</style>