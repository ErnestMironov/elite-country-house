<template>
  <div>
    <script :src="scriptSrc" type="text/javascript"></script>
    <script src="https://realtycalendar.ru/webpack/application.js?_t=9058a171d7fb2c4af6cb"></script>
    <script type="text/javascript">
      RC_BOOKINGS_WIDGET.init('4bc61ae42fee54a51672300e27a4282a')
    </script>
    <div v-show="booking">
      <div
        :id="`realtycalendar-widget-container-${widgetId}`"
        class="realty-calendar-widget-wrap"
      ></div>
      <div id="rc-bookings-widget-root"></div>
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
      isScriptLoaded: false,
    }
  },
  computed: {
    widgetId() {
      const objectsList = {
        1: 146459,
        2: 146467,
        3: 146462,
      }

      if (this.objectParams?.id === undefined) {
        return ''
      }

      return objectsList[this.objectParams?.id]
    },
    scriptSrc() {
      if (!this.widgetId) return ''

      return `https://realtycalendar.ru/widgets/script?id=${this.widgetId}`
    },
  },
  mounted() {
    const interval = setInterval(function () {
      if (this.isScriptLoaded) {
        clearInterval(interval)
        return
      }

      if (window.RC_BOOKINGS_WIDGET !== 'undefined') {
        this.isScriptLoaded = true
        window.RC_BOOKINGS_WIDGET.init('4bc61ae42fee54a51672300e27a4282a')
      }
    }, 100)
  },
  methods: {
    startBooking() {
      this.booking = true
    },
  },
}
</script>

<style lang="scss" src="./index.scss" scoped></style>
