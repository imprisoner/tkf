<template>
  <ul class="a-breadcrumbs">
      <li class="a-breadcrumbs__item">
          <nuxt-link to="/">
            <div class="a-breadcrumbs__item-icon">
              <base-icon name="home"></base-icon>
            </div>
          </nuxt-link>
      </li>
      <li v-for="(breadcrumb, id) in breadcrumbs" :key="id" class="a-breadcrumbs__item">
        <nuxt-link :to="breadcrumb.route"> {{ breadcrumb.text }} </nuxt-link>
      </li>
  </ul>
</template>

<script setup>
  import './a-breadcrumbs.scss';

  const props = defineProps({
    breadcrumbs: Array,
    default: () => [],
  })
</script>
