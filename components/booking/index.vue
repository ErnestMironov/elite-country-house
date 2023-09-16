<template>
  <div>
    <div v-show="booking">
      <script src="https://realtycalendar.ru/webpack/application.js?_t=9058a171d7fb2c4af6cb"></script>
      <div id="rc-bookings-widget-root"></div>
      <script type="text/javascript">
        RC_BOOKINGS_WIDGET.init('4bc61ae42fee54a51672300e27a4282a')
      </script>

      <script src="https://realtycalendar.ru/webpack/search.js?_t=9058a171d7fb2c4af6cb"></script>
      <div id="rc-small-bookings-widget-root"></div>
      <script type="text/javascript">
        RC_SMALL_BOOKINGS_WIDGET.init('4bc61ae42fee54a51672300e27a4282a')
      </script>
    </div>
    <button v-show="!booking" class="btn booking__btn" @click="startBooking">
      Забронировать
    </button>
  </div>
</template>

<script>
export default {
  name: 'TheBooking',
  props: {
    objectParams: {
      type: Object,
      required: true,
    },
    objectType: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      booking: false,
    }
  },
  updated() {
    const flatList = document.querySelectorAll('.rc-flat')

    flatList.forEach((flat) => {
      const innerText = flat.querySelector('.rc-flat__info__adress').innerText
      if (
        typeof innerText === 'string' &&
        innerText.includes(this.objectParams.name)
      ) {
        return
      }

      flat.remove()
    })
  },
  methods: {
    startBooking() {
      this.booking = true
    },
  },
}
</script>

<style lang="scss" src="./index.scss" scoped></style>
