<template>
  <section class="about">
    <SimpleTitle :title="'Почему это круто'" />
    <div class="about-wrapper">
      <div class="about__images-wrapper">
        <img
          v-for="card of data"
          :key="card.id"
          class="about__img about__img--1"
          :src="`https://admin.hedonistclub.ru${card?.image?.url}`"
          :alt="card?.image?.alternativeText"
        />
      </div>
      <div class="about-info">
        <div
          v-for="(card, idx) of data"
          :key="card.id"
          class="about-info__card"
        >
          <span>{{ idx }}</span>
          <h4 class="info-title">
            {{ card.title }}
          </h4>
          <p class="info-block">{{ card.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SimpleTitle from '~/components/ui/simple-title/simple-title.vue'
export default {
  components: { SimpleTitle },
  props: ['data'],
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
