<template>
  <div :style="{ backgroundImage: `url(${backgroundImage})` }" class="objects">
    <div class="objects__info">
      <h2 class="objects__title">Апартаменты №2</h2>
      <p class="objects__description">
        Здесь нам необходим текст, который в общих чертах расскажет про то,
        какие качетсвенные услуги представляет компания. Не забыть упомянуть
        высокотехнологичность домов и апартаментов и премиальный уровень класса.
      </p>
      <ul class="objects__params">
        <li class="mr-[3.6875rem]">
          <span class="objects__params-title">29м²</span>
          <span>Площадь</span>
        </li>
        <li class="mr-[2.625rem]">
          <span class="objects__params-title">2</span>
          <span>Этажа</span>
        </li>
        <li>
          <span class="objects__params-title">4</span>
          <span>Спальни</span>
        </li>
        <li>
          <span class="objects__params-title">50 000</span>
          <span>Стоимость аренды</span>
        </li>
      </ul>
      <h3 class="objects__address-title">Адрес</h3>
      <div class="objects__address">
        Социалистическая 21 (Апарт-отель “YES”)
      </div>
      <a class="btn mt-[2.25rem] min-w-[13.1875rem]">Узнать больше</a>
    </div>
  </div>
</template>

<script>
import bgImage from '~/assets/images/mock/home_objects/object_main.jpg'

export default {
  name: 'TheObjects',
  data() {
    return {
      activeObject: 0,
      objects: [{ bg: bgImage }],
    }
  },
  computed: {
    backgroundImage() {
      return this.objects[this.activeObject].bg
    },
  },
}
</script>

<style lang="scss" scoped>
.objects {
  background-size: cover;
  background-position: center;
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

  &__params-title {
    font-weight: 300;
    font-size: 2.25rem;
    line-height: 3rem;
    display: block;
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
}
</style>
