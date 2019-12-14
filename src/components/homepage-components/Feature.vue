<template>
  <div
    v-observe-visibility="visibilityChanged"
    class="mdc-layout-grid__cell feature-container"
    :class="{ 'fade-in-element': wasVisible }">
    <i class="material-icons">{{ icon }}</i>
    <h2>{{ title }}</h2>
    <p class="feature-description">
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      wasVisible: false,
    }
  },
  props: {
    title: String,
    description: String,
    icon: String,
  },
  methods: {
    visibilityChanged(isVisible) {
      if (isVisible) {
        this.wasVisible = true
      }
    }
  }
}
</script>

<style scoped>
i {
  font-size: 80px;
  /* text-align: center; */
}

.feature-container {
  text-align: center;
  margin-top: 50px;
}

h2 {
  margin-top: 10px;
}

.feature-description {
  text-align: left;
  width: 300px;
  margin: auto;
  margin-top: 10px;
}
</style>