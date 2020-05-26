<template>
  <div class="keep col-md-2 m-3">
    <div class="keep-img" :style="{ 'background-image': 'url(' + keepData.img +')'}">
      <div class="row justify-content-center mx-0 px-0">
        <AddToVault class="addToVault p-1" :keepData="keepData" />
      </div>
      <div class="row justify-content-center dataRow">
        <span class="p-2">
          <i class="fas fa-box-open text-success"></i>
          {{keepData.keeps}}
          <i class="fas fa-eye text-primary"></i>
          {{keepData.views}}
          <i class="fas fa-share-square text-warning"></i>
          {{keepData.shares}}
        </span>
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-8 d-flex justify-content-between p-1">
        <button
          class="btn btn-sm btn-primary"
          @click="setActive()"
          data-toggle="modal"
          data-target="#viewKeepModal"
        >
          <i class="fas fa-eye"></i>
        </button>
        <button class="btn btn-sm btn-warning">
          <i class="fas fa-share-square"></i>
        </button>
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
.keep-img {
  position: relative;
  border-radius: 10px;
  width: 12rem;
  height: 18rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.addToVault {
  border-radius: 10px;
}
.addToVault,
.dataRow {
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
.keep:hover .dataRow {
  display: block;
}
.dataRow {
  background-color: #f1f1f1;
  border-radius: 10px;
  position: absolute;
  left: 30%;
  top: 90%;
}
</style>