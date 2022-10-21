<template>
  <div class="hero">
    <div v-swiper:mySwiper="swiperOptions" class="hero__slider">
      <div class="swiper-wrapper">
        <div
          v-for="banner in data.images"
          :key="banner.id"
          class="swiper-slide hero__slide"
        >
          <img :src="`https://admin.hedonistclub.ru${banner.url}`" />
        </div>
      </div>
    </div>

    <div class="hero__text-block">
      <h2 class="hero__title">
        {{ data.title }}
      </h2>
      <p class="hero__description">
        {{ data?.description }}
      </p>
      <button class="btn hero__btn" @click="goToTheLink('#services')">
        Ознакомиться с услугами
      </button>
    </div>
  </div>
</template>

<script>
import { directive } from 'vue-awesome-swiper'

const scrollIntoView = require('scroll-into-view')

export default {
  name: 'TheHero',
  directives: {
    swiper: directive,
  },
  props: ['data'],

  data() {
    return {
      swiperOptions: {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        autoplay: true,
      },
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
@import '@/assets/styles/scss/mixins';

.hero {
  position: relative;

  &__slide {
    width: auto;
    height: 44rem;

    img {
      height: 100%;
    }

    @include tablet {
      height: 378px;
    }
  }

  &__slider {
    width: 100%;
  }

  &__text-block {
    z-index: 100;
    width: 50%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: rgba(255, 253, 252, 0.9);
    padding: 1rem 6.9375rem 1rem 3.75rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    @include mobile {
      position: relative;
      width: 100%;
    }
  }

  &__title {
    font-family: 'Cormorant';
    font-weight: 500;
    font-size: 3rem;
    line-height: 3.75rem;
    max-width: 31.25rem;

    @include tablet {
      font-size: 36px;
      line-height: 48px;
      max-width: 100%;
      margin-top: 24px;
    }
  }

  &__description {
    margin-top: 1.75rem;
    font-size: 1.125rem;
    line-height: 1.75rem;

    @include tablet {
      font-size: 14px;
      line-height: 24px;
      margin-top: 12px;
    }
  }

  &__btn {
    width: 19.375rem;
    margin-top: 3.75rem;

    @include tablet {
      width: 310px;
    }
  }
}
</style>
