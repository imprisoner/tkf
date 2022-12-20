<template>
  <section class="navbar-menu__section">
    <div class="navbar-menu__subtitle" :class="triggerActiveClass">
      <h4 class="navbar-menu__subtitle-text" @click="toggleList()">
        {{ title }}
      </h4>
      <nuxt-link
        class="navbar-menu__link link-button"
        :to="`/${repository}/${name}/`"
      >
        <span>Все</span>
        <base-icon name="arrow-down-right"></base-icon>
      </nuxt-link>
    </div>
    <ul v-show="isMobileListActive" class="navbar-menu__list text-16">
      <li class="navbar-menu__list-item">
        <nuxt-link :to="`/${name}/${repository}`"
          >Показать все {{ title.toLowerCase() }}</nuxt-link
        >
      </li>
      <li v-for="(item, j) in list" :key="j" class="navbar-menu__list-item">
        <nuxt-link :to="item.link || `/${repository}/`">{{ item.name }}</nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script setup>
import {isDesktop} from "@/utils/queries";

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
      default: () => []
    }
  })

  const triggerActiveClass = computed(() => ({
    active: displayMobileList.value && !isDesktop.value,
  }))

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
    &__list {
      display: flex;
      flex-direction: column;
      gap: 6px;
      color: $input;
      max-height: 320px;
      flex-wrap: wrap;
      @include max-width('lg') {
        padding: 16px 24px;
        max-height: unset;
        flex-wrap: nowrap;
        gap: 16px;
        border-bottom: $border;
      }
    }

    &__list-item {
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

    &__link {
      @include max-width('lg') {
        display: none;
      }
    }
  }
</style>
