<template>
  <section class="container flex justify-between mt-[8.3125rem]">
    <div>
      <SimpleTitle title="Как нас найти?" />
      <h3 class="subtitle">Адрес</h3>
      <ul class="list">
        <li class="list__item">
          <a href=""> Lorem ipsum dolor sit amet </a>
        </li>
        <li class="list__item">
          <a href=""> Lorem ipsum dolor sit amet </a>
        </li>
      </ul>
      <h3 class="subtitle">Координаты для навигатора</h3>
      <ul class="list">
        <li class="list__item">
          <a href="" class="flex items-start">
            55.777044 37.555554.
            <img src="~/assets/icons/copy.svg" alt="скопировать" />
          </a>
        </li>
      </ul>
      <h3 class="subtitle">Email</h3>
      <ul class="list">
        <li class="list__item">
          <a href=""> Lorem ipsum dolor sit amet </a>
        </li>
      </ul>
      <h3 class="subtitle">Контактный телефон</h3>
      <ul class="list">
        <li class="list__item">
          <a href="tel:8-800-000-00-00"> 8-800-000-00-00 </a>
        </li>
      </ul>
    </div>
    <no-ssr>
      <iframe
        src="https://yandex.ru/map-widget/v1/-/CCUVE0hjXC"
        frameborder="1"
        allowfullscreen="true"
        class="map"
      ></iframe>
    </no-ssr>
  </section>
</template>

<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps'
import SimpleTitle from '~/components/ui/simple-title/simple-title.vue'

export default {
  name: 'TheContacts',
  components: { SimpleTitle, yandexMap, ymapMarker },
  data() {
    return {
      coords: [54.82896654088406, 39.831893822753904],
    }
  },
}
</script>

<style lang="scss" scoped>
.subtitle {
  font-weight: 450;
  font-size: 1.5rem;
  line-height: 1.8125rem;
  margin-top: 1.75rem;
}

.list {
  font-weight: 450;
  font-size: 1.125rem;
  margin-top: 0.75rem;
  line-height: 1.75rem;
}

.map {
  flex: 1;
  margin-left: 5.25rem;
}
</style>
