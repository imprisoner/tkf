<template>
  <ul class="a-breadcrumbs">
    <li class="a-breadcrumbs__item">
      <nuxt-link to="/">
        <div class="a-breadcrumbs__item-icon">
          <base-icon name="home"></base-icon>
        </div>
      </nuxt-link>
    </li>
    <li
      v-for="(breadcrumb, id) in breadcrumbs"
      :key="id"
      class="a-breadcrumbs__item"
    >
      <nuxt-link :to="breadcrumb.route"> {{ breadcrumb.text }} </nuxt-link>
    </li>
  </ul>
</template>

<script setup>
  import './a-breadcrumbs.scss'
  const routes = useRoute().path.split('/')
  let url = '/'
  const breadcrumbs = []

  for (let i = 0; i < routes.length; i++) {
    if (routes[i] !== '') {
      url += `${routes[i]}/`
      breadcrumbs.push({
        text: getText(routes[i]),
        route: url,
      })
    }
  }

  function getText(breadcrumb) {
    const route = breadcrumb
    let text = breadcrumb

    switch (true) {
      case route === 'watches':
        text = 'Швейцарские часы'
        break
      case route === 'jewelry':
        text = 'Ювелирные украшения'
        break
      case route === 'categories':
        text = 'Категории'
        break
      case route === 'contacts':
        text = 'Контакты'
        break
      case route === 'search':
        text = 'Поиск'
        break
      case route === 'category':
        text = 'Категория'
        break
      case route === 'brands':
        text = 'Бренды'
        break
      case route === 'brand':
        text = 'Бренд'
        break
      default:
        text = route
        break
    }

    return text
  }
</script>
