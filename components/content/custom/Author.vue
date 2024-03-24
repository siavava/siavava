<template>
 <div class="container">
    <p class="text">
      <a href="https://github.com/siavava/siavava" class="link">
        <span class="background" />
        created by&nbsp;<span class="author">amittai</span>
      </a>
    </p>
  </div>
</template>

<style lang="sass" scoped>
.container
  display: flex
  flex: 1
  align-items: flex-end
  justify-content: center
  padding-bottom: 16px
  position: fixed
  bottom: 0
  left: 50%
  transform: translateX(-50%)

  @media (min-width: 1024px)
    justify-content: flex-start
    padding-bottom: 24px

  .text
    display: flex
    align-items: baseline
    gap: 8px
    font-size: 0.8125rem
    color: #6b7280

    .link
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

      &:hover
        color: #0ea5e9

      .background
        position: absolute
        inset: 0
        // z-index: -10
        transform: scale(0.75)
        border-radius: 0.5rem
        background: rgba(255, 255, 255, 0.05)
        opacity: 0
        transition: all 0.2s
        left: -5%
        top: 0

        width: 110%

        &:hover
          transform: scale(1)
          opacity: 1

      .author
        color: white
</style>
