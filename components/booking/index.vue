<template>
  <section class="booking">
    <div class="booking-info">
      <div class="booking__info-section booking__">
        <h5 class="booking__info-title">
          Дата бронирования
        </h5>
        <span class="booking__info-value">16.07.2022</span>
      </div>
      <div class="booking__info-section">
        <h5 class="booking__info-title">
          Добавление бани
        </h5>
        <span class="booking__info-value">16.07.2022</span>
      </div>
      <div class="booking__info-section">
        <h5 class="booking__info-title">
          Личные данные 
        </h5>
        <span class="booking__info-value">16.07.2022</span>
      </div>
      <div class="booking__info-section">
        <h5 class="booking__info-title">
          Оплата
        </h5>
        <span class="booking__info-value">16.07.2022</span>
      </div>
    </div>
    <div class="booking-wrapper">

    <client-only>
      <DatePicker
        range 
        lang="ru" 
        :disabled-end-date="{
          to: new Date('08.10.2022'),
        from: new Date('08.15.2022')
        }"
      />
        <!-- :disabled-start-date="{
          to: new Date('08.01.2022'),
        from: new Date('08.15.2022')
        }" -->
        <!-- :disabled-start-date="{
        to: new Date('08.08.2022'),
        from: new Date('12.08.2022')
        }" -->
    </client-only>
      
      <div class="booking-parameters">
        <h3 class="booking__header">Основные параметры</h3>
        <label class="booking-label">
          <h4 class="booking__sub-header">Фактическое время заселения</h4>
          <div class="booking__input-field">15:00</div>
          <span>Стандартное время заселения: 14:00</span>
        </label>
        <label class="booking-label">
          <h4 class="booking__sub-header">Фактическое время заселения</h4>
          <div class="booking__input-field">15:00</div>
          <span>Стандартное время заселения: 14:00</span>
        </label>
        <label class="booking-label">
          <h4 class="booking__sub-header">Фактическое время заселения</h4>
          <div class="booking__input-field">15:00</div>
          <!-- <span>Стандартное время заселения: 14:00</span> -->
        </label>
      </div>

      <div class="booking-additional">
         <h3 class="booking__header">Дополнительный функционал</h3>

        <label class="booking-label">
          <div class="booking-fireplace">
            <h4 class="booking__sub-header">Камин</h4>
            <span>1000₽</span>
          </div>
          <div class="booking__input-field">Количество вязанок дров</div>
          <div class="booking__fireplace-lit">
            <input type="checkbox">
            <span>Растопить камин к приезду</span>
          </div>
        </label>

        <label class="booking-label">
          <h4 class="booking__sub-header">Тематическое украшение <button class="booking__decoration-btn">?</button></h4>
          <div class="booking__input-field">Выберите тип украшения</div>
        </label>

        <button class="btn booking__next-btn">Далее</button>
      </div>

    </div>
  </section>
</template>

<script>
import { ref } from 'vue';

 export default {
//   data(){ 
//     // const remarks = ref( {'2021-1-13': 'some tings'})
//     return{ 
//         // remarks
//         date_today:new Date() ,
//           value1: [new Date(2022, 9, 8), new Date(2022, 9, 19)],
//           // time2: null,
//           // time3: null,
//     } 
// }

  setup() {
    
    return {
      // remarks,
    }
  },
  data() {
    return {
      value1: [new Date(2019, 9, 8), new Date(2019, 9, 19)],
      // value1: new Date(2019, 9, 8),
      value2: null,
    };
  },
  }
</script>

<style lang="scss" src="./index.scss" scoped>
</style>
<!-- <style></style> -->