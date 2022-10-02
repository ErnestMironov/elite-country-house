<template>
  <footer class="footer">
    <div class="footer__top">
      <div class="footer__menu">
        <img class="logo" src="~/assets/icons/logo_white.svg" alt="" />
        <ul class="menu">
          <li v-for="item in menu" :key="item.label" class="menu__item">
            <a @click="goToTheLink(item.link)">{{ item.label }}</a>
          </li>
        </ul>
      </div>
      <ul class="footer__soc">
        <li v-for="social of socials" :key="social.id">
          <a :href="social?.link" target="_blank">
            <img
              :src="`http://185.46.10.102:1337${social?.icon?.url}`"
              alt=""
            />
          </a>
        </li>
      </ul>
    </div>
    <div class="footer__bottom">
      <a
        :href="`http://185.46.10.102:1337${userAgreement?.file?.url}`"
        target="_blank"
        class="footer__link"
      >
        Пользовательское соглашение
      </a>
      <a
        :href="`http://185.46.10.102:1337${privacyPolicy?.file?.url}`"
        target="_blank"
        class="footer__link"
      >
        Политика конфиденциальности
      </a>
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
      socials: [],
      userAgreement: null,
      privacyPolicy: null,
    }
  },
  async fetch() {
    this.socials = (
      await this.$http.$get(`social-medias?populate=deep,10`)
    ).data

    this.userAgreement = (
      await this.$http.$get(`user-agreement?populate=deep,10`)
    ).data

    this.privacyPolicy = (
      await this.$http.$get(`privacy-policy?populate=deep,10`)
    ).data
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
@import '@/assets/styles/scss/mixins';

.footer {
  padding: 1.9375rem 4rem 3rem;
  background: var(--text-color);
  color: #fffdfc;

  @include tablet {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 15px;
  }

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @include tablet {
      flex-direction: column;
    }
  }

  &__menu {
    display: flex;

    @include tablet {
      flex-direction: column;
      align-items: center;
    }
  }

  &__link {
    font-weight: 300;
    text-decoration: none;
    font-size: 1.125rem;

    @include tablet {
      font-weight: 450;
      font-size: 18px;
      line-height: 28px;
    }

    &:not(:last-child) {
      margin-right: 5.375rem;

      @include tablet {
        margin-right: 0;
      }
    }
  }

  &__bottom {
    display: flex;
    margin-top: 8px;
    margin-left: 14rem;

    @include tablet {
      flex-direction: column;
      margin-top: 40px;
      margin-left: 0;

      a {
        font-weight: 300;
        font-size: 18px;
        line-height: 28px;
      }
    }
  }

  &__soc {
    display: flex;

    @include tablet {
      margin-top: 48px;
    }

    li {
      height: 2.25rem;
      width: 2.25rem;

      @include tablet {
        height: 36px;
        width: 36px;
      }

      &:not(:last-child) {
        margin-right: 1.5rem;

        @include tablet {
          margin-right: 24px;
        }
      }
    }
  }
}
.logo {
  width: 10.625rem;

  @include tablet {
    width: 170px;
  }
}

.menu {
  display: flex;
  align-items: center;
  margin-left: 3.3125rem;

  @include tablet {
    flex-direction: column;
    margin-top: 60px;
    margin-left: 0;
  }

  &__item {
    font-size: 1.125rem;

    @include tablet {
      font-weight: 450;
      font-size: 18px;
      line-height: 28px;
    }

    &:not(:last-of-type) {
      margin-right: 3.75rem;

      @include tablet {
        margin-bottom: 24px;
        margin-right: 0;
      }
    }

    a {
      color: inherit;
      text-decoration: none;
    }
  }
}
</style>
