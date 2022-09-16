<template>
  <section class="container mt-[7.5rem]">
    <SimpleTitle title="Перечисление преимуществ" />
    <ul class="list">
      <li v-for="feature in data" :key="feature.id" class="list-item">
        <img
          :src="`http://185.46.10.102:1337${feature?.image?.url}`"
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
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.list-item {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: 3rem;
  border-top: 0.0625rem solid #000;
  margin-top: 3.6875rem;

  &__img {
    width: 43rem;
    object-fit: cover;
    margin-right: 6.9375rem;
  }

  &__title {
    font-family: 'Cormorant';
    font-weight: 500;
    font-size: 1.75rem;
    line-height: 2.25rem;
  }

  &__text {
    font-weight: 400;
    font-size: 1.125rem;
    flex: 1;
    line-height: 1.75rem;

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
      }

      &__text {
        order: 0;
      }
    }
  }
}
</style>
