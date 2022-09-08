<template>
  <section id="advantages" class="container mt-[10.5rem]">
    <div class="flex justify-between">
      <SimpleTitle title="Чем можно похвастаться" />
      <p class="max-w-[33.1875rem]">
        {{ data?.description }}
      </p>
    </div>
    <ul class="list">
      <li
        v-for="advantage of data?.advantages"
        :key="advantage.id"
        class="list__item"
      >
        <h3>{{ advantage.value }}</h3>
        <p>{{ advantage.text }}</p>
      </li>
    </ul>
  </section>
</template>

<script>
import SimpleTitle from '~/components/ui/simple-title/simple-title.vue'
export default {
  name: 'TheAdvantages',
  components: { SimpleTitle },
  props: ['data'],
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
