<template>
  <section class="parameters">
    <div class="swiper-container"></div>
    <div class="parameters-wrapper">
      <Title :title="'Параметры'" is-light></Title>
      <div class="parameters-info">
        <div class="parameters__property">
          <h3>{{mock.cost}}</h3>
          <span>Стоимость аренды</span>
        </div>
        <div class="parameters__property">
          <h3>{{mock.floors}}</h3>
          <span>{{createFloorsString(mock.floors)}}</span>
          <!-- <span>Этажа</span> -->
        </div>
        <div class="parameters__property">
          <h3>{{mock.rooms}}</h3>
          <span>Комнаты</span>
        </div>
        <div class="parameters__property">
          <h3>{{mock.square + ' m²'}}</h3>
          <span>Площадь</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import Title from '@/components/ui/simple-title/simple-title'
  import {createFloorsString }from '@/helpers/helpers'

  const mock ={
    cost: 50000,
    floors: 2,
    rooms: 4, 
    square: 145
  }

</script>

<style lang="scss" scoped>
  @import './index.scss';
</style>