<template>
  <a ref="authorButton" id="author-link" href="https://amittai.studio">
    created by&nbsp;<span class="author">amittai</span>
  </a>
</template>

<script lang="ts" setup>

const authorButton = ref<HTMLElement | null>(null)

onMounted(() => {
  const panels = authorButton // document.getElementById("prose-ul")
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
#author-link
  display: flex
  align-items: center
  border-radius: 0.5rem
  padding: 2px 8px
  font-size: 13px
  font-weight: 500
  color: rgba(255, 255, 255, 0.3)
  position: relative
  text-decoration: none
  transition: color 0.2s
  position: relative

  background: transparent
  font-family: system-ui, "Neue Montreal", sans-serif
  cursor: none

  position: fixed
  bottom: 50px
  left: 50%
  transform: translateX(-50%)

  &::before
    content: ""
    position: absolute
    width: 80%
    height: 80%

    top: 50%
    left: 50%
    transform: translate(-50%, -50%)

  &:hover
    color: #0ea5e9

    &::before
      width: 100%
      height: 100%
      top: 50%
      left: 50%
      background: rgba(255, 255, 255, 0.05)
      border-radius: 0.5rem
      transition: all 0.2s
      transform: translate(-50%, -50%)

  .author
    color: white
</style>
