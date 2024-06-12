<template>
  <div class="blob" id="blob" ref="blob" />
  <div class="line vertical north" id="north" ref="north" />
  <div class="line vertical south" id="south" ref="south" />
  <div class="line horizontal east" id="east" ref="east" />
  <div class="line horizontal west" id="west" ref="west" />
  <span class="coordinate x" id="x-coord" ref="xCoord" />
  <span class="coordinate y" id="y-coord" ref="yCoord" />
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

  const update = (e: MouseEvent | TouchEvent) => {
    let x;
    let y;

    // if MouseEvent, set to clientX and clientY
    if (e instanceof MouseEvent) {
      x = e.clientX
      y = e.clientY
    } else if (e instanceof TouchEvent) {
      // if TouchEvent, set to first touch
      x = e.touches[0].clientX
      y = e.touches[0].clientY
    }
    else {
      return
    }
    if (blob.value && north.value && south.value && east.value && west.value) {
      
      blob.value.style.transform = `translate(calc(${x}px - 50%), calc(${y}px - 50%))`

      // set east and west y to current y
      east.value.style.transform = `translateY(${y}px)`
      west.value.style.transform = `translateY(${y}px)`

      // set north bottom to current y - 30
      north.value.style.transform = `translate(${x}px, ${y - OFFSET}px)`

      // set south top to current y - 30
      south.value.style.transform = `translate(${x}px, ${y + OFFSET}px)`

      // set east left to current x - 30
      east.value.style.transform = `translate(${x - OFFSET}px, ${y}px)`

      // set west right to current x - 30
      west.value.style.transform = `translate(${x + OFFSET}px, ${y}px)`

      // set x and y coords
      xCoord.value!.innerText = `${x}px`
      yCoord.value!.innerText = `${y}px`

      const xLeft = Math.min(Math.max(65, x - 75), windowWidth - 100)
      const yTop = Math.min(Math.max(65, y + 45), windowHeight - 100)
      
      const xTop = Math.min(Math.max(65, y - 45), windowHeight - 100)
      const yLeft = Math.min(Math.max(65, x + 25), windowWidth - 100)

      xCoord.value!.style.transform = `translate(${xLeft}px, ${xTop}px)`

      yCoord.value!.style.transform = `translate(${yLeft}px, ${yTop}px)`

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
  }

  // update on mouse move
  window.addEventListener("mousemove", update)

  // update on touch move
  window.addEventListener("touchmove", update)
  
})

</script>

<style lang="sass" scoped>
@use "@/styles/colors"
@use "@/styles/typography"

.blob
  // background: colors.color(primary-highlight)
  // background: colors.color("yellow")
  background: colors.color("primary-highlight")
  width: 40px
  aspect-ratio: 1 / 1
  border-radius: 50%
  position: absolute
  z-index: 999
  
  top: 0
  left: 0
  opacity: 0

  transform: translate(-50%, -50%)

  // disable pointer events
  pointer-events: none

  // smooth transition
  // transition: 0.1s cubic-bezier(0.25, 0.46, 0.75, 0.94)

  transition: 0.1s cubic-bezier(.2, .8, .2, 1)


.line
  position: absolute
  pointer-events: none
  background: colors.color(lightest-background)
  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)
  opacity: 0

  &.vertical
    width: 0.5px
    height: 200vw

    left: 0

    &.north
      bottom: 100%

    &.south
      top: 0

  &.horizontal
    width: 200vw
    height: 0.5px

    top: 0

    &.east
      right: 100%

    &.west
      left: 0

.coordinate
  position: absolute
  pointer-events: none
  color: colors.color(dark-foreground)
  font-size: 12px
  font-weight: 300
  font-family: typography.font("monospace"), monospace
  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)

  width: 5ch
  // background: rgba(yellow, 0.3)

  &.x
    left: 0
    top: 0

  &.y
    left: 0
    top: 0


</style>
