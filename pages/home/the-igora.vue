<template>
  <section class="container mt-[8.5625rem]">
    <SimpleTitle title="Всесезонный развлекательный комплекс “Игора”" />
    <ul class="list">
      <li
        v-for="(card, idx) of data.entertainment"
        :key="card.title + card?.description"
        class="list__item"
      >
        <h3>{{ card.title }}</h3>
        <p>
          {{ card?.description }}
        </p>
        <img :src="images[idx]" alt="" class="list__item-bg" />
      </li>
    </ul>
  </section>
</template>

<script>
import firstImage from '~/assets/images/mock/igora/1.jpg'
import secondImage from '~/assets/images/mock/igora/2.jpg'
import thirdImage from '~/assets/images/mock/igora/3.jpg'
import fourthImage from '~/assets/images/mock/igora/4.jpg'
import SimpleTitle from '~/components/ui/simple-title/simple-title.vue'

export default {
  name: 'TheIgora',
  components: { SimpleTitle },
  props: ['data'],
  data() {
    return {
      images: [firstImage, secondImage, thirdImage, fourthImage],
    }
  },
}
</script>

<style lang="scss" scoped>
.list {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1.5rem;
  padding-left: 13.9375rem;
  margin-top: 3.75rem;

  &__item {
    background: #eee;
    transform: translateZ(0);
    grid-column: 1/7;
    position: relative;
    padding: 2.25rem 3rem;

    h3 {
      font-family: 'Cormorant';
      font-weight: 500;
      font-size: 2.25rem;
      line-height: 3rem;
      margin-bottom: 1.5rem;
    }

    p {
      font-size: 1.125rem;
      line-height: 1.75rem;
    }

    &:nth-of-type(4n + 2) {
      grid-column: 7/-1;
    }

    &:nth-of-type(4n + 3) {
      grid-column: 1/6;
    }
    &:nth-of-type(4n + 4) {
      grid-column: 6/-1;
    }
  }

  &__item-bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.2;
  }
}
</style>
