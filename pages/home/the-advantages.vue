<template>
  <section id="advantages" class="container advantages">
    <div class="head">
      <SimpleTitle title="Чем можно похвастаться" />
      <p class="max-w-[33.1875rem] description">
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
@import '@/assets/styles/scss/mixins';

.advantages {
  margin-top: 10.5rem;

  @include tablet {
    margin-top: 96px;
  }
}

.head {
  display: flex;
  justify-content: space-between;

  @include tablet {
    display: block;
  }
}

.description {
  @include tablet {
    font-size: 14px;
    line-height: 24px;
    max-width: 100%;
    margin-top: 18px;
  }
}

.list {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 5.1875rem;

  @include tablet {
    display: block;
  }

  &__item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-left: 0.125rem solid #000;
    padding-left: 1.125rem;

    @include tablet {
      padding-left: 18px;
    }

    &:first-of-type {
      flex-grow: 1;
    }

    &:not(:last-of-type) {
      margin-right: 3.4375rem;

      @include tablet {
        margin-right: 0;
        margin-bottom: 36px;
      }
    }

    h3 {
      margin-bottom: 4.625rem;
      font-weight: 300;
      font-size: 3rem;
      line-height: 3rem;

      @include tablet {
        font-weight: 300;
        font-size: 36px;
        line-height: 48px;
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
  }
}
</style>
