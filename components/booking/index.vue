<template>
  <section class="booking">
    <div class="booking-info">
      <div class="booking__info-section">
        <h5 class="booking__info-title">
          Дата бронирования
        </h5>
        <span class="booking__info-value">16.07.2022</span>
      </div>
      <div class="booking__info-section">
        <h5 class="booking__info-title">
          Добавление бани
        </h5>
        <span class="booking__info-value">-</span>
      </div>
      <div class="booking__info-section">
        <h5 class="booking__info-title">
          Личные данные 
        </h5>
        <span class="booking__info-value">Заполнено</span>
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

      <div class="booking-calendar">
        <div class="booking-calendar__month-slider">
          <h4 class="booking-calendar__month">{{months.get(currentMonth.month) + " " + currentMonth.year}}</h4>
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
              v-for="day in currentMonth.days" 
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
      </div>
        
        <div class="booking__info-container">
          <h3 class="booking__header">Основные параметры</h3>
          <label class="booking-label">
            <h4 class="booking__sub-header">Фактическое время заселения</h4>
            <div class="booking__input-field">
              <img src="@/assets/icons/clock.svg" alt="">
              <input v-maska="'##:##'" type="text" placeholder="15:00">
            </div>
            <span>Стандартное время заселения: 14:00</span>
          </label>
          <label class="booking-label">
            <h4 class="booking__sub-header">Фактическое время выезда</h4>
            <div class="booking__input-field">
              <img src="@/assets/icons/clock.svg" alt="">
              <input v-maska="'##:##'" type="text" placeholder="15:00">
            </div>
            <span>Стандартное время выезда: 14:00</span>
          </label>
          <label class="booking-label">
            <h4 class="booking__sub-header">Количество человек</h4>
            <div class="booking__input-field">
              <img src="@/assets/icons/people.svg" alt="">
              <input type="number" placeholder="6 человек">
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
            <button class="btn booking__next-btn" @click="setProgress(2)">Далее</button>
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
            <button class="btn btn_white booking__skip-btn booking__btn">Пропустить</button>
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
                <button class="booking__radio-btn">Пятница</button>
                <button class="booking__radio-btn">Будние дни</button>
                <button class="booking__radio-btn">Суббота</button>
                <button class="booking__radio-btn">Воскресенье</button>
              </div>
            </div>


            <div class="booking__info-wrapper--s">
              <h4 class="booking__sub-header booking__conditions-header">Время</h4>

              <div class="booking-time-label">
                <h5 class="booking-time-label__time">10:00 - 17:00</h5>
                <span class="booking-time-label__price booking-time-label__price--desktop">Стоимость бронирования</span>
                <span class="booking-time-label__price booking-time-label__price--mobile">Стоимость</span>
                <span class="booking-time-label__value">3600₽/Час</span>
              </div>

              <div class="booking-time-label">
                <h5 class="booking-time-label__time">10:00 - 17:00</h5>
                <span class="booking-time-label__price booking-time-label__price--desktop">Стоимость бронирования</span>
                <span class="booking-time-label__price booking-time-label__price--mobile">Стоимость</span>
                <span class="booking-time-label__value">3600₽/Час</span>
              </div>

              <div class="booking-time-label">
                <h5 class="booking-time-label__time">10:00 - 17:00</h5>
                <span class="booking-time-label__price booking-time-label__price--desktop">Стоимость бронирования</span>
                <span class="booking-time-label__price booking-time-label__price--mobile">Стоимость</span>
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
                  <img src="@/assets/icons/calendar.svg" alt="">
                 <input v-maska="'##.##.##'" type="text" placeholder="10.03.10">
                </div>
              </label>

              <label class="booking-label">
                <h4 class="booking__sub-header">Время</h4>
                <div class="booking__input-field">
                  <img src="@/assets/icons/clock.svg" alt="">
                 <input v-maska="'##:##'" type="text" placeholder="15:00">
                </div>
              </label>

              <label class="booking-label">
                <h4 class="booking__sub-header">Длительность</h4>
                <div class="booking__input-field booking__input-field--transparent">
                  <img src="@/assets/icons/duration.svg" alt="">
                  <span> 
                    2 часа
                  </span>
                </div>
              </label>

              <label class="booking-label">
                <h4 class="booking__sub-header">Количество человек</h4>
                <div class="booking__input-field">
                  <img src="@/assets/icons/people.svg" alt="">
                  <span> 
                    6 человек
                  </span>
                </div>
                <h4 class="booking__sub-header booking__last-header">+400₽/чел от 6ти человек</h4>
              </label>
          </div>

      </div>

            <div class="booking__info-wrapper">
                <h3 class="booking__header">Дополнительные параметры</h3>

                <label class="booking-label">
                  <h4 class="booking__sub-header">Добавить банные принадлежности</h4>
                  <div class="booking__input-field">
                    <img src="@/assets/icons/slippers.svg" alt="">
                    <span> 
                      количество банных наборов
                    </span>
                  </div>
                  <h4 class="booking__sub-header booking__last-header">+400₽/чел от 6ти человек</h4>
                </label>

                <label class="booking-label">
                  <h4 class="booking__sub-header">Добавить банные принадлежности</h4>
                  <div class="booking__input-field">
                    <span> 
                      Количество дубовых веников
                    </span>
                  </div>
                  <h4 class="booking__sub-header booking__last-header">+350₽/шт</h4>
                </label>

                <label class="booking__checkbox-label">
                  <div class="booking__checkbox-wrapper">
                    <input type="checkbox" class="checkbox">
                    <span class="booking__sub-header booking__checkbox-header">
                      Добавить услуги парильщика       
                    </span>
                  </div>
                  <span class="booking__checkbox-price">1400₽</span>
                </label>
                <label class="booking__checkbox-label">
                  <div class="booking__checkbox-wrapper">
                    <input type="checkbox" class="checkbox">
                    <span class="booking__sub-header booking__checkbox-header">
                      Добавить Фурако    
                    </span>
                  </div>
                  <span class="booking__checkbox-price">1400₽</span>
                </label>
                <label class="booking__checkbox-label">
                  <div class="booking__checkbox-wrapper">
                    <input type="checkbox" class="checkbox">
                    <span class="booking__sub-header booking__checkbox-header">
                      Добавить Джакузи      
                    </span>
                  </div>
                  <span class="booking__checkbox-price">1400₽</span>
                </label>

              <div class="booking__price booking__price--bathhouse">
                Цена: 3600
                <img src="@/assets/icons/rouble.svg" alt="" class="booking__price-ticker">
              </div>
              <div class="booking__buttons-wrapper booking__buttons--3">
                <button class="btn booking__next-btn booking-button--3" @click="setProgress(4)">Далее</button>
              </div>
            </div>

          </div>

          <div v-if="currentProgress === 4" class="booking-wrapper booking-4">
            <div class="booking__info-wrapper booking__info-wrapper--l">
                  <div class="booking__checkbox-wrapper booking__checkbox-wrapper--l">
                    <input type="checkbox" class="checkbox">
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
                    <input type="text" placeholder="Введите вашу фамилию">
                  </div>
                </label>

                <label class="booking-label">
                  <h4 class="booking__sub-header">Имя</h4>
                  <div class="booking__input-field">
                    <input type="text" placeholder="Введите ваше имя">
                  </div>
                </label>

                <label class="booking-label">
                  <h4 class="booking__sub-header">Email</h4>
                  <div class="booking__input-field">
                      <input type="email" placeholder="Введите ваш email">
                  </div>
                </label>

                <label class="booking-label">
                  <h4 class="booking__sub-header">Номер телефона</h4>
                  <div class="booking__input-field">
                   <input v-maska="'+7 (###) ###-##-##'" type="text" placeholder="Введите номер телефона">
                  </div>
                </label>
            </div>

            <div class="booking__info-wrapper">
                 <label class="booking__agreement-label">
                  <div class="booking__checkbox-wrapper booking__checkbox-wrapper--l">
                    <input type="checkbox" class="checkbox">
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
                    <input type="checkbox" class="checkbox">
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

                <div class="booking__buttons-wrapper booking__buttons--4">
                  <button class="btn booking__next-btn booking-button--4" @click="setProgress(4)">Посмотреть пречек и оплатить</button>
                </div>
            </div>

      </div>


  </section>
