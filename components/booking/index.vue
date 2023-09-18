<template>
  <div>
    <div v-show="booking">
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
