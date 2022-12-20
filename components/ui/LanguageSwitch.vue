<template>
  <button class="change-lang-button" type="button" @click="changeLang()">
    <div class="change-lang-button__prepend-icon">
    <slot name="prependIcon" :next-lang="nextLanguage">
      <base-icon name="globe"></base-icon>
    </slot>
    </div>
    {{nextLanguage}}
  </button>
</template>

<script setup>
import {computed, ref} from "vue";

const LANGUAGES=['Russian','English']

const currentLanguage=ref('Russian')

function changeLang(){
  currentLanguage.value = nextLanguage.value
}
const nextLanguage = computed(() => {
  return LANGUAGES.find(lang=>lang!==currentLanguage.value);
})
</script>
<style lang="scss" scoped>
.change-lang-button{
  display: flex;
  background: transparent;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  &__prepend-icon{
    width: 20px;
    height: 20px;
  }
}
</style>
