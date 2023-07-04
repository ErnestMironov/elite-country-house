<template>
  <div class="booking-wrapper booking-2">
    <div class="booking__images-wrapper">
      <img src="@/assets/images/bathhouse_1.jpg" alt="bathhouse" />
      <img src="@/assets/images/bathhouse_2.jpg" alt="bathhouse" />
    </div>

    <div class="booking__info-container">
      <div class="booking__info-wrapper">
        <h3 class="booking__header booking__header--bathhouse">
          Хотите забронировать баню?
        </h3>

        <p class="booking__paragraph">
          Situé au reLorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <h3
          class="booking__header booking__price-header booking__header--bathhouse"
        >
          Стоимость бронирования бани
        </h3>
        <div class="booking__price">
          от 3600
          <img
            src="@/assets/icons/rouble.svg"
            alt=""
            class="booking__price-ticker"
          />
        </div>
      </div>

      <div class="booking__buttons-wrapper">
        <button class="btn booking__next-btn booking__btn booking__btn--third">
          Далее
        </button>
        <button class="btn btn_white booking__skip-btn booking__btn">
          Пропустить
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'WantToBookTheBathhouseStep',
})
</script>

<style lang="scss" src="../../index.scss" scoped></style>
