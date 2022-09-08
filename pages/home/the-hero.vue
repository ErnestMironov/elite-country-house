<template>
  <div class="hero">
    <div v-swiper:mySwiper="swiperOptions" class="hero__slider">
      <div class="swiper-wrapper">
        <div
          v-for="banner in data.images"
          :key="banner"
          class="swiper-slide hero__slide"
        >
          <img
            class="h-[44rem]"
            :src="`http://185.46.10.102:1337${banner.url}`"
          />
        </div>
      </div>
    </div>

    <div class="hero__text-block">
      <h2 class="hero__title">
        {{ data.title }}
      </h2>
      <p class="hero__description">
        {{ data.description }}
      </p>
      <button class="btn hero__btn" @click="goToTheLink('#services')">
        Ознакомиться с услугами
      </button>
    </div>
  </div>
</template>

<script>
import { directive } from 'vue-awesome-swiper'

import firstImg from '~/assets/images/mock/home-page_hero_1.jpg'
import secondImg from '~/assets/images/mock/home-page_hero_2.jpg'

const scrollIntoView = require('scroll-into-view')

export default {
  name: 'TheHero',
  directives: {
    swiper: directive,
  },
  props: ['data'],

  data() {
    return {
      banners: [firstImg, secondImg],
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
.hero {
  position: relative;

  &__slide {
    width: auto;
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
  }

  &__title {
    font-family: 'Cormorant';
    font-weight: 500;
    font-size: 3rem;
    line-height: 3.75rem;
    max-width: 31.25rem;
  }

  &__description {
    margin-top: 1.75rem;
    font-size: 1.125rem;
    line-height: 1.75rem;
  }

  &__btn {
    width: 19.375rem;
    margin-top: 3.75rem;
  }
}
</style>
