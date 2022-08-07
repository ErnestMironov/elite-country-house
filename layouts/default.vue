<template>
  <div>
    <TheHeader />
    <Nuxt />
    <TheFooter />
  </div>
</template>

<script>
import TheFooter from '@/components/the-footer.vue'
import TheHeader from '@/components/the-header.vue'
export default { components: { TheHeader, TheFooter } }
</script>

<style lang="scss" scoped>
@import '@/assets/styles/common'
</style>
