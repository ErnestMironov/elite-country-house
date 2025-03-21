<template>
  <div class="hero">
    <client-only>
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
      <div class="nav hero__nav">
        <button id="heroSLiderPrev" class="nav__btn">
          <img src="~/assets/icons/arrow_left_dark.svg" alt="назад" />
        </button>
        <button id="heroSliderNext" class="nav__btn">
          <img src="~/assets/icons/arrow_right_dark.svg" alt="вперед" />
        </button>
      </div>
    </client-only>
    <div class="hero__text-block">
      <h2
        class="hero__title wow animate__animated animate__fadeInLeft"
        data-wow-duration=".5s"
      >
        {{ data.title }}
      </h2>
      <p
        class="hero__description wow animate__animated animate__fadeInLeft"
        data-wow-delay=".2s"
        data-wow-duration=".5s"
      >
        {{ data?.description }}
      </p>
      <button
        class="btn hero__btn wow animate__animated animate__fadeInUp"
        data-wow-delay=".2s"
        data-wow-duration=".1s"
        @click="goToTheLink('#services')"
      >
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
        navigation: {
          prevEl: '#heroSLiderPrev',
          nextEl: '#heroSliderNext',
        },
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

  @include desktop-small {
    min-height: 44rem;
  }

  &__slide {
    width: auto;
    height: 100%;

    img {
      height: 100%;
    }
  }

  &__slider {
    height: 44rem;
    width: 100%;

    @include tablet {
      height: 378px;
    }
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
    max-height: 40%;
    overflow: hidden;
    text-overflow: ellipsis;

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

  &__nav {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 10;

    button {
      background: rgba(255, 253, 252, 0.9);
    }
  }
}
</style>
