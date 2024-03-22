<template>
  <blockquote class="prose-blockquote">
    <slot />
    <div
      v-if="name"
      class="author"
    >
      <ProseA
        v-if="link"
        :href="link"
        class="name"
        fancy
        bare
      >
        {{ name }}
      </ProseA>
      <div
        v-else
        class="name"
      >
        {{ name }}
      </div>
      <ul
        v-if="tags"
        class="tag-list"
      >
        <li
          v-for="tag in tags"
          :key="tag"
          class="tag-item"
        >
          {{ tag }}
        </li>
      </ul>
    </div>
  </blockquote>
</template>

<script lang="ts">

export default {
  name: "ProseBlockquote",
  props: {
    name: {
      type: String,
      default: "",
    },
    link: {
      type: String,
      default: "",
    },
    tags: {
      type: String,
      default: "",
    },
  },
}
</script>

<style lang="sass">
@use "@/styles/typography"
@use "@/styles/colors"

.prose-blockquote
  width: calc(100% - 1rem)
  position: relative
  margin: 2rem 0 0 0
  padding: 0 2rem 0 1em
  border-left: 2px solid colors.color(primary-highlight)
  color: colors.color(primary-highlight)

  font-size: 0.8em

  &:not(:last-child)
    margin-bottom: 1.5rem

</style>
