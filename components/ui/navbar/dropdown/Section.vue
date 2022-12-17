<template>
  <section class="navbar-menu__section">
    <div class="navbar-menu__subtitle mobile-caret" :class="triggerActiveClass">
      <h4 class="navbar-menu__subtitle-text" @click="toggleList()">
        {{ title }}
      </h4>
      <nuxt-link
        class="navbar-menu__link link-button"
        :to="`/${name}/${repository}`"
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
      <!-- <li v-for="(item, j) in list" :key="j" class="navbar-menu__list-item">
        <nuxt-link :to="`#`">{{ item.name }}</nuxt-link>
      </li> -->
    </ul>
  </section>
</template>

<script setup>
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
  })

  const { isMobileOrTablet } = useDevice()

  const triggerActiveClass = computed(() => ({
    active: displayMobileList.value && isMobileOrTablet,
  }))

  const displayMobileList = ref(false)

  const isMobileListActive = computed(() => {
    if (!isMobileOrTablet) {
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
      @include max-width('xl') {
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
        @include max-width('xl') {
          display: initial;
          color: black;
        }
      }
    }

    &__subtitle {
      display: flex;
      gap: 8px;
      margin-bottom: 16px;
      @include max-width('xl') {
        padding: 12px 14px;
        margin-bottom: unset;
      }

      &.active::after {
        transform: rotate(180deg);
      }
    }
    &__subtitle-text {
      @include max-width('xl') {
        flex: 1;
      }
    }

    @include max-width('xl') {
      &__section {
        &::after {
          transform: rotate(180deg);
        }
      }
    }

    &__link {
      @include max-width('xl') {
        display: none;
      }
    }
  }
</style>
