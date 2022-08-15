<template>
  <section class="booking">
    <div class="booking-wrapper">
<!-- class="booking-calendar" -->
        <!-- <client-only placeholder="loading..." > -->
      <!-- <lazy-calendar
        background-text
        class-name="select-mode"
      /> -->
        <!-- :remarks="remarks" -->
    <!-- </client-only> -->

    <!-- <client-only>
      <booking-calendar
        background-text
        class-name="select-mode"
        :remarks="{'2021-1-13': 'some tings'}"
      /> 
    </client-only> -->

    <!-- <client-only>
      <!-- <new-date-picker v-model="value1" type="date" range placeholder="Select date range"></new-date-picker> -->
      <!-- <new-date-picker v-model="time3" value-type="format"></new-date-picker> -->
      <!-- <new-date-picker v-model="time2" type="datetime"></new-date-picker> -->

       <!-- <div class="box">
        <section>
          <p>date range</p>
          <new-date-picker v-model="value1" type="date" range placeholder="Select date range"></new-date-picker>
        </section>
        <section>
          <p>datetime range</p>
          <new-date-picker
            v-model="value2"
            type="datetime"
            range
            placeholder="Select datetime range"
          ></new-date-picker>
        </section>
      </div>
    </client-only>  -->

    <!-- <client-only>
      <date-picker v-model="date_today" placeholder="MM/DD/YYYY" format="MM/dd/yyyy" />
    </client-only> -->
      
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
// import Calendar from 'mpvue-calendar'
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
name: 'Range',
  components: {
    // 'calendar': () => {if(process.client){ return import('mpvue-calendar')}}
    // fuckingBooking: () => import('@/assets/fuckingBooking/fuckingBooking.vue')
  },
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