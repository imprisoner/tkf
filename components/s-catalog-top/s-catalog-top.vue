<template>
  <section class="s-catalog-top container">
      <div class="row">
          <div class="s-catalog-top__breadcrumbs offset-lg-1 col-lg-10 col-12">
            <ABreadcrumbs />
          </div>
          <MCatalogInfo
            :title="title"
            :categories="categories"
            :btn-show="btnShow"
            :count="count"
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
  })
</script>
