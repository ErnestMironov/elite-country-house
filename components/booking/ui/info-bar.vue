<template>
  <div class="booking-info">
    <div class="booking__info-section">
      <h5 class="booking__info-title">Даты бронирования</h5>
      <span class="booking__info-value">
        <!-- {{ createDatesString() }} -->
      </span>
    </div>
    <div class="booking__info-section">
      <h5 class="booking__info-title">Добавление бани</h5>
      <span class="booking__info-value">{{
        bathhousePrice ? 'Добавлено' : '-'
      }}</span>
    </div>
    <div class="booking__info-section">
      <h5 class="booking__info-title">Личные данные</h5>
      <!-- <span class="booking__info-value">{{ isPersonalFilled() }}</span> -->
    </div>
    <div class="booking__info-section">
      <h5 class="booking__info-title">Оплата</h5>
      <span class="booking__info-value">Ожидание</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookingInfoBar',
}
</script>

<style lang="scss" src="../index.scss" scoped></style>
