<template>
  <li class="prose-li">
    <slot />
  </li>
</template>

<style lang="sass" scoped>
@use "@/styles/colors"
@use "@/styles/typography"

.prose-li
  // position: relative
  font-weight: 500
  line-height: 1.6
  font-size: typography.font-size("m")
  text-transform: lowercase
  
  @media screen and (min-width: 768px)
    font-size: typography.font-size("xl")
</style>
