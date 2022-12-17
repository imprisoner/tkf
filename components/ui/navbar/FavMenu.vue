<template>
  <div class="fav-menu">
    <button class="button button-square" type="button">
      <base-icon name="heart-fill"></base-icon>
    </button>
    <div class="fav-menu__list">
      <div class="fav-menu__search input-group">
        <div class="fav-menu__search-icon">
          <base-icon name="heart-fill"></base-icon>
        </div>
        <input class="input-group__field" type="text" />
      </div>
      <div class="fav-menu__item">
        <span>Submariner</span>
        <base-icon name="heart-fill"></base-icon>
      </div>
      <div class="fav-menu__item">
        <span>Submariner</span>
        <base-icon name="heart-fill"></base-icon>
      </div>
      <div class="fav-menu__item">
        <span>Submariner</span>
        <base-icon name="heart-fill"></base-icon>
      </div>
      <div class="fav-menu__item">
        <span>Submariner</span>
        <base-icon name="heart-fill"></base-icon>
      </div>
      <div class="fav-menu__item">
        <span>Submariner</span>
        <base-icon name="heart-fill"></base-icon>
      </div>
      <div class="fav-menu__item">
        <span>Submariner</span>
        <base-icon name="heart-fill"></base-icon>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss">
  .fav-menu {
    position: relative;

    .btn {
      svg {
        fill: black;
      }
    }

    &__list {
      display: none;
      position: absolute;
      max-height: 330px;
      overflow-y: scroll;
      top: 84px;
      right: -24px;
      background-color: white;
      @include shadow;
      z-index: 5;
    }

    &__search {
      margin: 14px;

      .input-group__field {
        border: 1px solid $neutral;
        background-color: white;
        padding-left: 38px;
      }
    }

    &__search-icon {
      position: absolute;
      left: 14px;
      top: 24px;
      width: 14px;
      height: 14px;
      color: $light-gray;
    }

    &__item {
      padding: 20px 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 14px;
      line-height: 21px;

      svg {
        width: 18px;
        height: 18px;
        fill: black;
      }

      &:hover {
        cursor: pointer;
        background-color: $neutral;
      }
    }

    &.show {
      .btn {
        background-color: white;
      }
    }

    &.show &__list {
      display: block;
    }
  }
</style>
