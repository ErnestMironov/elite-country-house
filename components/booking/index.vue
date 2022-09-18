<template>
  <section class="booking">
    <div class="booking-info">
      <div class="booking__info-section">
        <h5 class="booking__info-title">
          Даты бронирования
        </h5>
        <span class="booking__info-value">
          {{createDatesString()}}
        </span>
      </div>
      <div class="booking__info-section">
        <h5 class="booking__info-title">
          Добавление бани
        </h5>
        <span class="booking__info-value">{{bathhousePrice ? 'Добавлено' : '-'}}</span>
      </div>
      <div class="booking__info-section">
        <h5 class="booking__info-title">
          Личные данные 
        </h5>
        <span class="booking__info-value">{{ isPersonalFilled() }}</span>
      </div>
      <div class="booking__info-section">
        <h5 class="booking__info-title">
          Оплата
        </h5>
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
              <img src="@/assets/icons/clock.svg" alt="">
              <span class="booking__input-day">{{getStartDay()}}</span>
              <input v-maska="'##:##'" type="text" placeholder="15:00" @input="onArrivalInput">
            </div>
            <span>Стандартное время заселения: 14:00</span>
          </label>
          <label class="booking-label">
            <h4 class="booking__sub-header">Фактическое время выезда</h4>
            <div class="booking__input-field">
              <img src="@/assets/icons/clock.svg" alt="">
              <span class="booking__input-day">{{getEndDay()}}</span>
              <input v-maska="'##:##'" type="text" placeholder="15:00" @input="onLeaveInput">
            </div>
            <span>Стандартное время выезда: 14:00</span>
          </label>
          <label class="booking-label">
            <h4 class="booking__sub-header">Количество человек</h4>
            <div class="booking__input-field">
              <img src="@/assets/icons/people.svg" alt="">
              <input v-model="userData.people" type="number" placeholder="0 человек">
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
              <input type="number" placeholder="Количество вязанок дров"/>
            </div>
            <div class="booking__fireplace-lit">
              <input type="checkbox" class="checkbox">
              <span>Растопить камин к приезду</span>
            </div>
          </label>

          <label class="booking-label">
            <h4 class="booking__sub-header booking__sub-header--thematic">Тематическое украшение <button class="booking__decoration-btn"><img src="@/assets/icons/question.svg" alt=""></button></h4>
            <div class="booking__input-field">Выберите тип украшения</div>
          </label>
          </div>

          <div class="booking__buttons-wrapper">
            <button class="btn booking__next-btn" :disabled="!isFirstEnabled()" @click="setProgress(2)">Далее</button>
          </div>
        </div>

    </div>

    <div v-if="currentProgress === 2" class="booking-wrapper booking-2">
      <div class="booking__images-wrapper">
        <img src="@/assets/images/bathhouse_1.jpg" alt="bathhouse">
        <img src="@/assets/images/bathhouse_2.jpg" alt="bathhouse">
      </div>

      <div class="booking__info-container">
          <div class="booking__info-wrapper">

            <h3 class="booking__header booking__header--bathhouse">Хотите забронировать баню?</h3>

            <p class="booking__paragraph">
              Situé au reLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </p>
            <h3 class="booking__header booking__price-header booking__header--bathhouse">
              Стоимость бронирования бани
            </h3>
            <div class="booking__price">
              от 3600
              <img src="@/assets/icons/rouble.svg" alt="" class="booking__price-ticker">
            </div>
          </div>

          <div class="booking__buttons-wrapper">
            <button class="btn booking__next-btn booking__btn" @click="setProgress(3)">Далее</button>
            <button class="btn btn_white booking__skip-btn booking__btn" @click="setProgress(4)">Пропустить</button>
          </div>
      </div>

    </div>

    <div v-if="currentProgress === 3" class="booking-wrapper booking-3">

      <div class="booking__conditions-wrapper">

        <h3 class="booking__header booking__header--conditions">Условия бронирования</h3>
        
          <div class="booking__info-wrapper--horizontal">
            <div class="booking__info-wrapper--xs">
              <h4 class="booking__sub-header booking__conditions-header">День недели</h4>
              <div class="booking__radio-wrapper">
                <button class="booking__radio-btn" :class="{'active-radio': bathhousePriceOption.id === 3}" @click="()=>setBathhousePriceOption('friday')">Пятница</button>
                <button class="booking__radio-btn" :class="{'active-radio': bathhousePriceOption.id === 2}" @click="()=>setBathhousePriceOption('weekday')">Будние дни</button>
                <button class="booking__radio-btn" :class="{'active-radio': bathhousePriceOption.id === 4}" @click="()=>setBathhousePriceOption('saturday')">Суббота</button>
                <button class="booking__radio-btn" :class="{'active-radio': bathhousePriceOption.id === 5}" @click="()=>setBathhousePriceOption('sunday')">Воскресенье</button>
              </div>
            </div>


            <div class="booking__info-wrapper--s">
              <h4 class="booking__sub-header booking__conditions-header">Время</h4>



              <div v-for="option of bathhousePriceOption.priceInterval" :key="option.id" class="booking-time-label">
                <h5 class="booking-time-label__time">{{option.from.slice(0,5) + ' - ' + option.to.slice(0,5)}}</h5>
                <span class="booking-time-label__price booking-time-label__price--desktop">Стоимость бронирования</span>
                <span class="booking-time-label__price booking-time-label__price--mobile">Стоимость</span>
                <span class="booking-time-label__value">{{option.price + '₽/Час'}}</span>
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
                  <img src="@/assets/icons/calendar.svg" alt="">
                  <input  type="date" @change="pickBathDay">
                </div>
              </label>

              <label class="booking-label">
                <h4 class="booking__sub-header">Время</h4>
                <small v-if="bathhouseErrorEmpty" class="booking__error error">Сначала выберите дату!</small>
                <small v-if="bathhouseErrorWrong" class="booking__error error">Выберите дату в пределах 3х месяцев</small>
                <div class="booking__input-field booking__input-field--bath" :class="(bathhouseErrorEmpty || bathhouseErrorWrong) ? 'input-error' : ''" @click="showTimeDD">
                  <div v-if="timeDDActive" class="bathhouse-dropdown">
                    <h3 v-if="!firstPickedTime" class="bathhouse-dropdown__header">Выберите начало бронирования</h3>
                    <h3 v-if="firstPickedTime" class="bathhouse-dropdown__header">Выберите конец бронирования</h3>
                    <div class="scroll-wrapper">
                      <div ref="dropdown" class="bathhouse-dropdown__wrapper" @scroll="handleDDScroll">
                        <!-- <h4 class="test">{{'10.03.10'}}</h4> -->
                        <h4 ref="firstDate" class="bathhouse-dropdown__date bathhouse-dropdown__date--first">{{addZero(bathDay.date)+'.'+addZero(bathDay.month)+'.'+bathDay.year}}</h4>
                        <div ref="firstDay" class="bathhouse-dropdown__first-day">
                          <div v-for="hour in hours.firstDay" :key="hour.id" class="bathhouse-dropdown__hour"  :class="getClass(hour)" @click="pickTime(hour)">
                            <span>{{addZero(hour.hour) + ':00'}}</span>
                            <span class="bathhouse-dropdown__booked">Время забронировано</span>
                          </div>
                        </div>
                        
                        <h4 ref="secondDate"  class="bathhouse-dropdown__date bathhouse-dropdown__date--second">{{addZero(theNextDay.date)+'.'+addZero(theNextDay.month)+'.'+theNextDay.year}}</h4>
                        <div ref="secondDay" class="bathhouse-dropdown__first-day">
                          <div v-for="hour in hours.secondDay" :key="hour.id" class="bathhouse-dropdown__hour" :class="getClass(hour)" @click="pickTime(hour)">
                            <span>{{addZero(hour.hour) + ':00'}}</span>
                            <span class="bathhouse-dropdown__booked">Время забронировано</span>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                  <img src="@/assets/icons/clock.svg" alt="">
                 <span>{{getHoursString()}}</span>
                </div>
              </label>

              <label class="booking-label booking-label__bath-time">
                <h4 class="booking__sub-header">Длительность</h4>
                <div class="booking__input-field booking__input-field--transparent">
                  <img src="@/assets/icons/duration.svg" alt="">
                  <span> 
                    {{includedHours.length + ' ' + createHoursString(includedHours.length)}}
                  </span>
                </div>
              </label>

              <label class="booking-label">
                <h4 class="booking__sub-header">Количество человек</h4>
                <div class="booking__input-field">
                  <img src="@/assets/icons/people.svg" alt="">
                  <input v-model="bathhouseData.people" v-maska="'##'" type="number" placeholder="0 человек" @change="calculateBathhousePrice">
                </div>
                <h4 class="booking__sub-header booking__last-header">+400₽/чел от 6ти человек</h4>
              </label>
          </div>

      </div>

            <div class="booking__info-wrapper">
                <h3 class="booking__header">Дополнительные параметры</h3>

                <label v-for="option of bathhouseOptions[0]" :key="option.id" class="booking-label" :class="{'booking-label--checkbox' :  option.type === 'checkbox'}">
                  <div v-if="option.type === 'number'" class="booking__option-wrapper--number">
                    <h4 class="booking__sub-header">{{option.title}}</h4>
                    <div class="booking__input-field">
                      <img src="@/assets/icons/slippers.svg" alt="">
                      <input v-maska="'##'" type="number" :placeholder="option.placeholder" @change="($event)=>changeBathhouseOption($event, option)">
                    </div>
                    <h4 class="booking__sub-header booking__last-header">{{option.notice}}</h4>
                  </div>
                  <div v-if="option.type === 'checkbox'" class="booking__option-wrapper--checkbox">
                    <div v-if="option.type === 'checkbox'" class="booking__checkbox-wrapper">
                      <input type="checkbox" class="checkbox" @change="($event)=>changeBathhouseOption($event, option)">
                      <span class="booking__sub-header booking__checkbox-header">
                        {{option.title}}    
                      </span>
                    </div>
                    <span class="booking__checkbox-price">{{option.price+"₽"}}</span>
                  </div>
                </label>

              <div class="booking__price booking__price--bathhouse">
                {{'Цена: '+ bathhousePrice}}
                <img src="@/assets/icons/rouble.svg" alt="" class="booking__price-ticker">
              </div>
              <div class="booking__buttons-wrapper booking__buttons--3">
                <button class="btn booking__next-btn booking-button--3" :disabled="isBathhouseBtnDisabled()" @click="setProgress(4)">Далее</button>
              </div>
            </div>

          </div>

          <div v-if="currentProgress === 4" class="booking-wrapper booking-4">
            <div class="booking__info-wrapper booking__info-wrapper--l">
                  <div class="booking__checkbox-wrapper booking__checkbox-wrapper--l">
                    <input type="checkbox" class="checkbox" @input="toggleRefundable">
                    <span class="booking__sub-header booking__checkbox-header">
                      Невозвратное бронирование     
                    </span>
                  </div>

                <label class="booking__discount-label">
                    <span> 
                      -20% при невозвратном бронировании
                    </span>
                </label>

                <h3 class="booking__header booking__accompanying-header">Сопроводительная информация</h3>

                <p class="booking__accompanying-text">
                  Какой-то текст про возвратность/невозвратность тразакции, вряд ли займет больше трех-четырех строк(узнать у заказчика)
                </p>
                <p class="booking__accompanying-text">
                  Какой-то текст про возвратность/невозвратность тразакции, вряд ли займет больше трех-четырех строк(узнать у заказчика)
                </p>

            </div>

            <div class="booking__info-wrapper">

                <label class="booking-label">
                  <h4 class="booking__sub-header">Фамилия</h4>
                  <div class="booking__input-field">
                    <input v-model="userData.contactInformation.lastName" type="text" placeholder="Введите вашу фамилию">
                  </div>
                </label>

                <label class="booking-label">
                  <h4 class="booking__sub-header">Имя</h4>
                  <div class="booking__input-field">
                    <input v-model="userData.contactInformation.firstName" type="text" placeholder="Введите ваше имя">
                  </div>
                </label>

                <label class="booking-label">
                  <h4 class="booking__sub-header">Email</h4>
                  <div class="booking__input-field">
                      <input v-model="userData.contactInformation.email" type="email" placeholder="Введите ваш email">
                  </div>
                </label>

                <label class="booking-label">
                  <h4 class="booking__sub-header">Номер телефона</h4>
                  <div class="booking__input-field">
                   <input v-model="userData.contactInformation.phone" v-maska="'+7 (###) ###-##-##'" type="text" placeholder="Введите номер телефона">
                  </div>
                </label>
            </div>

            <div class="booking__info-wrapper">
                 <label class="booking__agreement-label">
                  <div class="booking__checkbox-wrapper booking__checkbox-wrapper--l">
                    <input v-model="personalData" type="checkbox" class="checkbox">
                    <span class="booking__sub-header booking__checkbox-header">
                      Персональные данные
                    </span>
                  </div>
                  <p class="booking__agreement-text">
                    Подтверждая выбор, вы даете <span>
                      Cогласие на обработку своих персональных данных
                    </span>
                  </p>
                </label>

                <label class="booking__agreement-label">
                  <div class="booking__checkbox-wrapper booking__checkbox-wrapper--l">
                    <input v-model="personalAgreement" type="checkbox" class="checkbox">
                    <span class="booking__sub-header booking__checkbox-header">
                      Пользовательское соглашение
                    </span>
                  </div>
                  <p class="booking__agreement-text">
                    Вы подтверждаете, что внимательно ознакомились с 
                    <span>
                      пользовательским соглашением 
                    </span>
                  </p>
                </label>

                <h3 class="booking__header booking__precheck-header">Цена за полный перечень услуг:</h3>
                <span class="booking__price">{{price}} <img src="@/assets/icons/rouble.svg" alt=""></span>
                <div class="booking__buttons-wrapper booking__buttons--4">
                  <button class="btn booking__next-btn booking-button--4" :disabled="!personalAgreement || !personalData" @click="bookHouse()">Посмотреть пречек и оплатить</button>
                </div>
            </div>

      </div>


  </section>
