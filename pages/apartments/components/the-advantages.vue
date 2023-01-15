<template>
  <section class="container mt-[7.5rem] pb-[10rem]">
    <SimpleTitle title="Перечисление преимуществ" />
    <ul class="list">
      <li v-for="feature in data" :key="feature.id" class="list-item">
        <img
          :src="`https://admin.hedonistclub.ru${feature?.image?.url}`"
          alt=""
          class="list-item__img"
        />
        <div class="list-item__text">
          <h3 class="list-item__title">{{ feature?.title }}</h3>
          <p>
            {{ feature?.description }}
          </p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import SimpleTitle from '~/components/ui/simple-title/simple-title.vue'
export default {
  name: 'TheAdvantages',
  components: { SimpleTitle },
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/scss/mixins.scss';

.list-item {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: 3rem;
  border-top: 0.0625rem solid #000;
  margin-top: 3.6875rem;

  @include mobile {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 15px;
  }

  &__img {
    width: 43rem;
    object-fit: cover;
    margin-right: 6.9375rem;

    @include mobile {
      margin-right: 0;
      margin-bottom: 10px;
      width: 100%;
    }
  }

  &__title {
    font-family: 'Cormorant';
    font-weight: 500;
    font-size: 1.75rem;
    line-height: 2.25rem;

    @include mobile {
      font-size: 20px;
      line-height: 1.5;
    }
  }

  &__text {
    font-weight: 400;
    font-size: 1.125rem;
    flex: 1;
    line-height: 1.75rem;

    @include mobile {
      font-size: 16px;
      line-height: 1.5;
    }

    p {
      margin-top: 1.125rem;
    }
  }

  &:nth-child(even) {
    .list-item {
      &__img {
        margin-right: 0;
        margin-left: 6.9375rem;
        order: 1;

        @include mobile {
          margin-left: 0;
          order: 0;
        }
      }

      &__text {
        order: 0;
      }
    }
  }
}
</style>
