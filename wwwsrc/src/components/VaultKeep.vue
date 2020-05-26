<template>
  <div class="vaultKeep col-md-3 m-3">
    <div class="keep-img" :style="{ 'background-image': 'url(' + vaultKeepData.img +')'}">
      <div class="row justify-content-center mx-0 px-0">
        <button class="btn btn-sm btn-danger removeFromVault m-1 ml-auto" @click="deletePrompt()">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
      <div class="row justify-content-center dataRow">
        <span class="p-2">
          <i class="fas fa-box-open text-success"></i>
          {{vaultKeepData.keeps}}
          <i class="fas fa-eye text-primary"></i>
          {{vaultKeepData.views}}
          <i class="fas fa-share-square text-warning"></i>
          {{vaultKeepData.shares}}
        </span>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-10 ml-4 d-flex justify-content-between p-1">
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
  </div>
</template>


<script>
import SmallModal from "./SmallModal"
import LargeModal from "../components/LargeModal"
import KeepDetails from "../views/KeepDetails"
export default {
  name: 'vaultKeep',
  props: ["vaultKeepData"],
  data() {
    return {}
  },
  computed: {
    vault() {
      return this.$store.state.vaults.activeVault;
    }
  },
  methods: {
    deletePrompt() {
      let d = confirm("Are you sure you want to delete?\nYou will need to add this Keep to your Vault again");
      if (d == true) {
        this.deleteVaultKeep();
      }
    },
    deleteVaultKeep() {
      this.$store.dispatch("deleteVaultKeep", {
        vaultKeepId: this.vaultKeepData.vaultKeepId,
        user: this.$auth.user,
        vaultId: this.vault.id      })
    }
  },
  components: {
    SmallModal,
    LargeModal,
    KeepDetails,
  }
}
</script>


<style scoped>
.vaultKeep {
  width: 14rem;
  height: 18rem;
}
.keep-img {
  position: relative;
  border-radius: 10px;
  width: 12rem;
  height: 18rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.removeFromVault {
  border-radius: 10px;
}
.removeFromVault,
.dataRow {
  display: none;
  transition-property: opacity;
  transition-duration: 1s;
}
.vaultKeep .removeFromVault {
  display: none;
  transition-property: opacity;
  transition-duration: 1s;
}

.vaultKeep:hover .removeFromVault {
  display: block;
}
.vaultKeep:hover .dataRow {
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