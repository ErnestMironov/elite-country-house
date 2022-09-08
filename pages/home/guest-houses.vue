<template>
  <section id="guesthouses" class="guest-houses">
    <SimpleTitle is-light title="Гостевые дома" />
    <div class="guest-houses__body mt-[6.6875rem]">
      <div
        class="guest-houses__info w-6/12 flex flex-col justify-between items-start"
      >
        <div>
          <h3 class="guest-houses__title">{{ currentHouse?.name }}</h3>
          <p class="guest-houses__description">
            {{ currentHouse?.description }}
          </p>
          <ul class="flex guest-houses__params mt-[3rem] hide-on-mobile">
            <li class="param guest-houses__param mr-[3.75rem]">
              <span class="param__title">{{
                currentHouse?.basePrice | parseNumber
              }}</span>
              <span class="param__value">Стоимость аренды</span>
            </li>
            <li class="mr-[3.125rem] param guest-houses__param">
              <span class="param__title">{{ currentHouse?.area }}м²</span>
              <span class="param__value">Площадь</span>
            </li>
            <li class="mr-[1.75rem] param guest-houses__param">
              <span class="param__title">{{ currentHouse?.floors }}</span>
              <span class="param__value">Этажа</span>
            </li>
            <li class="param guest-houses__param">
              <span class="param__title">{{
                currentHouse?.sleepingSpaces
              }}</span>
              <span class="param__value">Спальни</span>
            </li>
          </ul>
        </div>
        <ul class="flex hide-on-mobile">
          <li
            v-for="(slide, index) of guestHousesImages"
            :key="slide.id + index"
            :class="[{ active: index === activeHouse }, 'guest-houses__bullet']"
          >
            <span> 0{{ index + 1 }}</span>
          </li>
        </ul>
      </div>
      <div class="guest-houses__slider-wrap relative">
        <swiper
          v-if="objects.length"
          ref="guestHousesSwiper"
          class="guest-houses__slider"
          :options="swiperOptions"
          @slideChange="changeActiveHouse"
        >
          <swiper-slide
            v-for="(image, index) of guestHousesImages"
            :key="image.id + index"
            class="swiper-slide guest-houses__slide"
          >
            <img
              class="guest-houses__slide-img"
              :src="`http://185.46.10.102:1337${image.url}`"
            />
            <nuxt-link
              :to="`/guest-house/${currentHouse?.id}`"
              class="btn btn_light absolute bottom-0 right-0 px-[2.9375rem] hide-on-mobile"
              >Узнать больше</nuxt-link
            >
          </swiper-slide>
        </swiper>
        <div class="nav guest-houses__nav hide-on-mobile">
          <button id="guestHousesSLiderPrev" class="nav__btn">
            <img src="~/assets/icons/arrow_left_dark.svg" alt="назад" />
          </button>
          <button id="guestHousesSliderNext" class="nav__btn">
            <img src="~/assets/icons/arrow_right_dark.svg" alt="вперед" />
          </button>
        </div>
      </div>
      <ul class="flex guest-houses__params mt-[3rem] hide-on-desktop">
        <li class="param guest-houses__param mr-[3.75rem]">
          <span class="param__title">{{
            currentHouse?.basePrice | parseNumber
          }}</span>
          <span class="param__value">Стоимость аренды</span>
        </li>
        <li class="mr-[3.125rem] param guest-houses__param">
          <span class="param__title">{{ currentHouse?.area }}м²</span>
          <span class="param__value">Площадь</span>
        </li>
        <li class="mr-[1.75rem] param guest-houses__param">
          <span class="param__title">{{ currentHouse?.floors }}</span>
          <span class="param__value">Этажа</span>
        </li>
        <li class="param guest-houses__param">
          <span class="param__title">{{ currentHouse?.sleepingSpaces }}</span>
          <span class="param__value">Спальни</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import SimpleTitle from '~/components/ui/simple-title/simple-title.vue'
export default {
  name: 'GuestHouses',
  components: { SimpleTitle },
  filters: {
    parseNumber(val) {
      return Number(val).toLocaleString('ru-RU')
    },
  },
  data() {
    return {
      activeHouse: 0,
      objects: [],
      swiperOptions: {
        slidesPerView: 'auto',
        loop: true,
        slideToClickedSlide: true,
        grabCursor: true,
        spaceBetween: 24,
        navigation: {
          prevEl: '#guestHousesSLiderPrev',
          nextEl: '#guestHousesSliderNext',
        },
      },
    }
  },
  async fetch() {
    this.objects = (await this.$http.$get('guest-houses?populate=deep,10')).data
  },
  computed: {
    currentHouse() {
      return this.objects[this.activeHouse]
    },
    guestHousesImages() {
      return this.objects.map((object) => object.images[0])
    },
  },
  methods: {
    changeActiveHouse() {
      this.activeHouse = this.$refs.guestHousesSwiper.$swiper.realIndex
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/scss/mixins';

.guest-houses {
  position: relative;
  transform: translateZ(0);
  margin-top: 11.375rem;
  padding-top: 3.75rem;
  padding-left: 4rem;
  color: #fffdfc;
  padding-bottom: 2.6875rem;

  @include tablet {
    padding-top: 30px;
  }

  &::before {
    content: '';
    width: 52.6875rem;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    background: var(--secondary-color);

    @include tablet {
      width: 100%;
    }
  }

  &__body {
    display: flex;

    @include tablet {
      display: block;
    }
  }

  &__info {
    @include tablet {
      width: 100%;
    }
  }

  &__title {
    font-family: 'Cormorant';
    font-weight: 500;
    font-size: 1.75rem;
    line-height: 2.25rem;

    @include tablet {
      font-size: 16px;
      line-height: 24px;
    }
  }

  &__description {
    font-size: 1.125rem;
    line-height: 1.75rem;
    margin-top: 3rem;
    max-width: 95%;
    min-height: 10.625rem;

    @include tablet {
      font-size: 14px;
      line-height: 24px;
      max-width: 100%;
      min-height: 200px;
    }
  }

  &__params {
    @include tablet {
      margin: 36px 0;
      flex-wrap: wrap;
    }
  }

  &__param {
    @include tablet {
      margin-right: 36px;

      &:first-child {
        min-width: 100%;
        margin-bottom: 24px;
      }
    }
  }

  &__slider-wrap {
    width: 50rem;

    @include tablet {
      width: 100%;
      margin-top: 36px;
    }
  }

  &__slider {
    height: 100%;
    min-height: 32.5rem;
  }

  &__slide {
    width: 25.3125rem;

    @include tablet {
      width: 80vw;
    }
  }

  &__slide-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  &__bullet {
    display: flex;
    align-items: center;
    opacity: 0.75;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 2.25rem;

    &::after {
      content: '';
      height: 0.0625rem;
      margin-left: 0.625rem;
      background: currentColor;
      margin-right: 0.75rem;
      width: 0;
      transition: width 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    &::before {
      margin: 0;
    }

    &:last-of-type {
      &::after {
        order: 0;
        margin-left: 0;
      }

      span {
        order: 1;
      }
    }

    &.active {
      &::after {
        width: 3.75rem;
      }
    }
  }

  &__nav {
    position: absolute;
    z-index: 11;
    bottom: 0;
    left: 0;
    transform: translateX(-50%);

    .nav__btn {
      background: currentColor;
    }
  }
}
</style>
