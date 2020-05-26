<template>
  <div class="keep col-md-2 m-2">
    <div class="keep-img" :style="{ 'background-image': 'url(' + keepData.img +')'}">
      <div class="row justify-content-center mx-0 px-0">
        <AddToVault class="addToVault p-1" :keepData="keepData" />
      </div>
      <div class="row dataRow">
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
    <div class="row justify-content-center pt-1 buttonRow">
      <button
        class="btn btn-sm btn-primary mr-1"
        @click="setActive()"
        data-toggle="modal"
        data-target="#viewKeepModal"
      >
        View
        <i class="fas fa-eye"></i>
      </button>
      <button class="btn btn-sm btn-warning ml-1">
        Share
        <i class="fas fa-share-square"></i>
      </button>
    </div>

    <SmallModal :title="keep.name" id="viewKeepModal">
      <KeepDetails />
    </SmallModal>
    <!-- <SmallModal title="Add to which vault?" id="addToVaultModal">
      <AddToVault :keepData="keepData" />
    </SmallModal>-->
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
  computed: {
    keep() {
      return this.$store.state.keeps.activeKeep;
    }
  },
  methods: {
    setActive() {
      this.$store.commit("setActiveKeep", this.keepData)
      this.keepData.views++;
      this.$store.dispatch("updateKeep", { id: this.keepData.id, keepToBeUpdated: this.keepData, user: this.$auth.user });
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
  top: 90%;
  left: 28%;
}
</style>