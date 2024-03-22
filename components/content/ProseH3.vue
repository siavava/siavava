<template>
  <div class="prose-h3">
    <slot />
  </div>
</template>

<style lang="sass" scoped>
@use "@/styles/colors"
.prose-h3
  color: colors.color(lightest-foreground)
  
  margin-bottom: 8px

  &:is(:last-of-type)
    margin-bottom: 0
</style>
