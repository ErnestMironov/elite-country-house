 <template>
  <div class="booking-calendar">
    <div class="booking-calendar__month-slider">
      <h4 class="booking-calendar__month">{{months.get(currentMonthNumber) + " " + currentYear}}</h4>
      <div class="booking-calendar__controls">
        <img src="@/assets/icons/calendar_back.svg" alt="" :class="checkCurrentMonth() ? 'arrow-disabled' : ''" @click="prevMonth">
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
  </div>
</template>

<script>  
import {months} from '@/assets/calendar';

 export default {
  props: {
    takenDates: Array
  },
   setup() {
  },
  data() {
    return {
      // calendar,
      months,
      disabledDays: [],
      includedDays: [],
      firstPickedDay: {},
      secondPickedDay: {},
      currentYear: 2022, 
      currentMonthNumber: 8,
      month: [],
      currentMonth: {
        month: 9,
        year: 2022
      }
    };
  },
  created() {
    const now = new Date()
    this.currentYear = now.getFullYear()
    this.currentMonthNumber = now.getMonth()
    this.currentMonth.month = this.currentMonthNumber
    this.currentMonth.year = this.currentYear

    this.assembleMonth(this.currentMonthNumber + 1, this.currentYear)

    this.getDayById(1096)

    for (const interval of this.$props.takenDates){
      this.disabledDays.push(...this.countDisabledDays(interval.from, interval.to))
    }

    this.disabledDays.forEach(x => {
      x.id = this.getId(x)
      })
  },
  methods: {
    getClass(day){
      const disabled = ~this.disabledDays.findIndex(x=> x.id === day.id) ? 'disabled' : ''
      const lastDisabled = (disabled && (!~this.disabledDays.findIndex(x=> x.id === day.id+1) || day.day === 0)) ? 'last-disabled' : ''
      const firstDisabled = (disabled && (!~this.disabledDays.findIndex(x=> x.id === day.id-1)  || day.day === 1)) ? 'first-disabled' : ''
      const included = ~this.includedDays.findIndex(x=> x.id === day.id) ? 'included' : ''
      const lastIncluded = (included && (!~this.includedDays.findIndex(x=> x.id === day.id+1) || day.day === 0)) ? 'last-included' : ''
      const firstIncluded = (included && (!~this.includedDays.findIndex(x=> x.id === day.id-1) || day.day === 1)) ? 'first-included' : ''

      return [disabled, lastDisabled, firstDisabled, included, lastIncluded, firstIncluded].join(' ')
    },

    pickDate(day){
      if (~this.disabledDays.findIndex(x=> x.id === day.id)){
        return
      }
      if (!this.firstPickedDay.id){
        this.firstPickedDay = day
        this.includedDays = [day]
        this.$emit('picked', this.includedDays)
      } else {
        if(day.id === this.firstPickedDay.id){
          if(!this.secondPickedDay.id){
            this.firstPickedDay = {}
            this.includedDays = []
            this.$emit('picked', this.includedDays)
            return
          } else {
            this.firstPickedDay = this.secondPickedDay
            this.secondPickedDay = {}
            this.includedDays = [this.firstPickedDay]
            this.$emit('picked', this.includedDays)
            return
          }
        }
        if(day.id === this.secondPickedDay.id){
          this.secondPickedDay = {}
          this.includedDays = [this.firstPickedDay]
          this.$emit('picked', this.includedDays)
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

      this.includedDays.forEach(x => {
        const day = this.getDayById(x.id)
        x.day = day.day
        x.date = day.date
        x.month = day.month
        x.year = day.year
      })

      this.clearCopies()
      
      this.$emit('picked', this.includedDays)
    },

    clearExcessDays(){
      for (const day of this.includedDays){
        if((day.id > this.firstPickedDay.id && day.id > this.secondPickedDay.id) || (day.id < this.firstPickedDay.id && day.id < this.secondPickedDay.id)){
          this.includedDays = this.includedDays.filter(x => x.id !== day.id)
        }
      }
    },

    clearCopies(){
      this.includedDays.forEach(x => {
        const idx = this.includedDays.findIndex(y => (y.id === x.id && y != x))
        if (~idx){
          this.includedDays.splice(idx, 1)
        }
      })
    },

    includeForward(){
       for (let i = this.firstPickedDay.id; i <= this.secondPickedDay.id; i++){
          if (~this.disabledDays.findIndex(x => x.id === i)){
            this.secondPickedDay = this.month.find(y => y.id === i-1)  
            return
          }
          this.includedDays.push({id: i })
        }
    },

    includeBackward(){
       for (let i = this.firstPickedDay.id; i >= this.secondPickedDay.id; i--){
           if (~this.disabledDays.findIndex(x => x.id === i)){
            this.secondPickedDay = this.month.find(y => y.id === i+1)
            return
          }
          this.includedDays.push({id: i })
        }
    },
    
    getCurrentMonth(){
      return calendar.findIndex(x => (x.year === this.currentMonth.year && x.month === this.currentMonth.month))
    },

    nextMonth(){
      this.currentMonthNumber = this.currentMonthNumber === 11 ? 0 :  this.currentMonthNumber + 1
      this.currentYear = this.currentMonthNumber === 0 ? this.currentYear + 1 : this.currentYear

      this.assembleMonth(this.currentMonthNumber + 1, this.currentYear)
    },

    prevMonth(){
      this.currentMonthNumber = this.currentMonthNumber === 0 ? 11 : this.currentMonthNumber - 1
      this.currentYear = this.currentMonthNumber === 11 ? this.currentYear - 1 : this.currentYear

      this.assembleMonth(this.currentMonthNumber + 1, this.currentYear)
    },

    assembleMonth(currentMonth, currentYear){
      this.month = []
      const currentMonthLength = this.getDaysInMonth(currentYear, currentMonth)

      const monthToCheck = currentMonth === 0 ? 11 : currentMonth - 1
      const yearToCheck = currentMonth === 1 ? currentYear - 1 : currentYear
      const prevMonthLength = this.getDaysInMonth(yearToCheck, monthToCheck)

      const nextMonthYear = currentMonth === 12 ? currentYear + 1 : currentYear

      const lastDay = new Date(currentYear, currentMonth, 0).getDay()

      this.fillCurrentMonth(currentYear, currentMonth, currentMonthLength)
      
      this.fillNextMonth(lastDay, nextMonthYear, currentMonth)
      
      this.fillPrevMonth(prevMonthLength, monthToCheck, yearToCheck)

      this.setIds()
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
          month: currentMonth === 12 ? 1 : currentMonth + 1,
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
          month: monthToCheck === 0 ? 12 : monthToCheck,
          year: yearToCheck
        }
        this.month.unshift(day)
        prevMonthDay--
        dayOfWeek = dayOfWeek === 0 ? 6 : dayOfWeek - 1
      }
    },

    setIds(){
      this.month.forEach(x => {
        x.id = this.getId(x)
      })
    },

    getId(day){
      const now = new Date(day.year, day.month-1, day.date);
      const start = new Date(now.getFullYear(), 0, 0);
      const diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
      const oneDay = 1000 * 60 * 60 * 24;
      const dayNumber = Math.floor(diff / oneDay);
      const id = (((day.year-2020)* 365) + Math.floor((day.year-2021)/4)) + dayNumber
      return id
    },

    getDayById(id){
      const timestamp = Date.UTC(2020, 0, 0)
      const after2020 = 1000 * 60 * 60 * 24 * id
      const dayTimestamp = timestamp + after2020 + 1000 * 60 * 60 * 24
      const date = new Date(dayTimestamp)

      const day = {
        day: date.getDay(),
        date: date.getDate(),
        month: date.getMonth()+1,
        year: date.getFullYear()
      }
      return day
    },

    checkCurrentMonth(){
      return (this.currentMonthNumber <= this.currentMonth.month && this.currentYear <= this.currentMonth.year)
    },
    countDisabledDays(startDate, endDate){
      const days = [];
      const fromDate = new Date(startDate);
      const toDate = new Date(endDate);

      const from = {
          date: fromDate.getDate(),
          day: fromDate.getDay(),
          month: fromDate.getMonth() + 1,
          year: fromDate.getFullYear(),
      };
      const to = {
          date: toDate.getDate(),
          day: toDate.getDay(),
          month: toDate.getMonth() + 1,
          year: toDate.getFullYear(),
      };

      from.id = this.getId(from);
      to.id = this.getId(to);

      for (let i = from.id; i <= to.id; i++) {
          days.push(this.getDayById(i));
      }

      return days;
  },
  },
  }
</script>

<style lang="scss" src="./index.scss" scoped>
</style>