<template>
<div class="house-wrapper">

    <swiper
          ref="guestHousesSwiper"
          class="house__slider"
          :options="swiperOptions"
        >
          <swiper-slide
            v-for="image in images"
            :key="image.id"
            class="swiper-slide house__slide"
          >
            <img class="house__slide-img" :src="image.src" />
          </swiper-slide>
    </swiper>

  <section class="container">
    <Booking/>
  </section>

  <section class="container">
    <HouseName/>
  </section>

    <HouseParameters />

    <section class="container">
      <HouseAbout />
    </section>

    <section class="container">
      <HouseFunctional />
    </section>
  </div>
</template>

<script>
import HouseAbout from '@/components/blocks/house-about'
import HouseName from '@/components/blocks/house-name'
import HouseParameters from '@/components/blocks/house-parameters'
import HouseFunctional from '@/components/blocks/house-functional'
import Booking from '@/components/booking'

// import Swiper from 'swiper/swiper-bundle.min'
// import 'swiper/swiper-bundle.min.css'

// const onSwiper = (swiper) => {
//       console.log(swiper);
//     };
//     const onSlideChange = () => {
//       console.log('slide change');
//     };

export default {
  components:{
    HouseAbout,
    HouseName,
    HouseParameters,
    HouseFunctional,
    Booking
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
        slidesPerView: '3',
        loop: true,
        slideToClickedSlide: true,
        spaceBetween: 16,
        // navigation: {
        //   prevEl: '#guestHousesSLiderPrev',
        //   nextEl: '#guestHousesSliderNext',
        // },
      },
    }
  },
}
</script>

<style lang="scss" scoped>
  @import './index.scss';
</style>