<template>
  <div class="house-wrapper">
    <swiper
      ref="guestHousesSwiper"
      class="house__slider"
      :options="swiperOptions"
    >
      <swiper-slide
        v-for="image in data?.heroImages"
        :key="image?.id"
        class="swiper-slide house__slide"
      >
        <img
          class="house__slide-img"
          :src="`https://admin.hedonistclub.ru${image.url}`"
        />
      </swiper-slide>
    </swiper>

    <section class="container">
      <Booking :object-type="2"/>
    </section>

    <section class="container">
      <HouseName :name="data?.name" :about="data?.description" />
    </section>

    <HouseParameters :data="data" />

    <section class="container">
      <HouseAbout :data="data?.features" />
    </section>

    <HouseFunctions />
  </div>
</template>

<script>
import HouseAbout from './components/house-about'
import HouseFunctions from './components/house-functions/index.vue'
import HouseParameters from './components/house-parameters'
import Booking from '@/components/booking'
import HouseName from '@/components/blocks/house-name'

// import Swiper from 'swiper/swiper-bundle.min'
// import 'swiper/swiper-bundle.min.css'

// const onSwiper = (swiper) => {
//       console.log(swiper);
//     };
//     const onSlideChange = () => {
//       console.log('slide change');
//     };

export default {
  components: {
    HouseAbout,
    HouseName,
    HouseParameters,
    Booking,
    HouseFunctions,
  },
  async asyncData({ $http, params }) {
    const data = (await $http.$get(`bathhouses/${params.id}?populate=deep,10`))
      .data

    return { data }
  },
  data() {
    return {
      activeHouse: 0,
      images: [
        {
          id: 1,
          src: 'https://archello.s3.eu-central-1.amazonaws.com/images/2021/06/29/wizhevsky-architect-modern-country-house-private-houses-archello.1624964046.9447.jpg',
        },
        {
          id: 2,
          src: 'https://st.hzcdn.com/simgs/pictures/exteriors/french-country-house-plan-041-00187-america-s-best-house-plans-img~aad1271f0d2f6da3_4-0055-1-10ade95.jpg',
        },
        {
          id: 3,
          src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/260533832.jpg?k=23dad23a669810f1d022dc58a00e3455219dfcbc19ed12930217990b178e8b20&o=&hp=1',
        },
      ],
      swiperOptions: {
        // slidesPerView: '3',
        slidesPerView: '1.2',
        loop: true,
        slideToClickedSlide: true,
        spaceBetween: 21,
        // navigation: {
        //   prevEl: '#guestHousesSLiderPrev',
        //   nextEl: '#guestHousesSliderNext',
        // },
        breakpoints: {
          648: {
            slidesPerView: '3',
            spaceBetween: 16,
            loop: true,
          },
        },
      },
    }
  },
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
