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
        <!-- <img class="house__slide-img" :src="image.src" /> -->
      </swiper-slide>
    </swiper>

    <section class="container">
      <Booking />
    </section>

    <section class="container">
      <HouseName
        :name="houseParams.data.name"
        :about="houseParams.data.description"
      />
    </section>

    <HouseParameters
      :area="houseParams.data.area"
      :rooms="houseParams.data.rooms"
      :floors="houseParams.data.floors"
    />

    <section class="container">
      <HouseAbout :features="houseParams.data.feature" />
    </section>

    <section class="container">
      <HouseFunctional />
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
  // async asyncData({params, $http }) {
  //     const data = (await $http.$get(`guest-houses/${params.house}?populate=*`)).data
  //     console.log(data)

  //     return { data }
  // },
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
      houseParams: {
        data: {},
      },
    }
  },
  // async fetch({ $http, $route }) {
  //   console.log($route)
  //   // this.id = $route.params.house.replace(':', '')
  //   // const data = (await $http.$get(`http://185.46.10.102:1337/api/guest-houses/${this.id}?populate=*`)).data

  // // console.log(data)
  //   // return { data }
  // },
  async created() {
    this.id = this.$route.params.house.replace(':', '')
    const resp = await fetch(
      `http://185.46.10.102:1337/api/guest-houses/${this.id}?populate=*`
    )
    this.houseParams = await resp.json()
    console.log(this.houseParams.data)
  },
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
