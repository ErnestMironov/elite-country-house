<template>
  <section id="bathhouses" class="bathhouses">
    <div class="flex flex-col items-start justify-between">
      <div>
        <SimpleTitle title="Бани и сауны" />
        <p class="mt-[3rem] max-w-[33.3125rem]">
          {{ description }}
        </p>
        <ul
          class="grid grid-cols-[repeat(2,_auto)] mt-[3rem] gap-y-[3rem] gap-x-[1.5rem]"
        >
          <li class="param mr-[3.75rem]">
            <span class="param__title">{{ area }}м²</span>
            <span class="param__value">Площадь бани</span>
          </li>
          <li class="mr-[3.125rem] param">
            <span class="param__title">{{ capacity }}</span>
            <span class="param__value">Максимальная вместительность</span>
          </li>
          <li class="mr-[1.75rem] param">
            <span class="param__title">{{ poolArea }}м²</span>
            <span class="param__value">Площадь бассейна</span>
          </li>
          <li class="param">
            <span class="param__title">{{ additioanl }}</span>
            <span class="param__value">Описание преимущества</span>
          </li>
        </ul>
      </div>
      <nuxt-link to="/bath-house" class="btn px-[2.9375rem] mt-5"
        >Узнать больше</nuxt-link
      >
    </div>
    <swiper
      ref="bathhousesSwiper"
      class="bathhouses__slider"
      :options="swiperOptions"
    >
      <swiper-slide
        v-for="image in images"
        :key="image"
        class="swiper-slide bathhouses__slide"
      >
        <img class="bathhouses__slide-img" :src="image" />
      </swiper-slide>
    </swiper>
  </section>
</template>

<script>
import SimpleTitle from '~/components/ui/simple-title/simple-title.vue'
export default {
  name: 'TheBathhouses',
  components: { SimpleTitle },
  data() {
    return {
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
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.bathhouses {
  margin-top: 11.25rem;
  display: flex;
  justify-content: space-between;
  padding-left: 4rem;

  &__slider {
    min-height: 40.5rem;
    width: 37.3125rem;
    margin: 0;
  }

  &__slide {
    width: 26.3125rem;
  }

  &__slide-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
}
</style>
