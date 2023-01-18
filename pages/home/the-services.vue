<template>
  <section id="services" class="container mt-[8.5625rem]">
    <div class="flex justify-between">
      <SimpleTitle :title="data.title" />
      <p class="text hide-on-mobile">
        {{ data?.description }}
      </p>
    </div>
    <div class="services__list grid-cols-3 gap-x-6 mt-[48px] lg:mt-[3.75rem]">
      <a
        v-for="(service, idx) in data.servicesList"
        :key="service.title"
        :data-wow-delay="idx * 0.2 + 's'"
        class="service wow animate__animated animate__fadeInLeft animate__faster"
        @click="goToTheLink(servicesLinks[idx])"
      >
        <h3 class="service__title">{{ service.title }}</h3>
        <img
          :src="`https://admin.hedonistclub.ru${service.image.url}`"
          :alt="service.title + ' изображение'"
          class="service__img"
        />
        <div class="service__link" href="">Перейти</div>
      </a>
    </div>
    <p class="text hide-on-desktop">
      {{ data?.description }}
    </p>
  </section>
</template>

<script>
import SimpleTitle from '~/components/ui/simple-title/simple-title.vue'
const scrollIntoView = require('scroll-into-view')

export default {
  name: 'TheServices',
  components: { SimpleTitle },
  props: ['data'],
  data() {
    return {
      servicesLinks: ['#guesthouses', '#bathhouses', '#apartments'],
    }
  },
  methods: {
    goToTheLink(link) {
      if ($nuxt.$route.path === '/') {
        scrollIntoView(document.querySelector(link))
        return
      }

      this.$nuxt.$router.push(`/${link}`)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/scss/mixins';

.services {
  &__list {
    display: grid;

    @include mobile {
      display: block;
    }
  }
}

.text {
  font-size: 1.125rem;
  line-height: 1.75rem;
  max-width: 33.3125rem;

  @include tablet {
    font-size: 14px;
    line-height: 24px;
    max-width: 100%;
  }
}

.service {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @include tablet {
    margin-bottom: 36px;
  }

  &:hover {
    .service__link {
      transform: translateX(0);
    }
  }

  &__title {
    font-size: 1.125rem;
    line-height: 1.375rem;
    margin-bottom: 0.75rem;
    font-weight: 450;

    @include tablet {
      font-size: 18px;
      line-height: 22px;
      margin-bottom: 12px;
    }
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
