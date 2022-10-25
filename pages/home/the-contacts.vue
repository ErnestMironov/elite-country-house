<template>
  <section id="contacts" class="container contacts">
    <div>
      <SimpleTitle title="Как нас найти?" />
      <div v-if="isMounted" class="hide-on-desktop mb-[48px]">
        <yandex-map
          :coords="[59.92520765443169, 30.342260232398356]"
          :zoom="8"
          class="map"
        >
          <ymap-marker
            v-for="coordinate of data.coordinate"
            :key="coordinate.text"
            marker-id="123"
            marker-type="placemark"
            hint-content="element.hint"
            :coords="coordinate.text | convertStringToArr"
          ></ymap-marker>
        </yandex-map>
      </div>
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
          class="list__item cursor-pointer"
          @click="copyText(coordinate.text)"
        >
          <span href="" class="flex items-start">
            {{ coordinate.text }}
            <img
              class="ml-2"
              src="~/assets/icons/copy.svg"
              alt="скопировать"
              title="скопировать"
            />
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
    <div v-if="isMounted" class="hide-on-mobile">
      <yandex-map
        :coords="data?.coordinate[0].text | convertStringToArr"
        :zoom="8"
        class="map"
      >
        <ymap-marker
          v-for="coordinate of data?.coordinate"
          :key="coordinate.text"
          marker-id="123"
          marker-type="placemark"
          hint-content="element.hint"
          :coords="coordinate.text | convertStringToArr"
        ></ymap-marker>
      </yandex-map>
    </div>
    <!-- <iframe
        src="https://yandex.ru/map-widget/v1/-/CCUVE0hjXC"
        frameborder="1"
        allowfullscreen="true"
        class="map hide-on-mobile"
      ></iframe> -->
  </section>
</template>

<script>
import SimpleTitle from '~/components/ui/simple-title/simple-title.vue'

export default {
  name: 'TheContacts',
  components: { SimpleTitle },
  filters: {
    convertStringToArr(val) {
      return val.split(' ')
    },
  },
  props: ['data'],
  data() {
    return {
      settings: {
        apiKey: '2a51d234-e1e7-496f-9478-a9a99d9d9673',
        lang: 'ru_RU',
        coordorder: 'latlong',
        version: '2.1',
      },
      isMounted: false,
    }
  },
  mounted() {
    this.isMounted = true
  },
  methods: {
    copyText(text) {
      console.log('====================================')
      console.log(navigator)
      console.log('====================================')
      navigator?.clipboard?.writeText(text)
    },
  },
}
</script>

<style lang="scss">
@import '@/assets/styles/scss/mixins';
.ymap-container {
  height: 31.4375rem;
  width: 48.6875rem;
}
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
