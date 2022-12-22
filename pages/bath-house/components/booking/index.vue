<template>
  <section class="booking">
    <div class="booking-info">
      <div class="booking__info-section">
        <h5 class="booking__info-title">Даты бронирования</h5>
        <span class="booking__info-value">
          {{ createDatesString() }}
        </span>
      </div>
      <div class="booking__info-section">
        <h5 class="booking__info-title">Добавление бани</h5>
        <span class="booking__info-value">{{
          userData.bathhouse_order ? 'Добавлено' : '-'
        }}</span>
      </div>
      <div class="booking__info-section">
        <h5 class="booking__info-title">Личные данные</h5>
        <span class="booking__info-value">{{ isPersonalFilled() }}</span>
      </div>
      <div class="booking__info-section">
        <h5 class="booking__info-title">Оплата</h5>
        <span class="booking__info-value">Ожидание</span>
      </div>
    </div>

    <button
      v-if="currentProgress === 0"
      class="btn booking__next-btn--first"
      @click="setProgress(1)"
    >
      Забронировать
    </button>

    <div v-if="currentProgress === 1" class="booking-wrapper booking-1">
      <!-- <client-only>
        <DatePicker
          range 
          lang="ru" 
          :disabled-end-date="{
            to: new Date('08.10.2022'),
          from: new Date('08.15.2022')
          }"
        />
      </client-only> -->

      <!-- <div class="booking-calendar">
        <div class="booking-calendar__month-slider">
          <h4 class="booking-calendar__month">{{months.get(currentMonthNumber) + " " + currentYear}}</h4>
          <div class="booking-calendar__controls">
            <img src="@/assets/icons/calendar_back.svg" alt="" @click="prevMonth">
            <img src="@/assets/icons/calendar_next.svg" alt="" @click="nextMonth">
          </div>
        </div>
          <div class="booking-calendar__week">
            <h5 class="booking-calendar__week-day">Пн</h5>
            <h5 class="booking-calendar__week-day">Вт</h5>
            <h5 class="booking-calendar__week-day">Ср</h5>
            <h5 class="booking-calendar__week-day">Чт</h5>
            <h5 class="booking-calendar__week-day">Пт</h5>
            <h5 class="booking-calendar__week-day">Сб</h5>
            <h5 class="booking-calendar__week-day">Вс</h5>
          </div>
          <div class="booking-calendar__wrapper">
            <div 
              v-for="day in month" 
              :key="day.id" 
              class="booking-calendar__day"
              :class="getClass(day)"
              @click="pickDate(day)"
            >
              <div class="booking-calendar__day-number">
                {{day.date}}
              </div>
              <span class="booking-calendar__day-price">
                {{'2300'}}
              </span>
            </div>
          </div>
      </div> -->

      <Calendar
        :taken-dates="getTakenDates()"
        @picked="onDatePick($event)"
      ></Calendar>

      <div class="booking__info-container booking__arrival">
        <h3 class="booking__header">Основные параметры</h3>
        <label class="booking-label">
          <h4 class="booking__sub-header">Фактическое время заселения</h4>
          <div class="booking__input-field">
            <img src="@/assets/icons/clock.svg" alt="" />
            <span class="booking__input-day">{{ getStartDay() }}</span>
            <input
              v-maska="'##:##'"
              type="text"
              placeholder="15:00"
              @input="onArrivalInput"
            />
          </div>
          <span>Стандартное время заселения: 14:00</span>
        </label>
        <label class="booking-label">
          <h4 class="booking__sub-header">Фактическое время выезда</h4>
          <div class="booking__input-field">
            <img src="@/assets/icons/clock.svg" alt="" />
            <span class="booking__input-day">{{ getEndDay() }}</span>
            <input
              v-maska="'##:##'"
              type="text"
              placeholder="15:00"
              @input="onLeaveInput"
            />
          </div>
          <span>Стандартное время выезда: 14:00</span>
        </label>
        <label class="booking-label">
          <h4 class="booking__sub-header">Количество человек</h4>
          <div class="booking__input-field">
            <img src="@/assets/icons/people.svg" alt="" />
            <input
              v-model="userData.people"
              type="number"
              placeholder="0 человек"
            />
          </div>
        </label>
      </div>

      <div class="booking__info-container">
        <div class="booking__info-wrapper">
          <h3 class="booking__header">Дополнительный функционал</h3>

          <label class="booking-label">
            <div class="booking-fireplace">
              <h4 class="booking__sub-header">Камин</h4>
              <span>1000₽</span>
            </div>
            <div class="booking__input-field">
              <input type="number" placeholder="Количество вязанок дров" />
            </div>
            <div class="booking__fireplace-lit">
              <input type="checkbox" class="checkbox" />
              <span>Растопить камин к приезду</span>
            </div>
          </label>

          <label class="booking-label">
            <h4 class="booking__sub-header booking__sub-header--thematic">
              Тематическое украшение
              <button class="booking__decoration-btn">
                <img src="@/assets/icons/question.svg" alt="" />
              </button>
            </h4>
            <div class="booking__input-field">Выберите тип украшения</div>
          </label>
        </div>

        <div class="booking__buttons-wrapper">
          <button
            class="btn booking__next-btn"
            :disabled="!isFirstEnabled()"
            @click="setProgress(2)"
          >
            Далее
          </button>
        </div>
      </div>
    </div>

    <div v-if="currentProgress === 2" class="booking-wrapper booking-2">
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
          <button
            class="btn booking__next-btn booking__btn"
            @click="setProgress(3)"
          >
            Далее
          </button>
          <button
            class="btn btn_white booking__skip-btn booking__btn"
            @click="setProgress(4)"
          >
            Пропустить
          </button>
        </div>
      </div>
    </div>

    <div v-if="currentProgress === 3" class="booking-wrapper booking-3">
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
              <button class="booking__radio-btn">Пятница</button>
              <button class="booking__radio-btn">Будние дни</button>
              <button class="booking__radio-btn">Суббота</button>
              <button class="booking__radio-btn">Воскресенье</button>
            </div>
          </div>

          <div class="booking__info-wrapper--s">
            <h4 class="booking__sub-header booking__conditions-header">
              Время
            </h4>

            <div class="booking-time-label">
              <h5 class="booking-time-label__time">10:00 - 17:00</h5>
              <span
                class="booking-time-label__price booking-time-label__price--desktop"
                >Стоимость бронирования</span
              >
              <span
                class="booking-time-label__price booking-time-label__price--mobile"
                >Стоимость</span
              >
              <span class="booking-time-label__value">3600₽/Час</span>
            </div>

            <div class="booking-time-label">
              <h5 class="booking-time-label__time">10:00 - 17:00</h5>
              <span
                class="booking-time-label__price booking-time-label__price--desktop"
                >Стоимость бронирования</span
              >
              <span
                class="booking-time-label__price booking-time-label__price--mobile"
                >Стоимость</span
              >
              <span class="booking-time-label__value">3600₽/Час</span>
            </div>

            <div class="booking-time-label">
              <h5 class="booking-time-label__time">10:00 - 17:00</h5>
              <span
                class="booking-time-label__price booking-time-label__price--desktop"
                >Стоимость бронирования</span
              >
              <span
                class="booking-time-label__price booking-time-label__price--mobile"
                >Стоимость</span
              >
              <span class="booking-time-label__value">3600₽/Час</span>
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
              <input v-maska="'##.##.##'" type="text" placeholder="10.03.10" />
            </div>
          </label>

          <label class="booking-label">
            <h4 class="booking__sub-header">Время</h4>
            <div class="booking__input-field">
              <img src="@/assets/icons/clock.svg" alt="" />
              <input v-maska="'##:##'" type="text" placeholder="15:00" />
            </div>
          </label>

          <label class="booking-label">
            <h4 class="booking__sub-header">Длительность</h4>
            <div class="booking__input-field booking__input-field--transparent">
              <img src="@/assets/icons/duration.svg" alt="" />
              <span> 2 часа </span>
            </div>
          </label>

          <label class="booking-label">
            <h4 class="booking__sub-header">Количество человек</h4>
            <div class="booking__input-field">
              <img src="@/assets/icons/people.svg" alt="" />
              <span> 6 человек </span>
            </div>
            <h4 class="booking__sub-header booking__last-header">
              +400₽/чел от 6ти человек
            </h4>
          </label>
        </div>
      </div>

      <div class="booking__info-wrapper">
        <h3 class="booking__header">Дополнительные параметры</h3>

        <label class="booking-label">
          <h4 class="booking__sub-header">Добавить банные принадлежности</h4>
          <div class="booking__input-field">
            <img src="@/assets/icons/slippers.svg" alt="" />
            <span> количество банных наборов </span>
          </div>
          <h4 class="booking__sub-header booking__last-header">
            +400₽/чел от 6ти человек
          </h4>
        </label>

        <label class="booking-label">
          <h4 class="booking__sub-header">Добавить банные принадлежности</h4>
          <div class="booking__input-field">
            <span> Количество дубовых веников </span>
          </div>
          <h4 class="booking__sub-header booking__last-header">+350₽/шт</h4>
        </label>

        <label class="booking__checkbox-label">
          <div class="booking__checkbox-wrapper">
            <input type="checkbox" class="checkbox" />
            <span class="booking__sub-header booking__checkbox-header">
              Добавить услуги парильщика
            </span>
          </div>
          <span class="booking__checkbox-price">1400₽</span>
        </label>
        <label class="booking__checkbox-label">
          <div class="booking__checkbox-wrapper">
            <input type="checkbox" class="checkbox" />
            <span class="booking__sub-header booking__checkbox-header">
              Добавить Фурако
            </span>
          </div>
          <span class="booking__checkbox-price">1400₽</span>
        </label>
        <label class="booking__checkbox-label">
          <div class="booking__checkbox-wrapper">
            <input type="checkbox" class="checkbox" />
            <span class="booking__sub-header booking__checkbox-header">
              Добавить Джакузи
            </span>
          </div>
          <span class="booking__checkbox-price">1400₽</span>
        </label>

        <div class="booking__price booking__price--bathhouse">
          Цена: 3600
          <img
            src="@/assets/icons/rouble.svg"
            alt=""
            class="booking__price-ticker"
          />
        </div>
        <div class="booking__buttons-wrapper booking__buttons--3">
          <button
            class="btn booking__next-btn booking-button--3"
            @click="setProgress(4)"
          >
            Далее
          </button>
        </div>
      </div>
    </div>

    <div v-if="currentProgress === 4" class="booking-wrapper booking-4">
      <div class="booking__info-wrapper booking__info-wrapper--l">
        <div class="booking__checkbox-wrapper booking__checkbox-wrapper--l">
          <input type="checkbox" class="checkbox" @input="toggleRefundable" />
          <span class="booking__sub-header booking__checkbox-header">
            Невозвратное бронирование
          </span>
        </div>

        <label class="booking__discount-label">
          <span> -20% при невозвратном бронировании </span>
        </label>

        <h3 class="booking__header booking__accompanying-header">
          Сопроводительная информация
        </h3>

        <p class="booking__accompanying-text">
          Если вы уверены, что приедете, то можете оформить невозвратное бронирование с 10% скидкой. В случае если вы не сможете приехать деньги не возвращаются.
        </p>
      </div>

      <div class="booking__info-wrapper">
        <label class="booking-label">
          <h4 class="booking__sub-header">Фамилия</h4>
          <div class="booking__input-field">
            <input
              v-model="userData.contactInformation.lastName"
              type="text"
              placeholder="Введите вашу фамилию"
            />
          </div>
        </label>

        <label class="booking-label">
          <h4 class="booking__sub-header">Имя</h4>
          <div class="booking__input-field">
            <input
              v-model="userData.contactInformation.firstName"
              type="text"
              placeholder="Введите ваше имя"
            />
          </div>
        </label>

        <label class="booking-label">
          <h4 class="booking__sub-header">Email</h4>
          <div class="booking__input-field">
            <input
              v-model="userData.contactInformation.email"
              type="email"
              placeholder="Введите ваш email"
            />
          </div>
        </label>

        <label class="booking-label">
          <h4 class="booking__sub-header">Номер телефона</h4>
          <div class="booking__input-field">
            <input
              v-model="userData.contactInformation.phone"
              v-maska="'+7 (###) ###-##-##'"
              type="text"
              placeholder="Введите номер телефона"
            />
          </div>
        </label>
      </div>

      <div class="booking__info-wrapper">
        <label class="booking__agreement-label">
          <div class="booking__checkbox-wrapper booking__checkbox-wrapper--l">
            <input v-model="personalData" type="checkbox" class="checkbox" />
            <span class="booking__sub-header booking__checkbox-header">
              Персональные данные
            </span>
          </div>
          <p class="booking__agreement-text">
            Подтверждая выбор, вы даете
            <span> Cогласие на обработку своих персональных данных </span>
          </p>
        </label>

        <label class="booking__agreement-label">
          <div class="booking__checkbox-wrapper booking__checkbox-wrapper--l">
            <input
              v-model="personalAgreement"
              type="checkbox"
              class="checkbox"
            />
            <span class="booking__sub-header booking__checkbox-header">
              Пользовательское соглашение
            </span>
          </div>
          <p class="booking__agreement-text">
            Вы подтверждаете, что внимательно ознакомились с
            <span> пользовательским соглашением </span>
          </p>
        </label>

        <h3 class="booking__header booking__precheck-header">
          Цена за полный перечень услуг:
        </h3>
        <span class="booking__price"
          >{{ price }} <img src="@/assets/icons/rouble.svg" alt=""
        /></span>
        <div class="booking__buttons-wrapper booking__buttons--4">
          <button
            class="btn booking__next-btn booking-button--4"
            :disabled="!personalAgreement || !personalData"
            @click="bookHouse()"
          >
            Посмотреть пречек и оплатить
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { months } from '@/assets/calendar'
import calendar from '@/components/ui/calendar/calendar.vue'
import { maska } from 'maska'

