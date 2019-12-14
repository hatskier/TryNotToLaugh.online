<template>

  <section id="features-section">
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
          title: 'AI powered',
          description : 'Optional live emotions feature can analyze your emotions and understand what makes you happy',
          icon: 'memory',
        },
        {
          title: 'Free',
          description: 'It is absolutely free, thanks to Blockstack App mining program',
          icon: 'monetization_on',
        },
        {
          title: 'Decentralized',
          description: 'BlockGAG is a decentralized app built on Blockstack',
          icon: 'blur_on',
        },
        {
          title: 'Open source',
          description: 'All the code is published on GitHub so everyone can see it and contribute',
          icon: 'public',
        },
        {
          title: 'Minimalistic',
          description: 'BlockGAG has a super simple and minimalistic design',
          icon: 'crop_original',
        },
        {
          title: 'Ads free',
          description: 'Thanks to blockstack app mining program we can keep BlockGAG free without ads',
          icon: 'thumb_up_alt',
        },
        {
          title: 'For everyone',
          description: 'Everyone who is signed in to blockstack can post new funny stuff',
          icon: 'people',
        },
        {
          title: 'Categorised',
          description: 'You can explore different categories of FUN on blockgag',
          icon: 'category',
        },
        {
          title: 'Secure',
          description: 'All your private data, like analyzed emotions and preferences, is safe and secure',
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
  margin-bottom: 50px;
}
</style>