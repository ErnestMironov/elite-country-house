<template>
  <div>
    <div v-show="booking">
      <script src="https://realtycalendar.ru/webpack/application.js?_t=9058a171d7fb2c4af6cb"></script>
      <div id="rc-bookings-widget-root"></div>
      <script type="text/javascript">
        let isScriptLoaded = false

        const interval = setInterval(function () {
          if (isScriptLoaded) {
            clearInterval(interval)
            return
          }

          if (window.RC_BOOKINGS_WIDGET !== 'undefined') {
            isScriptLoaded = true
            RC_BOOKINGS_WIDGET.init('4bc61ae42fee54a51672300e27a4282a')
          }
        }, 100) // check every 100ms
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
  methods: {
    startBooking() {
      this.booking = true
    },
  },
}
</script>

<style lang="scss" src="./index.scss" scoped></style>
