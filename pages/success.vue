<template>
  <main class="h-screen flex items-center">
    <div class="container mx-auto">
      <div class="flex flex-col items-center justify-center h-full">
        <h1 class="text-4xl font-bold text-center text-gray-800">
          Спасибо за заявку!
        </h1>
        <p class="text-xl text-center text-gray-600 my-3 flex font-semibold">
          Ваш номер заявки:
          <button
            class="flex ml-2 hover:opacity-50 items-center font-light"
            @click="copyText($route?.query?.orderId ?? '')"
          >
            {{ $route.query.orderId }}
            <img
              class="ml-2"
              src="~/assets/icons/copy.svg"
              alt="скопировать"
              title="скопировать"
            />
          </button>
        </p>
        <p class="text-xl text-center text-gray-600 font-semibold">
          Мы свяжемся с вами в ближайшее время
        </p>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
export default {
  name: 'SuccessPage',
  async asyncData({ $http, query, redirect }) {
    try {
      const { isSuccess } = (
        await $http.$post(`payment/success/${query?.orderId}`)
      ).data

      if (isSuccess) redirect('/unsuccess?orderId=' + query?.orderId)

      return { isSuccess }
    } catch (error) {
      console.error(error)
    }
  },
  data() {
    return {
      orderStatus: null,
    }
  },
  methods: {
    copyText(text: string) {
      navigator?.clipboard?.writeText(text)
    },
  },
}
</script>

<style lang="scss" scoped></style>
