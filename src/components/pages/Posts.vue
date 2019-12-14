<template>
  <div class="posts mdc-layout-grid">
    <div class="mdc-layout-grid__inner">
      <div class="mdc-layout-grid__cell--span-3">
        <Tags />
      </div>
      <div class="mdc-layout-grid__cell--span-6">
        <div class="posts-block">
          <div v-for="(post, index) in filteredPosts" :key="index" class="post">
            <Post :post="post" />
          </div>
        </div>
      </div>
      <div class="mdc-layout-grid__cell--span-3">
        <div class="live-emotions-block">
          <LiveEmotions :enabled="State.liveEmotionsEnabled" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Tags from '../Tags'
import BlockstackUtils from '../../modules/blockstackUtils'
import Post from '../Post'
import LiveEmotions from '../LiveEmotions'
import State from '../../modules/state'

// TODO this function should be removed in future
function swap(ar, i, j) {
  let valI = ar[i]
  ar[i] = ar[j]
  ar[j] = valI
  return ar
}

export default {
  name: "Posts",
  data() {
    return {
      posts: [],
      State,
    }
  },
  props: {
    text: Number,
    img: String,
  },
  components: {
    Tags,
    Post,
    LiveEmotions,
  },
  created() {
    BlockstackUtils.getAllPosts().then((fetchedPosts) => {
      this.posts = fetchedPosts
    })
  },
  computed: {
    filteredPosts: function() {
      if (this.posts && this.posts.length) {
        let result = JSON.parse(JSON.stringify(this.posts))
        result.sort((p1, p2) => p2.createdAt - p1.createdAt)

        // Scrolling up
        // window.$("html, body").animate({ scrollTop: 0 }, "slow")
        // Switched to pureJS, because of the new css style for scroll-behavior
        window.scrollTo(0, 0)

        let selectedTag = this.State.selectedTag
        if (selectedTag && !['Hot', 'Trending', 'Fresh'].includes(selectedTag)) {
          return result.filter(p => (p.tags && p.tags.includes(selectedTag)))
        }

        // TODO when likes and comments will be implemented
        // Hot and Trending will be filtered in better way
        if (selectedTag == 'Hot' && result.length > 7) {
          result = swap(result, 1, result.length - 1)
          result = swap(result, 2, result.length - 2)
        }
        if (selectedTag == 'Trending' && result.length > 7) {
          result = swap(result, 1, result.length - 2)
          result = swap(result, 2, result.length - 1)
        }

        return result
      }
      return []
    }
  }
}

</script>

<style scoped>
/* TODO */

.category-name {
  margin-bottom: 30px;
}

.live-emotions-block {
  height: 700px;
  width: 20%;
  position: fixed;
}

.posts {
  margin-top: 60px;
}

</style>
