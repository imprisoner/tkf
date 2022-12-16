<template>
  <div class="categories-section container">
    <div class="row">
        <div class="offset-lg-1 col-lg-10 col-12">
            <div class="categories-section__wall row">
              <MCard
                v-for="(item, index) in cardsItems"
                :key="index"
                :title="item.title"
                :image="item.image"
                :classname="item.classname"
                :link="item.link" />
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
const cardsItems = [
  {
    title: 'Мужские',
    classname: 'col-lg-3 col-md-6 col-12',
    link: '#',
    image: '/img/watches_1.png',
  },
  {
    title: 'Женские',
    classname: 'col-lg-3 col-md-6 col-12',
    link: '#',
    image: '/img/watches_1.png',
  },
  {
    title: 'Новые',
    classname: 'col-lg-3 col-md-6 col-12',
    link: '#',
    image: '/img/watches_1.png',
  },
  {
    title: 'Подержанные',
    classname: 'col-lg-3 col-md-6 col-12',
    link: '#',
    image: '/img/watches_1.png',
  },
]
</script>

<style lang="scss" scoped>
.categories-section {
  &__wall {
    row-gap: 24px;
  }

  .card-square {
    position: relative;
    background: rgba(0, 0, 0, 0.42);

    @include max-width('md') {
      aspect-ratio: unset;
      gap: 8px;
      padding: 16px;
    }

    img {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
    }
  }
}
</style>
