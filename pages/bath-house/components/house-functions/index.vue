<template>
  <section class="container mt-[7.5rem] mb-[8.125rem]">
    <SimpleTitle title="Функционал" />
    <div class="flex items-start mt-[5.3125rem]">
      <div class="card card_square mr-[6rem]">
        <img src="~/assets/images/mock/bhf1.jpg" alt="" />
        <h3>Наименование опции</h3>
        <p>
          Здесь нам необходим текст, который в общих чертах расскажет про то,
          какие качетсвенные услуги представляет компания. Не забыть упомянуть
          высокотехнологичность домов и апартаментов и премиальный уровень
          класса
        </p>
      </div>
      <div class="card">
        <img src="~/assets/images/mock/bhf2.jpg" alt="" />
        <h3>Наименование опции</h3>
        <p>
          Здесь нам необходим текст, который в общих чертах расскажет про то,
          какие качетсвенные услуги представляет компания. Не забыть упомянуть
          высокотехнологичность домов и апартаментов и премиальный уровень
          класса
        </p>
      </div>
    </div>
    <div class="flex relative -top-[4rem] items-end">
      <div class="card">
        <img src="~/assets/images/mock/bhf3.jpg" alt="" />
        <h3>Наименование опции</h3>
        <p>
          Здесь нам необходим текст, который в общих чертах расскажет про то,
          какие качетсвенные услуги представляет компания. Не забыть упомянуть
          высокотехнологичность домов и апартаментов и премиальный уровень
          класса
        </p>
      </div>
      <div class="card card_square ml-[6rem]">
        <img src="~/assets/images/mock/bhf4.jpg" alt="" />
        <h3>Наименование опции</h3>
        <p>
          Здесь нам необходим текст, который в общих чертах расскажет про то,
          какие качетсвенные услуги представляет компания. Не забыть упомянуть
          высокотехнологичность домов и апартаментов и премиальный уровень
          класса
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import SimpleTitle from '~/components/ui/simple-title/simple-title.vue'
export default {
  name: 'HouseFunctions',
  components: { SimpleTitle },
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
