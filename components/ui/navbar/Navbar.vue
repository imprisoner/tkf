<template>
  <nav ref="navbar" class="navbar container" :class="navbarStickedClass">
    <div class="navbar__wrap">
      <ui-search
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
        <button
          class="navbar__search-trigger button--iconic"
          type="button"
          @click="toggleSearch"
        >
          <base-icon name="search"></base-icon>
        </button>
      </template>

      <div v-show="isMobileMenuActive" :class="navbarMobileClass">
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
          ></ui-navbar-dropdown>
          <ui-navbar-mobile-bottom v-if="isMobileUI"></ui-navbar-mobile-bottom>
        </div>
      </div>
      <template v-if="isMobileUI">
        <nuxt-link class="navbar__mobile-logo logo" href="/"
          ><b>Time</b>Keeper</nuxt-link
        >
        <button
          class="button button--square navbar__cart-trigger"
          type="button"
        >
          <base-icon name="shopping-cart"></base-icon>
        </button>
      </template>
      <div class="navbar__fav">
        <ui-navbar-fav-menu></ui-navbar-fav-menu>
      </div>
    </div>
  </nav>
</template>

<script setup>
  const { isMobileOrTablet } = useDevice()

  const isMobileUI = ref(isMobileOrTablet)

  const displayState = reactive({
    search: false,
    favMenu: false,
    mobileMenu: false,
  })

  function toggleSearch() {
    displayState.search = !displayState.search
  }

  const navbarItems = reactive([
    {
      title: 'Швейцарские часы',
      repository: 'watches',
      hasDropdown: true,
      icon: 'watch',
      link: '/watches',
      isActive: false,
    },
    {
      title: 'Ювелирные украшения',
      repository: 'jewelry',
      hasDropdown: true,
      icon: 'crystal',
      link: '/jewelry',
      isActive: false,
    },
    {
      title: 'Контакты',
      repository: null,
      hasDropdown: false,
      icon: 'phone',
      link: '/contacts',
      isActive: false,
    },
    {
      title: 'Ещё',
      repository: null,
      hasDropdown: true,
      icon: 'plus-circle',
      link: '',
      isActive: false,
    },
  ])

  function setActiveItem(index) {
    const [currentItem] = navbarItems.filter((item) => item.isActive)
    navbarItems[index].isActive = true
    if (currentItem) {
      currentItem.isActive = false
    }
  }

  // mobile menu

  const isMobileMenuActive = computed(() => {
    if (!isMobileOrTablet) {
      return true
    }
    return displayState.mobileMenu
  })

  const navbarMobileClass = computed(() => ({
    'navbar__mobile-overlay': isMobileOrTablet,
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
      if (scrolled > headerHeight) {
        isSticked.value = true
      } else {
        isSticked.value = false
      }
    })
  })
</script>

<style lang="scss" scoped>
  .navbar {
    position: sticky;
    top: 0;
    z-index: 5;
    transition: padding 0.5s;

    @include max-width('xl') {
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
      @include max-width('xl') {
        padding: unset;
        background-color: unset;
        position: static;
      }
    }

    &__fav {
      margin-left: auto;

      @include max-width('xl') {
        margin-left: unset;
      }
    }

    &__dropdowns {
      display: flex;
      align-items: center;
      gap: 16px;

      @include max-width('xl') {
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
      @include max-width('xl') {
        display: flex;
        position: absolute;
        top: 0;
        left: 82.5%;
      }
    }

    &__menu-trigger,
    &__search-trigger {
      @include max-width('xl') {
        svg {
          width: 20px;
          height: 20px;
        }
      }
    }

    &__search-trigger {
      @include max-width('xl') {
        margin-left: 20px;
      }
    }

    &__mobile-logo {
      @include max-width('xl') {
        display: block;
        margin: 0 auto;
      }
    }

    &__mobile-overlay {
      @include max-width('xl') {
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

    @include max-width('xl') {
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
    order: 1;

    // active search siblings opacity transition
    ~ * {
      opacity: 1;
      transition: opacity 0.5s ease-in;
    }

    &.search-on ~ * {
      opacity: 0;
      // transition: none
    }
  }
  // NEW

  .navbar {
  }
</style>
