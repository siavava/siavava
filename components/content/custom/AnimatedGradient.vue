<template>
  <div class="canvas-rapper">
    <canvas class="canvas" ref="canvas" width="300" height="300"></canvas>
  </div>
</template>

<script lang="ts" setup>

const canvas = ref<HTMLCanvasElement | null>(null)

const drawAnimatedGradient = () => {

  if (canvas.value === null) return

  const ctx = canvas.value.getContext("2d")!
  let gradientPosition = 0

  const animateGradient = () => {
    // Create gradient

    if (canvas.value === null) return

    let gradient = ctx.createLinearGradient(gradientPosition, 0, gradientPosition + 300, 0)

    // Define your colors
    gradient.addColorStop(0, "yellow")
    // gradient.addColorStop(0.2, "orange")
    // gradient.addColorStop(0.4, "yellow")
    gradient.addColorStop(0.6, "green")
    // gradient.addColorStop(0.8, "blue")
    // gradient.addColorStop(1, "red")

    const width = canvas.value.width!
    const height = canvas.value.height!

    // Fill with gradient
    ctx.fillStyle = gradient
    ctx?.fillRect(0, 0, canvas.value.width, canvas.value.height)

    gradientPosition += 1


    // if (gradientPosition > canvas.value.width) gradientPosition = 0

    // make gradient wrap around
    if (gradientPosition > canvas.value.width / 1.5) gradientPosition = -300

    requestAnimationFrame(animateGradient)
  }

  animateGradient()
}

onMounted(() => {
  drawAnimatedGradient()
})
</script>

<style lang="sass" scoped>
.canvas
  width: 90px
  height:48px

  // make right side circular
  border-top-right-radius: 30px
  border-bottom-right-radius: 30px

  transition: all .12s cubic-bezier(.39,.575,.565,1)
</style>
