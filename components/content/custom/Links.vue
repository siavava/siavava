<template>
  <ProseUl v-if="links">
    <ProseLi v-for="link in links" :key="link._path">
      <ProseA :id="`link-${link._path}`" :href="link.url" :point="false">
        {{ link.title }}
      </ProseA>
    </ProseLi>
  </ProseUl>
  <ContentDoc
    v-for="link in links"
    class="link-info"
    :id="`more-${link._path}`"
    :key="link._path"
    :value="link"
  />
</template>

<script lang="ts" setup>
const { data: links } = await useAsyncData(
  "links",
  async () => {
    const _links = await queryContent()
      .where({ "category": "links" })
      .find()

    return _links
  }
)

onMounted(() => {
  links.value?.forEach((link: any) => {
    const linkEl = document.getElementById(`link-${link._path}`)
    const moreEl = document.getElementById(`more-${link._path}`)

    if (!linkEl || !moreEl) {
      return
    }

    linkEl.addEventListener("mouseenter", () => {
      moreEl.classList.add("active")
    })

    linkEl.addEventListener("mouseleave", () => {
      moreEl.classList.remove("active")
    })
  })
})
</script>

<style lang="sass">
@use "@/styles/colors"
@use "@/styles/typography"

.link-info

  opacity: 0
  position: fixed
  // bottom: 40px
  // right: 40px
  // bottom: 95vh
  // right: 95vw

  bottom: calc(-1 * (50vh - 60%))
  right: calc(-1 * (50vw - 60%))
  // transform: translateY(-50%)

  width: 340px
  padding: 20px

  font-family: typography.font("serif"), serif
  font-size: 14px

  transition: 0.3s

  border: 1px dashed colors.color("lightest-background")

  pointer-events: none

  // hide if does not contain .prose-blockquote
  // & > :not(.prose-blockquote)
  //   display: none

  @media (max-width: 768px)
    display: none

  &.active
    opacity: 1
</style>
