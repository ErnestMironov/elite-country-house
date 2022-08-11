<template>
  <main>
    <TheHero />
    <TheServices />
    <TheObjects />
  </main>
</template>

<script lang="ts">
import TheHero from './home/the-hero.vue'
import TheObjects from './home/the-objects.vue'
import TheServices from './home/the-services.vue'

export default {
  name: 'IndexPage',
  components: { TheHero, TheServices, TheObjects },
  head() {
    return {
      title: 'Гедонист',
    }
  },
}
</script>
