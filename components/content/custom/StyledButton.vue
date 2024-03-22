<template>
  <div class="styled-button-container">
    <div class="styled-button">
      <ProseA :href="to">
        <slot />
      </ProseA>
    </div>
  </div>
</template>

<script lang="ts" setup>
// define props with "to"
defineProps<{
  to: string
}>()
</script>

<style lang="sass" scoped>
@use "@/styles/colors"

.styled-button-container
  display: flex
  place-content: center

  .styled-button
    background-color: colors.color(light-background)
    color: colors.color(lightest-foreground)
    padding: 5px 20px 8px 20px
    border: none
    border-radius: 20px
    cursor: pointer
    transition: background-color 0.3s
    width: fit-content
    font-weight: 600

    &:hover
      background-color: colors.color(primary-dark)
</style>
