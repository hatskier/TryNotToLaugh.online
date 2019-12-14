import Vue from 'vue'
import blockstack from 'blockstack'
import { User, configure, getConfig } from 'radiks'
import axios from 'axios'

import BlockgagPost from '../models/BlockgagPost'

// const FILENAMES = {
//   contacts: 'dfmapp_contacts.json',
//   debts: 'dfmapp_debts.json'
// }
const RADIKS_URL = 'https://radiks.dece.app'

const appConfig = new blockstack.AppConfig(['store_write', 'publish_data', 'email'])
let userSession = new blockstack.UserSession({ appConfig })

// Radiks configuration
configure({
  userSession,
  apiServer: RADIKS_URL,
})

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

  async checkAuth() {
    userSession = getConfig().userSession
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
      await User.createWithCurrentUser()
    }
  },

  signIn() {
    userSession.redirectToSignIn()
  },

  signOut() {
    userSession.signUserOut()
    location.reload()
  },

  async getAllPosts() {
    const postsUrl = RADIKS_URL + '/radiks/models/find?radiksType=BlockgagPost'
    const { data } = await axios.get(postsUrl)
    return data.results || []
  },

  async savePostToGaia(postId, fileData) {
    await userSession.putFile(postId, fileData, {
      encrypt: false,
      // contentType: 'image/jpeg',
      })
  },

  async addNewPost({
    type,
    originalUrl,
    data,
    description,
    tags},
    {
      onSavedToGaia,
      onPostCreated,
    }) {
    let newPostObj = new BlockgagPost({
      type,
      originalUrl,
      description,
      tags,
    })
    onSavedToGaia()
    const filename = newPostObj._id
    await this.savePostToGaia(filename, data)
    let fileUrl = await userSession.getFileUrl(filename)
    console.log(fileUrl)
    newPostObj.update({
      imgGaiaPublicUrl: fileUrl
    })
    console.log(newPostObj)
    await newPostObj.save()
    onPostCreated()
    const postUrl  = `https://blockgag.co#/post/${newPostObj._id}`
    return postUrl
  },



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