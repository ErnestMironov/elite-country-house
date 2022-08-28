<template>
  <main>
    <TheHero />
    <TheServices />
    <TheObjects />
    <GuestHouses />
    <TheBathhouses />
    <TheAdvantages />
    <TheIgora />
    <CompanyValues />
    <TheContacts />
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
  head() {
    return {
      title: 'Гедонист',
    }
  },
}
</script>
