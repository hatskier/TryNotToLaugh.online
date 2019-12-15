<template>
  <div id="navbar">
    <header class="mdc-top-app-bar mdc-top-app-bar--dense">
      <div class="mdc-top-app-bar__row">
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
          <a v-if="!State.path.includes('level/')" href="#/">
            <img id="navbar-logo" src="../../public/TryNotToLaugh-Logo.png" />
          </a>
          <!-- <button class="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button">menu</button> -->
          <a class="normal-text" href="#/">
            <span class="mdc-top-app-bar__title white"></span>
          </a>

          <a
            v-if="State.path.includes('level/')"
            class="mdc-button mdc-button--outlined"
            href="javascript:history.back()">
            <i class="material-icons back-icon">keyboard_backspace</i>
            BACK
          </a>

        </section>

        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
          <!-- <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label="Download">file_download</button>
          <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label="Print this page">print</button> -->
          <!-- <div v-if="State.path.includes('posts')" class="navbar-el">
            <button @click="toggleLiveEmotions()" class="mdc-button mdc-button--outlined">
              <div class="mdc-button__ripple"></div>
                <span v-if="!State.liveEmotionsEnabled">
                  TRY LIVE EMOTIONS
                </span>
                <span v-if="State.liveEmotionsEnabled">
                  STOP LIVE EMOTIONS
                </span>
            </button>
          </div> -->

          <!-- Try also add, add_circle, add_box, add_circle_outline, add_comment, post_add, add_a_photo, add_photo_alternate, add_to_photos, note_add -->
          <!-- <div class="navbar-el">
            <a
              href="#/add"
              v-if="signedIn"
              class="mdc-icon-button material-icons white add-photo-icon">
              add_photo_alternate
            </a>
          </div> -->

          <div class="navbar-el">
            <a
              id="night-mode-icon"
              @click="toggleDarkMode()"
              class="mdc-icon-button material-icons white add-photo-icon">
              brightness_4
            </a>
            
          </div>
          
          <!-- <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label="Print this page">print</button> -->

          <div class="navbar-el">
            <div @click="openMenu()" class="account-circle mdc-menu-surface--anchor">
              <img
                v-if="signedIn && userAvatar"
                id="avatar-image"
                :src="userAvatar" />

              <div class="username-letter" v-if="signedIn && !userAvatar">
                {{ usernameFirstLetter }}
              </div>

              <Menu
                :onSettingsClicked="openSettings"
                :onLogOutClicked="logOut" />

            </div>

            <button
              @click="openSignInModal()"
              v-if="!signedIn"
              class="mdc-button mdc-button--raised sign-in-button">
              <div class="mdc-button__ripple"></div>
                SIGN IN
            </button>
          </div>
        </section>
      </div>
    </header>

    <SignInModal :onLogInButtonClicked="logIn" />

  </div>
</template>

<script>
import BlockstackUtils from '../modules/blockstackUtils'

import Menu from './Menu'
import SignInModal from './SignInModal'

import State from '../modules/state'


import { MDCDialog } from '@material/dialog'
import { MDCMenu } from '@material/menu'

export default {
  name: "NavBar",
  data() {
    // State.loadStateFromBlockchain()
    return {
      userAvatar: BlockstackUtils.getUserAvatar(),
      signedIn: BlockstackUtils.isUserSignedIn(),
      modalType: '',
      dialog: null,
      State,
      route: this.$router.currentRoute,
    }
  },
  computed: {
    usernameFirstLetter() {
      let userName = BlockstackUtils.getUserName()
      if (!userName) {
        return ''
      }
      return userName[0].toUpperCase()
    }
  },
  components: {
    Menu,
    SignInModal,
  },
  methods: {
    toggleDarkMode() {
      let bodyEl = document.getElementsByTagName('body')[0]
      bodyEl.classList.toggle('dark-mode')
    },
    openSignInModal() {
      let elToAttachTo = document.querySelector('.mdc-dialog')
      this.dialog = MDCDialog.attachTo(elToAttachTo)
      this.modalType = 'signIn'
      this.dialog.open()
    },
    closeSignInModal() {
      if (this.dialog) {
        this.dialog.close()
      }
    },
    openMenu() {
      const menu = MDCMenu.attachTo(document.querySelector('.mdc-menu'))
      menu.open = !menu.open
    },
    openSettings() {
      // window.toastr.success('Settings opening... Not implemented yet')
    },
    toggleLiveEmotions() {
      if (!State.liveEmotionsEnabled && !localStorage.liveEmotionExplanationShowed) {
        if (confirm('Live emotions is an innovative feature, which uses your web camera to analyze your emotions and calculate the time of being happy o blockgag. Note, that your video is private and we don\'t send it anywhere. Currently our algoithm can recognize happiness, sadness, surprise and anger')) {
          localStorage.liveEmotionExplanationShowed = true
          State.toggleLiveEmotions()  
        }
      } else {
        State.toggleLiveEmotions()
      }
      
    },
    logIn() {
      this.closeSignInModal()
      window.localStorage.locationBeforeRedirection = location.href;
      window.toastr.success(
        'Blockstack authentication started...',
        '',
        {
          "timeOut": "20000",
          "closeButton": false,
        })

      // TODO check this problem later
      // I still don't knwo why it works much faster with this hack
      // It also works well without modal ¯\_(ツ)_/¯
      setTimeout(() => {
        BlockstackUtils.signIn()
      }, 200)
    },
    logOut() {
      BlockstackUtils.signOut()
    }
  }
}
</script>

<style lang="scss" scoped>

  .mdc-top-app-bar {
    top: 0;
  }

  .mdc-top-app-bar__row {
    background: #FE922A;
  }

  .navbar {
    margin-bottom: 100px;
  }

  #logo-in-navbar {
    width: 40px;
  }

  #navbar-logo {
    height: 35px;
    border: 1px solid #6200ee;
    margin-top: 5px;
    border-radius: 50%;
  }

  #avatar-image {
    margin-top: 5px;
    border-radius: 50%;
    height: 35px;
    width: 35px;
    border: 1px solid white;
    object-position: center;
    object-fit: cover;
  }

  .username-letter {
    // border: 1px solid white;
    color: white;
    background-color: #00be00;
    font-weight: 500;
    font-size: 22px;
    width: 35px;
    height: 35px;
    text-align: center;
    border-radius: 50%;
    line-height: 35px;
  }

  .account-circle {
    cursor: pointer;
  }

  .navbar-el {
    margin-left: 10px;
  }

  .mdc-menu {
    margin-top: 50px;
  }

  .add-photo-icon {
    position: relative;
    top: 0;
    margin: 0;
  }

  .sign-in-button {
    color: white !important;
  }

  .normal-text {
    text-decoration: none;
  }

  #night-mode-icon {
    margin-left: 0px;
    position: relative;
    right: 10px;
  }

  .back-icon {
    position: relative;
    top: 0px;
  }
</style>
