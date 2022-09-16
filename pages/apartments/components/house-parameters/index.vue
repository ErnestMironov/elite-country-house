<template>
  <section class="parameters">
    <div class="swiper-container">
      <swiper
        ref="guestHousesSwiper"
        class="parameters__slider"
        :options="swiperOptions"
      >
        <swiper-slide
          v-for="image in data.images"
          :key="image.id"
          class="swiper-slide parameters__slide"
        >
          <img
            class="parameters__slide-img"
            :src="`http://185.46.10.102:1337${image.url}`"
          />
        </swiper-slide>
      </swiper>
      <!-- <swiper-slide
            v-for="image in images"
            :key="image.id"
            class="swiper-slide parameters__slide"
          >
            <img class="parameters__slide-img" :src="image.src" />
          </swiper-slide> -->
    </div>
    <div class="parameters__background"></div>
    <div class="parameters-wrapper">
      <Title :title="'Параметры'" is-light class="parameters__title" />
      <div class="parameters-info">
        <div class="parameters__property">
          <h3>{{ data?.basePrice }}</h3>
          <span>Стоимость аренды</span>
        </div>

        <div class="parameters__mobile-wrapper">
          <div class="parameters__property">
            <h3>{{ data?.floor }}</h3>
            <span>{{ createFloorsString(data?.floors) }}</span>
          </div>
          <div class="parameters__property">
            <h3>{{ data?.rooms }}</h3>
            <span>Комнаты</span>
          </div>
          <div class="parameters__property">
            <h3>{{ data?.area + ' m²' }}</h3>
            <span>Площадь</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Title from '@/components/ui/simple-title/simple-title'
import { createFloorsString } from '@/helpers/helpers'

export default {
  components: {
    Title,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      activeHouse: 0,
      swiperOptions: {
        slidesPerView: '1.3',
        loop: true,
        slideToClickedSlide: true,
        spaceBetween: 16,
        // navigation: {
        //   prevEl: '#guestHousesSLiderPrev',
        //   nextEl: '#guestHousesSliderNext',
        // },
        breakpoints: {
          648: {
            slidesPerView: 'auto',
            spaceBetween: 16,
            loop: true,
          },
        },
      },
      mock: {
        cost: 50000,
        floors: 2,
        rooms: 4,
        square: 145,
      },
    }
  },
  created() {
    // console.log(this.$props)
  },
  methods: {
    createFloorsString,
  },
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
