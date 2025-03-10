<template>
  <section id="bathhouses" class="bathhouses">
    <div class="hide-on-desktop bathhouses__head">
      <SimpleTitle title="Русская баня" />
    </div>
    <div class="bathhouses__content flex flex-col items-start justify-between">
      <div>
        <div class="hide-on-mobile">
          <SimpleTitle title="Русская баня" />
        </div>
        <p class="mt-[3rem] max-w-[33.3125rem] hide-on-mobile">
          {{ bathInfo?.description }}
        </p>
        <ul
          class="bathhouses__params grid grid-cols-[repeat(2,_auto)] mt-[3rem] gap-y-[3rem] gap-x-[1.5rem]"
        >
          <li class="param mr-[3.75rem]">
            <span class="param__title">{{ bathInfo?.area }}м²</span>
            <span class="param__value">Площадь бани</span>
          </li>
          <li class="mr-[3.125rem] param">
            <span class="param__title">{{ bathInfo?.maxPeople }}</span>
            <span class="param__value">Максимальная вместительность</span>
          </li>
          <!-- <li class="mr-[1.75rem] param">
            <span class="param__title">{{ poolArea }}м²</span>
            <span class="param__value">Площадь бассейна</span>
          </li> -->
          <li class="param">
            <span class="param__title">{{ bathInfo?.saunaType }}</span>
            <span class="param__value">Тип бани</span>
          </li>
        </ul>
        <p class="hide-on-desktop bathhouses__description">
          {{ bathInfo?.description }}
        </p>
      </div>
      <nuxt-link
        :to="`/bath-house/${bathInfo?.id}`"
        class="btn px-[2.9375rem] mt-5 bathhouses__btn"
        >Узнать больше</nuxt-link
      >
    </div>
    <div class="bathhouses__slider">
      <client-only>
        <swiper
          ref="bathhousesSwiper"
          class="bathhouses__slider"
          :options="swiperOptions"
        >
          <swiper-slide
            v-for="image in bathInfo?.images"
            :key="image.id"
            class="swiper-slide bathhouses__slide"
          >
            <img
              class="bathhouses__slide-img"
              :src="`https://admin.hedonistclub.ru${image.url}`"
            />
          </swiper-slide>
        </swiper>
      </client-only>
      <div class="nav bathhouses__nav">
        <button id="bathhousesSLiderPrev" class="nav__btn">
          <img src="~/assets/icons/arrow_left_dark.svg" alt="назад" />
        </button>
        <button id="bathhousesSliderNext" class="nav__btn">
          <img src="~/assets/icons/arrow_right_dark.svg" alt="вперед" />
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import SimpleTitle from '~/components/ui/simple-title/simple-title.vue'
export default {
  name: 'TheBathhouses',
  components: { SimpleTitle },
  data() {
    return {
      bathInfo: null,
      description:
        'Здесь нам необходим текст, который в общих чертах расскажет про то, какие качественные услуги представляет компания. Не забыть упомянуть высокотехнологичность домов и апартаментов и премиальный уровень класса домом. Если если перечень отдыха “не на один день” упомянуть, что в доме не становится скучно на 2й и 3й день.',
      area: 29,
      poolArea: 12,
      capacity: 14,
      additioanl: 'Пункт/Число',
      images: [
        'https://cdnn21.img.ria.ru/images/07e4/06/1a/1573515666_0:161:1476:991_600x0_80_0_0_803c45679d0834b45a6634bfdb6b1687.png',
        'https://www.villa-arte.ru/images/bg-sauna.jpg',
      ],
      swiperOptions: {
        slidesPerView: 'auto',
        loop: true,
        slideToClickedSlide: true,
        spaceBetween: 24,
        grabCursor: true,
        navigation: {
          prevEl: '#bathhousesSLiderPrev',
          nextEl: '#bathhousesSliderNext',
        },
      },
    }
  },
  async fetch() {
    this.bathInfo = (
      await this.$http.$get('bathhouses?populate=deep,10')
    ).data[0]
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/scss/mixins';

.bathhouses {
  margin-top: 11.25rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-left: 4rem;

  @include tablet {
    flex-direction: column;
  }

  &__head {
    @include tablet {
      order: 0;
    }
  }

  &__slider {
    width: 37.3125rem;
    margin: 0;
    position: relative;

    @include tablet {
      order: 1;
      width: 100%;
      margin-top: 47px;
    }
  }

  &__content {
    @include tablet {
      order: 2;
    }
  }

  &__slide {
    width: 26.3125rem;
    height: 392px;

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

  &__description {
    font-size: 14px;
    line-height: 24px;
    margin-top: 36px;
  }

  &__btn {
    @include tablet {
      width: 211px;
      margin-top: 48px;
    }
  }

  &__params {
    margin-top: 36px;
    display: flex;
    flex-wrap: wrap;
  }

  &__nav {
    position: absolute;
    bottom: 0;
    z-index: 10;
    left: 0;

    button {
      background: rgba(255, 255, 255, 0.7);
    }
  }
}
</style>