</template>

<script>  
import {maska} from 'maska'
import {months, hours} from '@/assets/calendar';
import calendar from '@/components/ui/calendar/calendar.vue'
import {createHoursString} from '@/helpers/helpers'

 export default {
  directives: { maska },
  components: {
    Calendar: calendar
  },
  props: {
    basePrice: Number
  },
  data() {
    return {
      currentProgress: 0,
      timeDDActive: false,
      calendar,
      months,
      hours,
      firstDateOffset: '',
      disabledDays: [],
      includedDays: [],
      bathhouseOrdersList: [],
      bathhouseOptions: [],
      bathhouseSelectedOptions:[],
      disabledHours: [],
      firstPickedTime: {},
      secondPickedTime: {},
      includedHours: [],
      bathDay: {},
      theNextDay: new Date(),
      bathhouseErrorEmpty: false,
      bathhouseErrorWrong: false,
      currentYear: 2022, 
      currentMonthNumber: 8,
      currentMonth: {
        year: '2022',
        month: '09',
        monthIdx: 0,
        days:[]
      },
      newMonth: {
        month: '01',
        year: '2022',
        days:[]
      },
      month: [],
      pickedDates: [],
      bathhousePrice: 0,
      bathhouseData: {
        people: null,
        sets: null,
        brooms: null,
        helper: false,
        furako: false,
        jacuzzi: false
      },
      userData: {
        guest_house: "",
        bathhouse_order: "",
        people: null,
        arrivalTime: "12:54:00.000",
        leaveTime: "12:54:00.000",
        status: "waiting for payment",
        from: "2022-09-07",
        to: "2022-09-07",
        totalPrice: 0,
        options: [
          "",
          ""
        ],
        contactInformation: {
          firstName: "",
          lastName: "",
          email: "",
          phone: ""
        },
        refundable: true,
      },
      priceTable: {},
      bathhousePriceTable: {},
      bathhousePriceOption: {priceInterval: [{
        from: '',
        to: ''
      }]},
      ordersList: [],
      personalAgreement: false,
      personalData: false,
      test: {},
      takenDates: [],
      price: 0,
      options: []
    };
  },
  beforeMount () {
    document.addEventListener('click', this.handleDocumentClick)
  },
  beforeDestroy () {
    document.removeEventListener('click', this.handleDocumentClick)
  },
  async created() {
    await this.getData()
    this.getTakenDates()
    this.calculatePrice()
    this.assembleDisabledHours()

    this.bathhousePriceOption = this.bathhousePriceTable.friday
  },
  methods: {
    createHoursString,
    setProgress(count){
      this.currentProgress = count
      this.calculatePrice()

      console.log(this.bathhouseData.people)
    },
    showTimeDD(e){
      if (this.bathhouseErrorWrong){
        return
      }
      if(this.bathDay.date == null || isNaN(this.bathDay.date)){
        this.bathhouseErrorEmpty = true
        return 
      }

      this.timeDDActive = true

      e.preventDefault();
      e.stopPropagation();
    },
    getHoursString(){
      if (this.includedHours.length === 0){
        return '00:00'
      }

      if (this.includedHours.length === 1){
        return `${this.addZero(this.includedHours[0].hour)}:00`
      }

      return `${this.addZero(this.includedHours[0].hour)}:00 - ${this.addZero(this.includedHours[this.includedHours.length-1].hour+1)}:00`
    },
    setBathhousePriceOption(day){
      this.bathhousePriceOption = this.bathhousePriceTable[day]
    },
    pickBathDay(e){
      const now = new Date()
      const pickedDay = new Date(e.target.value)

      if (((pickedDay.getMonth() - now.getMonth()) >= 3) || now.getTime()- 86400000 > pickedDay.getTime()){
        this.bathhouseErrorWrong = true
        this.bathhouseErrorEmpty = false
        return
      }
      this.bathhouseErrorWrong = false
      
      const next = new Date()
      next.setDate((new Date(e.target.value)).getDate() + 1)

      this.bathDay = {
        date: pickedDay.getDate(),
        month: pickedDay.getMonth() + 1,
        year: pickedDay.getFullYear(),
        day: pickedDay.getDay()
      }

      this.theNextDay = {
        date: next.getDate(),
        month: next.getMonth() + 1,
        year: next.getFullYear(),
        day: next.getDay()
      }

      this.includedHours = []
      this.bathhouseErrorEmpty = false
      this.addDaysInfo()
      this.firstPickedTime = {}
      this.secondPickedTime = {}
    },
    addDaysInfo(){
      this.hours.firstDay.forEach(x => {
        Object.assign(x, this.getHourInfo(x.id))
      })
      this.hours.secondDay.forEach(x => {
        Object.assign(x, this.getHourInfo(x.id))
      })
    },
    handleDocumentClick(e){
      if (!e.target.classList.contains('bathhouse-dropdown')){
        this.timeDDActive = false
      }
    },
    handleDDScroll(){
      if(this.$refs.dropdown.scrollTop >= this.$refs.firstDay.offsetHeight){
        this.$refs.firstDate.classList.add('sticky')
        this.$refs.secondDate.classList.remove('sticky')
      } else {
        this.$refs.firstDate.classList.remove('sticky')
        this.$refs.secondDate.classList.add('sticky')
      }
    },
    onDatePick(data){
      this.pickedDates.length = 0
      this.pickedDates = [...data]
    },
    createDatesString(){
      if (this.pickedDates[0] == null){
        return 'Не выбрано'
      }

      if (this.pickedDates[0].id < this.pickedDates[this.pickedDates.length-1].id){
        return (this.pickedDates[0].date+'.'+this.pickedDates[0].month+'.'+this.pickedDates[0].year+' - '+this.pickedDates[this.pickedDates.length-1].date+'.'+this.pickedDates[this.pickedDates.length-1].month+'.'+this.pickedDates[this.pickedDates.length-1].year)
      } else if (this.pickedDates[0].id > this.pickedDates[this.pickedDates.length-1].id) {
        return (this.pickedDates[this.pickedDates.length-1].date+'.'+this.pickedDates[this.pickedDates.length-1].month+'.'+this.pickedDates[this.pickedDates.length-1].year+' - '+this.pickedDates[0].date+'.'+this.pickedDates[0].month+'.'+this.pickedDates[0].year)
      } else {
        return (this.pickedDates[0].date+'.'+this.pickedDates[0].month+'.'+this.pickedDates[0].year)
      }
    },
    getStartDay(){
      if (this.pickedDates[0] == null){
        return ''
      }

      if (this.pickedDates[0].id <= this.pickedDates[this.pickedDates.length-1].id){
        return (this.pickedDates[0].date+'.'+this.pickedDates[0].month+'.'+this.pickedDates[0].year)
      } else {
        return (this.pickedDates[this.pickedDates.length-1].date+'.'+this.pickedDates[this.pickedDates.length-1].month+'.'+this.pickedDates[this.pickedDates.length-1].year)
      }
    },
    getEndDay(){
      if (this.pickedDates[0] == null){
        return ''
      }

      if (this.pickedDates[0].id >= this.pickedDates[this.pickedDates.length-1].id){
        return (this.pickedDates[0].date+'.'+this.pickedDates[0].month+'.'+this.pickedDates[0].year)
      } else {
        return (this.pickedDates[this.pickedDates.length-1].date+'.'+this.pickedDates[this.pickedDates.length-1].month+'.'+this.pickedDates[this.pickedDates.length-1].year)
      }
    },
    onArrivalInput(e){
      this.userData.arrivalTime = `${e.target.value}:00.000`
    },

    onLeaveInput(e){
      this.userData.arrivalTime = `${e.target.value}:00.000`
    },

    isFirstEnabled(){
      return (this.pickedDates.length > 0 && this.userData.people > 0)
    },

    toggleRefundable(e){
      this.userData.refundable = !e.target.checked
      this.calculatePrice()
    },

    isPrecheckDisabled(){
      return (
        !this.personalAgreement 
        || !this.personalData 
        || !this.userData.contactInformation.email 
        || !this.userData.contactInformation.phone 
        || !this.userData.contactInformation.firstName 
        || !this.userData.contactInformation.lastName)
    },
    getTakenDates(){
      if (!this.ordersList.length){
        return
      }
      const dates = []

      for (const order of this.ordersList){
        const interval = {
          from: order.from,
          to: order.to 
        }
        dates.push(interval)
      }

      return dates
    },
    calculateBathhousePrice(){
      const withoutService = this.includedHours.reduce((sum, hour) => {
        return sum + (this.getBathHourPrice(hour))
      }, 0)

      const guestsOverprice = this.bathhouseData.people > 6 ? (this.bathhouseData.people - 6) * 400 : 0
      // const setsOverprice = this.bathhouseData.sets > 6 ? (this.bathhouseData.sets - 6) * 400 : 0
      // const brooms = this.bathhouseData.brooms ?? 0
      const servicesPrice = this.bathhouseSelectedOptions.reduce((sum, option) => {
        return sum + (Number(option.value) * option.price)
      }, 0)

      const price = withoutService + 
                    guestsOverprice +
                    servicesPrice
    
      this.bathhousePrice = price
    },
    calculatePrice() {
      const beforeDiscount = this.pickedDates.reduce((sum, day) => {
          return sum + (this.getMult(day) * this.basePrice);
      }, 0);

      this.price = (beforeDiscount + this.bathhousePrice) * (this.userData.refundable ? 1 : 0.8);
    },
    getMult(day) {
      const strDate = `${day.year}-${day.month > 9 ? day.month : '0' + day.month}-${day.date > 9 ? day.date : '0' + day.date}`;

      const overlap = this.priceTable.exceptions.find(x => x.date === strDate);

      if (overlap != null) {
          return overlap.price;
      }

      return {
          0: this.priceTable.sunday,
          5:  this.priceTable.friday,
          6:  this.priceTable.saturday,
      }[day.day] ??  this.priceTable.weekday;
    },

    changeBathhouseOption(e, option){
      if (option.type === 'checkbox' && !e.target.checked){
        const idx = this.bathhouseSelectedOptions.findIndex(x => x.id === option.id)
        this.bathhouseSelectedOptions.splice(idx, 1)
        this.calculateBathhousePrice()
        return
      }
      
      const oldItem = this.bathhouseSelectedOptions.find(x => x.id === option.id)

      if (oldItem != null){
        oldItem.value = e.target.value
      } else {
        const item = {
          type: option.type,
          value: option.type === 'checkbox' ? e.target.checked : e.target.value,
          id: option.id,
          price: option.price
        }
        this.bathhouseSelectedOptions.push(item)
      }

      this.calculateBathhousePrice()
    },

    getBathHourPrice(hour){
      const day = {
        5: 'friday',
        6: 'saturday',
        0: 'sunday'
      }[hour.day] ?? 'weekday'

      const tableDay = this.bathhousePriceTable[day]

      for (const interval of tableDay.priceInterval){
        const start = Number(interval.from.slice(0,2))
        const end = Number(interval.to.slice(0,2)) === 0 ? 24 : Number(interval.to.slice(0,2))

        if (hour.hour >= start && hour.hour < end){
          return interval.price
        }
      }
    },

    async getData(){
      this.priceTable = (await this.$http.$get('guest-house-price-table?populate=deep%2C10')).data
      this.bathhousePriceTable = (await this.$http.$get('bathhouse-price-table?populate=deep%2C10')).data
      this.ordersList = (await this.$http.$get(`guest-house-orders?populate=deep%2C10%20`)).data
      this.bathhouseOrdersList = (await this.$http.$get(`bathhouse-orders?populate=deep%2C%2010`)).data
      this.options = [(await this.$http.$get(`guest-house-options/${this.$route.params.house}`)).data]
      this.bathhouseOptions = [(await this.$http.$get(`bathhouse-options?populate=deep%2C%2010`)).data]
    },

    async bookHouse(){
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
        options: []
      }

      dataToSend.contactInformation.phone = dataToSend.contactInformation.phone.replaceAll(/[ ()-]/g, '')


      if (this.bathhousePrice){
        dataToSend.bathhouse_order = this.assembleBathhouseData()
      }

      const resp = await this.$http.$post('guest-house-orders', dataToSend)
      console.log(resp)
    },
    assembleBathhouseData(){
      const dateTime = new Date(this.firstPickedTime.year, this.firstPickedTime.month, this.firstPickedTime.date, this.firstPickedTime.hour)

      const data = {
        people: this.bathhouseData.people,
        bathhouse: 1,
        hours: this.includedHours.length,
        dateTime,
        refundable: this.userData.refundable,
        options: this.assembleBathhouseOptions()
      }

      return data
    },
    assembleBathhouseOptions(){
      const options = this.bathhouseSelectedOptions.map(x => {
        return  {
          id: x.id,
          value: x.value
        }
      })
      console.log(options)
      return options
    },
    isPersonalFilled(){
      if (this.userData.contactInformation.email && this.userData.contactInformation.phone && this.userData.contactInformation.firstName && this.userData.contactInformation.lastName){
        return 'Заполнено'
      } 
      return '-'
    },
    isBathhouseBtnDisabled(){
      return (!this.bathhouseData.people || !this.includedHours.length)
    },
    addZero(str){
      if (+str<10){
        return `0${str.toString()[0]}`
      }
      return str
    },
    pickTime(hour){
      hour = this.getHourInfo(hour.id)

      if (!this.firstPickedTime.id){
        this.firstPickedTime = hour
        this.includedHours = [hour]
      } else {
        if(hour.id === this.firstPickedTime.id){
          if(!this.secondPickedTime.id){
            this.firstPickedTime = {}
            this.includedHours = []
            this.calculateBathhousePrice()
            return
          } else {
            this.firstPickedTime = this.secondPickedTime
            this.secondPickedTime = {}
            this.includedHours = [this.firstPickedTime]
            this.calculateBathhousePrice()
            return
          }
        }
        if(hour.id === this.secondPickedTime.id){
          this.secondPickedTime = {}
          this.includedHours = [this.firstPickedTime]
          this.calculateBathhousePrice()
          return
        }
        this.secondPickedTime = hour
        this.clearExcessHours()
        if(hour.id > this.firstPickedTime.id){
          this.includeForward()
        } else {
          this.includeBackward()
        }
      }

      this.clearCopies()
      this.calculateBathhousePrice()
    },
    clearExcessHours(){
      for (const hour of this.includedHours){
        if((hour.id > this.firstPickedTime.id && hour.id > this.secondPickedTime.id) || (hour.id < this.firstPickedTime.id && hour.id < this.secondPickedTime.id)){
          this.includedHours = this.includedHours.filter(x => x.id !== hour.id)
        }
      }
    },
    clearCopies(){
      this.includedHours.forEach(x => {
        const idx = this.includedHours.findIndex(y => (y.id === x.id && y !== x))
        if (~idx){
          this.includedHours.splice(idx, 1)
        }
      })
    },
    includeForward(){
       for (let i = this.firstPickedTime.id; i <= this.secondPickedTime.id; i++){
          const hour = this.getHourInfo(i)
          if (this.disabledHours.some(x => (x.date === hour.date && x.month === hour.month && x.year === hour.year && x.hour === hour.hour))){
            this.secondPickedTime = this.getHourInfo(i-1)
            return
          }

          this.includedHours.push(hour)
        }
    },

    includeBackward(){
       for (let i = this.firstPickedTime.id; i >= this.secondPickedTime.id; i--){
        const hour = this.getHourInfo(i)
          if (this.disabledHours.some(x => (x.date === hour.date && x.month === hour.month && x.year === hour.year && x.hour === hour.hour))){
            this.secondPickedTime = this.getHourInfo(i+1)
            return
          }

          this.includedHours.push(hour)
        }
    },

    getClass(hour){
      const disabled = this.isHourDisabled(hour) ? 'disabled-hour' : ''
      const lastDisabled = (disabled && (!this.isHourDisabled(this.getHourInfo(hour.id+1)) || hour.hour === 11 || hour.hour === 23)) ? 'last-disabled-hour' : ''
      const firstDisabled = (disabled && (!this.isHourDisabled(this.getHourInfo(hour.id-1))  || hour.hour === 0)) ? 'first-disabled-hour' : ''
      const included = ~this.includedHours.findIndex(x=> x.id === hour.id) ? 'included-hour' : ''
      const lastIncluded = (included && (!~this.includedHours.findIndex(x=> x.id === hour.id+1) || hour.hour === 11 || hour.hour === 23)) ? 'last-included-hour' : ''
      const firstIncluded = (included && (!~this.includedHours.findIndex(x=> x.id === hour.id-1) || hour.hour === 0)) ? 'first-included-hour' : ''

      return [disabled, lastDisabled, firstDisabled, included, lastIncluded, firstIncluded].join(' ')
    },

    isHourDisabled(hour){
      return this.disabledHours.some(x => (x.date === +hour.date && x.month === hour.month && x.year === hour.year && x.hour === hour.hour))
    },

    assembleDisabledHours(){
      for (const date of this.bathhouseOrdersList){
        if (date.status === 'confirmed'){
          const dateObj = new Date(date.datetime)

          let hour = dateObj.getHours()
          
          for (let i = 0; i < date.hours; i++ ){

            const time = {
              date: dateObj.getDate(),
              month: dateObj.getMonth() + 1,
              year: dateObj.getFullYear(),
              hour
            }

            this.disabledHours.push(time)
            hour++
          }
        }
      }
    },

    getHourInfo(id){
      return {
        id,
        hour : id % 24,
        date : id > 23 ? this.theNextDay.date : this.bathDay.date,
        month : id > 23 ? this.theNextDay.month : this.bathDay.month,
        year : id > 23 ? this.theNextDay.year : this.bathDay.year,
        day: id > 23 ? this.theNextDay.day : this.bathDay.day
      }
    }
  }
}


</script>

<style lang="scss" src="./index.scss" scoped>
</style>

<!-- {
  "guest_house": "1",
  "people": 1,
  "arrivalTime": "12:54:00.000",
  "leaveTime": "12:54:00.000",
  "from": "2022-09-19",
  "to": "2022-09-19",
  "contactInformation": {
      "firstName": "dfgdfg",
      "lastName": "dfgdfg",
      "email": "dfgdf@sdf.re",
      "phone": "+72343453453"
  },
  "refundable": false,
  "options": [],
  "bathhouse_order": {
      "people": "7",
      "bathhouse": 1,
      "hours": 2,
      "dateTime": "2022-10-19T00:00:00.000Z",
      "refundable": false,
      "options": [
          {
              "id": 1,
              "value": "2"
          },
          {
              "id": 2,
              "value": "3"
          },
          {
              "id": 3,
              "value": true
          },
          {
              "id": 5,
              "value": true
          }
      ]
  }
} -->