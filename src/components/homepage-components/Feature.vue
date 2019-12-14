<template>
  <div
    v-observe-visibility="visibilityChanged"
    class="mdc-layout-grid__cell feature-container init-hidden"
    :class="{ 'slide-left-element': wasVisible }">
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
  color: #6200ee;
  /* color: #FE922A; */
  /* text-align: center; */
}

.feature-container {
  text-align: center;
  margin-top: 50px;
}

h2 {
  margin-top: 10px;
  color: #6200ee;
}

.feature-description {
  text-align: left;
  width: 300px;
  margin: auto;
  margin-top: 10px;
  /* color: #FE922A; */
  color: #6200ee;
}
</style>