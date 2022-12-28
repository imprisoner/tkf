<template>
  <div class="footer-nav__section">
    <h6 class="footer-nav__heading" :class="{'footer-nav__heading--open':isShowing}" :role="isButton" @click="toggle">
      {{ heading }}
    </h6>
    <ul v-if="isShowing" class="footer-nav__list">
      <li v-for="(link, i) in links" :key="i" class="footer-nav__list-item">
        <a :href="link.href">{{ link.text }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
 import {isMobile} from "@/utils/queries";

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

  const triggerClicked = ref(false)

  function toggle() {
    if (isMobile.value) {
      triggerClicked.value = !triggerClicked.value
    }
  }

  const isShowing = computed(() => {
    if (!isMobile.value) {
      return true
    }

    return triggerClicked.value
  })

  const isButton = computed(() => {
    return isMobile.value ? 'button' : null
  })
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
      @include mobile-caret('md');

      @include max-width('md') {
        margin-bottom: unset;
        padding: 12px 16px;
      }
      &--open{
        &::after{
          background: url(/assets/svg/icons/chevron-up.svg) center / cover no-repeat;
        }
      }
    }
  }
</style>