</template>

<script>  
import {maska} from 'maska'
import {calendar, months} from '@/assets/calendar';

 export default {
  directives: { maska },
   setup() {
     
     return {
       // remarks,
    }
  },
  data() {
    return {
      currentProgress: 0,
      value1: [new Date(2019, 9, 8), new Date(2019, 9, 19)],
      value2: null,
      calendar,
      months,
      disabledDays: [
       {
        day: '3',
        date: '07',
        month: '09',
        id: 10
      },
      {
        day: '4',
        date: '08',
        month: '09',
        id: 11
      },
      {
        day: '5',
        date: '09',
        month: '09',
        id: 12
      },
      {
        day: '6',
        date: '10',
        month: '09',
        id: 13
      },
      ],
      includedDays: [],
      firstPickedDay: {},
      secondPickedDay: {},
      currentYear: 2022, 
      currentMonthNumber: 9,
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
      month: []
    };
  },
  created() {
    const now = new Date()
    this.currentYear = now.getFullYear()
    this.currentMonth = now.getMonth()

    const month = now.getMonth()+1
    const year = now.getFullYear()
    console.log(year)
    console.log(month)
    this.assembleMonth(month, year)
    this.currentMonth = calendar.find(x =>{
       return ((Number(x.month) === (now.getMonth() + 1)) && (Number(x.year) === now.getFullYear()))
       })
  },
  methods: {
    setProgress(count){
      this.currentProgress = count
    },
    getClass(day){
      const disabled = ~this.disabledDays.findIndex(x=> x.id === day.id) ? 'disabled' : ''
      const lastDisabled = (disabled && (!~this.disabledDays.findIndex(x=> x.id === day.id+1) || day.day === '7')) ? 'last-disabled' : ''
      const firstDisabled = (disabled && (!~this.disabledDays.findIndex(x=> x.id === day.id-1)  || day.day === '1')) ? 'first-disabled' : ''
      const included = ~this.includedDays.findIndex(x=> x.id === day.id) ? 'included' : ''
      const lastIncluded = (included && (!~this.includedDays.findIndex(x=> x.id === day.id+1) || day.day === '7')) ? 'last-included' : ''
      const firstIncluded = (included && (!~this.includedDays.findIndex(x=> x.id === day.id-1) || day.day === '1')) ? 'first-included' : ''

      return [disabled, lastDisabled, firstDisabled, included, lastIncluded, firstIncluded].join(' ')
    },
    pickDate(day){
      if (~this.disabledDays.findIndex(x=> x.id === day.id)){
        return
      }

      if (!this.firstPickedDay.id){
        this.firstPickedDay = day
        this.includedDays = [day]
      } else {
        if(day.id ===this.firstPickedDay.id){
          if(!this.secondPickedDay.id){
            this.firstPickedDay = {}
            // this.includedDays.length = 0
            this.includedDays = []
            return
          } else {
            this.firstPickedDay = this.secondPickedDay
            this.secondPickedDay = {}
            this.includedDays = [this.firstPickedDay]
            return
          }
        }

        if(day.id === this.secondPickedDay.id){
          this.secondPickedDay = {}
          this.includedDays = [this.firstPickedDay]
          return
        }

        this.secondPickedDay = day

        this.clearExcessDays()

        if(day.id > this.firstPickedDay.id){
          this.includeForward()
        } else {
          this.includeBackward()
        }
      }
    },
    clearExcessDays(){
      for (const day of this.includedDays){
        if((day.id > this.firstPickedDay.id && day.id > this.secondPickedDay.id) || (day.id < this.firstPickedDay.id && day.id < this.secondPickedDay.id)){
          this.includedDays = this.includedDays.filter(x => x.id !== day.id)
        }
      }
    },
    includeForward(){
       for (let i = this.firstPickedDay.id; i <= this.secondPickedDay.id; i++){
          const includedDay = this.currentMonth.days.find(x => x.id === i)
          if (~this.disabledDays.findIndex(x => x.id === includedDay.id)){
            this.secondPickedDay = this.currentMonth.days.find(y => y.id === i-1)  
            return
          }
          this.includedDays.push(includedDay)
        }
    },
    includeBackward(){
       for (let i = this.firstPickedDay.id; i >= this.secondPickedDay.id; i--){
          const includedDay = this.currentMonth.days.find(x => x.id === i)
           if (~this.disabledDays.findIndex(x => x.id === includedDay.id)){
            this.secondPickedDay = this.currentMonth.days.find(y => y.id === i+1)
            return
          }
          this.includedDays.push(includedDay)
        }
    },
    getCurrentMonth(){
      return calendar.findIndex(x => (x.year === this.currentMonth.year && x.month === this.currentMonth.month))
    },
    nextMonth(){
      this.currentMonth  = calendar[this.currentMonth.monthId+1]
      this.currentMonthNumber = this.currentMonthNumber === 11 ? 0 :  this.currentMonthNumber +1
      // this.assembleMonth()
    },
    prevMonth(){
      this.currentMonth  = calendar[this.currentMonth.monthId-1]
    },
     // const nextMonthToCheck = currentMonth === 1 ? 12 : currentMonth - 1
      // const nextYearToCheck = prevMonthNumber === 12 ? currentYear - 1 : currentYear
      // const nextMonthLength = new Date(currentYear, currentMonth, 0).getDate()
    assembleMonth(currentMonth, currentYear){
      const currentMonthLength = this.getDaysInMonth(currentYear, currentMonth)

      const monthToCheck = currentMonth === 0 ? 11 : currentMonth - 1
      const yearToCheck = monthToCheck === 11 ? currentYear - 1 : currentYear
      const prevMonthLength = this.getDaysInMonth(yearToCheck, monthToCheck)

      const nextMonthYear = currentMonth === 11 ? currentYear + 1 : currentYear

      const lastDay = new Date(currentYear, currentMonth, 0).getDay()

      this.fillCurrentMonth(currentYear, currentMonth, currentMonthLength)

      this.fillNextMonth(lastDay, nextMonthYear, currentMonth)

      this.fillPrevMonth(prevMonthLength, monthToCheck, yearToCheck)
      console.log(this.month)

    },
    getDaysInMonth(year, month) {
      return new Date(year, month, 0).getDate();
    },
    fillCurrentMonth(currentYear, currentMonth, currentMonthLength){
        for (let i = currentMonthLength; i>0; i--){
        const day = {
          day: new Date(currentYear, currentMonth-1, i).getDay() ,
          date: i,
          month: currentMonth,
          year: currentYear
        }
        this.month.unshift(day)
      }
    },
    fillNextMonth(lastDay, nextMonthYear, currentMonth){
      let k = 1
      for (let i = lastDay; i < 7; i++){
        const day = {
          day: i+1,
          date: k,
          month: currentMonth + 1,
          year: nextMonthYear
        }
        this.month.push(day)
        k++
      }
    },
    fillPrevMonth(prevMonthLength, monthToCheck, yearToCheck){
      const leftToFill = 42 - this.month.length
      let prevMonthDay = prevMonthLength
      let dayOfWeek = this.month[0].day - 1
      for (let i = 1; i <= leftToFill; i++){
        const day = {
          day: dayOfWeek,
          date: prevMonthDay,
          month: monthToCheck,
          year: yearToCheck
        }
        this.month.unshift(day)
        prevMonthDay--
        dayOfWeek = dayOfWeek === 0 ? 6 : dayOfWeek - 1
      }
    }
  },
  }
</script>

<style lang="scss" src="./index.scss" scoped>
</style>