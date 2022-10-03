<template>
  <section class="functional">
    <div class="functional-wrapper">
      <div class="functional__title-wrapper">
        <Title :title="'Функционал'" />
      </div>

      <div class="functional__border-top"></div>
      <div v-for="row in options" :key="row.idx" class="functional__row">
        <img
          class="functional__img"
          :src="`http://185.46.10.102:1337${row.image.url}`"
          alt="function"
        />
        <div class="functional__row-info">
          <h4 class="info-title">{{ row.title }}</h4>
          <p class="info-block">{{ row.description }}</p>
          <span
            >{{ row.price }}
            <img
              class="functional__ticker"
              src="../../../assets/icons/rouble.svg"
              alt="roubles"
          /></span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Title from '@/components/ui/simple-title/simple-title'

  export default{

    components: {
      Title
    },
    props:{
      options: {
        type: Array,
        default: () => []
      },
    },
}

</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
