<template>
  <div
    :style="{ backgroundImage: `url(${currentObject?.image})` }"
    class="objects"
  >
    <div class="objects__info">
      <h2 class="objects__title">{{ currentObject.title }}</h2>
      <p class="objects__description">
        {{ currentObject.description }}
      </p>
      <ul class="objects__params">
        <li class="mr-[3.6875rem] param">
          <span class="param__title">{{ currentObject.area }}м²</span>
          <span class="param__value">Площадь</span>
        </li>
        <li class="mr-[2.625rem] param">
          <span class="param__title">{{ currentObject.floors }}</span>
          <span class="param__value">Этажа</span>
        </li>
        <li class="param">
          <span class="param__title">{{ currentObject.bedrooms }}</span>
          <span class="param__value">Спальни</span>
        </li>
        <li class="param">
          <span class="param__title">{{
            currentObject.price | parseNumber
          }}</span>
          <span class="param__value">Стоимость аренды</span>
        </li>
      </ul>
      <h3 class="objects__address-title">Адрес</h3>
      <div class="objects__address">
        Социалистическая 21 (Апарт-отель “YES”)
      </div>
      <a class="btn mt-[2.25rem] min-w-[13.1875rem]">Узнать больше</a>
    </div>
    <div class="objects__slider">
      <swiper
        ref="objectsSwiper"
        :options="swiperOptions"
        @slideChange="changeActiveObject"
      >
        <swiper-slide
          v-for="image in objectImages"
          :key="image"
          class="swiper-slide objects__slide"
        >
          <img class="objects__slide-img" :src="image"
        /></swiper-slide>
      </swiper>
      <div class="nav">
        <button id="objectsSliderPrev" class="nav__btn">
          <img src="~/assets/icons/arrow_left.svg" alt="назад" />
        </button>
        <button id="objectsSliderNext" class="nav__btn">
          <img src="~/assets/icons/arrow_right.svg" alt="вперед" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import objImage1 from '~/assets/images/mock/home_objects/object_1.jpg'
import objImage2 from '~/assets/images/mock/home_objects/object_2.jpg'
import objImage3 from '~/assets/images/mock/home_objects/object_3.jpg'

export default {
  name: 'TheObjects',
  filters: {
    parseNumber(val) {
      return Number(val).toLocaleString('ru-RU')
    },
  },
  data() {
    return {
      activeObject: 0,
      objects: [
        {
          image: objImage1,
          title: 'Апартаменты №1',
          description:
            'Здесь нам необходим текст, который в общих чертах расскажет про то, какие качественные услуги представляет компания. Не забыть упомянуть высокотехнологичность домов и апартаментов и премиальный уровень класса.',
          area: 29,
          floors: 2,
          bedrooms: 4,
          price: 50000,
        },
        {
          image: objImage2,
          title: 'Апартаменты №2',
          description:
            'Здесь нам необходим текст, который в общих чертах расскажет про то, какие качественные услуги представляет компания. Не забыть упомянуть высокотехнологичность домов и апартаментов и премиальный уровень класса.',
          area: 29,
          floors: 2,
          bedrooms: 4,
          price: 60000,
        },
        {
          image: objImage3,
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
        spaceBetween: 0,
        navigation: {
          prevEl: '#objectsSliderPrev',
          nextEl: '#objectsSliderNext',
        },
      },
    }
  },
  computed: {
    currentObject() {
      return this.objects[this.activeObject]
    },
    objectImages() {
      return this.objects.map((object) => object.image)
    },
  },
  methods: {
    changeActiveObject() {
      this.activeObject = this.$refs.objectsSwiper.$swiper.realIndex
    },
  },
}
</script>

<style lang="scss" scoped>
.objects {
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-left: 5.75rem;
  margin-top: 11.25rem;

  &__info {
    background: rgba(255, 253, 252, 0.8);
    padding: 3.1875rem 2.25rem 2.5rem 3rem;
    max-width: 31.5625rem;
  }

  &__title {
    font-family: 'Cormorant';
    font-weight: 500;
    font-size: 1.75rem;
    line-height: 2.25rem;
  }

  &__description {
    font-size: 1.125rem;
    margin-top: 1.5rem;
    line-height: 1.75rem;
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
  }

  &__address {
    font-weight: 450;
    font-size: 1.125rem;
    line-height: 1.75rem;
    margin-top: 0.625rem;
  }

  &__slide {
    width: auto;
    padding-right: 1.75rem;
  }

  &__slider {
    width: 50%;
    margin: 0;
    margin-bottom: 1.75rem;
  }

  &__slide-img {
    width: 15.3125rem;
    height: 15.3125rem;
    object-fit: cover;
    object-position: center;
  }
}
</style>
