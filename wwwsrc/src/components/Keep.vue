<template>
  <div class="keep col-md-2 m-3" :style="{ 'background-image': 'url(' + keepData.img +')'}">
    <div class="row justify-content-center">
      <AddToVault class="addToVault" :keepData="keepData" />
    </div>
    <!-- <img :src="keepData.img" /> -->

    <!-- <p>{{keepData.name}}</p>
    <p>{{keepData.description}}</p>
    <p>Private: {{keepData.isPrivate}}</p>-->
    <div class="row viewDetails justify-content-end">
      <div class="col-md-6 ml-auto">
        <button @click="setActive()" data-toggle="modal" data-target="#viewKeepModal">View Details</button>
      </div>
    </div>

    <SmallModal title="Keep Details" id="viewKeepModal">
      <KeepDetails />
    </SmallModal>
    <SmallModal title="Add to which vault?" id="addToVaultModal">
      <AddToVault :keepData="keepData" />
    </SmallModal>
  </div>
</template>


<script>
import LargeModal from "./LargeModal"
import SmallModal from "./SmallModal"
import KeepDetails from "../views/KeepDetails"
import AddToVault from "../components/forms/AddToVault"
export default {
  name: 'keep',
  props: ["keepData"],
  data() {
    return {
    }
  },
  computed: {},
  methods: {
    setActive() {
      this.$store.commit("setActiveKeep", this.keepData)
    }
  },
  components: {
    LargeModal,
    SmallModal,
    KeepDetails,
    AddToVault
  }
}
</script>


<style scoped>
.keep {
  border-radius: 10px;
  width: 12rem;
  height: 18rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.addToVault,
.viewDetails {
  display: none;
  transition-property: opacity;
  transition-duration: 1s;
}
.keep .addToVault {
  display: none;
  transition-property: opacity;
  transition-duration: 1s;
}

.keep:hover .addToVault {
  display: block;
}
.keep:hover .viewDetails {
  display: block;
}
</style>