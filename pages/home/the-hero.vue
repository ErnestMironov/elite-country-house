<template>
  <div class="hero">
    <div v-swiper:mySwiper="swiperOptions" class="hero__slider">
      <div class="swiper-wrapper">
        <div
          v-for="banner in banners"
          :key="banner"
          class="swiper-slide hero__slide"
        >
          <img class="h-[44rem]" :src="banner" />
        </div>
      </div>
      <div class="swiper-pagination swiper-pagination-bullets"></div>
    </div>

    <div class="hero__text-block">
      <h2 class="hero__title">
        Элитный загородный <br />
        клуб “Hedonist”
      </h2>
      <p class="hero__description">
        Три строки текста, которые кратко введут в курс дела и расскажут о
        перечне фунционала, о том, что это высокотехнологично и недалеко от
        Петербурга
      </p>
      <button class="btn hero__btn">Ознакомиться с услугами</button>
    </div>
  </div>
</template>

<script>
import { directive, Swiper, SwiperSlide } from 'vue-awesome-swiper'

import firstImg from '~/assets/images/mock/home-page_hero_1.jpg'
import secondImg from '~/assets/images/mock/home-page_hero_2.jpg'

export default {
  name: 'TheHero',
  directives: {
    swiper: directive,
  },
  components: {
    Swiper,
    SwiperSlide,
  },
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
