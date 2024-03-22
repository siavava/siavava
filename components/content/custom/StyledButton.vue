<template>
  <div class="styled-button-container">
    <div class="styled-button" ref="styledButton">
      <ProseA :href="to">
        <slot />
      </ProseA>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  to: string
}>()

const styledButton = ref<HTMLDivElement | null>(null)

onMounted(() => {
  const panels = styledButton // document.getElementById("prose-ul")
  const blob = document.getElementById("blob")

  const north = document.getElementById("north")
  const east = document.getElementById("east")
  const south = document.getElementById("south")
  const west = document.getElementById("west")

  const xCoord = document.getElementById("x-coord")
  const yCoord = document.getElementById("y-coord")

  const lines = [north, east, south, west, xCoord, yCoord]

  if (!panels || !blob) {
    return
  }

  panels.value?.addEventListener("mouseenter", () => {
    blob.style.width = "10px"
    blob.style.height = "10px"

    lines.forEach((line) => {
      // set opacity to 0
      if (line) line.style.opacity = "0"
    })
  })

  panels.value?.addEventListener("mouseleave", () => {
    blob.style.width = "40px"
    blob.style.height = "40px"

    lines.forEach((line) => {
      // set opacity to 1
      if (line) line.style.opacity = "1"
    })
  })
})

</script>

<style lang="sass" scoped>
@use "@/styles/colors"

.styled-button-container
  display: flex
  place-content: center

  .styled-button
    padding: 5px 20px 5px 20px
    border: none
    border-radius: 20px
    transition: background-color 0.3s
    width: fit-content
    background-color: colors.color(light-background)
    color: colors.color(foreground)

    &:hover
      background-color: colors.color(lightest-background)
      color: colors.color(lightest-foreground)
</style>
