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
          <div class="navbar-menu__contacts" v-if="repository === 'contacts'">
            <div
              v-for="(contactsGroup, contactsGroupName) in contacts"
              :key="contactsGroupName"
              class="navbar-menu__contact"
            >
              <span class="navbar-menu__contact-title">{{
                getContactsGroupName(contactsGroupName)
              }}</span>
              <a
                v-for="(contact, index) in contactsGroup"
                :href="setContactLinkByType(contact, contactsGroupName)"
                :key="index"
                >{{ contact }}</a
              >
            </div>
          </div>
          <template v-else>
            <ui-navbar-dropdown-section
              v-for="(section, i) in sections"
              :key="i"
              v-bind="section"
              :params="params[section.name][repository]"
            />
          </template>
        </div>
        <nuxt-link
          v-if="repository !== 'contacts'"
          class="button navbar-menu__bottom-link bottom-link"
          :class="bottomLinkClass"
          :to="`/lots/${repository}`"
        >
          <span>Показать все {{ title.toLowerCase() }}</span>
          <base-icon
            :name="bottomLinkIcon"
            class="botton-link__icon"
          ></base-icon>
        </nuxt-link>
      </div>
    </template>
  </div>
</template>

<script setup>
  import { isDesktop } from '@/utils/queries'

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
    categories: {
      type: Array,
      default: () => [],
    },
    contacts: {
      type: Array,
      default: () => [],
    },
    brands: {
      type: Array,
      default: () => [],
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
      list: props.categories,
    },
    {
      name: 'brands',
      title: 'Бренды',
      repository: props.repository,
      list: props.brands,
    },
  ])

  function setContactLinkByType(value, contactsGroupName) {
    const contactTypesMap = {
      phones: (val) => `tel:${val}`,
      mails: (val) => `mailto:${val}`,
    }
    return contactTypesMap[contactsGroupName]?.(value) || value
  }

  function getContactsGroupName(contactsGroupName) {
    const nameMap = {
      phones: 'Телефон',
      socials: 'Соц. сети',
      mails: 'Почта',
    }
    return nameMap[contactsGroupName] || contactsGroupName
  }

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
    padding-bottom: unset;
    background-color: white;
    @include shadow;

    &__contacts {
      display: flex;
      flex-direction: column;
      gap: 32px;
    }

    &__contact {
      display: flex;
      flex-direction: column;
      gap: 16px;

      &-title {
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
      }

      &-value {
        line-height: 26px;
      }
    }

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
      grid-auto-flow: column;
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
      justify-content: flex-start;
      font-weight: 400;
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
