<template>
  <div class="house-wrapper">
    <div class="house__slider">
      <client-only>
        <swiper ref="guestHousesSwiper" :options="swiperOptions">
          <swiper-slide
            v-for="image in houseParams.heroImages"
            :key="image.id"
            class="swiper-slide house__slide"
          >
            <img
              class="house__slide-img"
              :src="`https://admin.hedonistclub.ru${image.url}`"
            />
            <!-- <img class="house__slide-img" :src="image.src" /> -->
          </swiper-slide>
        </swiper>
      </client-only>
      <div class="nav house__nav hide-on-mobile">
        <button id="heroSLiderPrev" class="nav__btn">
          <img src="~/assets/icons/arrow_left_dark.svg" alt="назад" />
        </button>
        <button id="heroSliderNext" class="nav__btn">
          <img src="~/assets/icons/arrow_right_dark.svg" alt="вперед" />
        </button>
      </div>
    </div>

    <section class="container">
      <Booking
        :base-price="houseParams.basePrice"
        :object-type="0"
        :object-params="houseParams"
      />
    </section>

    <section class="container">
      <HouseName :name="houseParams.name" :about="houseParams.description" />
    </section>

    <HouseParameters
      :area="houseParams.area"
      :rooms="houseParams.rooms"
      :floors="houseParams.floors"
      :images="houseParams.images"
      :price="houseParams.basePrice"
    />

    <section class="container">
      <HouseAbout :features="houseParams.feature" />
    </section>

    <section class="container">
      <HouseFunctional :options="options" />
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
  // @ts-ignore
  async asyncData({ $http, params }) {
    const houseParams = (
      await $http.$get(`guest-houses/${params.house}?populate=*`)
    ).data

    const options = [
      (await $http.$get(`guest-house-options/${params.house}?populate=*`)).data,
    ]

    console.log(houseParams)

    return { houseParams, options }
  },
  data() {
    return {
      id: 0,
      activeHouse: 0,
      images: [
        {
          id: 1,
          src: '',
          // src: 'https://archello.s3.eu-central-1.amazonaws.com/images/2021/06/29/wizhevsky-architect-modern-country-house-private-houses-archello.1624964046.9447.jpg',
        },
        {
          id: 2,
          src: '',
        },
        {
          id: 3,
          src: '',
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
        navigation: {
          prevEl: '#heroSLiderPrev',
          nextEl: '#heroSliderNext',
        },
      },
      houseParams: {
        data: {},
      },
    }
  },
  head() {
    return {
      title: `Шале "${this.houseParams?.name}"`,
      meta: [
        {
          name: 'description',
          // @ts-ignore
          content: this.houseParams?.description,
        },
        {
          property: 'og:title',
          hid: 'og:title',
          content: `Шале "${this.houseParams?.name}"`,
        },
        {
          property: 'og:type',
          hid: 'og:type',
          content: 'website',
        },
        {
          property: 'og:description',
          hid: 'og:description',
          // @ts-ignore
          content: this.houseParams?.description,
        },
        {
          property: 'og:image',
          hid: 'og:image',
          // @ts-ignore
          content: `https://admin.hedonistclub.ru${this.houseParams?.heroImages[0]?.url}`,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
