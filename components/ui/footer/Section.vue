<template>
  <div class="footer-nav__section" @click="toggle">
    <h6 class="mobile-caret footer-nav__heading" >
      {{ heading }}
    </h6>
    <ul class="footer-nav__list" :class="activeClass">
      <li v-for="(link, i) in links" :key="i" class="footer-nav__list-item">
        <a :href="link.href">{{ link.text }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
  const { isMobile } = useDevice()

  defineProps({
    heading: {
      type: String,
      default: '',
    },
    links: {
      type: Array,
      default: () => [],
    },
  })

  const hasClicked = ref(false)
  const activeClass = reactive({
    show: hasClicked,
  })

  function toggle() {
    if (isMobile) hasClicked.value = !hasClicked.value
  }
</script>

<style lang="scss" scoped>
  .footer-nav {
    &__section {
      padding: 32px;

      @include max-width('xxl') {
        padding: 16px;
      }

      @include max-width('xl') {
        padding-left: unset;
        padding-right: unset;
      }

      @include max-width('lg') {
        padding: unset;
        order: 1;
      }

      @include max-width('md') {
        font-size: 12px;
        line-height: 16px;
      }
    }

    &__list {
      font-size: 14px;
      line-height: 21px;
      color: $input;

      @include max-width('md') {
        display: none;
      }

      &.show {
        display: block;
      }
    }

    &__list-item {
      margin-bottom: 8px;

      @include max-width('md') {
        padding: 12px 24px;
        margin-bottom: unset;
        border-bottom: $border;
      }
    }

    &__heading {
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
      margin-bottom: 16px;

      @include max-width('md') {
        margin-bottom: unset;
      }

      @include max-width('md') {
        padding: 12px 16px;
      }
    }
  }
</style>
