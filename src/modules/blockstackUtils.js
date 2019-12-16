import Vue from 'vue'
import blockstack from 'blockstack'
import Constants from '../constants'
// import { User, configure, getConfig } from 'radiks'
// import axios from 'axios'

// import BlockgagPost from '../models/BlockgagPost'

const SCORES_FILENAME = 'TNTL_scores.json'

// const FILENAMES = {
//   contacts: 'dfmapp_contacts.json',
//   debts: 'dfmapp_debts.json'
// }
// const RADIKS_URL = 'https://radiks.dece.app'

const appConfig = new blockstack.AppConfig(['store_write', 'publish_data', 'email'])
let userSession = new blockstack.UserSession({ appConfig })

// Radiks configuration
// configure({
//   userSession,
//   // apiServer: RADIKS_URL,
// })

// async function saveObjectToFile(obj, filename, opts={ encrypt: true }) {
//   await userSession.putFile(filename, JSON.stringify(obj), opts)
// }

// async function readObjFromFile(filename, opts={ decrypt: true }) {
//   console.log('Reading the file: ' + filename)
//   const content = await userSession.getFile(filename, opts)
//   try {
//     console.log('Got content: ' + content)
//     return JSON.parse(content)
//   } catch (e) {
//     console.error(e)
//     return null
//   }
// }

export default {
  pendingAuth: false,

  isUserSignedIn() {
    return userSession.isUserSignedIn()
  },

  getUserSession() {
    return userSession
  },

  getUserName() {
    return userSession.loadUserData().username
  },

  getUserAvatar() {
    if (userSession.isUserSignedIn()) {
      let userData = userSession.loadUserData()
      if (userData.profile && userData.profile.image && userData.profile.image[0]) {
        return userData.profile.image[0].contentUrl
      }
    }
    return null
  },

  async getAllScores() {
    if (userSession.isUserSignedIn()) {
      let resultText = await userSession.getFile(SCORES_FILENAME, { decrypt: true })
      if (!resultText) {
        return {}
      } else {
        return JSON.parse(resultText)
      }
    } else {
      throw new Error('Cant get scores, user is not signed in')
    }
  },

  async updateScoresInBlockstack(newScores) {
    if (userSession.isUserSignedIn()) {
      console.log('Updating scores in Blockstack: ' + JSON.stringify(newScores))
      await userSession.putFile(SCORES_FILENAME, JSON.stringify(newScores), { encrypt: true })
    } else {
      throw new Error('Cant update scores, user is not signed in')
    }
  },

  async checkAuth() {
    // userSession = getConfig().userSession
    if (userSession.isSignInPending()) {
      try {
        Vue.set(this, 'pendingAuth', true)
        await userSession.handlePendingSignIn()
        // await new Promise(resolve => setTimeout(async () => {
        //   await User.createWithCurrentUser()
        //   resolve()
        // }, 1000))
        // await User.createWithCurrentUser()
      } catch (e) {
        console.error(e)
      } finally {
        if (localStorage.locationBeforeRedirection) {
          let urlToRedirect = localStorage.locationBeforeRedirection
          localStorage.removeItem('locationBeforeRedirection')
          location.href = urlToRedirect
        } else {
          Vue.set(this, 'pendingAuth', false)
        }
      }
    }

    if (userSession.isUserSignedIn()) {
      // await User.createWithCurrentUser()
      this.syncGameProgressWithLocalStorageAndGaia()
    }
  },

  signIn() {
    userSession.redirectToSignIn()
  },

  signOut() {
    userSession.signUserOut()
    location.reload()
  },

  saveLevelAsCompleted(levelNr) {
    console.log('SETTING COMPLETION')
    console.log(levelNr)
    if (!localStorage.lastLevelCompletedTNTL || Number(localStorage.lastLevelCompletedTNTL) < levelNr) {
      console.log('SETTING COMPLETION222')
      localStorage.lastLevelCompletedTNTL = levelNr;
    }
    this.syncGameProgressWithLocalStorageAndGaia()
  },

  // A bit hardcoded function
  async syncGameProgressWithLocalStorageAndGaia() {
    if (this.isUserSignedIn()) {
      console.log('SYNCING GAME PROGRESS WITH LOCAL STORAGE AND GAIA - STARTED')

      let scoresFromBlockstack = await this.getAllScores()

      let newScoresForBlockstack = {}

      for (let levelNr = 0; levelNr < Constants.levels.length; levelNr++) {
        console.log('SYNCING GAME PROGRESS FOR LEVEL: ' + levelNr)
        // Read data from blockstack files
        let levelScoresFromBlockstack = 0
        if (scoresFromBlockstack && scoresFromBlockstack[levelNr]) {
          levelScoresFromBlockstack = Number(scoresFromBlockstack[levelNr])
        }

        // Read data from localStorage
        let levelScoresFromLocalStorage = 0
        if (localStorage['TNTLScoresForLevel' + levelNr]) {
          levelScoresFromLocalStorage = localStorage['TNTLScoresForLevel' + levelNr]
        }

        // Calculating the correct (maximum) value
        let correctScoresForLevel = Math.max(levelScoresFromBlockstack, levelScoresFromLocalStorage)
        if (isNaN(correctScoresForLevel)) {
          correctScoresForLevel = 0
        }

        // Updating GAIA with the correct value
        newScoresForBlockstack[levelNr] = correctScoresForLevel.toFixed(2)

        // Updating localStorage with the correct value
        localStorage['TNTLScoresForLevel' + levelNr] = correctScoresForLevel
      }

      await this.updateScoresInBlockstack(newScoresForBlockstack)
      console.log('SYNCING GAME PROGRESS WITH LOCAL STORAGE AND GAIA - COMPLETED')
    } else {
      console.log('USER IS NOT SIGNED IN TO BLOCKSTACK: SYNCING SKIPPED')
    }
  },

  // async getAllPosts() {
  //   const postsUrl = RADIKS_URL + '/radiks/models/find?radiksType=BlockgagPost'
  //   const { data } = await axios.get(postsUrl)
  //   return data.results || []
  // },

  // async savePostToGaia(postId, fileData) {
  //   await userSession.putFile(postId, fileData, {
  //     encrypt: false,
  //     // contentType: 'image/jpeg',
  //     })
  // },

  // async addNewPost({
  //   type,
  //   originalUrl,
  //   data,
  //   description,
  //   tags},
  //   {
  //     onSavedToGaia,
  //     onPostCreated,
  //   }) {
  //   let newPostObj = new BlockgagPost({
  //     type,
  //     originalUrl,
  //     description,
  //     tags,
  //   })
  //   onSavedToGaia()
  //   const filename = newPostObj._id
  //   await this.savePostToGaia(filename, data)
  //   let fileUrl = await userSession.getFileUrl(filename)
  //   console.log(fileUrl)
  //   newPostObj.update({
  //     imgGaiaPublicUrl: fileUrl
  //   })
  //   console.log(newPostObj)
  //   await newPostObj.save()
  //   onPostCreated()
  //   const postUrl  = `https://blockgag.co#/post/${newPostObj._id}`
  //   return postUrl
  // },

  // async getContacts() {
  //   return await readObjFromFile(FILENAMES.contacts)
  // },

  // async getDebts() {
  //   return await readObjFromFile(FILENAMES.debts)
  // },

  // async saveContacts(contacts) {
  //   await saveObjectToFile(contacts, FILENAMES.contacts)
  // },

  // async saveDebts(debts) {
  //   await saveObjectToFile(debts, FILENAMES.debts)
  // },
}