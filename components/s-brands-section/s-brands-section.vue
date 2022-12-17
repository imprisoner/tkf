<template>
  <div class="brands-section container">
    <div class="row">
      <div class="offset-lg-1 col-lg-10 col-12">
        <div class="brands-section__wall row">
          <brands-card
            v-for="brand in brandsCards"
            :image="brand.image"
            :id="brand.id"
            :name="brand.name"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import './s-brands-section.scss'

  const props = defineProps({
    brandsCards: {
      type: Array,
      default: () => [],
    },
  })
</script>

<style lang="scss" scoped></style>
