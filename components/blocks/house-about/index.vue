<template>
  <section class="about">
    <Title :title="'Почему это круто'" />
    <div class="about-wrapper">
      <div class="about__images-wrapper">
        <img
          class="about__img about__img--1"
          src="../../../assets/imgs/house-about_1.jpg"
          alt="about"
        />
        <img
          class="about__img about__img--2"
          src="../../../assets/imgs/house-about_2.jpg"
          alt="about"
        />
        <img
          class="about__img about__img--3"
          src="../../../assets/imgs/house-about_3.jpg"
          alt="about"
        />
      </div>
      <div class="about-info">
        <div v-for="feature in props.features" :key="feature.id" class="about-info__card">
          <span>{{ feature.id }}</span>
          <h4 class="info-title">
            {{ feature.title }}
          </h4>
          <p class="info-block">{{ feature.description }}</p>
        </div>
        <!-- <div v-for="card in mock" :key="card.idx" class="about-info__card">
          <span>{{ card.idx }}</span>
          <h4 class="info-title">
            {{ card.title }}
          </h4>
          <p class="info-block">{{ card.info }}</p>
        </div> -->
      </div>
    </div>
  </section>
</template>

<script setup>
import Title from '@/components/ui/simple-title/simple-title'

const mock = [
  {
    idx: '01',
    title: 'Наименование крутоты',
    info: 'Здесь нам необходим текст, который в общих чертах расскажет про то, какие качетсвенные услуги представляет компания. Не забыть упомянуть высокотехнологичность домов и апартаментов и премиальный уровень класса',
  },
  {
    idx: '02',
    title: 'Наименование крутоты',
    info: 'Здесь нам необходим текст, который в общих чертах расскажет про то, какие качетсвенные услуги представляет компания. Не забыть упомянуть высокотехнологичность домов и апартаментов и премиальный уровень класса',
  },
  {
    idx: '03',
    title: 'Наименование крутоты',
    info: 'Здесь нам необходим текст, который в общих чертах расскажет про то, какие качетсвенные услуги представляет компания. Не забыть упомянуть высокотехнологичность домов и апартаментов и премиальный уровень класса',
  },
]

const props = defineProps({
      features: {
        // type:any[],
        default: []
        },
    })
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
