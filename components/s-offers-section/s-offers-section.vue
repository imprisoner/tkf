<template>
  <section class="s-offers-section container">
    <div class="row">
      <div class="s-offers-section__title offset-xl-1 col-md-8">
        <h2>Лучшие предложения</h2>
        <p class="text-16">People also search for this items</p>
      </div>
      <div class="s-offers-section__slider-nav col-xl-2 col-md-3 offset-9">
        <slider-nav></slider-nav>
      </div>
      <div class="s-offers-section__slider offset-xl-1 col-xl-10 col-md-12">
        <offers-slider :slides="offersCards"></offers-slider>
      </div>
    </div>
    <div class="row">
      <!--Переделал бы версткой в грид-->
      <div class="s-offers-section__ads-1 offset-lg-1 col-lg-5 col-md-6">
        <a class="card" href="#">
          <div class="card__img">
            <img class="img-resp" src="/img/watches_on_arm.png" />
          </div>
          <span class="card__num">01</span>
          <div class="card__content">
            <h3>Лучшие предложения</h3>
            <p class="text-16">People also search for this items</p>
          </div>
        </a>
      </div>
      <div class="s-offers-section__ads-2 offset-6 col-lg-5 col-md-6">
        <a class="card aspect--17-11" href="#">
          <div class="card__img">
            <img class="img-resp" src="/img/watches_on_arm.png" />
          </div>
          <span class="card__num">01</span>
          <div class="card__content">
            <h3>Лучшие предложения</h3>
            <p class="text-16">People also search for this items</p>
          </div>
        </a>
        <a class="card aspect--17-11" href="#">
          <div class="card__img">
            <img class="img-resp" src="/img/watches_on_arm.png" />
          </div>
          <span class="card__num">01</span>
          <div class="card__content">
            <h3>Лучшие предложения</h3>
            <p class="text-16">People also search for this items</p>
          </div>
        </a>
      </div>
      <div class="s-offers-section__novice-title offset-xl-1 col-md-8">
        <h2>Новинки</h2>
      </div>
      <div
        class="s-offers-section__novice-slider-nav offset-9 col-xl-2 col-md-3"
      >
        <slider-nav></slider-nav>
      </div>
      <div class="s-offers-section__novice-slider offset-xl-1 col-xl-10 col-12">
        <novice-slider :slides="offersCards"></novice-slider>
      </div>
    </div>
  </section>
</template>

<script setup>
  import './s-offers-section.scss';

  const props = defineProps({
    offersCards: Array,
    default: () => [],
  })
</script>
