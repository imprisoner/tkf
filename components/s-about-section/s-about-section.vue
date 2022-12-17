<template>
  <section class="s-about-section container">
    <article class="s-about-section__description row">
      <div class="offset-xl-1 col-md-4 col-lg-3">
        <h2>О проекте</h2>
      </div>
      <div class="offset-4 col-md-8">
        <p class="text-16">
          Учитывая ключевые сценарии поведения, повышение уровня гражданского
          сознания требует от нас анализа системы массового участия.
        </p>
        <p class="text-16">
          Учитывая ключевые сценарии поведения, повышение уровня гражданского
          сознания требует от нас анализа системы массового участия.
        </p>
      </div>
    </article>
    <div class="s-about-section__cards row">
      <div
        class="s-about-section__cards-wrapper offset-md-1 col-md-10 offset-lg-0 col-lg-12 offset-xxl-1 col-xxl-10 col-12"
      >
        <div class="card card--square">
          <div class="button button--square button--gray stroked-icon">
            <base-icon name="thumbs-up"></base-icon>
          </div>
          <h5>Актуальные новинки</h5>
        </div>
        <div class="card card--square">
          <div class="button button--square button--gray stroked-icon">
            <base-icon name="package"></base-icon>
          </div>
          <h5>Ломбард</h5>
        </div>
        <div class="card card--square">
          <div class="button button--square button--gray stroked-icon">
            <base-icon name="package"></base-icon>
          </div>
          <h5>Преимущество</h5>
        </div>
        <div class="card card--square">
          <div class="button button--square button--gray stroked-icon">
            <base-icon name="star"></base-icon>
          </div>
          <h5>Преимущество</h5>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="s-about-section__img offset-xl-1 col-md-6">
        <div>
          <img class="img-resp" src="~/assets/img/watches_main_tr.png" />
        </div>
      </div>
      <div class="offset-7 col-xl-4 col-md-5 offset-xl-8">
        <h2>О проекте</h2>
        <p class="text-16">
          Учитывая ключевые сценарии поведения, повышение уровня гражданского
          сознания требует от нас анализа системы массового участия.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
  import './s-about-section.scss'
</script>
