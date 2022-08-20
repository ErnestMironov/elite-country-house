<template>
  <section class="parameters">
    <div class="swiper-container">
       <swiper
          ref="guestHousesSwiper"
          class="parameters__slider"
          :options="swiperOptions"
        >
          <swiper-slide
            class="swiper-slide parameters__slide"
          >
            <img class="parameters__slide-img" src="~/assets/images/mock/parameters-slider__1.jpg" />
          </swiper-slide>
          <swiper-slide
            class="swiper-slide parameters__slide"
          >
            <img class="parameters__slide-img" src="~/assets/images/mock/parameters-slider__2.jpg" />
          </swiper-slide>
          <swiper-slide
            class="swiper-slide parameters__slide"
          >
            <img class="parameters__slide-img" src="~/assets/images/mock/parameters-slider__3.jpg" />
          </swiper-slide>
          <!-- <swiper-slide
            v-for="image in images"
            :key="image.id"
            class="swiper-slide parameters__slide"
          >
            <img class="parameters__slide-img" :src="image.src" />
          </swiper-slide> -->
    </swiper>
    </div>
    <div class="parameters__background"></div>
    <div class="parameters-wrapper">
      <Title :title="'Параметры'" is-light></Title>
      <div class="parameters-info">
        <div class="parameters__property">
          <h3>{{ mock.cost }}</h3>
          <span>Стоимость аренды</span>
        </div>
        <div class="parameters__property">
          <h3>{{ mock.floors }}</h3>
          <span>{{ createFloorsString(mock.floors) }}</span>
          <!-- <span>Этажа</span> -->
        </div>
        <div class="parameters__property">
          <h3>{{ mock.rooms }}</h3>
          <span>Комнаты</span>
        </div>
        <div class="parameters__property">
          <h3>{{ mock.square + ' m²' }}</h3>
          <span>Площадь</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Title from '@/components/ui/simple-title/simple-title'
import { createFloorsString } from '@/helpers/helpers'

export default{
  components:{
    Title
  },
  data() {
    return {
      activeHouse: 0,
         images: [
        {
        id: 1,
        src:'https://archello.s3.eu-central-1.amazonaws.com/images/2021/06/29/wizhevsky-architect-modern-country-house-private-houses-archello.1624964046.9447.jpg',
        },
        {
        id: 2,
        src:'https://st.hzcdn.com/simgs/pictures/exteriors/french-country-house-plan-041-00187-america-s-best-house-plans-img~aad1271f0d2f6da3_4-0055-1-10ade95.jpg',

        },
        {
        id: 3,
        src:'https://cf.bstatic.com/xdata/images/hotel/max1024x768/260533832.jpg?k=23dad23a669810f1d022dc58a00e3455219dfcbc19ed12930217990b178e8b20&o=&hp=1',
        },
      ],
      swiperOptions: {
        slidesPerView: 'auto',
        // slidesPerView: '2.2',
        loop: true,
        slideToClickedSlide: true,
        spaceBetween: 16,
        // navigation: {
        //   prevEl: '#guestHousesSLiderPrev',
        //   nextEl: '#guestHousesSliderNext',
        // },
      },
      mock : {
        cost: 50000,
        floors: 2,
        rooms: 4,
        square: 145,
      }
    }
  },
  methods: {
    createFloorsString
  }
}

</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
