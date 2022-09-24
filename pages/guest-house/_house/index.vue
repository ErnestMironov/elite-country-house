<template>
  <div class="house-wrapper">
    <swiper
      ref="guestHousesSwiper"
      class="house__slider"
      :options="swiperOptions"
    >
      <swiper-slide
        v-for="image in houseParams.heroImages"
        :key="image.id"
        class="swiper-slide house__slide"
      >
        <img class="house__slide-img" :src="`http://185.46.10.102:1337${image.url}`" />
        <!-- <img class="house__slide-img" :src="image.src" /> -->
      </swiper-slide>
    </swiper>

  <section class="container">
    <Booking :base-price="houseParams.basePrice"/>
  </section>

    <section class="container">
      <HouseName
        :name="houseParams.name"
        :about="houseParams.description"
      />
    </section>

    <HouseParameters
      :area="houseParams.area"
      :rooms="houseParams.rooms"
      :floors="houseParams.floors"
      :images="houseParams.images"
    />

    <section class="container">
      <HouseAbout :features="houseParams.feature" />
    </section>

    <section class="container">
      <HouseFunctional :options="options"/>
    </section>
  </div>
</template>

<script>
import HouseAbout from '@/components/blocks/house-about'
import HouseFunctional from '@/components/blocks/house-functional'
import HouseName from '@/components/blocks/house-name'
import HouseParameters from '@/components/blocks/house-parameters'
import Booking from '@/components/booking'

export default {
  components: {
    HouseAbout,
    HouseName,
    HouseParameters,
    HouseFunctional,
    Booking,
  },
  data() {
    return {
      id: 0,
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
      options: [],
      swiperOptions: {
        // slidesPerView: '3',
        slidesPerView: '1.2',
        loop: true,
        slideToClickedSlide: true,
        spaceBetween: 21,
        breakpoints: {
          648: {
            slidesPerView: '3',
            spaceBetween: 16,
            loop: true,
          },
        },
      },
      houseParams: {
        data: {},
      },
    }
  },
  async created() {
    this.houseParams = [(await this.$http.$get(`guest-houses/${this.$route.params.house}?populate=*`)).data][0]
    console.log(this.houseParams)
    this.options = [(await this.$http.$get(`guest-house-options/${this.$route.params.house}?populate=*`)).data]
    console.log(this.options)
  },
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
