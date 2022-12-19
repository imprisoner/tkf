<template>
    <main id="goods-page" class="catalog">
        <section class="catalog-top container">
            <div class="row">
                <div class="catalog-top__breadcrumbs offset-lg-1 col-lg-10 col-12">
                    <Breadcrumbs/>
                </div>
                <div class="catalog-top__title offset-lg-1 col-lg-10 col-12">
                    <h2>Rolex</h2>
                    <span class="text-16">найдено 98 товаров</span>
                    <button class="button" type="button">
                        <span>Rolex</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M18.7 17.3C19.1 17.7 19.1 18.3 18.7 18.7C18.5 18.9 18.3 19 18 19C17.7 19 17.5 18.9 17.3 18.7L12 13.4L6.7 18.7C6.5 18.9 6.3 19 6 19C5.7 19 5.5 18.9 5.3 18.7C4.9 18.3 4.9 17.7 5.3 17.3L10.6 12L5.3 6.7C4.9 6.3 4.9 5.7 5.3 5.3C5.7 4.9 6.3 4.9 6.7 5.3L12 10.6L17.3 5.3C17.7 4.9 18.3 4.9 18.7 5.3C19.1 5.7 19.1 6.3 18.7 6.7L13.4 12L18.7 17.3Z"
                                fill="currentColor"
                            ></path>
                        </svg>
                    </button>
                    <div class="link-btn">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M7 2H17C18.7 2 20 3.3 19.9 5V21C19.9 21.4 19.7 21.7 19.4 21.9C19.2 22 19.1 22 18.9 22C18.7 22 18.5 21.9 18.3 21.8L11.9 17.2L5.5 21.8C5.2 22 4.8 22.1 4.5 21.9C4.2 21.7 4 21.4 4 21V5C4 3.3 5.3 2 7 2ZM12.6 15.2L18 19.1V5C18 4.4 17.6 4 17 4H7C6.4 4 6 4.4 6 5V19.1L11.4 15.2C11.6 15.1 11.8 15 12 15C12.2 15 12.4 15.1 12.6 15.2Z"
                                fill="black"
                            ></path>
                        </svg>
                        <span>Сохранить запрос</span>
                    </div>
                </div>
            </div>
        </section>

        <SGoodSection />

        <!-- <SAdsSection :banners="banners"/> -->

        <div class="container brands-title">
            <div class="row">
                <div class="offset-lg-1 col-lg-12"><h2>Все бренды швейцарских часов</h2></div>
            </div>
        </div>

        <SAlphabet />

        <div class="container cats-title">
            <div class="row">
                <div class="offset-lg-1 col-lg-12"><h2>Категории швейцарских часов</h2></div>
            </div>
        </div>

        <SCategoriesSection />

        <SDescrSection
          :title="titleDescriptionSection"
          :text="textDescriptionSection"
        />
    </main>
</template>

<script setup>
    // const banners = [
    //     {
    //         title: 'Лучшие предложения 1',
    //         description: 'People also search for this items',
    //         link: '#',
    //         image: '/img/watches_1.png',
    //     },
    //     {
    //         title: 'Лучшие предложения 2',
    //         description: 'People also search for this items',
    //         link: '#',
    //         image: '/img/watches_2.png',
    //     },
    // ]
    const titleDescriptionSection = 'Описание раздела'
    const textDescriptionSection = 'Учитывая ключевые сценарии поведения, повышение уровня гражданского сознания требует от нас анализа системы массового участия. Учитывая ключевые сценарии поведения, повышение уровня гражданского сознания требует от нас анализа системы массового участия. Учитывая ключевые сценарии поведения, повышение уровня гражданского сознания требует от нас анализа системы массового участия.'
</script>

<style lang="scss" scoped>
#goods-page {
  .goods-section {
    margin-bottom: 200px;
  }

  .ads-section {
    margin-bottom: 226px;
  }

  .brands-title {
    margin-bottom: 72px;
  }

  .cats-title {
    margin-bottom: 80px;
  }

  .alphabet {
    margin-bottom: 224px;
  }

  .categories-section {
    margin-bottom: 200px;
  }

  .descr-section {
    margin-bottom: 152px;
  }

  @include max-width('md') {
    .goods-section, .ads-section, .alphabet, .categories-section {
      margin-bottom: 64px;
    }

    .brands-title, .cats-title {
      margin-bottom: 24px;
    }
  }
}
</style>
