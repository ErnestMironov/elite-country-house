<template>
  <section id="services" class="container mt-[8.5625rem]">
    <div class="flex justify-between">
      <SimpleTitle :title="data.title" />
      <p class="text">
        {{ data.description }}
      </p>
    </div>
    <div class="grid grid-cols-3 gap-x-6 mt-[3.75rem]">
      <nuxt-link
        v-for="(service, idx) in data.servicesList"
        :key="service.title"
        :to="servicesLinks[idx]"
        class="service"
      >
        <h3 class="service__title">{{ service.title }}</h3>
        <img
          :src="`http://185.46.10.102:1337${service.image.url}`"
          :alt="service.title + ' изображение'"
          class="service__img"
        />
        <div class="service__link" href="">Перейти</div>
      </nuxt-link>
    </div>
  </section>
</template>

<script>
import SimpleTitle from '~/components/ui/simple-title/simple-title.vue'

export default {
  name: 'TheServices',
  components: { SimpleTitle },
  props: ['data'],
  data() {
    return {
      servicesLinks: ['/guest-house', '/bath-house', '/apartments'],
    }
  },
}
</script>

<style lang="scss" scoped>
.text {
  font-size: 1.125rem;
  line-height: 1.75rem;
  max-width: 33.3125rem;
}

.service {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &:hover {
    .service__link {
      transform: translateX(0);
    }
  }

  &__title {
    font-size: 1.125rem;
    line-height: 1.375rem;
    margin-bottom: 0.75rem;
  }

  &__img {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    object-position: center;
  }

  &__link {
    align-self: flex-end;
    display: inline-flex;
    align-items: center;
    color: #28242380;
    transform: translateX(100%);
    transition: transform cubic-bezier(0.075, 0.82, 0.165, 1) 0.2s;
    margin-top: 0.5rem;

    &::after {
      content: '';
      height: 1px;
      background-color: var(--text-color);
      width: 2rem;
      margin-left: 0.5rem;
      position: relative;
      top: 0.1rem;
    }
  }
}
</style>
