<template>
<section class="name">
  <div class="name-info">
    <Title :title="'Название гостевого дома'"></Title>
  <p class="name__text">
    Situé au reLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
  </p>
  </div>
</section>
</template>

<script setup>

import Title from '@/components/ui/simple-title/simple-title'

</script>

<style lang="scss" scoped>
@import './index.scss';
</style>