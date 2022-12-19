import { META_TAGS } from '@/constants/seo'

export default function (routeName) {
  const tags = META_TAGS[routeName]

  if (!tags) {
    return {}
  }

  return {
    title: tags.title,
    meta: tags.meta ? [...tags.meta] : []
  }
} 
