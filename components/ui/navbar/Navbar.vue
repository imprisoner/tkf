<template>
  <nav ref="navbar" class="navbar container" :class="navbarStickedClass">
    <div class="navbar__wrap">
      <ui-search
        v-if="isSticked && !isMobileUI"
        v-model:active="displayState.search"
        hidden
        class="navbar-search"
      ></ui-search>
      <!-- mobile -->
      <template v-if="isMobileUI">
        <button
          class="navbar__menu-trigger button--iconic"
          type="button"
          @click="showMobileMenu()"
        >
          <base-icon name="menu"></base-icon>
        </button>
        <ui-search
          v-model:active="displayState.search"
          hidden
          class="navbar-search"
        ></ui-search>
        <nuxt-link class="navbar__mobile-logo logo" href="/"
          ><b>Time</b>Keeper</nuxt-link
        >
        <button
          class="navbar__search-trigger button--iconic"
          type="button"
          @click="toggleSearch"
        >
          <base-icon name="search"></base-icon>
        </button>
      </template>

      <div v-if="isMobileMenuActive" :class="navbarMobileClass"></div>
      <Transition>
        <div v-if="isMobileMenuActive" class="navbar__mobile-menu">
          <div class="navbar__dropdowns">
            <button
              v-if="isMobileUI"
              class="navbar__drawer-close button button--square button--gray"
              type="button"
              @click="hideMobileMenu()"
            >
              <base-icon name="x"></base-icon>
            </button>
            <ui-navbar-dropdown
              v-for="(props, i) in navbarItems"
              v-bind="props"
              :key="i"
              @show="setActiveItem(i)"
              @hide="closeAllDropdown"
            >
            </ui-navbar-dropdown>
          </div>
        </div>
      </Transition>
    </div>
  </nav>
</template>

<script setup>
  import { isDesktop } from '@/utils/queries'
  import { getBrands } from '@/api/getBrands'
  import { getContacts } from '@/api/pages'

  import { WATCH, JEWELRY } from '@/constants/brandTypes'

  const BRAND_TYPES_ROUTE_MAP = {
    [WATCH]: 'watches',
    [JEWELRY]: 'jewelry',
  }

  const watchesBrands = await loadBrands(WATCH)
  const jewelryBrands = await loadBrands(JEWELRY)
  const contacts = await getContacts()

  const isMobileUI = computed(() => {
    return !isDesktop.value
  })

  const displayState = reactive({
    search: false,
    favMenu: false,
    mobileMenu: false,
  })

  function toggleSearch() {
    displayState.search = !displayState.search
  }

  function loadBrands(type) {
    return getBrands({ brandType: type }, true).then((brands) => {
      return brands.slice(0, 20).map((brand) => ({
        ...brand,
        link: `/${BRAND_TYPES_ROUTE_MAP[type]}`,
      }))
    })
  }

  const navbarItems = reactive([
    {
      title: 'Швейцарские часы',
      repository: 'watches',
      hasDropdown: true,
      icon: 'watch',
      link: '/watches',
      isActive: false,
      categories: [
        { name: 'Мужские', link: '/watches' },
        { name: 'Женские', link: '/watches' },
        { name: 'Новые', link: '/watches' },
        { name: 'Подержанные', link: '/watches' },
      ],
      brands: watchesBrands,
    },
    {
      title: 'Ювелирные украшения',
      repository: 'jewelry',
      hasDropdown: true,
      icon: 'crystal',
      link: '/jewelry',
      isActive: false,
      categories: [
        { name: 'Мужские', link: '/jewelry' },
        { name: 'Женские', link: '/jewelry' },
        { name: 'Новые', link: '/jewelry' },
        { name: 'Подержанные', link: '/jewelry' },
      ],
      brands: jewelryBrands,
    },
    {
      title: 'Контакты',
      repository: 'contacts',
      hasDropdown: true,
      icon: 'phone',
      link: '/contacts',
      isActive: false,
      contacts,
    }
  ])

  function setActiveItem(index) {
    const [currentItem] = navbarItems.filter((item) => item.isActive)
    navbarItems[index].isActive = true
    if (currentItem) {
      currentItem.isActive = false
    }
  }

  function closeAllDropdown() {
    navbarItems.forEach((item) => {
      item.isActive = false
    })

    if (isMobileUI) {
      hideMobileMenu()
    }
  }

  // mobile menu

  const isMobileMenuActive = computed(() => {
    if (isDesktop.value) {
      return true
    }
    return displayState.mobileMenu
  })

  const navbarMobileClass = computed(() => ({
    'navbar__mobile-overlay': !isDesktop.value,
  }))

  function showMobileMenu() {
    displayState.mobileMenu = true

    document.documentElement.style.overflow = 'hidden'
  }

  function hideMobileMenu() {
    displayState.mobileMenu = false
    document.documentElement.style.overflow = ''
  }

  // set navbar-sticked class onScroll

  const navbar = ref()
  const isSticked = ref(false)
  const navbarStickedClass = reactive({
    'navbar--sticked': isSticked,
  })

  onMounted(() => {
    document.addEventListener('scroll', () => {
      const headerHeight = useState('headerHeight').value
      const scrolled = navbar.value.offsetTop
      isSticked.value = scrolled > headerHeight
    })
  })
