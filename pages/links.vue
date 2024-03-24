<template>
  <body class="quicklinks" id="root">
    <main>
      <div class="panels" id="panels">
        <div class="left-panel">
          <ContentDoc class="about" path="/links" />
        </div>
        <div class="right-panel">
          <div class="year">
            {{ new Date().getFullYear() }}
          </div>
        </div>
      </div>
      <Author />
      <Blob />
    </main>
  </body>
</template>

<script lang="ts" setup>
onMounted(() => {
  const panels = document.getElementById("prose-ul")
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

  panels?.addEventListener("mouseenter", () => {
    blob.style.width = "10px"
    blob.style.height = "10px"

    lines.forEach((line) => {
      // set opacity to 0
      if (line) line.style.opacity = "0"
    })
  })

  panels?.addEventListener("mouseleave", () => {
    blob.style.width = "40px"
    blob.style.height = "40px"

    lines.forEach((line) => {
      // set opacity to 1
      if (line) line.style.opacity = "1"
    })
  })
})
</script>

<style lang="sass">
@use "@/styles/colors"
@use "@/styles/typography"

#root
  min-height: 100svh
  display: flex
  flex-direction: column
  width: 100svw
  height: 100svh
  overflow: hidden

main
  width: min(100svw, 640px)
  padding: 0 clamp(0.5em, 3vw, 3em)
  margin: auto
  font-weight: 400
  line-height: 22px

body
  overflow-x: hidden !important
  overflow-y: hidden !important


.panels
  display: flex
  gap: 10em

  // width: 300px

  width: 312px

  position: absolute
  top: calc(50% - 156px)
  left: calc(50% - 156px)

.year
  // color: colors.color(lightest-foreground)
  // color: colors.color("blue")
  color: colors.color("yellow")

</style>
