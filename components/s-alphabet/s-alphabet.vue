<template>
  <div class="alphabet container">
    <div class="row">
      <div class="alphabet__letters offset-lg-1 col-lg-10 col-12">
        <div class="alphabet__subgrid">
          <button
            v-for="(letter, i) in letters"
            :key="i"
            class="alphabet__button"
            type="button"
          >
            {{ letter }}
          </button>
        </div>
      </div>
    </div>
    <div class="alphabet__body row">
      <div class="alphabet__title offset-lg-1 col-md-2 col-12"><p>A</p></div>
      <div
        class="alphabet__list-wrapper row offset-lg-3 col-xl-8 col-md-10 col-12"
      >
        <ul class="alphabet__list col-xl-3 col-md-4 col-12">
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">François-Paul Journe</a>
          </li>
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">Patek Philippe</a>
          </li>
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">Vacheron Constantin</a>
          </li>
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">Blancpain</a>
          </li>
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">Pigaet</a>
          </li>
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">Rolex</a>
          </li>
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">Jaeger-LeCoultre</a>
          </li>
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">A. Lange & Söhne</a>
          </li>
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">A. Lange & Söhne</a>
          </li>
          <li class="alphabet__list-item text-16 alphabet__more">
            <a>+ Показать ещё 10</a>
          </li>
        </ul>
        <ul class="alphabet__list col-xl-3 col-md-4 col-12">
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">François-Paul Journe</a>
          </li>
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">Patek Philippe</a>
          </li>
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">Vacheron Constantin</a>
          </li>
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">Blancpain</a>
          </li>
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">Pigaet</a>
          </li>
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">Rolex</a>
          </li>
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">Jaeger-LeCoultre</a>
          </li>
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">A. Lange & Söhne</a>
          </li>
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">A. Lange & Söhne</a>
          </li>
        </ul>
        <ul class="alphabet__list col-xl-3 col-md-4 col-12">
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">François-Paul Journe</a>
          </li>
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">Patek Philippe</a>
          </li>
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">Vacheron Constantin</a>
          </li>
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">Blancpain</a>
          </li>
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">Pigaet</a>
          </li>
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">Rolex</a>
          </li>
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">Jaeger-LeCoultre</a>
          </li>
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">A. Lange & Söhne</a>
          </li>
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">A. Lange & Söhne</a>
          </li>
        </ul>
        <ul class="alphabet__list col-xl-3 col-md-4 col-12">
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">François-Paul Journe</a>
          </li>
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">Patek Philippe</a>
          </li>
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">Vacheron Constantin</a>
          </li>
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">Blancpain</a>
          </li>
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">Pigaet</a>
          </li>
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">Rolex</a>
          </li>
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">Jaeger-LeCoultre</a>
          </li>
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">A. Lange & Söhne</a>
          </li>
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">A. Lange & Söhne</a>
          </li>
        </ul>
      </div>
      <div class="alphabet__title offset-lg-1 col-md-2 col-12"><p>B</p></div>
      <div
        class="alphabet__list-wrapper row offset-lg-3 col-xl-8 col-md-10 col-12"
      >
        <ul class="alphabet__list col-xl-3 col-md-4 col-12">
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">François-Paul Journe</a>
          </li>
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">Patek Philippe</a>
          </li>
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">Vacheron Constantin</a>
          </li>
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">Blancpain</a>
          </li>
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">Pigaet</a>
          </li>
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">Rolex</a>
          </li>
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">Jaeger-LeCoultre</a>
          </li>
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">A. Lange & Söhne</a>
          </li>
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">A. Lange & Söhne</a>
          </li>
        </ul>
        <ul class="alphabet__list col-xl-3 col-md-4 col-12">
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">François-Paul Journe</a>
          </li>
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">Patek Philippe</a>
          </li>
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">Vacheron Constantin</a>
          </li>
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">Blancpain</a>
          </li>
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">Pigaet</a>
          </li>
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">Rolex</a>
          </li>
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">Jaeger-LeCoultre</a>
          </li>
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">A. Lange & Söhne</a>
          </li>
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">A. Lange & Söhne</a>
          </li>
        </ul>
        <ul class="alphabet__list col-xl-3 col-md-4 col-12">
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">François-Paul Journe</a>
          </li>
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">Patek Philippe</a>
          </li>
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">Vacheron Constantin</a>
          </li>
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">Blancpain</a>
          </li>
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">Pigaet</a>
          </li>
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">Rolex</a>
          </li>
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">Jaeger-LeCoultre</a>
          </li>
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">A. Lange & Söhne</a>
          </li>
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">A. Lange & Söhne</a>
          </li>
        </ul>
        <ul class="alphabet__list col-xl-3 col-md-4 col-12">
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">François-Paul Journe</a>
          </li>
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">Patek Philippe</a>
          </li>
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">Vacheron Constantin</a>
          </li>
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">Blancpain</a>
          </li>
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">Pigaet</a>
          </li>
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">Rolex</a>
          </li>
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">Jaeger-LeCoultre</a>
          </li>
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">A. Lange & Söhne</a>
          </li>
          <li class="alphabet__list-item text-16">
            <a href="#" class="alphabet__link">A. Lange & Söhne</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="alphabet__more-wrapper row">
      <div class="offset-md-1 col-md-10 col-12">
        <button
          class="alphabet__more button button--block button--neutral button--caret"
          type="button"
        >
          Показать ещё
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import './s-alphabet.scss'

  const letters = ref(['0-9', ...'abcdefghijklmnopqrstuvwxyz'.split('')])
</script>
