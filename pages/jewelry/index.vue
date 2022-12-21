<template>
    <main id="goods-page" class="catalog">
        <SCatalogTop :title="titleCatalogTop" />

        <SGoodSection :show-filters="true"/>

        <SAdsSection :banners="banners"/>

        <div class="container brands-title">
            <div class="row">
                <div class="offset-lg-1 col-lg-12">
                    <h2>Все бренды ювелирных украшений</h2>
                </div>
            </div>
        </div>

        <SAlphabet :brands-items="brandsItems"/>

        <div class="container cats-title">
            <div class="row">
                <div class="offset-lg-1 col-lg-12">
                    <h2>Категории ювелирных украшений</h2>
                </div>
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
    import { getBrands } from '@/api/getBrands'
    import { getBanners } from '@/api/getBanners';

    const titleCatalogTop = "Ювелирные украшения";
    const titleDescriptionSection = 'Описание раздела'
    const textDescriptionSection = 'Учитывая ключевые сценарии поведения, повышение уровня гражданского сознания требует от нас анализа системы массового участия. Учитывая ключевые сценарии поведения, повышение уровня гражданского сознания требует от нас анализа системы массового участия. Учитывая ключевые сценарии поведения, повышение уровня гражданского сознания требует от нас анализа системы массового участия.'
    const banners = [];

    await getBanners({ page: 'WATCH' }).then((response) => {
      Object.entries(response._value).forEach((banner) => {
        banners.push(banner);
      });
    });

    const brandsCards = await getBrands({ isShowOnMain: false, brandType: 'JEWELRY' })
    const brandsItems = brandsCards
</script>

<style lang="scss" scoped>
#goods-page {
  .goods-section {
    margin-bottom: 200px;
  }

  .s-ads-section {
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
    .goods-section, .s-ads-section, .alphabet, .categories-section {
      margin-bottom: 64px;
    }

    .brands-title, .cats-title {
      margin-bottom: 24px;
    }
  }
}
</style>
