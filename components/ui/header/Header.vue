<template>
  <header ref="header" class="header container">
    <template v-if="isDesktop">
      <NuxtLink class="logo" href="/"><b>Time</b>Keeper</NuxtLink>
      <!--  -->
      <ui-header-search></ui-header-search>
      <!--  -->
    </template>
    <div v-else class="header__mobile">
      <ui-socials class="header__socials" :socials="contacts?.socials"></ui-socials>
      <div v-if="phone" class="call-us">
        <base-icon name="phone" class="call-us__icon"></base-icon>
        <a :href="`tel:+${phone}`">{{ phone }}</a>
      </div>
    </div>
  </header>
</template>

<script setup>
  import {isDesktop} from "@/utils/queries";
  import { getContacts } from '@/api/getContacts';

  const contacts = await getContacts();

  const phone = computed(() => {
    return contacts.value?.phones?.[0]
  })

  const header = ref()
  onMounted(() => {
    useHeaderHeight().value = header.value.offsetHeight
  })
</script>

<style lang="scss">
  .header {
    padding: 24px;
    display: flex;
    align-items: center;
    gap: 30px;

    &__right {
      display: flex;
      align-items: center;
      margin-left: auto;
      gap: 5px;
    }

    &__bottom {
      padding: 0 28px;
    }

    &__nav {
      background-color: #f8f8f8;
    }

    // mobile only
    @include max-width('lg') {
      padding: 10px 12px;
      background-color: $light-gray;
      height: 40px;
    }

    &__socials {
      color: $stripe;

      @include max-width('lg') {
        gap: 20px;
      }
    }

    &__mobile {
      display: none;

      @include max-width('lg') {
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: space-between;
      }
    }
  }

  .call-us {
    display: flex;
    align-items: center;
    gap: 4px;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    color: $stripe;
    &__icon {
      width: 18px;
      height: 18px;
      @include max-width('lg') {
        width: 12px;
        height: 12px;
      }
    }
  }
</style>
