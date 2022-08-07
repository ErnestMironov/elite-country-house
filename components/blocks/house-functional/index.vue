<template>
  <section class="functional">
    <div class="functional-wrapper">
      <div class="functional__title-wrapper">
        <Title :title="'Функционал'"/>
      </div>

      <div class="functional__border-top"></div>
      <div v-for="row in mock" :key="row.idx" class="functional__row" >
        <img class="functional__img" src="../../../assets/imgs/house-functional.jpg" alt="function">
        <div class="functional__row-info">
          <h4 class="info-title">{{row.title}}</h4>
          <p class="info-block">{{row.info}}</p>
          <span>{{row.price }} <img class="functional__ticker" src="../../../assets/icons/rouble.svg" alt="roubles"></span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import Title from '@/components/ui/simple-title/simple-title'

  const mock = [
    {
      idx: '01',
      title: 'Наименование опции',
      info: 'Здесь нам необходим текст, который в общих чертах расскажет про то, какие качетсвенные услуги представляет компания. Не забыть упомянуть высокотехнологичность домов и апартаментов и премиальный уровень класса',
      price: '3200 '
      },
    {
      idx: '02',
      title: 'Наименование опции',
      info: 'Здесь нам необходим текст, который в общих чертах расскажет про то, какие качетсвенные услуги представляет компания. Не забыть упомянуть высокотехнологичность домов и апартаментов и премиальный уровень класса',
      price: '3200 '
      },
    {
      idx: '03',
      title: 'Наименование опции',
      info: 'Здесь нам необходим текст, который в общих чертах расскажет про то, какие качетсвенные услуги представляет компания. Не забыть упомянуть высокотехнологичность домов и апартаментов и премиальный уровень класса',
      price: '3200 '
      },
    {
      idx: '04',
      title: 'Наименование опции',
      info: 'Здесь нам необходим текст, который в общих чертах расскажет про то, какие качетсвенные услуги представляет компания. Не забыть упомянуть высокотехнологичность домов и апартаментов и премиальный уровень класса',
      price: '3200 '
      },
    {
      idx: '05',
      title: 'Наименование опции',
      info: 'Здесь нам необходим текст, который в общих чертах расскажет про то, какие качетсвенные услуги представляет компания. Не забыть упомянуть высокотехнологичность домов и апартаментов и премиальный уровень класса',
      price: '3200 '
      },
  ]
</script>

<style lang="scss" scoped>
  @import './index.scss';
</style>