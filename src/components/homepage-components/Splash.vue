<template>
  <section id="splash">
    <div id="splash-content">
      <h1 class="slide-down-element" id="h1-title">
        <vue-typed-js
          :strings="['Funny', 'AI powered', 'Open source', 'Free']"
          :showCursor="false"
          :startDelay="100"
          :backDelay="800"
          :loop="true"
          :loopCount="Infinity"
          >
          <span class="typing" id="title-part"></span>
        </vue-typed-js>
        <br />
        GAME
      </h1>

      <div id="get-started-button-container">
        <a href="/#/posts/" id="get-started-button" class="mdc-button mdc-button--outlined">
          <div class="mdc-button__ripple"></div>
          <span class="mdc-button__label">
            TRY IT NOW
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
import Vue from 'vue'
import { VueTypedJs } from 'vue-typed-js'

Vue.use(VueTypedJs)

// var controller = new ScrollMagic.Controller();

export default {
  data() {
    return {
    }
  },
  created() {
    document.onscroll = function() {
      // let scrollTop = $(document).scrollTop()
      // console.log(scrollTop)
    }
  },
  methods: {
    scrollToSection(id) {
      var section = document.getElementById(id);
      section.scrollIntoView();
    }
  },
  components: {
    VueTypedJs,
  }
}

</script>

<style scoped>
  #splash {
   /* height: 500vh;  */
  }

  #splash-content {
    /* background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)), url('../../../public/laugh-bg.gif') center center no-repeat;; */

    background: black;
    background-size: cover;
    height: 110vh;
  }

  #splash-video {
    object-fit: cover;
    width: 100vw;
    height: 110vh;
  }

  h1 {
    color: white;
    font-size: 10vh;
    /* display: flex;
    align-items: center;
    justify-content: center; */
    padding-top: 35vh;
    z-index: 1;
    text-align: center;
  }

  h1 span {
    font-size: 14vh;
    /* display: none; */
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
    /* padding: 10px; */
    height: 60px;
    
  }
  
</style>