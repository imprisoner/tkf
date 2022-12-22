import { META_TAGS, DEFAULT_TAGS } from '@/constants/seo'
import { getLotDynamicSeo } from "~/utils/seo";

export default function (routeName,options) {
  const tags = options ? getLotDynamicSeo({...options}) : META_TAGS[routeName]

  if (!tags) {
    return {...DEFAULT_TAGS}
  }

  return {
    title: tags.title || DEFAULT_TAGS.title,
    meta: tags.meta ? [...DEFAULT_TAGS.meta, ...tags.meta] : DEFAULT_TAGS.meta
  }
} 
