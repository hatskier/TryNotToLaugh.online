<template>
  <div class="categories-list-container slide-left-element">
    <ul class="mdc-list">
      <TagInTagList title="Hot" icon="whatshot" />
      <TagInTagList title="Trending" icon="trending_up" />
      <TagInTagList title="Fresh" icon="query_builder" />
    </ul>

    <p class="subheader">POPULAR</p>

    <ul class="mdc-list">
      <TagInTagList title="Funny" icon="mood" />
      <TagInTagList title="Blockstack" img="../../public/blockstack-icon.png" />
      <TagInTagList title="Memes" icon="face" />
      <TagInTagList title="GIFs" icon="gif" />
      <TagInTagList title="Gaming" icon="videogame_asset" />
      <!-- <TagInTagList title="Video" icon="ondemand_video" /> -->
    </ul>
  </div>
</template>

<script>
import State from '../modules/state'
import TagInTagList from './TagInTagList'

export default {
  name: "Categories",
  data() {
    return {
      State,
    }
  },
  props: {
    selected: String,
  },
  components: {
    TagInTagList,
  }
}

</script>

<style scoped>


.subheader {
  color: gray;
  font-size: 14px;
  margin-top: 40px;
  margin-left: 16px;
  font-weight: 600;
}

.categories-list-container {
  width: 20%;
  position: fixed;
}
</style>
