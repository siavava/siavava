<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: "",
  },
  fancy: {
    type: Boolean,
    default: true,
  },
  blank: {
    type: Boolean,
    default: false,
  },
  bold: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <span
    :class="{'link-wrapper': true, 'fancy': fancy}"
  >
    <NuxtLink
      :href="href"
      :class="{'link': true, 'bold': bold, 'arrow': fancy}"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>
        <slot />
      </span>
    </NuxtLink>
    <svg
      v-if="fancy"
      class="pointer"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5
            4V3ZM8.5 3.5H9C9 3.22386 8.77614 3 8.5 3V3.5ZM8 8.5C8
            8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5H8ZM2.64645
            8.64645C2.45118 8.84171 2.45118 9.15829 2.64645
            9.35355C2.84171 9.54882 3.15829 9.54882 3.35355
            9.35355L2.64645 8.64645ZM3.5 4H8.5V3H3.5V4ZM8
            3.5V8.5H9V3.5H8ZM8.14645 3.14645L2.64645
            8.64645L3.35355 9.35355L8.85355 3.85355L8.14645 3.14645Z"
        fill="#eee"
      />
    </svg>
  </span>
</template>

<style lang="sass" scoped>
@use "@/styles/colors"
@use "@/styles/typography"

.link-wrapper
  align-items: center
  gap: 7px
  display: inline
  // cursor: none

  &:hover > .pointer
    transform: translate(3px, -3px)

.link
  transition: 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)
  // cursor: none
  
  &:hover
    color: colors.color(lightest-foreground)

.pointer
  height: 1em
  aspect-ratio: 1/1 !important
  transition: 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)
</style>
