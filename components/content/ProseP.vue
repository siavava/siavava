<template>
  <div class="prose-p">
    <slot />
  </div>
</template>

<style lang="sass" scoped>
@use "@/styles/colors"
.prose-p
  color: colors.color(lightest-foreground)
  
  margin-bottom: 20px

  &:is(:last-of-type)
    margin-bottom: 0
</style>
