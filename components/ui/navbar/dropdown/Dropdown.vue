<template>
  <div class="navbar__dropdown" :class="activeClass">
    <component
      :is="trigger"
      class="button navbar__dropdown-trigger dropdown-trigger"
      :class="triggerClasses"
      :to="hasDropdown ? null : link"
      :type="type"
      @click="onClick()"
    >
      <base-icon :name="icon"></base-icon>
      <span class="button__text">{{ title }}</span>
      <div v-if="hasDropdown" class="button__caret">
        <base-icon name="chevron-down"></base-icon>
      </div>
    </component>
    <template v-if="repository">
      <div v-show="isActive" class="navbar__menu navbar-menu">
        <div class="navbar-menu__wrap">
          <ui-navbar-dropdown-section
            v-for="(section, i) in sections"
            :key="i"
            v-bind="section"
            :params="params[section.name][repository]"
          />
        </div>
        <nuxt-link
          class="button navbar-menu__bottom-link bottom-link"
          :class="bottomLinkClass"
          :to="`/lots/${repository}`"
        >
          <base-icon
            :name="bottomLinkIcon"
            class="botton-link__icon"
          ></base-icon>
          <span>Показать все {{ title.toLowerCase() }}</span>
        </nuxt-link>
      </div>
    </template>
  </div>
</template>

<script setup>
import {isDesktop} from "@/utils/queries";

  const props = defineProps({
    title: {
      type: String,
      default: '',
    },
    repository: {
      type: [String, Object],
      default: null,
    },
    icon: {
      type: String,
      default: 'x',
    },
    hasDropdown: {
      type: Boolean,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
    },
    link: {
      type: String,
      default: '',
    },
  })

  const emits = defineEmits(['show'])


  const trigger = shallowRef(
    props.link && !props.hasDropdown ? resolveComponent('NuxtLink') : 'button'
  )

  const activeClass = computed(() => ({
    'show-menu': props.isActive,
  }))
  const triggerClasses = computed(() => ({
    'button--black': props.isActive && !isDesktop.value,
    active: props.isActive && isDesktop.value,
  }))

  const type = props.link ? null : 'button'

  const bottomLinkIcon = computed(() => {
    return !isDesktop.value ? 'arrow-right' : 'arrow-down-right'
  })

  const bottomLinkClass = computed(() => {
    return !isDesktop.value ? '' : 'button--black'
  })

  const params = reactive({
    categories: {
      watches: {},
      jewelry: {},
    },
    brands: {
      watches: {
        brand_type: 'WATCH',
      },
      jewelry: {
        brand_type: 'JEWELRY',
      },
    },
  })
  const sections = reactive([
    {
      name: 'categories',
      title: 'Категории',
      repository: props.repository,
    },
    {
      name: 'brands',
      title: 'Бренды',
      repository: props.repository,
    },
  ])

  function onClick() {
    if (!props.hasDropdown) {
      return
    }

    emits('show')
  }
</script>

<style lang="scss" scoped>
  .navbar__dropdown {
    position: relative;

    @include max-width('lg') {
      width: 100%;
    }
  }

  .navbar__dropdown-trigger {
    @include max-width('lg') {
      width: 100%;
      justify-content: start;
      border-bottom: $border;
      line-height: 16px;
      height: unset;
      font-size: 12px;
      padding: 12px 14px;
    }

    &.active {
      background-color: #ffffffe5;
    }
    &.active .button__caret {
      transform: rotate(180deg);
    }
  }

  .navbar-menu {
    position: absolute;
    top: 84px;
    left: 0;
    width: 680px;
    padding-bottom: unset;
    background-color: white;
    @include shadow;

    @include max-width('lg') {
      position: static;
      width: 100%;
      border: none;
      padding: unset;
      box-shadow: none;
      display: flex;
      flex-direction: column;
    }

    &__wrap {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 40px;
      height: 100%;
      padding: 40px;
      padding-bottom: 45px;

      @include max-width('lg') {
        display: flex;
        flex-direction: column;
        padding: unset;
        gap: unset;
        order: 1;
      }
    }
  }
  .bottom-link {
    @include max-width('lg') {
      border-bottom: $border;
    }

    &__icon {
      @include max-width('lg') {
        order: 1;
        width: 16px;
        height: 16px;
        margin-left: auto;
      }
    }
  }
</style>
