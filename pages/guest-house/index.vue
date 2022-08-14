<template>
  <div class="house-wrapper">
    <section class="container">
      <HouseName />
    </section>

    <HouseParameters />

    <section class="container">
      <HouseAbout />
    </section>

    <section class="container">
      <HouseFunctional />
    </section>
  </div>
</template>

<script setup>
import HouseAbout from '@/components/blocks/house-about'
import HouseName from '@/components/blocks/house-name'
import HouseParameters from '@/components/blocks/house-parameters'
import HouseFunctional from '@/components/blocks/house-functional'

// import Swiper from 'swiper/swiper-bundle.min'
// import 'swiper/swiper-bundle.min.css'
console.log('hello script setup')

// const onSwiper = (swiper) => {
//       console.log(swiper);
//     };
//     const onSlideChange = () => {
//       console.log('slide change');
//     };
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
