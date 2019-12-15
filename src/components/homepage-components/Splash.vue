<template>
  <section id="splash">
    <div id="splash-content">
      <img class="fade-in-element init-hidden" id="logo-on-splash" src="../../../public/TryNotToLaugh-Logo.png" />

      <h1 class="slide-down-element init-hidden" id="h1-title">
        <!-- <vue-typed-js
          :strings="['Try not to laugh', 'Free', 'Open source', 'Funny', 'Ads Free']"
          :showCursor="false"
          :startDelay="100"
          :backDelay="800"
          :loop="true"
          :loopCount="Infinity"
          >
          <span class="typing" id="title-part"></span>
        </vue-typed-js> -->
        Try not to laugh
        <br />
      </h1>

      <p class="slide-down-element-500ms-delay init-hidden" id="subtitle">Gain scores, compete with friends</p>

      <div class="slide-down-element-1s-delay init-hidden" id="get-started-button-container">
        <a href="/#/levels/" id="get-started-button" class="mdc-button mdc-button--raised">
          <div class="mdc-button__ripple"></div>
          <span class="mdc-button__label">
            TRY THE GAME
            <!-- <i class="material-icons">keyboard_arrow_right</i> -->
          </span>
        </a>
      </div>
      

      <div class="mousey" @click="scrollToSection('features-section')">
        <div class="scroller"></div>
      </div>
    </div>
  </section>
</template>

<script>
// import ScrollMagic from 'scrollmagic'
// import Vue from 'vue'
// import { VueTypedJs } from 'vue-typed-js'

// Vue.use(VueTypedJs)

// var controller = new ScrollMagic.Controller();

// function hideNavbar() {
//   document.getElementsByClassName('mdc-top-app-bar')[0].style.display = 'none'
// }

// function showNavbar() {
//   document.getElementsByClassName('mdc-top-app-bar')[0].style.display = 'flex'
// }

function initBGChange() {
  // setTimeout(() => {
  //   document.getElementById('splash-content').style.background = "url('trying-not-to-laugh.gif') repeat"
  // }, 1300)
}

export default {
  data() {
    return {
    }
  },
  mounted() {
    // hideNavbar()
  },
  created() {
    initBGChange()
    document.onscroll = function() {
      // showNavbar()
      // let scrollTop = $(document).scrollTop()
      // console.log(scrollTop)
    }
  },
  methods: {
    scrollToSection(id) {
      var section = document.getElementById(id)
      section.scrollIntoView()
    }
  },
  components: {
    // VueTypedJs,
  }
}

</script>

<style scoped>
  #splash {
   /* height: 500vh;  */
  }

  #splash-content {
    /* background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)), url('../../../public/laugh-bg.gif') center center no-repeat;; */

    /* background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('../../../public/trying-not-to-laugh.gif') repeat; */
    /* background: black; */
    background: #6200ee;
    /* background-size: cover; */
    height: 110vh;
  }

  #splash-video {
    object-fit: cover;
    width: 100vw;
    height: 110vh;
  }

  h1 {
    color: white;
    font-size: 14vh;
    /* display: flex;
    align-items: center;
    justify-content: center; */
    padding-top: 40vh;
    z-index: 1;
    text-align: center;
  }

  #subtitle {
    color: white;
    font-size: 5vh;
    text-align: center;
  }

  #decentralized-title {
    display: inline;
  }

  #title-part {
    display: inline;
  }

  .typed-element {
    display: inline;

  }


  /* Mousey */
  .mousey {
    width: 3px;
    padding: 10px 15px;
    height: 35px;
    border: 2px solid #fff;
    border-radius: 25px;
    opacity: 0.75;
    box-sizing: content-box;
    cursor: pointer;
    
    position: absolute;
    top: 85vh;
    left: calc(50vw - 18px);
  }
  .scroller {
    width: 3px;
    height: 10px;
    border-radius: 25%;
    background-color: #fff;
    animation-name: scroll;
    animation-duration: 2.2s;
    animation-timing-function: cubic-bezier(.15,.41,.69,.94);
    animation-iteration-count: infinite;
  }

  @keyframes scroll {
    0% { opacity: 0; }
    10% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(15px); opacity: 0;}
  }

  #get-started-button-container {
    margin: auto;
    text-align: center;
  }

  #get-started-button {
    margin-top: 40px;
    font-size: 20px;
    background: #FE922A;
    /* padding: 10px; */
    height: 60px;
    
  }

  #logo-on-splash {
    height: 20vh;
    position: absolute;
    left: calc(50vw - 10vh);
    top: 15vh;
  }
  
</style>