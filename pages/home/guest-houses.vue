<template>
  <section id="guesthouses" class="guest-houses">
    <SimpleTitle is-light title="Гостевые дома" />
    <div class="flex mt-[6.6875rem]">
      <div class="w-6/12 flex flex-col justify-between items-start">
        <div>
          <h3 class="guest-houses__title">{{ currentHouse.title }}</h3>
          <p class="guest-houses__description">
            {{ currentHouse.description }}
          </p>
          <ul class="flex mt-[3rem]">
            <li class="param mr-[3.75rem]">
              <span class="param__title">{{
                currentHouse.price | parseNumber
              }}</span>
              <span class="param__value">Стоимость аренды</span>
            </li>
            <li class="mr-[3.125rem] param">
              <span class="param__title">{{ currentHouse.area }}м²</span>
              <span class="param__value">Площадь</span>
            </li>
            <li class="mr-[1.75rem] param">
              <span class="param__title">{{ currentHouse.floors }}</span>
              <span class="param__value">Этажа</span>
            </li>
            <li class="param">
              <span class="param__title">{{ currentHouse.bedrooms }}</span>
              <span class="param__value">Спальни</span>
            </li>
          </ul>
        </div>
        <ul class="flex">
          <li
            v-for="(slide, index) of guestHousesImages"
            :key="slide"
            :class="[{ active: index === activeHouse }, 'guest-houses__bullet']"
          >
            <span> 0{{ index + 1 }}</span>
          </li>
        </ul>
      </div>
      <div class="w-[50rem] relative">
        <swiper
          ref="guestHousesSwiper"
          class="guest-houses__slider"
          :options="swiperOptions"
          @slideChange="changeActiveHouse"
        >
          <swiper-slide
            v-for="image in guestHousesImages"
            :key="image"
            class="swiper-slide guest-houses__slide"
          >
            <img class="guest-houses__slide-img" :src="image" />
            <a class="btn btn_light absolute bottom-0 right-0 px-[2.9375rem]"
              >Узнать больше</a
            >
          </swiper-slide>
        </swiper>
        <div class="nav guest-houses__nav">
          <button id="guestHousesSLiderPrev" class="nav__btn">
            <img src="~/assets/icons/arrow_left_dark.svg" alt="назад" />
          </button>
          <button id="guestHousesSliderNext" class="nav__btn">
            <img src="~/assets/icons/arrow_right_dark.svg" alt="вперед" />
          </button>
        </div>
      </div>
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
      objects: [
        {
          image:
            'https://archello.s3.eu-central-1.amazonaws.com/images/2021/06/29/wizhevsky-architect-modern-country-house-private-houses-archello.1624964046.9447.jpg',
          title: 'Апартаменты №1',
          description:
            'Здесь нам необходим текст, который в общих чертах расскажет про то, какие качественные услуги представляет компания. Не забыть упомянуть высокотехнологичность домов и апартаментов и премиальный уровень класса.',
          area: 29,
          floors: 2,
          bedrooms: 4,
          price: 50000,
        },
        {
          image:
            'https://st.hzcdn.com/simgs/pictures/exteriors/french-country-house-plan-041-00187-america-s-best-house-plans-img~aad1271f0d2f6da3_4-0055-1-10ade95.jpg',
          title: 'Апартаменты №2',
          description:
            'Здесь нам необходим текст, который в общих чертах расскажет про то, какие качественные услуги представляет компания. Не забыть упомянуть высокотехнологичность домов и апартаментов и премиальный уровень класса.',
          area: 29,
          floors: 2,
          bedrooms: 4,
          price: 60000,
        },
        {
          image:
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/260533832.jpg?k=23dad23a669810f1d022dc58a00e3455219dfcbc19ed12930217990b178e8b20&o=&hp=1',
          title: 'Апартаменты №7',
          description:
            'Здесь нам необходим текст, который в общих чертах расскажет про то, какие качественные услуги представляет компания. Не забыть упомянуть высокотехнологичность домов и апартаментов и премиальный уровень класса.',
          area: 29,
          floors: 2,
          bedrooms: 4,
          price: 70000,
        },
      ],
      swiperOptions: {
        slidesPerView: 'auto',
        loop: true,
        slideToClickedSlide: true,
        spaceBetween: 24,
        navigation: {
          prevEl: '#guestHousesSLiderPrev',
          nextEl: '#guestHousesSliderNext',
        },
      },
    }
  },
  computed: {
    currentHouse() {
      return this.objects[this.activeHouse]
    },
    guestHousesImages() {
      return this.objects.map((object) => object.image)
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
.guest-houses {
  position: relative;
  transform: translateZ(0);
  margin-top: 11.375rem;
  padding-top: 3.75rem;
  padding-left: 4rem;
  color: #fffdfc;
  padding-bottom: 2.6875rem;

  &::before {
    content: '';
    width: 52.6875rem;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    background: var(--secondary-color);
  }

  &__title {
    font-family: 'Cormorant';
    font-weight: 500;
    font-size: 1.75rem;
    line-height: 2.25rem;
  }

  &__description {
    font-size: 1.125rem;
    line-height: 1.75rem;
    margin-top: 3rem;
    max-width: 95%;
  }

  &__slider {
    height: 100%;
    min-height: 32.5rem;
  }

  &__slide {
    width: 25.3125rem;
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
