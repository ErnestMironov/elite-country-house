<template>
  <!-- TODO handle object type -->
  <!-- :class="{ 'booking-wrapper_jc': objectType === 1 }" -->
  <div class="booking-wrapper booking-1">
    <Calendar
      :taken-dates="[]"
      :get-mult="() => null"
      :base-price="5000"
      :picked-dates="[]"
    ></Calendar>

    <div class="booking__info-container booking__arrival">
      <h3 class="booking__header">Основные параметры</h3>
      <label class="booking-label">
        <h4 class="booking__sub-header">Фактическое время заселения</h4>
        <div class="booking__input-field">
          <img src="@/assets/icons/clock.svg" alt="" />
          <span class="booking__input-day">show start day</span>
          <!-- TODO handle input val change -->
          <input v-maska="'##:##'" type="text" placeholder="14:00" />
        </div>
        <span>Стандартное время заселения: 14:00</span>
      </label>
      <label class="booking-label">
        <h4 class="booking__sub-header">Фактическое время выезда</h4>
        <div class="booking__input-field">
          <img src="@/assets/icons/clock.svg" alt="" />
          <span class="booking__input-day">show end day</span>
          <!-- TODO handle input val change -->
          <input v-maska="'##:##'" type="text" placeholder="14:00" />
        </div>
        <span>Стандартное время выезда: 14:00</span>
      </label>
      <label class="booking-label">
        <h4 class="booking__sub-header">Количество человек</h4>
        <div class="booking__input-field">
          <img src="@/assets/icons/people.svg" alt="" />
          <!-- TODO handle input val change and add postfix "человек" -->
          <input type="number" placeholder="0 человек" />
        </div>
      </label>
      <!-- TODO show only if it's apartment booking -->
      <div class="booking__buttons-wrapper">
        <!-- TODO disable button if form is not filled -->
        <button class="btn booking__next-btn booking__next-btn--second">
          Далее
        </button>
      </div>
    </div>

    <!-- TODO show only if it's house booking -->
    <div class="booking__info-container">
      <div class="booking__info-wrapper">
        <h3 class="booking__header">Дополнительный функционал</h3>

        <!-- TODO map options -->
        <!-- <label
          v-for="option of options"
          :key="option.id"
          class="booking-label"
          :class="{ 'booking-label--checkbox': option.type === 'checkbox' }"
        >
          <div
            v-if="option.type === 'number'"
            class="booking__option-wrapper--number"
          >
            <h4 class="booking__sub-header">{{ option.title }}</h4>
            <div class="booking__input-field">
              <img src="@/assets/icons/slippers.svg" alt="" />
              <input
                :ref="`option${option.id}`"
                v-maska="'##'"
                type="number"
                :placeholder="option.placeholder"
                @change="($event) => pickOption($event, option)"
              />
            </div>
            <h4
              v-if="option.notice"
              class="booking__sub-header booking__last-header"
            >
              {{ option.notice }}
            </h4>
          </div>
          <div
            v-if="option.type === 'checkbox'"
            class="booking__option-wrapper--checkbox"
          >
            <div
              v-if="option.type === 'checkbox'"
              class="booking__checkbox-wrapper"
            >
              <input
                :ref="`option${option.id}`"
                type="checkbox"
                class="checkbox"
                @change="($event) => pickCheckboxOption($event, option)"
              />
              <span class="booking__sub-header booking__checkbox-header">
                {{ option.title }}
              </span>
            </div>
            <span v-if="option.price" class="booking__checkbox-price">{{
              option.price + '₽'
            }}</span>
          </div>
          <div
            v-if="option.type === 'time'"
            class="booking__option-wrapper--number"
          >
            <h4 class="booking__sub-header">{{ option.title }}</h4>
            <div class="booking__input-field">
              <img src="@/assets/icons/clock.svg" alt="" />
              <input
                :ref="`option${option.id}`"
                v-maska="'##:##'"
                type="text"
                placeholder="15:00"
                @change="($event) => pickOption($event, option)"
              />
            </div>
            <span v-if="option.notice">{{ option.notice }}</span>
          </div>
          <div
            v-if="option.type === 'date'"
            class="booking__option-wrapper--number"
          >
            <h4 class="booking__sub-header">{{ option.title }}</h4>
            <div class="booking__input-field">
              <img src="@/assets/icons/calendar.svg" alt="" />
              <input
                :ref="`option${option.id}`"
                type="date"
                @change="($event) => pickOption($event, option)"
              />
            </div>
            <span v-if="option.notice">{{ option.notice }}</span>
          </div>
          <div
            v-if="option.type === 'select'"
            class="booking__option-wrapper--number booking-label"
          >
            <h4 class="booking__sub-header booking__sub-header--thematic">
              {{ option.title
              }}<img
                class="booking__decoration-btn"
                src="@/assets/icons/question.svg"
                alt=""
                :title="option.description"
              />
            </h4>
            <div class="option-dropdown">
              <div
                v-if="isDDActive(option.id)"
                :id="option.id"
                class="option-dropdown__wrapper"
              >
                <span
                  v-for="item of option.variants"
                  :id="option.id"
                  :key="item.id"
                  class="option-dropdown__option"
                  @click="() => pickSelectOption(option, item)"
                >
                  {{ item.value }}
                </span>
              </div>
              <div
                :id="option.id"
                :ref="`option${option.id}`"
                class="option-dropdown__selected booking__input-field"
                @click="showDD(option.id)"
              >
                {{
                  getSelectedItem(option.id)
                    ? getSelectedItem(option.id)
                    : option.placeholder
                }}
              </div>
              <span v-if="option.notice">{{ option.notice }}</span>
            </div>
          </div>
        </label> -->
      </div>

      <div class="booking__buttons-wrapper">
        <!-- TODO disable button if form is not filled -->
        <button class="btn booking__next-btn booking__next-btn--second">
          Далее
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// @ts-ignore
import calendar from '@/components/ui/calendar/calendar.vue'
import { maska } from 'maska'
import Vue from 'vue'

export default Vue.extend({
  directives: { maska },
  components: {
    Calendar: calendar,
  },
  methods: {
    getMult(day: { year: any; month: number; date: number; day: number }) {
      const strDate = `${day.year}-${
        day.month > 9 ? day.month : '0' + day.month
      }-${day.date > 9 ? day.date : '0' + day.date}`

      const overlap = this.$store.state.exceptions.find(
        (x: any) => x.date === strDate
      )

      if (overlap != null) {
        return overlap.price
      }

      return (
        {
          0: this.$store.state.sunday,
          5: this.$store.state.friday,
          6: this.$store.state.saturday,
        }[day.day] ?? this.$store.state.weekday
      )
    },
  },
})
</script>

<style lang="scss" src="../../index.scss" scoped></style>