export default {
  directives: { maska },
  components: {
    Calendar: calendar,
  },
  props: {
    basePrice: Number,
  },
  data() {
    return {
      currentProgress: 0,
      calendar,
      months,
      disabledDays: [],
      includedDays: [],
      firstPickedDay: {},
      secondPickedDay: {},
      currentYear: 2022,
      currentMonthNumber: 8,
      currentMonth: {
        year: '2022',
        month: '09',
        monthIdx: 0,
        days: [],
      },
      newMonth: {
        month: '01',
        year: '2022',
        days: [],
      },
      month: [],
      pickedDates: [],
      userData: {
        guest_house: '',
        bathhouse_order: '',
        people: null,
        arrivalTime: '12:54:00.000',
        leaveTime: '12:54:00.000',
        status: 'waiting for payment',
        from: '2022-09-07',
        to: '2022-09-07',
        totalPrice: 0,
        options: ['', ''],
        contactInformation: {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
        },
        refundable: true,
      },
      priceTable: {},
      ordersList: [],
      personalAgreement: false,
      personalData: false,
      test: {},
      takenDates: [],
      price: 0,
      options: [],
    }
  },
  async created() {
    await this.getData()
    this.getTakenDates()
    this.calculatePrice()
  },
  methods: {
    setProgress(count) {
      this.currentProgress = count
      this.calculatePrice()
    },
    onDatePick(data) {
      this.pickedDates.length = 0
      this.pickedDates = [...data]
    },
    createDatesString() {
      if (this.pickedDates[0] == null) {
        return 'Не выбрано'
      }

      if (
        this.pickedDates[0].id <
        this.pickedDates[this.pickedDates.length - 1].id
      ) {
        return (
          this.pickedDates[0].date +
          '.' +
          this.pickedDates[0].month +
          '.' +
          this.pickedDates[0].year +
          ' - ' +
          this.pickedDates[this.pickedDates.length - 1].date +
          '.' +
          this.pickedDates[this.pickedDates.length - 1].month +
          '.' +
          this.pickedDates[this.pickedDates.length - 1].year
        )
      } else if (
        this.pickedDates[0].id >
        this.pickedDates[this.pickedDates.length - 1].id
      ) {
        return (
          this.pickedDates[this.pickedDates.length - 1].date +
          '.' +
          this.pickedDates[this.pickedDates.length - 1].month +
          '.' +
          this.pickedDates[this.pickedDates.length - 1].year +
          ' - ' +
          this.pickedDates[0].date +
          '.' +
          this.pickedDates[0].month +
          '.' +
          this.pickedDates[0].year
        )
      } else {
        return (
          this.pickedDates[0].date +
          '.' +
          this.pickedDates[0].month +
          '.' +
          this.pickedDates[0].year
        )
      }
    },
    getStartDay() {
      if (this.pickedDates[0] == null) {
        return ''
      }

      if (
        this.pickedDates[0].id <=
        this.pickedDates[this.pickedDates.length - 1].id
      ) {
        return (
          this.pickedDates[0].date +
          '.' +
          this.pickedDates[0].month +
          '.' +
          this.pickedDates[0].year
        )
      } else {
        return (
          this.pickedDates[this.pickedDates.length - 1].date +
          '.' +
          this.pickedDates[this.pickedDates.length - 1].month +
          '.' +
          this.pickedDates[this.pickedDates.length - 1].year
        )
      }
    },
    getEndDay() {
      if (this.pickedDates[0] == null) {
        return ''
      }

      if (
        this.pickedDates[0].id >=
        this.pickedDates[this.pickedDates.length - 1].id
      ) {
        return (
          this.pickedDates[0].date +
          '.' +
          this.pickedDates[0].month +
          '.' +
          this.pickedDates[0].year
        )
      } else {
        return (
          this.pickedDates[this.pickedDates.length - 1].date +
          '.' +
          this.pickedDates[this.pickedDates.length - 1].month +
          '.' +
          this.pickedDates[this.pickedDates.length - 1].year
        )
      }
    },
    onArrivalInput(e) {
      this.userData.arrivalTime = `${e.target.value}:00.000`
    },

    onLeaveInput(e) {
      this.userData.arrivalTime = `${e.target.value}:00.000`
    },

    isFirstEnabled() {
      return this.pickedDates.length > 0 && this.userData.people > 0
    },

    toggleRefundable(e) {
      this.userData.refundable = !e.target.checked
      this.calculatePrice()
    },

    isPrecheckDisabled() {
      return (
        !this.personalAgreement ||
        !this.personalData ||
        !this.userData.contactInformation.email ||
        !this.userData.contactInformation.phone ||
        !this.userData.contactInformation.firstName ||
        !this.userData.contactInformation.lastName
      )
    },
    getTakenDates() {
      if (!this.ordersList.length) {
        return
      }
      const dates = []

      for (const order of this.ordersList) {
        const interval = {
          from: order.from,
          to: order.to,
        }
        dates.push(interval)
      }

      return dates
    },
    calculatePrice() {
      const beforeDiscount = this.pickedDates.reduce((sum, day) => {
        return sum + this.getMult(day) * this.basePrice
      }, 0)

      const price = beforeDiscount * (this.userData.refundable ? 1 : 0.8)
      this.price = price
    },
    getMult(day) {
      const strDate = `${day.year}-${
        day.month > 9 ? day.month : '0' + day.month
      }-${day.date > 9 ? day.date : '0' + day.date}`

      const overlap = this.priceTable.exceptions.find((x) => x.date === strDate)

      if (overlap != null) {
        return overlap.price
      }

      return (
        {
          0: this.priceTable.sunday,
          5: this.priceTable.friday,
          6: this.priceTable.saturday,
        }[day.day] ?? this.priceTable.weekday
      )
    },

    async getData() {
      this.priceTable = (
        await this.$http.$get('guest-house-price-table?populate=deep%2C10')
      ).data
      this.ordersList = (
        await this.$http.$get(`guest-house-orders?populate=deep%2C10%20`)
      ).data
      this.options = [
        (await this.$http.$get(`guest-house-options/${this.$route.params.id}`))
          .data,
      ]
    },

    async bookHouse() {
      const splittedStart = this.getStartDay().split('.').reverse()
      const splittedEnd = this.getEndDay().split('.').reverse()

      splittedStart[0] = this.addZero(splittedStart[0])
      splittedStart[1] = this.addZero(splittedStart[1])
      splittedEnd[0] = this.addZero(splittedEnd[0])
      splittedEnd[1] = this.addZero(splittedEnd[1])

      const start = splittedStart.join('-')
      const end = splittedEnd.join('-')

      const dataToSend = {
        guest_house: this.$route.params.house,
        people: parseInt(this.userData.people),
        arrivalTime: this.userData.arrivalTime,
        leaveTime: this.userData.leaveTime,
        from: start,
        to: end,
        contactInformation: this.userData.contactInformation,
        refundable: this.userData.refundable,
        options: [],
      }

      dataToSend.contactInformation.phone = dataToSend.contactInformation.phone
        .replaceAll(' ', '')
        .replaceAll('-', '')
        .replace(')', '')
        .replace('(', '')

      if (this.userData.bathhouse_order) {
        dataToSend.bathhouse_order = this.userData.bathhouse_order
      }

      const resp = await this.$http.$post('guest-house-orders', dataToSend)
      console.log(resp)
    },
    isPersonalFilled() {
      if (
        this.userData.contactInformation.email &&
        this.userData.contactInformation.phone &&
        this.userData.contactInformation.firstName &&
        this.userData.contactInformation.lastName
      ) {
        return 'Заполнено'
      }
      return '-'
    },
    addZero(str) {
      if (+str < 10) {
        return `0${str[0]}`
      }
      return str
    },
  },
}
</script>

<style lang="scss" src="./index.scss" scoped></style>
