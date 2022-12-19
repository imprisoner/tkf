import { META_TAGS } from '@/constants/seo'

export default function (routeName) {
  const tags = META_TAGS[routeName]

  if (!tags) {
    return {}
  }

  return {
    title: tags.title,
    meta: [
      {
        name: "description",
        content: tags.description,
      },
      {
        name: "keywords",
        content: tags.keywords,
      },
      {
        property: "og:description",
        content: tags.ogDescription,
      },
      {
        property: "og:image",
        content: tags.ogImage ? new URL(tags.ogImage).pathname : '',
      },
      {
        property: "og:title",
        content: tags.ogTitle,
      },
    ]
  }
} 
