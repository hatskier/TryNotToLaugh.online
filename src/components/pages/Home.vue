<template>
  <div>
    <Splash />
    <Features />
    <LiveEmotionsExplanation />
    <!-- <ThankYouSection /> -->
    <Footer />
  </div>
</template>

<script>

import Splash from '../homepage-components/Splash'
import Features from '../homepage-components/Features'
import LiveEmotionsExplanation from '../homepage-components/LiveEmotionsExplanation'
// import ThankYouSection from '../homepage-components/ThankYouSection'
import Footer from '../homepage-components/Footer'

export default {
  name: "Home",
  data() {
    return {
      modalContent: 'first'
    }
  },
  props: {
    text: Number,
    img: String,
  },
  components: {
    // Dialog,
    Splash,
    Features,
    LiveEmotionsExplanation,
    // ThankYouSection,
    Footer,
  },
  methods:{
    // openDialog(type) {
    //   this.modalContent = type

    //   let dialog = MDCDialog.attachTo(document.querySelector('.mdc-dialog'))
    //   dialog.open()
    // },
    // updateModalContent() {
    //   this.modalContent = 'updated'
    // }
  }
}

</script>

<style scoped>
/* TODO */
h1,h2 {
  text-align: center;
}

p {
  margin: auto;
  max-width: 600px;
}
</style>
