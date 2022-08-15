<template>
  <section class="container mt-[8.5625rem]">
    <div class="flex justify-between">
      <SimpleTitle title="Ассортимент услуг" />
      <p class="text">
        Здесь нам необходим текст, который в общих чертах расскажет про то,
        какие качетсвенные услуги представляет компания. Не забыть упомянуть
        высокотехнологичность домов и апартаментов и премиальный уровень класса
        домом. Если если перечень отдыха “не на один день” упомянуть, что в доме
        не становится скучно на 2й и 3й день.
      </p>
    </div>
    <div class="grid grid-cols-3 gap-x-6 mt-[3.75rem]">
      <a
        v-for="service in services"
        :key="service.title"
        :href="service.link"
        class="service"
      >
        <h3 class="service__title">{{ service.title }}</h3>
        <img
          :src="service.img"
          :alt="service.title + ' изображение'"
          class="service__img"
        />
        <div class="service__link" href="">Перейти</div>
      </a>
    </div>
  </section>
</template>

<script>
import SimpleTitle from '~/components/ui/simple-title/simple-title.vue'

import firstServiceImg from '~/assets/images/mock/home_page_objects_1.jpg'
import secondServiceImg from '~/assets/images/mock/home_page_objects_2.jpg'
import thirdServiceImg from '~/assets/images/mock/home_page_objects_3.jpg'

export default {
  name: 'TheServices',
  components: { SimpleTitle },
  data() {
    return {
      services: [
        {
          img: firstServiceImg,
          title: 'Апартаменты',
          link: '/',
        },
        {
          img: secondServiceImg,
          title: 'Гостевые дома',
          link: '/',
        },
        {
          img: thirdServiceImg,
          title: 'Баня',
          link: '/',
        },
      ],
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
