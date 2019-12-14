<template>
  <div id="add-page-content">
    <div class="add-card">

      <!-- TODO implement it again later -->
      <!-- <p v-if="addedPostUrl">
        Your new post is available at
        <a target="_blank" :href="addedPostUrl">
          {{ addedPostUrl }}
        </a>
      </p> -->
      <p class="centered" v-if="addedPostUrl">
        Go back to the 
        <a href="#/posts">
          Posts page
        </a>
      </p>
      

      <div class="mdc-layout-grid ">
        <div class="mdc-layout-grid__inner">
          <div class="mdc-layout-grid__cell--span-12 mdc-elevation--z1">
            <!-- File upload area -->
            <div v-if="addingType == 'upload'" class="file-upload-area">
              <file-pond
                name="my-pond"
                ref="pond"
                class-name="my-pond"
                :allow-multiple="false"
                v-on:addfile="onFileAdded"
                label-idle="Drop files here (or click to select)"
                accepted-file-types="image/jpeg, image/png, image/gif"
                :files="files" >
              </file-pond>
            </div>

            <!-- Paste URL area  -->
            <div v-if="addingType == 'imgUrl' || addingType == 'videoUrl'" class="text-input-area">
              <div id="link-field" class="mdc-text-field">
                <input v-model="url" id="link-paste-input" type="text" class="mdc-text-field__input">
                <label class="mdc-floating-label" for="link-paste-input">
                  {{ objectName }} URL
                </label>
                <div class="mdc-line-ripple"></div>
              </div>
            </div>

            <div class="text-input-area">
              <div id="description-field" class="mdc-text-field">
                <input v-model="description" type="text" class="mdc-text-field__input">
                <label class="mdc-floating-label" for="description-field">
                  Describe your post (optional)
                </label>
                <div class="mdc-line-ripple"></div>
              </div>
            </div>

            <div id="tags-multiselect-container">
              <Multiselect
                v-model="selectedTags"
                :multiple="true"
                :close-on-select="true"
                :clear-on-select="false"
                :preselect-first="false"
                selectLabel=""
                placeholder="Select tags"
                :options="availableTags">

              </Multiselect>
            </div>

            <div id="upload-button-container">
              <button
                id="upload-button"
                @click="uploadButtonClicked()"
                class="mdc-button mdc-button--raised sign-in-button">
                <div class="mdc-button__ripple"></div>
                  UPLOAD
              </button>
            </div>

          </div>

          <div
            @click="setType('upload')"
            class="mdc-layout-grid__cell--span-4 alternative-option"
            v-bind:class="{ 'type-selected': addingType == 'upload' }" >
            <i class="material-icons">cloud_upload</i>
            <span>Upload file</span>
          </div>
          <div
            @click="setType('imgUrl')"
            class="mdc-layout-grid__cell--span-4 alternative-option"
            v-bind:class="{ 'type-selected': addingType == 'imgUrl' }" >
            <i class="material-icons">photo_size_select_actual</i>
            <span>Paste image URL</span>
          </div>

          <!-- Not required for MVP <- implement it later -->
          <!-- Update to: mdc-layout-grid__cell--span-3 -->
          <!-- <div @click="setType('videoUrl')" class="mdc-layout-grid__cell--span-3 alternative-option">
            <i class="material-icons">play_circle_filled</i>
            <span>Paste video URL</span>
          </div> -->
          <div class="mdc-layout-grid__cell--span-4 alternative-option">
            <a id="link-to-meme-generator" target="_blank" href="https://memeful.com/generator">
              <i class="material-icons">pan_tool</i>
              <span>Make meme</span>
            </a>
          </div>

          
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { MDCTextField } from '@material/textfield'
import constants from '../../constants'
import BlockstackUtils from '../../modules/blockstackUtils'
import axios from 'axios'
import Multiselect from 'vue-multiselect'
import vueFilePond from 'vue-filepond'

import 'filepond/dist/filepond.min.css'

const FilePond = vueFilePond()

