<template>
  <template v-if="header">
    <div class="header-search" :class="searchOn">
      <button class="button" type="button" @click="toggle">
        <base-icon name="search"></base-icon>
      </button>
      <input id="header_search" type="text" @change="search" />
    </div>
  </template>
  <template v-else>
    <div class="search input-group" :class="searchOn">
      <input
        class="input-group__field search__field"
        type="text"
        placeholder="Поиск часов и ювелирных изделий"
        @change="search"
      />
      <button
        class="button button--square button--black search__active"
        type="button"
        @click="toggle"
      >
        <base-icon name="search"></base-icon>
      </button>
    </div>
  </template>
</template>

<script setup>
  const props = defineProps({
    active: Boolean,
    hidden: Boolean,
    header: Boolean,
  })

  const emit = defineEmits(['update:active'])

  const searchOn = computed(() => (props.active ? 'search-on' : 'search-off'))

  function toggle() {
    if (!props.hidden) return

    emit('update:active', !props.active)
  }
  function search(e) {
    const searchString = e.target.value
    navigateTo({
      path: '/search',
      query: {
        search_string: searchString,
      },
    })
    e.target.value = ''
  }
</script>

<style lang="scss" scoped>
  .search {
    &__field {
      display: flex;
      width: 100%;
      margin-left: auto;
      padding-left: 22px;
      padding-right: 22px;
      outline: 1px solid #eaeaea;
      outline-offset: -1px;

      &::placeholder {
        color: $input;
      }
    }

    &.search-off {
      .search__field {
        width: 0;
        padding: unset;
        flex: unset;
        &::placeholder {
          color: $neutral;
        }
      }
    }
  }
  .header-search {
    display: flex;
    align-items: center;
    flex: 1;
    position: relative;

    .button {
      height: unset;
      padding: unset;
      z-index: 1;
      transition: all 0.5s ease;
      position: absolute;
    }

    input {
      // display: none;
      transition: all 0.5s ease;
      //width: 0;
      border: none;
      padding-left: 25px;
      // height: 100%;
    }

    &.search-on {
      .button {
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
