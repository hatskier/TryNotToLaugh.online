<template>

  <section id="features-section">
    <h2>Why should I try it?</h2>
    <div class="mdc-layout-grid">
      <div class="mdc-layout-grid__inner">
        <Feature
          v-for="feature in features"
          :key="feature.title"
          :title="feature.title"
          :description="feature.description"
          :icon="feature.icon"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Feature from './Feature'

export default {
  // created() {
  //   let classAdded = false
  //   document.onscroll(function() {
  //     classAdded = true
  //     let scrollTop = window.$(document).scrollTop()
  //     if (scrollTop >= window.height) {
  //       let features = document.querySelector('.feature-container')
  //       features.forEach(featureEl => {
  //         // featureEl.classList.add('slide-left-element')
  //         console.log(featureEl)
  //       })
  //     }
  //   })
  // },
  data () {
    return {
      features: [
        {
          title: 'Funny',
          description : 'You\'ll watch funny videos and try not to laugh. The less you laugh - the more scores you gain',
          icon: 'emoji_emotions',
        },
        {
          title: 'AI powered',
          description : 'AI will analyze your emotions through your webcam',
          icon: 'memory',
        },
        {
          title: 'Free',
          description: 'It is absolutely free and ads free, thanks to Blockstack App mining program',
          icon: 'monetization_on',
        },
        {
          title: 'Decentralized',
          description: 'It is a decentralized web game built on Blockstack',
          icon: 'blur_on',
        },
        {
          title: 'Open source',
          description: 'All the code is published on GitHub so everyone can see it and contribute',
          icon: 'public',
        },
        // {
        //   title: 'Minimalistic',
        //   description: 'BlockGAG has a super simple and minimalistic design',
        //   icon: 'crop_original',
        // },
        // {
        //   title: 'Ads free',
        //   description: 'Thanks to blockstack app mining program it has no ads',
        //   icon: 'thumb_up_alt',
        // },
        // {
        //   title: 'For everyone',
        //   description: 'Everyone who is signed in to blockstack can post new funny stuff',
        //   icon: 'people',
        // },
        // {
        //   title: 'Categorised',
        //   description: 'You can explore different categories of FUN on blockgag',
        //   icon: 'category',
        // },
        {
          title: 'Secure',
          description: 'All your private data, like analyzed emotions, preferences and progress, is safe and secure',
          icon: 'security',
        }
      ]
    }
  },
  components: {
    Feature,
  }
}
</script>

<style scoped>
#features-section {
  margin-bottom: 100px;
  /* background: #FE922A */
}

h2 {
  /* color: #FE922A; */
  color: #6200ee;
  font-size: 8vh;
  text-align: center;
  padding-top: 70px;
}
</style>