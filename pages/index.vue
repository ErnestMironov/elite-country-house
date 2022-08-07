<template>
  <main>
    <TheHero />
  </main>
</template>

<script lang="ts">
import TheHero from './home/the-hero.vue'
export default {
  name: 'IndexPage',
  components: { TheHero },
  head() {
    return {
      title: 'Гедонист',
    }
  },
}
</script>
