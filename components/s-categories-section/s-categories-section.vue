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
                :classname="item.class"
                :link="item.link" />
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import './s-categories-section.scss';

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
