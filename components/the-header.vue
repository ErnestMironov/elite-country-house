<template>
  <header class="header container">
    <nuxt-link to="/">
      <img class="logo" src="~/assets/icons/logo_black.svg" alt="" />
    </nuxt-link>
    <nav>
      <ul class="menu">
        <li
          v-for="item in menu"
          :key="item.label"
          class="menu__item wow animate__animated animate__pulse animate__faster"
        >
          <a @click="goToTheLink(item.link)">{{ item.label }}</a>
        </li>
      </ul>
    </nav>
    <img
      class="burger"
      src="~/assets/icons/burger.svg"
      alt=""
      @click="openMenu()"
    />
    <div :class="['mobile-menu', { active: isMobileMenuOpen }]">
      <img src="~/assets/icons/logo_white.svg" alt="" width="200" />
      <nav>
        <ul>
          <li v-for="item in menu" :key="item.label" class="mobile-menu__item">
            <a @click="goToTheLink(item.link)">{{ item.label }}</a>
          </li>
        </ul>
      </nav>
      <img src="~/assets/icons/close_menu.svg" alt="" @click="closeMenu()" />
      <ul class="flex flex-row justify-between mt-[78px] w-[290px]">
        <li v-for="social of socials" :key="social.id">
          <a :href="social?.link" target="_blank">
            <img
              :src="`https://admin.hedonistclub.ru${social?.icon?.url}`"
              alt=""
            />
          </a>
        </li>
      </ul>
      <a
        :href="`https://admin.hedonistclub.ru${userAgreement?.file?.url}`"
        target="_blank"
        class="mobile-menu__link"
        >Пользовательское соглашение</a
      >
    </div>
  </header>
</template>

<script>
const scrollIntoView = require('scroll-into-view')

export default {
  data() {
    return {
      isMobileMenuOpen: false,
      menu: [
        { label: 'Шале', link: '#guesthouses' },
        { label: 'Бани и сауны', link: '#bathhouses' },
        { label: 'Апартаменты', link: '#apartments' },
        { label: 'О нас', link: '#advantages' },
        { label: 'Связаться с нами', link: '#contacts' },
      ],
      socials: [],
      userAgreement: null,
    }
  },
  async fetch() {
    this.socials = (
      await this.$http.$get(`social-medias?populate=deep,10`)
    ).data

    this.userAgreement = (
      await this.$http.$get(`user-agreement?populate=deep,10`)
    ).data
  },
  mounted() {
    new WOW().init()
  },
  methods: {
    closeMenu() {
      this.isMobileMenuOpen = false
    },
    openMenu() {
      this.isMobileMenuOpen = true
    },
    goToTheLink(link) {
      this.closeMenu()
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
@import '@/assets/styles/scss/mixins.scss';

.header {
  padding-top: 0.8125rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @include mobile {
    padding-top: 8px;
    padding-bottom: 8px;
  }
}
.logo {
  width: 10.625rem;

  @include mobile {
    height: 40px;
    width: auto;
  }
}

.menu {
  display: flex;
  align-items: center;

  @include mobile {
    display: none;
  }

  &:hover::after {
    transform: scaleX(0.1);
  }

  &::after {
    content: '';
    width: 3.625rem;
    margin-left: 0.75rem;
    height: 1px;
    background: currentColor;
    transform-origin: left;
    transition: all ease 0.3s;
  }

  &__item {
    font-size: 1.125rem;

    &:not(:last-of-type) {
      margin-right: 3.75rem;
    }

    a {
      color: inherit;
      text-decoration: none;
      position: relative;

      &:hover::after {
        transform: scaleX(1);
      }

      &::after {
        content: '';
        width: 100%;
        height: 1px;
        background: currentColor;
        display: block;
        transition: transform ease 0.3s;
        transform-origin: right;
        position: absolute;
        bottom: -0.25rem;
        left: 0;
        transform: scaleX(0);
      }
    }
  }
}

.mobile-menu {
  position: fixed;
  z-index: 200;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  overflow: auto;
  background: #282423;
  color: #fffdfc;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  display: none;
  padding-bottom: 44px;
  transition: transform cubic-bezier(0.165, 0.84, 0.44, 1) 0.3s;
  transform: translateY(-100%);

  &.active {
    transform: translateY(0);
  }

  @include mobile {
    display: flex;
  }

  nav ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 48px;
  }

  &__item {
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 36px;
  }

  &__link {
    font-weight: 300;
    font-size: 18px;
    line-height: 28px;
    margin-top: 48px;
  }
}
.burger {
  display: none;

  @include mobile {
    display: block;
  }
}
</style>
