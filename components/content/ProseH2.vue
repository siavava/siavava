<template>
  <div :class="{
    'prose-h2': true,
    'quicklinks': isQLinks
  }">
    <slot />
  </div>
</template>

<script lang="ts" setup>
const { path } = useRoute()
const isQLinks = path === "/links"
</script>

<style lang="sass" scoped>
@use "@/styles/typography"
@use "@/styles/colors"

.prose-h2
  font-size: typography.font-size(s)
  text-transform: lowercase
  color: colors.color(foreground)

  &.quicklinks
    margin-bottom: 40px

</style>
