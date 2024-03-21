<template>
  <div id="prose-ul" class="prose-ul">
    <slot />
  </div>
</template>

<style lang="sass">
@use "@/styles/colors"

// remove bullets before list items
.prose-ul
  list-style: none
  color: colors.color(lightest-foreground)

  &:hover
    color: colors.color(dark-foreground)

</style>
