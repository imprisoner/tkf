<template>
  <div class="header-search" :class="{ show: showSearch }">
    <button class="button" type="button" @click="toggle">
      <base-icon name="search"></base-icon>
    </button>
    <input id="header_search" type="text" />
  </div>
</template>

<script setup>
  const showSearch = ref(false)

  function toggle() {
    showSearch.value = !showSearch.value
  }
</script>

<style lang="scss" scoped>
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
      width: 0;
      border: none;
      padding-left: 25px;
      // height: 100%;
    }

    &.show {
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