</script>

<style lang="scss" scoped>
  .v-enter-active,
  .v-leave-active {
    transition: all 1s ease;
  }

  .v-enter-from,
  .v-leave-to {
    transform: translate(-10%, 0);
    opacity: 0;
  }
  .navbar {
    position: sticky;
    top: 0;
    z-index: 5;
    transition: padding 0.5s;

    @include max-width('lg') {
      background-color: $neutral;
      position: static;
    }

    &--sticked {
      @include shadow;
      padding: unset;
    }

    &__wrap {
      background-color: $neutral;
      display: flex;
      align-items: center;
      padding: 24px;
      position: relative;
      @include max-width('lg') {
        padding: unset;
        background-color: unset;
        position: static;
      }
    }

    &__fav {
      margin-left: auto;

      @include max-width('lg') {
        margin-left: unset;
      }
    }

    &__dropdowns {
      display: flex;
      align-items: center;
      gap: 16px;

      @include max-width('lg') {
        flex-direction: column;
        align-items: start;
        flex: 1;
        width: 100%;
        gap: unset;

        height: 100%;
        width: 82.5%;
        background-color: white;
        padding: unset;
        overflow-y: scroll;
      }
    }

    &__drawer-close {
      @include max-width('lg') {
        display: flex;
        position: absolute;
        top: 0;
        left: 82.5%;
      }
    }

    &__menu-trigger,
    &__search-trigger {
      @include max-width('lg') {
        svg {
          width: 20px;
          height: 20px;
        }
      }
    }

    &__search-trigger {
      @include max-width('lg') {
        margin-left: 20px;
      }
    }

    &__mobile-logo {
      @include max-width('lg') {
        display: block;
        margin: 0 auto;
      }
    }

    &__mobile-overlay {
      @include max-width('lg') {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.47);
        padding: unset;
        z-index: 5;
      }
    }
    &__mobile-menu {
      @include max-width('lg') {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        padding: unset;
        z-index: 5;
      }
    }

    @include max-width('lg') {
      // background-color: $neutral;
      // position: static;

      // &__wrap {
      //   padding: unset;
      //   background-color: unset;
      //   position: static;
      // }

      // &__dropdowns {
      // flex-direction: column;
      // align-items: start;
      // flex: 1;
      // width: 100%;
      // gap: unset;
      // }

      // &__mobile-logo {
      //   display: block;
      //   margin: 0 auto;
      // }

      // &__cart-trigger {
      //   display: flex;
      // }

      // &__dropdowns {
      //   height: 100%;
      //   width: 82.5%;
      //   background-color: white;
      //   padding: unset;
      //   overflow-y: scroll;
      // }

      // &__fav {
      //   margin-left: unset;
      // }
    }
  }
  .navbar-search {
    margin-left: auto;
    width: auto;

    @include max-width('lg') {
      position: absolute;
      left: -9999px;
    }
    order: 1;

    // active search siblings opacity transition

    &.search-on {
      position: absolute;
      left: 24px;
      top: 24px;
      right: 24px;
      bottom: 24px;
      width: unset;
      margin-left: auto;
      z-index: 1;

      @include max-width('lg') {
        left: 0;
        top: 40px;
        right: 0;
        height: 60px;
      }

      @include max-width('lg') {
        height: 40px;
      }

      & ~ * {
        opacity: 0;
      }
    }
  }
  // NEW

  .navbar {
  }
</style>
