<template>
  <transition :class="{'no-leave-animation':collapseWithoutAnimation}" name="expand" @enter="enter" @after-enter="afterEnter" @leave="leave">
    <slot />
  </transition>
</template>

<script>
export default {
  name: 'ExpandTransition',
  props: {
    collapseWithoutAnimation: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    /* eslint-disable no-param-reassign */
    enter(element) {
      const { width } = getComputedStyle(element)

      element.style.width = width
      element.style.position = 'absolute'
      element.style.visibility = 'hidden'
      element.style.height = 'auto'

      const { height } = getComputedStyle(element)
      element.style.width = null
      element.style.position = null
      element.style.visibility = null
      element.style.height = 0

      // Force repaint to make sure the
      // animation is triggered correctly.
      // eslint-disable-next-line no-unused-expressions
      getComputedStyle(element).height

      requestAnimationFrame(() => {
        element.style.height = height
      })
    },

    afterEnter(element) {
      element.style.height = null
    },

    leave(element) {
      const { height } = getComputedStyle(element)

      element.style.height = height

      // Force repaint to make sure the
      // animation is triggered correctly.
      // eslint-disable-next-line no-unused-expressions
      getComputedStyle(element).height

      requestAnimationFrame(() => {
        element.style.height = 0
      })
    }
  }
}
</script>

<style lang="scss">
// ! performance optimization
.expand-enter-active,
.expand-leave-active {
  will-change: height;
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}

.expand-enter-active,
.expand-leave-active {
  transition: height 0.6s ease-in-out;
  overflow: hidden;
}
 .no-leave-animation{
   &.expand-leave-active {
     transition: height 0s ease-in-out;
   }
}

.expand-enter,
.expand-leave-to {
  height: 0;
}
</style>
