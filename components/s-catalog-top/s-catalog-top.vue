<template>
  <section class="s-catalog-top container">
    <div class="row">
      <div class="s-catalog-top__breadcrumbs offset-xl-1 col-lg-10 col-12">
        <ABreadcrumbs :name="name" />
      </div>
      <MCatalogInfo
        :title="title"
        :categories="categories"
        :btn-show="btnShow"
        :count="count"
        :on-show="onShow"
        :on-show-counter="onShowCounter"
        :on-show-categories="onShowCategories"
        :on-show-bookmark="onShowBookmark"
      />
    </div>
  </section>
</template>

<script setup>
  import './s-catalog-top.scss'
  import ABreadcrumbs from '~/components/ui/a-breadcrumbs/a-breadcrumbs'

  defineProps({
    title: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    count: {
      type: Number,
      default: 0,
    },
    categories: {
      type: Array,
      default: () => [],
    },
    btnShow: {
      type: Boolean,
      default: false,
    },
    onShow: {
      type: Boolean,
      default: true,
    },
    onShowCounter: {
      type: Boolean,
      default: true,
    },
    onShowCategories: {
      type: Boolean,
      default: true,
    },
    onShowBookmark: {
      type: Boolean,
      default: true,
    },
  })
</script>
