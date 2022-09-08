<template>
  <section id="contacts" class="container contacts">
    <div>
      <SimpleTitle title="Как нас найти?" />
      <no-ssr>
        <iframe
          src="https://yandex.ru/map-widget/v1/-/CCUVE0hjXC"
          frameborder="1"
          allowfullscreen="true"
          class="map hide-on-desktop"
        ></iframe>
      </no-ssr>
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
        <li
          v-for="coordinate of data.coordinate"
          :key="coordinate.id"
          class="list__item"
          @click="copyText(coordinate.text)"
        >
          <span href="" class="flex items-start">
            {{ coordinate.text }}
            <button>
              <img
                src="~/assets/icons/copy.svg"
                alt="скопировать"
                title="скопировать"
              />
            </button>
          </span>
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
        class="map hide-on-mobile"
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
  methods: {
    copyText(text) {
      navigator.clipboard.writeText(text)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/scss/mixins';

.contacts {
  display: flex;
  justify-content: space-between;
  margin-top: 8.3125rem;

  @include tablet {
    margin-top: 160px;
    display: block;
  }
}

.subtitle {
  font-weight: 450;
  font-size: 1.5rem;
  line-height: 1.8125rem;
  margin-top: 1.75rem;

  @include tablet {
    font-size: 24px;
    line-height: 29px;
  }
}

.list {
  font-weight: 450;
  font-size: 1.125rem;
  margin-top: 0.75rem;
  line-height: 1.75rem;

  @include tablet {
    font-weight: 450;
    font-size: 18px;
    line-height: 28px;
    margin-top: 28px;
  }
}

.map {
  flex: 1;
  margin-left: 5.25rem;

  @include tablet {
    margin-left: 0;
    width: 100%;
    margin-top: 40px;
    height: 100vw;
  }
}
</style>
