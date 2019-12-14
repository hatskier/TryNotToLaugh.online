<template>
  <div class="mdc-dialog"
     role="alertdialog"
     aria-modal="true"
     aria-labelledby="my-dialog-title"
     aria-describedby="my-dialog-content">
    <div class="mdc-dialog__container">
      <div class="mdc-dialog__surface">
        <h2 class="mdc-dialog__title" id="my-dialog-title">
          {{ title }}
        </h2>
        <div class="mdc-dialog__content" id="my-dialog-content">
          <slot></slot>
        </div>
        <!-- <footer class="mdc-dialog__actions">
          <button type="button" class="mdc-button mdc-dialog__button" data-mdc-dialog-action="no">
            <span class="mdc-button__label">No</span>
          </button>
          <button type="button" class="mdc-button mdc-dialog__button" data-mdc-dialog-action="yes">
            <span class="mdc-button__label">Yes</span>
          </button>
        </footer> -->
      </div>
    </div>
    <div class="mdc-dialog__scrim"></div>
  </div>
</template>

<script>
export default {
  name: "Dialog",
  data() {
    return {
    }
  },
  props: {
    title: String,
  },
  computed: {
  }
}
</script>

<style scoped>
/* TODO */
</style>