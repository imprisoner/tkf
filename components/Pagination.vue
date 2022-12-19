<template>
  <div class="pagination">
    <!--    previous page------------------------------->
    <button
      :disabled="currentPage === 1"
      class="button button--square"
      type="button"
      @click="emit('updatePage', currentPage - 1)"
    >
      <base-icon name="chevron-left" />
    </button>
    <!--    --------------------------------------->

    <!--    first page------------------------------->
    <button
      v-if="currentPage > 1"
      class="button button--square"
      type="button"
      @click="emit('updatePage', 1)"
    >
      1
    </button>
    <!--    --------------------------------------->

    <!--    second page before current------------------------------->
    <button
      v-if="currentPage === 3"
      class="button button--square"
      type="button"
      @click="emit('updatePage', 2)"
    >
      2
    </button>
    <!--    --------------------------------------->

    <!--    dots------------------------------->
    <button
      v-if="currentPage > 3"
      class="button button--square"
      title="-2"
      type="button"
      @click="emit('updatePage', currentPage - 2)"
    >
      ...
    </button>
    <!--    --------------------------------------->

    <!--    before last and before current------------------------------->
    <button
      v-if="
        (pagesCount - 1 === currentPage || currentPage === pagesCount) &&
        pagesCount > 3
      "
      class="button button--square"
      type="button"
      @click="emit('updatePage', pagesCount - 2)"
    >
      {{ pagesCount - 2 }}
    </button>
    <!--    --------------------------------------->
    <!--    before last and before current------------------------------->
    <button
      v-if="currentPage === pagesCount"
      class="button button--square"
      type="button"
      @click="emit('updatePage', pagesCount - 1)"
    >
      {{ pagesCount - 1 }}
    </button>
    <!--    --------------------------------------->

    <!--    current page------------------------------->
    <button class="button button--square current" type="button">
      {{ currentPage }}
    </button>
    <!--    --------------------------------------->

    <!--    second page after current------------------------------->
    <button
      v-if="currentPage === 1"
      class="button button--square"
      type="button"
      @click="emit('updatePage', 2)"
    >
      2
    </button>
    <!--    --------------------------------------->

    <!--    third page after current------------------------------->
    <button
      v-if="currentPage < 3"
      class="button button--square"
      type="button"
      @click="emit('updatePage', 3)"
    >
      3
    </button>
    <!--    --------------------------------------->

    <!--    dots------------------------------->
    <button
      v-if="pagesCount - 2 > currentPage"
      class="button button--square"
      title="+2"
      type="button"
      @click="emit('updatePage', currentPage + 2)"
    >
      ...
    </button>
    <!--    --------------------------------------->

    <!--    before last and after current ------------------------------->
    <button
      v-if="currentPage === pagesCount - 2 && pagesCount > 3"
      class="button button--square"
      type="button"
      @click="emit('updatePage', pagesCount - 1)"
    >
      {{ pagesCount - 1 }}
    </button>
    <!--    --------------------------------------->

    <!--    last page------------------------------->
    <button
      v-if="currentPage < pagesCount && pagesCount > 3"
      class="button button--square"
      type="button"
      @click="emit('updatePage', pagesCount)"
    >
      {{ pagesCount }}
    </button>
    <!--    --------------------------------------->

    <!--    next page------------------------------->
    <button
      :disabled="pagesCount === currentPage"
      class="button button--square"
      type="button"
      @click="emit('updatePage', currentPage + 1)"
    >
      <base-icon name="chevron-right" />
    </button>
    <!--    --------------------------------------->
  </div>
</template>

<script setup>
  const emit = defineEmits(['updatePage'])
  defineProps({
    currentPage: {
      type: Number,
      default: 1,
    },
    pagesCount: {
      type: Number,
      default: 1,
    },
  })
</script>

<style lang="scss" scoped>
  .button--square {
    transition: 0.2s;

    &:not(:disabled):not(.current):hover {
      background-color: $neutral;
    }
  }
</style>
