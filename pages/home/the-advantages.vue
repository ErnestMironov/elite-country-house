<template>
  <section class="container mt-[10.5rem]">
    <div class="flex justify-between">
      <SimpleTitle title="Чем можно похвастаться" />
      <p class="max-w-[33.1875rem]">
        Довольно короткий текст о том, каких успехов достиг клуб за это время,
        что-то про исключительно положительные отзывы, возвращающихся клиентов и
        так далее
      </p>
    </div>
    <ul class="list">
      <li class="list__item">
        <h3>Около 10 000кв. м.</h3>
        <p>Площадь земли в девственном лесу</p>
      </li>
      <li class="list__item">
        <h3>40 мин.</h3>
        <p>Время в пути</p>
      </li>
      <li class="list__item">
        <h3>100 лет</h3>
        <p>
          Возраст кело в <br />
          контрукции бани
        </p>
      </li>
      <li class="list__item">
        <h3>3 км</h3>
        <p>До курорта “Игора”</p>
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
.list {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 5.1875rem;

  &__item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-left: 0.125rem solid #000;
    padding-left: 1.125rem;

    &:first-of-type {
      flex-grow: 1;
    }

    &:not(:last-of-type) {
      margin-right: 3.4375rem;
    }

    h3 {
      margin-bottom: 4.625rem;
      font-weight: 300;
      font-size: 3rem;
      line-height: 3rem;
    }

    p {
      font-size: 1.125rem;
      line-height: 1.75rem;
    }
  }
}
</style>
