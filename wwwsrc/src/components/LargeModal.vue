<template>
  <div class="largeModal modal">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header bg-light">
          <h5 class="modal-title">{{title}}</h5>
          <button
            type="button"
            class="close text-danger"
            id="close-btn"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div class="modal-footer mt-3 bg-light">
          <button class="btn btn-dark" type="button" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'largeModal',
  props: ["title"],
  data() {
    return {}
  },
  computed: {},
  methods: {},
  components: {}
}
</script>


<style scoped>
</style>