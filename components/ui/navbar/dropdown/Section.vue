<template>
  <section class="navbar-menu__section">
    <div class="navbar-menu__subtitle" :class="triggerActiveClass">
      <h4 class="navbar-menu__subtitle-text" @click="toggleList()">
        {{ title }}
      </h4>
      <div class="navbar-menu__link-wrapper" @click="onLinkClick">
        <nuxt-link
          class="navbar-menu__link link-button"
          :to="`/${repository}/${name}/`"
        >
          <span>Все</span>
          <base-icon name="arrow-down-right"></base-icon>
        </nuxt-link>
      </div>
    </div>
    <expand-transition>
    <ul v-show="isMobileListActive" class="navbar-menu__list text-16">
      <li class="navbar-menu__list-item" @click="onLinkClick">
        <nuxt-link :to="`/${name}/${repository}`">
          Показать все {{ title.toLowerCase() }}
        </nuxt-link>
      </li>
      <li
        v-for="(item, j) in list"
        :key="j"
        class="navbar-menu__list-item"
        @click="onLinkClick"
      >
        <nuxt-link :to="item.link || `/${repository}/`">{{
          item.name
        }}</nuxt-link>
      </li>
    </ul>
    </expand-transition>
  </section>
</template>

<script setup>
  import ExpandTransition from "../../transitions/ExpandTransition";
  import { isDesktop } from '@/utils/queries'

  defineProps({
    repository: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    params: {
      type: Object,
      default: () => ({}),
    },
    list: {
      type: Array,
      default: () => [],
    },
  })

  const emits = defineEmits(['close'])
  const triggerActiveClass = computed(() => ({
    active: displayMobileList.value && !isDesktop.value,
  }))

  function onLinkClick() {
    emits('close')
  }

  const displayMobileList = ref(false)

  const isMobileListActive = computed(() => {
    if (isDesktop.value) {
      return true
    }

    return displayMobileList.value
  })

  function toggleList() {
    displayMobileList.value = !displayMobileList.value
  }
</script>

<style lang="scss" scoped>
  // navbar item component
  .navbar-menu {
    &__section {
      &:first-child {
        .navbar-menu__list {
          grid-template-columns: 200px;
        }
      }
    }

    &__list {
      display: grid;
      gap: 6px;
      column-gap: 40px;
      grid-template-columns: 200px 200px;
      color: $input;
      flex-wrap: wrap;
      @include max-width('lg') {
        display: flex;
        flex-direction: column;
        padding: 16px 24px;
        max-height: unset;
        flex-wrap: nowrap;
        gap: 16px;
        border-bottom: $border;
      }
    }

    &__list-item {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;

      &:first-child {
        display: none;
        @include max-width('lg') {
          display: initial;
          color: black;
          font-size: 12px;
        }
      }
    }

    &__subtitle {
      display: flex;
      gap: 8px;
      margin-bottom: 16px;
      @include max-width('lg') {
        // padding: 12px 14px;
        margin-bottom: unset;
        @include mobile-caret('lg');
      }

      &.active::after {
        transform: rotate(180deg);
      }
    }

    &__subtitle-text {
      @include max-width('lg') {
        flex: 1;
      }
    }

    &__section::after {
      @include max-width('lg') {
        transform: rotate(180deg);
      }
    }

    &__link-wrapper {
      display: flex;
      align-items: center;

       @include max-width('lg') {
        display: none;
      }
    }
  }
</style>
