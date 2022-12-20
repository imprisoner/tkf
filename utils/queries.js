import { useMediaQuery } from '@vueuse/core'
import {reactive} from "vue";

export const isDesktop = reactive(useMediaQuery('(min-width: 1024px)'))
export const isMobile = reactive(useMediaQuery('(max-width: 767px)'))
export const isTablet = reactive(useMediaQuery('(min-width: 768px) and ( max-width: 1023px)'))
