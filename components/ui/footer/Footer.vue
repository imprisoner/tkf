<template>
  <footer class="footer">
    <div class="footer__top container">
      <div class="footer__top-wrapper row">
        <div
          v-if="!isMobile"
          class="footer__contacts col-md-3 col-xxl-2 offset-1"
        >
          <div class="logo footer__logo"><b>Time</b>Keeper</div>
          <a class="footer__button button button--black" href="#">Войти</a>
          <a class="footer__phone" href="tel:+79099999999">8 909 999 99 99</a>
        </div>
        <nav
          class="footer__nav col-md-8 col-xxl-7 offset-lg-5 col-md-10 offset-md-1"
        >
          <ui-footer-section
            v-for="(section, i) in sections"
            :key="i"
            :heading="section.title"
            :links="section.links"
          ></ui-footer-section>
        </nav>
        <div class="footer__socials-wrapper col-4 offset-lg-1 offset-md-8">
          <ui-socials class="footer__socials"></ui-socials>
        </div>
      </div>
    </div>
    <div class="footer__bottom container">
      <div class="footer__bottom-wrapper row">
        <nav class="footer__bottom-nav col-8 offset-1">
          <ul>
            <li><a href="#">Политика конфиденциальности</a></li>
            <li><a href="#">Оферта</a></li>
            <li><a href="#">Оферта</a></li>
          </ul>
        </nav>
        <p class="col-lg-2 offset-lg-10 col-3 offset-9 footer__copyright">
          TimeKeeper 2022
        </p>
      </div>
    </div>
  </footer>
</template>
<script setup>
  const { isMobile } = useDevice()

  const sections = reactive([
    {
      title: 'Для рекламодателей',
      links: [
        {
          text: 'Оферта',
          href: '#',
        },
        {
          text: 'Оферта',
          href: '#',
        },
        {
          text: 'Оферта',
          href: '#',
        },
        {
          text: 'Оферта',
          href: '#',
        },
      ],
    },
    {
      title: 'Для рекламодателей',
      links: [
        {
          text: 'Оферта',
          href: '#',
        },
        {
          text: 'Оферта',
          href: '#',
        },
        {
          text: 'Оферта',
          href: '#',
        },
        {
          text: 'Оферта',
          href: '#',
        },
      ],
    },
    {
      title: 'Для рекламодателей',
      links: [
        {
          text: 'Оферта',
          href: '#',
        },
        {
          text: 'Оферта',
          href: '#',
        },
        {
          text: 'Оферта',
          href: '#',
        },
        {
          text: 'Оферта',
          href: '#',
        },
      ],
    },
  ])
</script>

<style lang="scss" scoped>
  .footer {
    &__top {
      padding-top: 125px;
      padding-bottom: 80px;
      background-color: $neutral;

      @include max-width('xl') {
        padding-top: 60px;
        padding-bottom: 40px;
      }

      @include max-width('md') {
        background: white;
        padding: unset;
      }
    }

    &__top-wrapper {
      row-gap: 100px;

      @include max-width('md') {
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 30px;

        & > * {
          width: 100%;
        }
      }
    }

    &__logo {
      margin-bottom: 24px;
    }

    &__contacts {
      @include max-width('md') {
        display: none;
      }
    }

    &__button {
      margin-bottom: 32px;
    }
    &__phone {
      font-weight: 500;
      font-size: 17px;
      line-height: 28px;
    }

    &__nav {
      display: flex;
      gap: 35px;

      @include max-width('lg') {
        order: 1;
        justify-content: space-between;
      }

      @include max-width('md') {
        flex-direction: column;
        gap: unset;
        border-top: $border;
      }
    }

    &__socials-wrapper {
      display: flex;
      align-items: center;
      gap: 20px;

      @include max-width('lg') {
        align-items: baseline;
        padding-top: 20px;
        justify-content: center;
      }

      @include max-width('md') {
        padding: 0 60px;
      }
    }

    &__socials {
      @include max-width('md') {
        width: 100%;
        justify-content: space-between;
      }
    }

    &__socials .social__link {
      @include max-width('lg') {
        width: 14px;
        height: 14px;
      }
    }

    &__bottom {
      background-color: $light-gray;
      padding-top: 28px;
      padding-bottom: 28px;
      font-size: 14px;
      line-height: 17px;
      color: $input;

      @include max-width('md') {
        padding: 35px 14px 45px;
      }
    }

    &__bottom-wrapper {
      align-items: center;

      @include max-width('md') {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
    }

    &__bottom-nav {
      ul {
        display: flex;
        align-items: center;
        gap: 24px;

        @include max-width('md') {
          font-size: 11px;
          line-height: 16px;
          opacity: 0.41;
          gap: 4px;
        }
      }

      li {
        display: flex;
        align-items: center;
        gap: 24px;
        height: 28px;

        @include max-width('md') {
          gap: 4px;
          height: 16px;
        }
      }

      li:not(:last-child)::after {
        content: '';
        display: block;
        height: 100%;
        width: 1px;
        background-color: $input;
      }
    }

    &__copyright {
      @include max-width('md') {
        font-size: 12px;
        line-height: 16px;
        opacity: 0.41;
        color: black;
      }
    }
  }
</style>
