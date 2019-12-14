<template>
  <li @click="State.selectTag(title)" class="mdc-list-item" :class="{'mdc-list-item--selected': State.selectedTag == title}" tabindex="0">
    <span class="mdc-list-item__text">
      <i v-if="icon" class="material-icons">{{ icon }}</i>
      <img v-if="img" class="tag-img" src="../../public/blockstack-icon.png" />
      {{ title }}
    </span>
  </li>
</template>

<script>
import State from '../modules/state'

export default {
  data() {
    return {
      State,
    }
  },
  props: {
    icon: String,
    title: String,
    img: String,
  }
}
</script>

<style scoped>

.tag-img {
  width: 20px;
  position: relative;
  margin-right: 10px;
  top: 5px;
}
</style>