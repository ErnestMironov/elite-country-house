<template>
  <main class="relative pb-[11.25rem] overflow-hidden">
    <img
      ref="decoration"
      src="~/assets/images/home-bg.svg"
      class="decoration"
      alt=""
    />
    <TheHero :data="data.hero" />
    <TheServices :data="data.services" />
    <GuestHouses />
    <TheBathhouses />
    <TheApartments />
    <TheAdvantages :data="data.preferences" />
    <TheIgora :data="data.igora" />
    <CompanyValues :data="data.philosophy" />
    <TheContacts :data="data.contacts" />
  </main>
</template>

<script lang="ts">
import { data } from 'browserslist'
import CompanyValues from './home/company-values.vue'
import GuestHouses from './home/guest-houses.vue'
import TheAdvantages from './home/the-advantages.vue'
import TheApartments from './home/the-apartments.vue'
import TheBathhouses from './home/the-bathhouses.vue'
import TheContacts from './home/the-contacts.vue'
import TheHero from './home/the-hero.vue'
import TheIgora from './home/the-igora.vue'
import TheServices from './home/the-services.vue'

const scrollIntoView = require('scroll-into-view')

export default {
  name: 'IndexPage',
  components: {
    TheHero,
    TheServices,
    TheApartments,
    GuestHouses,
    TheBathhouses,
    TheAdvantages,
    TheIgora,
    CompanyValues,
    TheContacts,
  },
  // @ts-ignore
  async asyncData({ $http }) {
    const data = (await $http.$get('main?populate=deep,10')).data

    return { data }
  },
  // @ts-ignore
  head() {
    return {
      title: 'Гедонист',
      meta: [
        {
          name: 'description',
          // @ts-ignore
          content: this.data?.hero?.description,
        },
        {
          property: 'og:title',
          hid: 'og:title',
          content: 'Гедонист',
        },
        {
          property: 'og:type',
          hid: 'og:type',
          content: 'website',
        },
        {
          property: 'og:description',
          hid: 'og:description',
          // @ts-ignore
          content: this.data?.hero?.description,
        },
        {
          property: 'og:image',
          hid: 'og:image',
          // @ts-ignore
          content: `https://admin.hedonistclub.ru${this.data?.hero?.images[0].url}`,
        },
      ],
    }
  },
  mounted() {
    // if (this.$route.path.contains('#')) {
    //   // scrollIntoView(document.querySelector(link))
    // }

    // @ts-ignore
    if (this.$route.fullPath.includes('#')) {
      scrollIntoView(
        // @ts-ignore
        document.querySelector(this.$route.fullPath.replace('/', ''))
      )
    }
    if (process.browser) {
      window.addEventListener('scroll', (e) => {
        // @ts-ignore
        this.$refs.decoration.style.transform = `translateY(${
          window.scrollY * 0.08
        }px)`
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.decoration {
  position: absolute;
  bottom: -6rem;
  left: 0;
  width: 100%;
  z-index: -1;
}
</style>
