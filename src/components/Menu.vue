<template>
  <div class="mdc-menu mdc-menu-surface">
    <ul class="mdc-list" role="menu" aria-hidden="true" aria-orientation="vertical" tabindex="-1">
      <!-- <li @click="onSettingsClicked()" class="mdc-list-item" role="menuitem">
        <span class="mdc-list-item__text">
          <i class="material-icons">settings</i>
          Settings
        </span>
      </li> -->
      <li @click="onLogOutClicked()" class="mdc-list-item" role="menuitem">
        <span class="mdc-list-item__text black-in-dark-mode">
          <i class="material-icons black-in-dark-mode">
            directions_walk
          </i>
          Log out
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    onSettingsClicked: Function,
    onLogOutClicked: Function,
  }
}
</script>

<style>

</style>