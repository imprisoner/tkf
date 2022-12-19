<template>
    <main id="goods-page" class="catalog">
        <SCatalogTop />

        <SGoodSection :show-filters="true"/>

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
