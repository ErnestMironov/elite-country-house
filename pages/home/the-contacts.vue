<template>
  <section id="contacts" class="container flex justify-between mt-[8.3125rem]">
    <div>
      <SimpleTitle title="Как нас найти?" />
      <h3 class="subtitle">{{ data.addressTitle }}</h3>
      <ul class="list">
        <li
          v-for="address in data.address"
          :key="address.id"
          class="list__item"
        >
          <a href=""> {{ address.text }} </a>
        </li>
      </ul>
      <h3 class="subtitle">{{ data.coordinatesTitle }}</h3>
      <ul class="list">
        <li class="list__item">
          <a href="" class="flex items-start">
            55.777044 37.555554.
            <img src="~/assets/icons/copy.svg" alt="скопировать" />
          </a>
        </li>
      </ul>
      <h3 class="subtitle">{{ data.emailTitle }}</h3>
      <ul class="list">
        <li class="list__item">
          <a :href="`mailto:${data.email}`"> {{ data.email }} </a>
        </li>
      </ul>
      <h3 class="subtitle">{{ data.phoneTitle }}</h3>
      <ul class="list">
        <li class="list__item">
          <a :href="`tel:${data.phone}`"> {{ data.phone }} </a>
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
  props: ['data'],
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
