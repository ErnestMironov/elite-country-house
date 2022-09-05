<template>
  <footer class="footer">
    <div class="flex justify-between items-center">
      <div class="flex">
        <img class="logo" src="~/assets/icons/logo_white.svg" alt="" />
        <ul class="menu">
          <li v-for="item in menu" :key="item.label" class="menu__item">
            <a @click="goToTheLink(item.link)">{{ item.label }}</a>
          </li>
        </ul>
      </div>
      <ul class="flex">
        <li class="h-9 w-9 bg-white mr-6"></li>
        <li class="h-9 w-9 bg-white mr-6"></li>
        <li class="h-9 w-9 bg-white mr-6"></li>
        <li class="h-9 w-9 bg-white mr-6"></li>
        <li class="h-9 w-9 bg-white"></li>
      </ul>
    </div>
    <div class="flex mt-8 ml-[14rem]">
      <NuxtLink to="/" class="footer__link">
        Пользовательское соглашение
      </NuxtLink>
      <NuxtLink to="/" class="footer__link">
        Политика конфиденциальности
      </NuxtLink>
    </div>
  </footer>
</template>

<script>
const scrollIntoView = require('scroll-into-view')

export default {
  data() {
    return {
      menu: [
        { label: 'Бани и сауны', link: '#bathhouses' },
        { label: 'Апартаменты', link: '#apartments' },
        { label: 'Гостевые дома', link: '#guesthouses' },
        { label: 'О нас', link: '#advantages' },
      ],
    }
  },
  methods: {
    goToTheLink(link) {
      if ($nuxt.$route.path === '/') {
        scrollIntoView(document.querySelector(link))
        return
      }

      this.$nuxt.$router.push(`/${link}`)
    },
  },
}
</script>

<style lang="scss" scoped>
.footer {
  padding: 1.9375rem 4rem 3rem;
  background: var(--text-color);
  color: #fffdfc;

  &__link {
    font-weight: 300;
    text-decoration: none;
    font-size: 1.125rem;

    &:not(:last-child) {
      margin-right: 5.375rem;
    }
  }
}
.logo {
  width: 10.625rem;
}

.menu {
  display: flex;
  align-items: center;
  margin-left: 3.3125rem;

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
