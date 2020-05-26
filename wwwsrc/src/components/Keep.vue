<template>
  <div class="col-md-3 my-2">
    <div class="keep card text-center">
      <img class="card-img" :src="keepData.img" alt />
      <div class="card-img-overlay">
        <div class="row justify-content-center mx-0 px-0">
          <AddToVault class="addToVault" :keepData="keepData" />
        </div>
        <div class="row dataRow">
          <span class="p-2">
            <i class="fas fa-box-open text-success"></i>
            {{keepData.keeps}}
            <i class="fas fa-eye text-primary pl-1"></i>
            {{keepData.views}}
            <i class="fas fa-share-square text-warning pl-1"></i>
            {{keepData.shares}}
          </span>
        </div>
      </div>
      <div class="card-footer">
        <h5 class="card-subtitle pb-1">{{keepData.name}}</h5>
        <h6 class="card-subtitle text-muted pb-1">{{keepData.description}}</h6>
        <button
          class="btn btn-sm btn-primary mr-1"
          @click="setActive()"
          data-toggle="modal"
          data-target="#viewKeepModal"
        >
          <i class="fas fa-eye"></i>
        </button>
        <button class="btn btn-sm btn-warning ml-1">
          <i class="fas fa-share-square"></i>
        </button>
        <button
          v-if="keepData.isPrivate"
          class="btn btn-sm btn-danger ml-1"
          @click="deletePrompt()"
        >
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
    </div>
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
    },
    deletePrompt() {
      let d = confirm("Are you sure you want to delete?\nThis Keep cannot be recovered");
      if (d == true) {
        this.deleteKeep();
      }
    },
    deleteKeep() {
      this.$store.dispatch("deleteKeep", { keepId: this.keepData.id, user: this.$auth.user })
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
.card {
  width: 16rem;
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
  margin: 79% auto;
  width: 75%;
  background-color: #f1f1f1;
  border-radius: 10px;
}
</style>