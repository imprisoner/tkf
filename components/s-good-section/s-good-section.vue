<template>
  <section class="goods-section container">
    <div class="row goods-section__top">
      <div class="goods-section__filters offset-lg-1 col-lg-10 col-md-12">
        <s-good-section-filters />
      </div>
      <div
        class="goods-section__sort col-md-4 offset-lg-1 col-xl-3 col-sm-6 col-12"
      >
        <form class="dropdown">
          <div class="dropdown__trigger input-group">
            <input
              class="button button--neutral"
              type="text"
              readonly
              value="Сначала новые"
            />
            <button
              class="button button--square button--gray icon-stroked"
              type="button"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.7 9.7L12.7 15.7C12.5 15.9 12.3 16 12 16C11.7 16 11.5 15.9 11.3 15.7L5.3 9.7C4.9 9.3 4.9 8.7 5.3 8.3C5.7 7.9 6.3 7.9 6.7 8.3L12 13.6L17.3 8.3C17.7 7.9 18.3 7.9 18.7 8.3C19.1 8.7 19.1 9.3 18.7 9.7Z"
                  fill="black"
                ></path>
              </svg>
            </button>
          </div>
          <ul class="dropdown__list">
            <li>
              <button class="button button--block" type="button">
                Сначала новые
              </button>
            </li>
            <li>
              <button class="button button--block" type="button">
                По возрастанию цены
              </button>
            </li>
            <li>
              <button class="button button--block" type="button">
                По убыванию цены
              </button>
            </li>
          </ul>
        </form>
      </div>
      <div class="goods-section__button-group offset-md-9 col-lg-2 col-md-3">
        <div class="button button--square button--black">30</div>
        <div class="button button--square button--gray">60</div>
        <div class="button button--square button--neutral">120</div>
      </div>
    </div>
    <div class="row goods-section__wall">
      <div class="goods-section__card col-md-4 col-lg-3 offset-lg-1 col-6">
        <m-product-card image="/img/watches_main_tr.png" />
      </div>
      <div class="goods-section__card-centered col-md-4 col-6">
        <m-product-card image="/img/watches_main_tr.png" />
      </div>
      <div class="goods-section__card col-md-4 col-lg-3 col-6">
        <m-product-card image="/img/watches_main_tr.png" />
      </div>
      <div class="goods-section__card col-md-4 col-lg-3 offset-lg-1 col-6">
        <m-product-card image="/img/watches_main_tr.png" />
      </div>
      <div class="goods-section__card-centered col-md-4 col-6">
        <m-product-card image="/img/watches_main_tr.png" />
      </div>
      <div class="goods-section__card col-md-4 col-lg-3 col-6">
        <m-product-card image="/img/watches_main_tr.png" />
      </div>
      <div class="goods-section__card col-md-4 col-lg-3 offset-lg-1 col-6">
        <m-product-card image="/img/watches_main_tr.png" />
      </div>
      <div class="goods-section__card-centered col-md-4 col-6">
        <m-product-card image="/img/watches_main_tr.png" />
      </div>
      <div class="goods-section__card col-md-4 col-lg-3 col-6">
        <m-product-card image="/img/watches_main_tr.png" />
      </div>
    </div>
    <div class="row goods-section__bottom">
      <div class="col-12 col-md-10 offset-md-1">
        <button
          class="button button--neutral button--block button--caret"
          type="button"
        >
          Показать ещё
        </button>
        <div class="pagination">
          <button class="button button--square" type="button">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.7 17.3C16.1 17.7 16.1 18.3 15.7 18.7C15.5 18.9 15.3 19 15 19C14.7 19 14.5 18.9 14.3 18.7L8.3 12.7C7.9 12.3 7.9 11.7 8.3 11.3L14.3 5.3C14.7 4.9 15.3 4.9 15.7 5.3C16.1 5.7 16.1 6.3 15.7 6.7L10.4 12L15.7 17.3Z"
                fill="black"
              ></path>
            </svg>
          </button>
          <button class="button button--square current" type="button">1</button>
          <button class="button button--square" type="button">2</button>
          <button class="button button--square" type="button">3</button>
          <button class="button button--square" type="button">...</button>
          <button class="button button--square" type="button">100</button>
          <button class="button button--square button--neutral" type="button">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.7 12.7L9.7 18.7C9.5 18.9 9.3 19 9 19C8.7 19 8.5 18.9 8.3 18.7C7.9 18.3 7.9 17.7 8.3 17.3L13.6 12L8.3 6.7C7.9 6.3 7.9 5.7 8.3 5.3C8.7 4.9 9.3 4.9 9.7 5.3L15.7 11.3C16.1 11.7 16.1 12.3 15.7 12.7Z"
                fill="black"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import './s-good-section.scss'
</script>
