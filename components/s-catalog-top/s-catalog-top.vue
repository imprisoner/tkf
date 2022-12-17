<template>
  <section class="s-catalog-top container">
      <div class="row">
          <div class="s-catalog-top__breadcrumbs offset-lg-1 col-lg-10 col-12">
            <ABreadcrumbs :breadcrumbs="breadcrumbs" />
          </div>
          <div class="s-catalog-top__title offset-lg-1 col-lg-10 col-12">
              <h2>Все бренды швейцарских часов</h2>
              <span class="text-16">найдено 98 товаров</span>
          </div>
      </div>
  </section>
</template>

<script setup>
  import './s-catalog-top.scss';
  import ABreadcrumbs from '~/components/ui/a-breadcrumbs/a-breadcrumbs';

  const props = defineProps({
    breadcrumbs: Array,
    default: () => [],
  })
</script>
