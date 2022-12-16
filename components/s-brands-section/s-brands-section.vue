<template>
    <div class="brands-section container">
        <div class="row">
            <div class="offset-lg-1 col-lg-10 col-12">
                <div class="brands-section__wall row">
                    <a class="card card-square col-lg-3 col-6" href="#">
                        <img class="img-resp" src="/img/brand_rolex.png" />
                    </a>
                    <a class="card card-square col-lg-3 col-6" href="#">
                      <img class="img-resp" src="/img/brand_rolex.png" />
                    </a>
                    <a class="card card-square col-lg-3 col-6" href="#">
                      <img class="img-resp" src="/img/brand_rolex.png" />
                    </a>
                    <a class="card card-square col-lg-3 col-6" href="#">
                      <img class="img-resp" src="/img/brand_rolex.png" />
                    </a>
                    <a class="card card-square col-lg-3 col-6" href="#">
                      <img class="img-resp" src="/img/brand_rolex.png" />
                    </a>
                    <a class="card card-square col-lg-3 col-6" href="#">
                      <img class="img-resp" src="/img/brand_rolex.png" />
                    </a>
                    <a class="card card-square col-lg-3 col-6" href="#">
                      <img class="img-resp" src="/img/brand_rolex.png" />
                    </a>
                    <a class="card card-square col-lg-3 col-6" href="#">
                      <img class="img-resp" src="/img/brand_rolex.png" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  setup () {


    return {}
  }
}
</script>

<style lang="scss" scoped>
.brands-section {
  &__wall {
    row-gap: 24px;
  }

  .card-square {
    position: relative;
    padding: unset;
    box-shadow: 0px 7px 13px rgba(0, 0, 0, 0.05);

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
