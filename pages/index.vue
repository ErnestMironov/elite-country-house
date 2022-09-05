<template>
  <main class="relative pb-[11.25rem] overflow-hidden">
    <img src="~/assets/images/home-bg.svg" class="decoration" alt="" />
    <TheHero :data="data.hero" />
    <TheServices :data="data.services" />
    <TheObjects />
    <GuestHouses />
    <TheBathhouses />
    <TheAdvantages />
    <TheIgora :data="data.igora" />
    <CompanyValues :data="data.philosophy" />
    <TheContacts :data="data.contacts" />
  </main>
</template>

<script lang="ts">
import CompanyValues from './home/company-values.vue'
import GuestHouses from './home/guest-houses.vue'
import TheAdvantages from './home/the-advantages.vue'
import TheBathhouses from './home/the-bathhouses.vue'
import TheContacts from './home/the-contacts.vue'
import TheHero from './home/the-hero.vue'
import TheIgora from './home/the-igora.vue'
import TheObjects from './home/the-objects.vue'
import TheServices from './home/the-services.vue'

const scrollIntoView = require('scroll-into-view')

export default {
  name: 'IndexPage',
  components: {
    TheHero,
    TheServices,
    TheObjects,
    GuestHouses,
    TheBathhouses,
    TheAdvantages,
    TheIgora,
    CompanyValues,
    TheContacts,
  },
  async asyncData({ $http }) {
    const data = (await $http.$get('main?populate=deep,10')).data

    return { data }
  },
  head() {
    return {
      title: 'Гедонист',
    }
  },

  mounted() {
    // if (this.$route.path.contains('#')) {
    //   // scrollIntoView(document.querySelector(link))
    // }
    if (this.$route.fullPath.includes('#')) {
      scrollIntoView(
        document.querySelector(this.$route.fullPath.replace('/', ''))
      )
    }
  },
}
</script>

<style lang="scss" scoped>
.decoration {
  position: absolute;
  bottom: -17.6rem;
  left: 0;
  width: 100%;
  z-index: -1;
}
</style>
