<template>
  <main>
    <TheHero />
    <TheServices />
    <TheObjects />
    <GuestHouses />
  </main>
</template>

<script lang="ts">
import GuestHouses from './home/guest-houses.vue'
import TheHero from './home/the-hero.vue'
import TheObjects from './home/the-objects.vue'
import TheServices from './home/the-services.vue'

export default {
  name: 'IndexPage',
  components: { TheHero, TheServices, TheObjects, GuestHouses },
  head() {
    return {
      title: 'Гедонист',
    }
  },
}
</script>
