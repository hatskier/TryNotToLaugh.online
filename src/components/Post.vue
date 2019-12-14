<template>
  <div class="post mdc-elevation--z1">
    <img v-lazy="post.imgGaiaPublicUrl" class="image-in-post" />
  </div>
</template>

<script>

export default {
  name: "Post",
  props: {
    post: Object,
  }
}

</script>

<style scoped>
.image-in-post {
  /* max-height: 90vh;
  max-width: 45vw;
  min-width: 50vh; */
  /* Some magic is going here - analyze later */
  width: 48vw;
  height: auto;
  max-width: none;
  max-height: 90vh;
  object-fit: contain;
  margin: auto;
  display: block;
  padding-top: 20px;
  padding-bottom: 20px;
}

.post {
  margin-bottom: 50px !important;
  /* margin: auto; */
  width: 50vw;
}
</style>
