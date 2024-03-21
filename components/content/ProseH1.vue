<template>
  <div class="prose-title-wrapper">
    <h1
      :id="id"
      class="prose-h1"
    >
      <slot />
    </h1>
    <br>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import { useRuntimeConfig } from "#imports"

defineProps<{ id: string }>()

const heading = 1
// @ts-ignore
const { anchorLinks } = useRuntimeConfig().public.content
const generate = anchorLinks?.depth >= heading
</script>

<style lang="sass" scoped>
@use "@/styles/colors"
@use "@/styles/typography"

.prose-title-wrapper
  margin-bottom: 5px

.prose-h1
  font-size: typography.font-size(l)
  font-weight: 600
  font-size: 30px
  line-height: 27px
  color: colors.color(lightest-foreground)
</style>
