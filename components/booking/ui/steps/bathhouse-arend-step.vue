<template>
  <div class="booking-wrapper booking-3">
    <div class="booking__conditions-wrapper">
      <h3 class="booking__header booking__header--conditions">
        Условия бронирования
      </h3>

      <div class="booking__info-wrapper--horizontal">
        <div class="booking__info-wrapper--xs">
          <h4 class="booking__sub-header booking__conditions-header">
            День недели
          </h4>
          <div class="booking__radio-wrapper">
            <button
              class="booking__radio-btn"
              :class="{ 'active-radio': bathhousePriceOption.id === 2 }"
              @click="() => setBathhousePriceOption('weekday')"
            >
              Будние дни
            </button>
            <button
              class="booking__radio-btn"
              :class="{ 'active-radio': bathhousePriceOption.id === 3 }"
              @click="() => setBathhousePriceOption('friday')"
            >
              Пятница
            </button>
            <button
              class="booking__radio-btn"
              :class="{ 'active-radio': bathhousePriceOption.id === 4 }"
              @click="() => setBathhousePriceOption('saturday')"
            >
              Суббота
            </button>
            <button
              class="booking__radio-btn"
              :class="{ 'active-radio': bathhousePriceOption.id === 5 }"
              @click="() => setBathhousePriceOption('sunday')"
            >
              Воскресенье
            </button>
          </div>
        </div>

        <div class="booking__info-wrapper--s">
          <h4 class="booking__sub-header booking__conditions-header">Время</h4>

          <div
            v-for="option of bathhousePriceOption.priceInterval"
            :key="option.id"
            class="booking-time-label"
          >
            <h5 class="booking-time-label__time">
              {{ option.from.slice(0, 5) + ' - ' + option.to.slice(0, 5) }}
            </h5>
            <span
              class="booking-time-label__price booking-time-label__price--desktop"
              >Стоимость бронирования</span
            >
            <span
              class="booking-time-label__price booking-time-label__price--mobile"
              >Стоимость</span
            >
            <span class="booking-time-label__value">{{
              option.price + '₽/Час'
            }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="booking__info-container">
      <div class="booking__info-wrapper">
        <h3 class="booking__header">Основные параметры</h3>

        <label class="booking-label">
          <h4 class="booking__sub-header">Дата</h4>
          <div class="booking__input-field">
            <img src="@/assets/icons/calendar.svg" alt="" />
            <input
              ref="BHDate"
              type="date"
              @change="(e) => pickBathDay(new Date(e.target.value))"
            />
            <!-- <input ref="BHDate"  type="date" @change="(e) => pickBathDay(new Date(e.target.value))"> -->
          </div>
        </label>

        <label class="booking-label">
          <h4 class="booking__sub-header">Время</h4>
          <small v-if="bathhouseErrorEmpty" class="booking__error error"
            >Сначала выберите дату!</small
          >
          <small v-if="bathhouseErrorWrong" class="booking__error error"
            >Выберите дату в пределах 3х месяцев</small
          >
          <div
            class="booking__input-field booking__input-field--bath"
            :class="
              bathhouseErrorEmpty || bathhouseErrorWrong ? 'input-error' : ''
            "
            @click="showTimeDD"
          >
            <div v-if="timeDDActive" class="bathhouse-dropdown">
              <h3 v-if="!firstPickedTime" class="bathhouse-dropdown__header">
                Выберите начало бронирования
              </h3>
              <h3 v-if="firstPickedTime" class="bathhouse-dropdown__header">
                Выберите конец бронирования
              </h3>
              <div class="scroll-wrapper">
                <div
                  ref="dropdown"
                  class="bathhouse-dropdown__wrapper"
                  @scroll="handleDDScroll"
                >
                  <h4
                    ref="firstDate"
                    class="bathhouse-dropdown__date bathhouse-dropdown__date--first"
                  >
                    {{
                      addZero(bathDay.date) +
                      '.' +
                      addZero(bathDay.month) +
                      '.' +
                      bathDay.year
                    }}
                  </h4>
                  <div ref="firstDay" class="bathhouse-dropdown__first-day">
                    <div
                      v-for="hour in hours.firstDay"
                      :key="hour.id"
                      class="bathhouse-dropdown__hour"
                      :class="getClass(hour)"
                      @click="pickTime(hour)"
                    >
                      <span>{{ addZero(hour.hour) + ':00' }}</span>
                      <span class="bathhouse-dropdown__booked"
                        >Время забронировано</span
                      >
                    </div>
                  </div>

                  <h4
                    ref="secondDate"
                    class="bathhouse-dropdown__date bathhouse-dropdown__date--second"
                  >
                    {{
                      addZero(theNextDay.date) +
                      '.' +
                      addZero(theNextDay.month) +
                      '.' +
                      theNextDay.year
                    }}
                  </h4>
                  <div ref="secondDay" class="bathhouse-dropdown__first-day">
                    <div
                      v-for="hour in hours.secondDay"
                      :key="hour.id"
                      class="bathhouse-dropdown__hour"
                      :class="getClass(hour)"
                      @click="pickTime(hour)"
                    >
                      <span>{{ addZero(hour.hour) + ':00' }}</span>
                      <span class="bathhouse-dropdown__booked"
                        >Время забронировано</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img src="@/assets/icons/clock.svg" alt="" />
            <span>{{ getHoursString() }}</span>
          </div>
        </label>

        <label class="booking-label booking-label__bath-time">
          <h4 class="booking__sub-header">Длительность</h4>
          <div class="booking__input-field booking__input-field--transparent">
            <img src="@/assets/icons/duration.svg" alt="" />
            <span>
              {{
                includedHours.length +
                ' ' +
                hoursPluralize(includedHours.length)
              }}
            </span>
          </div>
        </label>

        <label class="booking-label">
          <h4 class="booking__sub-header">Количество человек</h4>
          <div class="booking__input-field">
            <img src="@/assets/icons/people.svg" alt="" />
            <input
              v-model="bathhouseData.people"
              v-maska="'##'"
              type="number"
              placeholder="0 человек"
              @change="calculateBathhousePrice"
            />
          </div>
          <h4 class="booking__sub-header booking__last-header">
            +400₽/чел от 6ти человек
          </h4>
        </label>
      </div>
    </div>

    <div class="booking__info-wrapper">
      <h3 class="booking__header">Дополнительные параметры</h3>

      <label
        v-for="option of bathhouseOptions[0]"
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
              :ref="`BHOption${option.id}`"
              v-maska="'##'"
              type="number"
              :placeholder="option.placeholder"
              @change="($event) => changeBathhouseOption($event, option)"
            />
          </div>
          <h4 class="booking__sub-header booking__last-header">
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
              :ref="`BHOption${option.id}`"
              type="checkbox"
              class="checkbox"
              @change="($event) => changeBathhouseOption($event, option)"
            />
            <span class="booking__sub-header booking__checkbox-header">
              {{ option.title }}
            </span>
          </div>
          <span v-if="option.price" class="booking__checkbox-price">{{
            option.price + '₽'
          }}</span>
        </div>
      </label>

      <div class="booking__price booking__price--bathhouse">
        {{ 'Цена: ' + bathhousePrice }}
        <img
          src="@/assets/icons/rouble.svg"
          alt=""
          class="booking__price-ticker"
        />
      </div>
      <div class="booking__buttons-wrapper booking__buttons--3">
        <button
          class="btn booking__next-btn booking-button--3"
          :disabled="isBathhouseBtnDisabled()"
          @click="setProgress(4)"
        >
          Далее
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'BathhouseBookingStep',
})
</script>

<style lang="scss" src="../../index.scss" scoped></style>
