<template>
  <div class="col-md-3 my-2">
    <div class="vaultKeep card text-center">
      <img class="card-img" :src="vaultKeepData.img" alt />
      <div class="card-img-overlay">
        <span class="dataRow p-2">
          <i class="fas fa-box-open text-success"></i>
          {{vaultKeepData.keeps}}
          <i class="fas fa-eye text-primary"></i>
          {{vaultKeepData.views}}
          <i class="fas fa-share-square text-warning"></i>
          {{vaultKeepData.shares}}
        </span>
      </div>
      <div class="card-footer">
        <button class="btn btn-sm btn-warning ml-1">
          Share
          <i class="fas fa-share-square"></i>
        </button>
        <button
          v-if="vaultKeepData.isPrivate"
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
    },
    setActive() {
      this.$store.commit("setActiveKeep", this.vaultKeepData)
      this.vaultKeepData.views++;
      this.$store.dispatch("updateKeep", { id: this.vaultKeepData.id, keepToBeUpdated: this.vaultKeepData, user: this.$auth.user });
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
.addToVault {
  border-radius: 10px;
}
.addToVault,
.dataRow {
  display: none;
  transition-property: opacity;
  transition-duration: 1s;
}
.vaultKeep .addToVault {
  display: none;
  transition-property: opacity;
  transition-duration: 1s;
}

.vaultKeep:hover .addToVault {
  display: block;
}
.vaultKeep:hover .dataRow {
  display: block;
}

.dataRow {
  margin: 0 auto;
  width: 100%;
  background-color: #f1f1f1;
  border-radius: 10px;
}
</style>