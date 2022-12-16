<template>
  <main id="brands-page" class="catalog">
      <section class="catalog-top container">
          <div class="row">
              <div class="catalog-top__breadcrumbs offset-lg-1 col-lg-10 col-12">
                <Breadcrumbs />
              </div>
              <div class="catalog-top__title offset-lg-1 col-lg-10 col-12">
                  <h2>Все бренды швейцарских часов</h2>
                  <span class="text-16">найдено 98 товаров</span>
              </div>
          </div>
      </section>
      <SBrandsSection/>
      <SAlphabet />
  </main>
</template>

<script setup>

</script>

<style lang="scss" scoped>
#brands-page {
  .catalog-top {
    margin-bottom: 72px;
  }

  .brands-section {
    margin-bottom: 64px;
  }

  @include max-width('md') {
    .catalog-top {
      margin-bottom: 24px;
    }
  }

  .alphabet {
    margin-bottom: 165px;

    @include max-width('md') {
      margin-bottom: 120px;
    }
  }
}
</style>
