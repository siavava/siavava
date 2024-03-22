<template>
  <div class="v-bar-container">
    <div class="v-bar" />
  </div>
</template>

<style lang="sass" scoped>
@use "@/styles/colors"

.v-bar-container
  display: flex
  place-content: center
  padding: 30px 0

  .v-bar
    width: 1px
    height: 70px
    background-color: colors.color(light-background)
</style>
