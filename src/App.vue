<template>
  <div id="app">
    <div>
      <NavBar />
      <router-view 
        v-if="!BlockstackUtils.pendingAuth"
        class="view">
      </router-view>
      <div
        v-if="BlockstackUtils.pendingAuth"
        class="centered authentication-in-progress-title">
        <svg version="1.1" id="svg-loader" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve">
        <circle fill="none" stroke="#000" stroke-width="4" cx="50" cy="50" r="44" style="opacity:0.5;"/>
          <circle fill="#fff" stroke="lightgray" stroke-width="3" cx="8" cy="54" r="6" >
            <animateTransform
              attributeName="transform"
              dur="2s"
              type="rotate"
              from="0 50 48"
              to="360 50 52"
              repeatCount="indefinite" />
          </circle>
        </svg>

        <h2>
          Authentication in progress...
        </h2>
      </div>
      
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import BlockstackUtils from './modules/blockstackUtils'
import State from './modules/state'

window.toastr.options = {
  "closeButton": true,
  "progressBar": false,
  "showDuration": 3000,
  "hideDuration": 10,
  "iconClass": "hidden",
  // "positionClass": "toast-top-center",
}

export default {
  name: 'app',
  created() {
    State.setPath(this.$router.currentRoute.fullPath)
  },
  data() {
    return {
      BlockstackUtils,
    }
  },
  watch: {
    $route(to) {
      State.setPath(to.fullPath)
    }
  },
  components: {
    NavBar
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style src="./styles/animations.css"></style>

<style lang="scss">
  // TODO connect from the same origin later
  @import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500");
  @import url("https://fonts.googleapis.com/icon?family=Material+Icons");

  $mdc-theme-primary: #00be00;
  $mdc-theme-secondary: #092dfa;
  // $mdc-theme-primary: #092dfa;
  // $mdc-theme-secondary: #00be00;
  @import "material-components-web/material-components-web";

  * {
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  // .view {
  //   margin-top: 60px;
  // }

  .centered {
    margin: auto;
    text-align: center;
  }

  .white {
    color: white;
  }

  .material-icons {
    position: relative;
    top: 5px;
    margin-right: 10px;
  }

  .toast-top-center {
    position: absolute;
    top: 12px;
    margin: 0 auto;
  }

  .toast {
    opacity: 1 !important;
  }

  .authentication-in-progress-title {
    margin-top: 80px;
  }

  .mdc-button--raised {
    color: white !important;
  }

  #svg-loader {
    height: 70px;
  }

  // DARK MODE STYLING
  body.dark-mode {
    background: black !important;
  }
  body.dark-mode .mdc-list-item__text {
    color: white !important;
  }
  body.dark-mode .alternative-option {
    color: white !important;
  }
  body.dark-mode #link-to-meme-generator {
    color: white !important;
  }
  body.dark-mode  #live-emotions-stats {
    color: white !important;
  }
  body.dark-mode .tag-img {
    filter: invert(100%);
  }
  body.dark-mode #night-mode-icon {
    // filter: invert(100%);
    color: yellow;
  }
  body.dark-mode i {
    color: white;
  }
  body.dark-mode h2 {
    color: white;
  }
  body.dark-mode p {
    color: white;
  }
  body.dark-mode .black-in-dark-mode {
    color: black !important;
  }
</style>
