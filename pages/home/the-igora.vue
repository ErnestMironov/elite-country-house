<template>
  <section class="container igora">
    <SimpleTitle title="Всесезонный развлекательный комплекс “Игора”" />
    <ul class="list">
      <li
        v-for="(card, idx) of data.entertainment"
        :key="card.title + card?.description"
        class="list__item"
        :class="{
          'wow animate__animated animate__fadeInRight': idx === 0,
          'wow animate__animated animate__fadeInLeft': idx === 3,
        }"
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
@import '@/assets/styles/scss/mixins';

.igora {
  margin-top: 8.5625rem;
  @include tablet {
    margin-top: 96px;
  }
}

.list {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1.5rem;
  padding-left: 13.9375rem;
  margin-top: 3.75rem;

  @include tablet {
    padding-left: 0;
    display: block;
    margin-top: 57px;
  }

  &__item {
    background: #eee;
    transform: translateZ(0);
    grid-column: 1/7;
    position: relative;
    padding: 2.25rem 3rem;

    @include tablet {
      margin-bottom: 32px;
    }

    h3 {
      font-family: 'Cormorant';
      font-weight: 500;
      font-size: 2.25rem;
      line-height: 3rem;
      margin-bottom: 1.5rem;

      @include tablet {
        font-weight: 450;
        font-size: 18px;
        line-height: 22px;
      }
    }

    p {
      font-size: 1.125rem;
      line-height: 1.75rem;

      @include tablet {
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
      }
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
