<template>
  <div class="blob" id="blob" ref="blob" />
  <div class="line vertical north" ref="north" />
  <div class="line vertical south" ref="south" />
  <div class="line horizontal east" ref="east" />
  <div class="line horizontal west" ref="west" />
  <span class="coordinate x" ref="xCoord" />
  <span class="coordinate y" ref="yCoord" />
</template>

<script setup lang="ts">
const blob = ref<HTMLElement | null>(null)
const north = ref<HTMLElement | null>(null)
const east = ref<HTMLElement | null>(null)
const south = ref<HTMLElement | null>(null)
const west = ref<HTMLElement | null>(null)
const xCoord = ref<HTMLElement | null>(null)
const yCoord = ref<HTMLElement | null>(null)

const OFFSET = 25

let opacitySet = ref(false)

// make blob follow mouse
onMounted(() => {
  const windowWidth = window.innerWidth
  const windowHeight = window.innerHeight

  window.addEventListener("mousemove", (e) => {
    if (blob.value && north.value && south.value && east.value && west.value) {
      blob.value.style.left = e.clientX + "px"
      blob.value.style.top = e.clientY + "px"

      // set north and south x to current x
      north.value.style.left = e.clientX + "px"
      south.value.style.left = e.clientX + "px"

      // set east and west y to current y
      east.value.style.top = e.clientY + "px"
      west.value.style.top = e.clientY + "px"

      // set north bottom to current y - 30
      north.value.style.bottom = window.innerHeight - e.clientY + OFFSET + "px"

      // set south top to current y - 30
      south.value.style.top = e.clientY + OFFSET + "px"

      // set east left to current x - 30
      east.value.style.left = e.clientX + OFFSET + "px"

      // set west right to current x - 30
      west.value.style.right = window.innerWidth - e.clientX + OFFSET + "px"

      // set x and y coords
      xCoord.value!.innerText = `${e.clientX.toString()}px`
      yCoord.value!.innerText = `${e.clientY.toString()}px`

      xCoord.value!.style.left = Math.max(50, e.clientX - 100) + "px"
      xCoord.value!.style.top =  Math.min(windowHeight - 100, Math.max(50, e.clientY - 40)) + "px"

      yCoord.value!.style.left = Math.min(windowWidth - 100, e.clientX + 40) + "px"
      yCoord.value!.style.top = Math.min(windowHeight - 100, e.clientY + 150) + "px"

      // set opacity on next tick
      if (!opacitySet.value) {
        
        opacitySet.value = true
        
        setTimeout(() => {
          if (blob.value && north.value && south.value && east.value && west.value) {
            blob.value.style.opacity = "1"
            north.value.style.opacity = "1"
            south.value.style.opacity = "1"
            east.value.style.opacity = "1"
            west.value.style.opacity = "1"
          }
        }, 170)
      }
    }
  })
})

</script>

<style lang="sass" scoped>
@use "@/styles/colors"
@use "@/styles/typography"

.blob
  background: colors.color(primary-highlight)
  width: 40px
  aspect-ratio: 1 / 1
  border-radius: 50%
  position: absolute
  
  top: 0
  left: 0
  opacity: 0

  transform: translate(-50%, -50%)

  // disable pointer events
  pointer-events: none

  // smooth transition
  transition: 0.1s cubic-bezier(0.25, 0.46, 0.75, 0.94)
  // transition: 0.1s cubic-bezier(0,1.5,1,1.5)
  
  // opacity 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)


.line
  position: absolute
  pointer-events: none
  background: colors.color(lightest-background)
  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)
  opacity: 0

  &.vertical
    width: 0.5px
    height: 200vw
    transform: translateX(-50%)

    left: 50%

    &.north
      bottom: calc(50% + 30px)

    &.south
      top: calc(50% + 30px)

  &.horizontal
    width: 200vw
    height: 0.5px
    transform: translateY(-50%)

    top: 50%

    &.east
      left: calc(50% + 30px)

    &.west
      right: calc(50% + 30px)

.coordinate
  position: absolute
  pointer-events: none
  color: colors.color(dark-foreground)
  font-size: 12px
  font-weight: 300
  font-family: typography.font("monospace"), monospace
  // opacity: 0
  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)

  width: 5ch

  &.x
    left: 0
    top: 0

  &.y
    right: 0
    bottom: 0


</style>
