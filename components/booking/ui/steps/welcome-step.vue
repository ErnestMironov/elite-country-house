<template>
  <div v-if="true" class="book__buttons-wrapper">
    <button
      class="btn booking__next-btn--first booking__continue-btn"
      @click="goToStep(step + 1)"
    >
      Продолжить оформление
    </button>
    <button class="btn btn_white booking__skip-btn booking__new-button">
      Создать новый заказ
    </button>
  </div>
  <button
    v-else
    class="btn booking__next-btn--first"
    @click="goToStep(step + 1)"
  >
    Забронировать
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'
export default Vue.extend({
  name: 'WelcomeStep',
  computed: {
    ...mapGetters('booking', ['step']),
  },
  methods: {
    ...mapActions('booking', ['goToStep']),
  },
})
</script>

<style lang="scss" src="../../index.scss" scoped></style>
