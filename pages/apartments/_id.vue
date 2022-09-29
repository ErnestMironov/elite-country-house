<template>
  <div class="house-wrapper">
    <swiper
      ref="guestHousesSwiper"
      class="house__slider"
      :options="swiperOptions"
    >
      <swiper-slide
        v-for="image in data.images"
        :key="image.id"
        class="swiper-slide house__slide"
      >
        <img
          class="house__slide-img"
          :src="`http://185.46.10.102:1337${image.url}`"
        />
      </swiper-slide>
    </swiper>

    <section class="container">
      <Booking />
    </section>

    <section class="container">
      <HouseName :name="data?.name" :about="data?.description" />
    </section>

    <HouseParameters :data="data" />

    <TheAdvantages :data="data?.features" />

    <TheFunctions />
  </div>
</template>

<script>
  import Booking from './components/booking'
  import HouseParameters from './components/house-parameters'
  import TheAdvantages from './components/the-advantages.vue'
  import TheFunctions from './components/the-functions.vue'
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
    HouseName,
    HouseParameters,
    Booking,
    TheAdvantages,
    TheFunctions,
  },
  async asyncData({ $http, params }) {
    const data = (await $http.$get(`apartments/${params.id}?populate=deep,10`))
      .data

    return { data }
  },
  data() {
    return {
      activeHouse: 0,
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