// TODO solve it in less hacky way later
function initMdcInputsInternal() {
  setTimeout(() => {
    let descriptionField = document.querySelector('#description-field')
    if (descriptionField) {
      MDCTextField.attachTo(descriptionField)
    }

    let linkField = document.querySelector('#link-field')
    if (linkField) {
      MDCTextField.attachTo(linkField)
    }
  }, 100)
}

function toastrLongSuccessNotification(msg) {
  window.toastr.success(
    msg,
    '',
    {
      "timeOut": "7000",
      "closeButton": true,
    })
}

export default {
  name: "Add",
  created() {
    if (!BlockstackUtils.isUserSignedIn()) {
      // If user is not signed in we automatically redirect them to posts page
      // location.href = '#/posts'
    }
    initMdcInputsInternal()
  },
  data() {
    return {
      addingType: 'upload', // enum: ['upload', 'imgUrl', 'videoUrl']
      textField: null,
      url: '',
      description: '',
      selectedTags: [],
      files: [],
      uploadedImgBlobUrl: '',
      addedPostUrl: '',
    }
  },
  props: {
    text: Number,
    img: String,
  },
  computed: {
    objectName() {
      if (this.addingType == 'videoUrl') {
        return 'video'
      } else {
        return 'image'
      }
    },
    availableTags() {
      return constants.tags.map(el => el.title)
    }
  },
  methods: {
    initMdcInputs() {
      initMdcInputsInternal()
    },
    onFileAdded(error, file) {
      if (error) {
        console.error(error)
        window.toastr.error('Error occured :(')
      } else {
        this.uploadedImgBlobUrl = window.URL.createObjectURL(file.source)
        console.log('File uploaded: ' + this.uploadedImgBlobUrl)
      }
    },
    async uploadButtonClicked() {
      toastrLongSuccessNotification(`Loading file...`)
      try {
        let urlToFetchFrom = ''
        if (this.addingType == 'upload') {
          urlToFetchFrom = this.uploadedImgBlobUrl
        } else {
          urlToFetchFrom = this.url
        }
        
        let response = await axios.get(urlToFetchFrom, {
          responseType: 'arraybuffer'
        })
        let data = response.data
        
        let newPostUrl = await BlockstackUtils.addNewPost({
          type: 'img',
          originalUrl: this.url,
          data,
          tags: this.selectedTags,
          description: this.description,
        }, {
          onSavedToGaia() {
            toastrLongSuccessNotification('Saved to gaia storage. Saving to radiks...')
          },
          onPostCreated() {
            toastrLongSuccessNotification('Post added!')
          }
        })
        console.log(response)
        this.addedPostUrl = newPostUrl
      } catch (e) {
        window.toastr.error(`There was a problem with file uploading :(`)
        console.error(e)
      }
      
    },
    setType(type) {
      this.addingType = type
      this.initMdcInputs()
    },
  },
  components: {
    Multiselect,
    FilePond,
  }
}

</script>

<style scoped>
#add-page-content {
  margin-top: 60px;
}

.add-card {
  width: 700px;
  margin: auto;
}

.file-upload-area {
  /* background: lightblue; */
  /* height: 200px; */
  padding-top: 10px;
  width: 600px;
  margin: auto;
  text-align: center;
}

.alternative-option {
  text-align: center;
  margin-bottom: 20px;
  cursor: pointer;
}

.alternative-option span {
  position: relative;
  top: 10px;
  font-size: 14px;
}

.material-icons {
  font-size: 50px;
  display: block;

}

.mdc-text-field__input {
  width: 600px;
}

.text-input-area {
  width: 600px;
  margin: auto;
  margin-top: 10px;
}

#link-to-meme-generator {
  text-decoration: none;
  color: black;
}

/* #upload-button {
  margin: auto;
  margin-top: 30px;
} */

#upload-button-container {
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  width: 105px;
}

#tags-multiselect-container {
  width: 500px;
  margin: auto;
  margin-top: 30px;
}

.type-selected {
  /* padding: 30px; */
  padding-bottom: 30px;
  border-radius: 5px;
  border: 1px solid gray;
}


</style>
