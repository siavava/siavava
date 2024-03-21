<template>
  <div class="prose-h2">
    <slot />
  </div>
</template>

<style lang="sass" scoped>
@use "@/styles/typography"
@use "@/styles/colors"

.prose-h2
  font-size: typography.font-size(s)
  text-transform: lowercase
  margin-bottom: 40px

  color: colors.color(foreground)
</style>
