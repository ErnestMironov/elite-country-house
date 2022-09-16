<template>
  <section
    id="apartments"
    :style="{
      backgroundImage: `url(http://185.46.10.102:1337${currentObject?.images[0].url})`,
    }"
    class="objects"
  >
    <div class="objects__info">
      <h2 class="objects__title">{{ currentObject?.name }}</h2>
      <p class="objects__description">
        {{ currentObject?.description }}
      </p>
      <ul class="objects__params">
        <li class="mr-[3.6875rem] param">
          <span class="param__title">{{ currentObject?.area }}м²</span>
          <span class="param__value">Площадь</span>
        </li>
        <li class="mr-[2.625rem] param">
          <span class="param__title">{{ currentObject?.floor }}</span>
          <span class="param__value">Этаж</span>
        </li>
        <li class="param">
          <span class="param__title">{{ currentObject?.sleepingSpaces }}</span>
          <span class="param__value">Спальни</span>
        </li>
        <!-- <li class="param">
          <span class="param__title">{{
            currentObject.price | parseNumber
          }}</span>
          <span class="param__value">Стоимость аренды</span>
        </li> -->
      </ul>
      <h3 class="objects__address-title">Адрес</h3>
      <div class="objects__address">
        Социалистическая 21 (Апарт-отель “YES”)
      </div>
      <nuxt-link
        :to="`/apartments/${currentObject?.id}`"
        class="btn mt-[48px] lg:mt-[2.25rem] min-w-[13.1875rem] px-[62px]"
        >Узнать больше</nuxt-link
      >
    </div>
    <div class="objects__slider">
      <swiper
        v-if="objectImages.length"
        ref="objectsSwiper"
        :options="swiperOptions"
        @slideChange="changeActiveObject"
      >
        <swiper-slide
          v-for="image in objectImages"
          :key="image.id"
          class="swiper-slide objects__slide"
        >
          <img
            class="objects__slide-img"
            :src="`http://185.46.10.102:1337${image.url}`"
        /></swiper-slide>
      </swiper>
      <div class="nav hide-on-mobile">
        <button id="objectsSliderPrev" class="nav__btn">
          <img src="~/assets/icons/arrow_left.svg" alt="назад" />
        </button>
        <button id="objectsSliderNext" class="nav__btn">
          <img src="~/assets/icons/arrow_right.svg" alt="вперед" />
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TheApartments',
  filters: {
    parseNumber(val) {
      return Number(val).toLocaleString('ru-RU')
    },
  },
  data() {
    return {
      activeObject: 0,
      objects: [],
      swiperOptions: {
        slidesPerView: 'auto',
        slideToClickedSlide: true,
        slidesOffsetBefore: 15,
        grabCursor: true,
        loop: true,
        spaceBetween: 0,
        navigation: {
          prevEl: '#objectsSliderPrev',
          nextEl: '#objectsSliderNext',
        },
        breakpoints: {
          1000: {
            slidesOffsetBefore: 0,
          },
        },
      },
    }
  },
  async fetch() {
    this.objects = (await this.$http.$get('apartments?populate=deep,10')).data
  },
  computed: {
    currentObject() {
      return this.objects[this.activeObject]
    },
    objectImages() {
      return this.objects.map((object) => object.images[0])
    },
  },
  created() {
    console.log(this.apartments)
  },
  methods: {
    changeActiveObject() {
      this.activeObject = isNaN(this.$refs.objectsSwiper.$swiper.realIndex)
        ? 0
        : this.$refs.objectsSwiper.$swiper.realIndex
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/scss/mixins';

.objects {
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-left: 5.75rem;
  margin-top: 11.25rem;

  @include tablet {
    flex-direction: column-reverse;
    padding-left: 0;
    position: relative;
  }

  &__info {
    background: rgba(255, 253, 252, 0.8);
    padding: 3.1875rem 2.25rem 2.5rem 3rem;
    max-width: 31.5625rem;

    @include tablet {
      max-width: 100%;
      padding: 323px 15px 36px;
    }
  }

  &__title {
    font-family: 'Cormorant';
    font-weight: 500;
    font-size: 1.75rem;
    line-height: 2.25rem;

    @include tablet {
      font-weight: 500;
      font-size: 28px;
      line-height: 36px;
    }
  }

  &__description {
    font-size: 1.125rem;
    margin-top: 1.5rem;
    line-height: 1.75rem;
    min-height: 8.75rem;

    @include tablet {
      font-size: 14px;
      line-height: 24px;
    }
  }

  &__params {
    display: flex;
    flex-wrap: wrap;
    margin-top: 2.25rem;

    li {
      margin-bottom: 1.5rem;
    }
  }

  &__address-title {
    font-weight: 450;
    font-size: 1.5rem;
    line-height: 1.8125rem;
    margin-top: 2.25rem;

    @include tablet {
      font-size: 24px;
      line-height: 29px;
    }
  }

  &__address {
    font-weight: 450;
    font-size: 1.125rem;
    line-height: 1.75rem;
    margin-top: 0.625rem;

    @include tablet {
      font-size: 18px;
      line-height: 28px;
    }
  }

  &__slide {
    width: auto;
    padding-right: 1.75rem;

    @include tablet {
      padding-right: 28px;
    }
  }

  &__slider {
    width: 50%;
    margin: 0;
    margin-bottom: 1.75rem;

    @include tablet {
      width: 100%;
      position: absolute;
      top: 30px;
      left: 0;
    }
  }

  &__slide-img {
    width: 15.3125rem;
    height: 15.3125rem;
    object-fit: cover;
    object-position: center;

    @include tablet {
      width: 245px;
      height: 245px;
    }
  }
}
</style>
