<template>
  <div class="header-search" :class="{ 'header-search--active': showSearch }">
    <button class="header-search__button button" type="button" @click="toggle">
      <base-icon name="search"></base-icon>
    </button>
    <input
      class="header-search__field header_search"
      type="text"
      aria-label="Search"
      @change="search"
    />
  </div>
</template>

<script setup>
  const showSearch = ref(false)
  function toggle() {
    showSearch.value = !showSearch.value
  }

  function search(e) {
    const searchString = e.target.value
    navigateTo({
      path: '/search',
      query: {
        search_string: searchString,
      },
    })
  }
</script>

<style lang="scss" scoped>
  .header-search {
    display: flex;
    align-items: center;
    flex: 1;
    position: relative;

    &__button {
      height: unset;
      padding: unset;
      z-index: 1;
      transition: all 0.5s ease;
      position: absolute;
    }

    &__field {
      transition: all 0.5s ease;
      width: 0;
      border: none;
      padding-left: 25px;
    }

    &--active &__button {
      transform: translate(0, -4px);
    }

    &--active &__field {
      height: 30px;
      display: flex;
      width: 100%;
      border-bottom: 1px solid black;
    }
  }
</style>
