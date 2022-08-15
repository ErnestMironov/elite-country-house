<template>
  <main>
    <TheHero />
    <TheServices />
    <TheObjects />
    <GuestHouses />
    <TheBathhouses />
  </main>
</template>

<script lang="ts">
import GuestHouses from './home/guest-houses.vue'
import TheBathhouses from './home/the-bathhouses.vue'
import TheHero from './home/the-hero.vue'
import TheObjects from './home/the-objects.vue'
import TheServices from './home/the-services.vue'

export default {
  name: 'IndexPage',
  components: { TheHero, TheServices, TheObjects, GuestHouses, TheBathhouses },
  head() {
    return {
      title: 'Гедонист',
    }
  },
}
</script>
