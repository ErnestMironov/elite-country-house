<template>
  <section class="about">
    <Title :title="'Особенности'" />
    <div class="about-wrapper">
      <div class="about__images-wrapper">
        <img
          v-if="features.length > 0"
          class="about__img about__img--1"
          src="../../../assets/imgs/house-about_1.jpg"
          alt="about"
        />
        <img
          v-if="features.length > 1"
          class="about__img about__img--2"
          src="../../../assets/imgs/house-about_2.jpg"
          alt="about"
        />
        <img
          v-if="features.length > 2"
          class="about__img about__img--3"
          src="../../../assets/imgs/house-about_3.jpg"
          alt="about"
        />
      </div>
      <div class="about-info">
        <div
          v-for="(feature, idx) in features"
          :key="feature.id"
          class="about-info__card"
        >
          <span>{{ idx + 1 }}</span>
          <h4 class="info-title">
            {{ feature.title }}
          </h4>
          <p class="info-block">{{ feature?.description }}</p>
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

<script>
import Title from '@/components/ui/simple-title/simple-title'

export default {
  components: {
    Title,
  },
  props: {
    features: {
      type: Array,
    },
  },
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
