<template>
  <Dialog title="Log in to add posts">
    <!-- <h4>What is Blockstack?</h4> -->
    <p class="blockstack-description">
      BlockGAG is built using
        <a target="_blank" href="https://blockstack.org/try-blockstack">Blockstack</a>
      infrastructure,
      allowing us to provide decentralized encrypted storage.
    </p>

    <p class="blockstack-description">
      Blockstack ID provides user-controlled login and storage
      that enable you to take back control of your identity and data.
    </p>

    <button
      @click="onLogInButtonClicked()"
      id="log-in-to-blockstack-button"
      class="mdc-button mdc-button--raised continue-with-blockstack-button" >
      <div class="mdc-button__ripple"></div>
        LOG IN TO BLOCKSTACK
    </button>
  </Dialog>
</template>

<script>
import Dialog from './Dialog'

export default {
  props: {
    onLogInButtonClicked: Function
  },
  components: {
    Dialog,
  }
}
</script>

<style scoped >
  .continue-with-blockstack-button {
    color: white !important;
  }

  p.blockstack-description {
    margin-left: 5px;
    margin-top: 10px;
    text-align: justify;
    width: 300px;
  }

  #log-in-to-blockstack-button {
    margin-top: 20px;
  }
</style>