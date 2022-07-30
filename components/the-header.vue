<template>
  <header class="header">
    <img class="logo" src="~/assets/icons/logo_black.svg" alt="" />
    <ul class="menu">
      <li v-for="item in menu" :key="item.label" class="menu__item">
        <nuxt-link :to="item.link">{{ item.label }}</nuxt-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        { label: 'Бани и сауны', link: '/' },
        { label: 'Апартаменты', link: '/' },
        { label: 'Гостевые дома', link: '/' },
        { label: 'О нас', link: '/' },
        { label: 'Связаться с нами', link: '/' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.header {
  padding: 0.8125rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  width: 10.625rem;
}

.menu {
  display: flex;
  align-items: center;

  &::after {
    content: '';
    width: 3.625rem;
    margin-left: 0.75rem;
    height: 1px;
    background: currentColor;
  }

  &__item {
    font-size: 1.125rem;

    &:not(:last-of-type) {
      margin-right: 3.75rem;
    }

    a {
      color: inherit;
      text-decoration: none;
    }
  }
}
</style>
