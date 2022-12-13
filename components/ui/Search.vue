<template>
  <template v-if="header">
    <div class="header-search" :class="searchOn">
      <button class="btn" type="button" @click="toggle">
        <base-icon name="search"></base-icon>
      </button>
      <input type="text" id="header_search">
    </div>
  </template>
  <template v-else-if="navbar">
    <div class="search navbar-search input-group" :class="searchOn">
      <input class="input-group__field navbar-search__field" type="text" id="navbar_search"
        placeholder="Найти лучшие в мире часы">
      <button class="btn btn-square btn-black navbar-search__active" type="button" @click="toggle">
        <base-icon name="search"></base-icon>
      </button>
    </div>
  </template>
  <template v-else>
    <div class="search input-group" :class="searchOn">
      <input class="input-group__field" type="text" id="navbar_search"
        placeholder="Найти лучшие в мире часы">
      <button class="btn btn-square btn-black" type="button" @click="toggle">
        <base-icon name="search"></base-icon>
      </button>
    </div>
  </template>
</template>

<script setup>
const emit = defineEmits(['update:active'])

const props = defineProps({
  active: Boolean,
  static: Boolean,
  hidden: Boolean,
  header: Boolean,
  navbar: Boolean
})

const navbarClasses = computed(() => {
  return props.navbar ? ['navbar-search', 'navbar-search__field', 'navbar-search__trigger'] : ''
})


const searchOn = computed(() => props.active ? 'search-on' : '')

function toggle() {
  if (props.static) return

  emit('update:active', !props.active)
}
</script>

<style lang="scss" scoped>
.navbar-search {
  margin-left: 16px;
  width: auto;

  @include max-width('xl') {
    position: absolute;
    left: -9999px;
  }

  &__trigger {
    margin-left: auto;
  }

  &__field {

    width: 0;
    padding: unset;
    flex: unset;

    &::placeholder {
      color: $neutral;
    }
  }



  &.search-on {
    position: absolute;
    left: 24px;
    top: 24px;
    right: 24px;
    bottom: 24px;
    width: unset;
    margin-left: auto;
    z-index: 1;

    @include max-width('xl') {
      left: 0;
      top: 40px;
      right: 0;
      height: 60px;
    }

    @include max-width('lg') {
      height: 40px;
    }
  }

  &.search-on &__trigger {
    margin-left: unset;
  }

  &.search-on &__field {
    display: flex;
    width: 100%;
    margin-left: auto;
    padding-left: 22px;
    padding-right: 22px;
    outline: 1px solid #eaeaea;
    outline-offset: -1px;
    transition: width .5s;

    &::placeholder {
      color: $input;
    }
  }
}

.header-search {
  display: flex;
  align-items: center;
  flex: 1;
  position: relative;

  .btn {
    height: unset;
    padding: unset;
    z-index: 1;
    transition: all .5s ease;
    position: absolute;
  }

  input {
    // display: none;
    transition: all .5s ease;
    width: 0;
    border: none;
    padding-left: 25px;
    // height: 100%;
  }

  &.search-on {
    .btn {
      // position: absolute;
      transform: translate(0, -4px);
    }

    input {
      height: 30px;
      display: flex;
      width: 100%;
      border-bottom: 1px solid black;
      // transform: translate(-20px, 0);
    }
  }
}
</style>