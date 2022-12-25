<template>
  <div class="brands-section container">
    <div class="row">
      <div class="offset-lg-1 col-lg-10 col-12">
        <div class="brands-section__wall row">
          <s-brands-card
            v-for="brand in brandsCards"
            :id="brand.id"
            :key="brand.id"
            :image="brand.image"
            :name="brand.name"
            :brand-type="brand.is_jewelry_brand == true ? 'jewelry' : 'watches'"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import './s-brands-section.scss'

  defineProps({
    brandsCards: {
      type: Array,
      default: () => [],
    },
  })
</script>

<style lang="scss" scoped></style>
