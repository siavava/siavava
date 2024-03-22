<template>
  <body id="root">
    <main>
      <div class="panels" id="panels">
        <div class="left-panel">
          <ContentDoc class="about" path="/about" />
        </div>
      </div>
      <Blob />
    </main>
  </body>
</template>

<script lang="ts" setup>
// when #panels is hovered, change the size of #blob to 10px
// when #panels is not hovered, change the size of #blob to 100px

onMounted(() => {
  const panels = document.getElementById("prose-ul")
  const blob = document.getElementById("blob")

  if (!panels || !blob) {
    return
  }

  panels?.addEventListener("mouseenter", () => {
    blob.style.width = "10px"
    blob.style.height = "10px"
  })

  panels?.addEventListener("mouseleave", () => {
    blob.style.width = "40px"
    blob.style.height = "40px"
  })
})
</script>

<style lang="sass" scoped>
@use "@/styles/colors"
@use "@/styles/typography"

#root
  min-height: 100svh
  display: flex
  flex-direction: column
  width: 100svw
  height: 100svh
  overflow: scroll

main
  width: min(100svw, 640px)
  padding: 50px clamp(0.5em, 3vw, 3em)
  margin: auto
  font-weight: 400
  line-height: 22px


.panels
  display: flex
  gap: 10em

  width: 400px

  padding: 0 2em

  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)

  text-align: center

.year
  color: colors.color(lightest-foreground)

</style>
