<template>
  <section class="container mt-[7.5rem]">
    <SimpleTitle title="Перечисление преимуществ" />
    <ul class="list">
      <li v-for="i in 5" :key="i" class="list-item">
        <img
          src="https://langformula.ru/wp-content/uploads/2019/04/house.jpg"
          alt=""
          class="list-item__img"
        />
        <div class="list-item__text">
          <h3 class="list-item__title">Наименование крутоты</h3>
          <p>
            Здесь нам необходим текст, который в общих чертах расскажет про то,
            какие качественные услуги представляет компания. Не забыть упомянуть
            высокотехнологичность домов и апартаментов и премиальный уровень
            класса
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
}
</script>

<style lang="scss" scoped>
.list-item {
  display: flex;
  align-items: flex-start;
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
