// wizard-store.ts
import Vue from 'vue'
import type { Vue as VueInterface } from 'vue/types/vue'
import { Commit } from 'vuex'
import { IPriceTable, ObjectType } from './types'

export const state = () => ({
  step: 0,
  timeDDActive: false,
  dropdowns: [],
  firstDateOffset: '',
  disabledDays: [],
  bathhouseOrdersList: [] as any[] | null,
  bathhouseBasePrice: 0,
  bathhouseOptions: [] as any[] | null,
  bathhouseSelectedOptions: [] as any[] | null,
  selectedOptions: [],
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
  dayFromSLSet: false,
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
  bathhousePrice: 0,
  bathhouseData: {
    people: null,
    sets: null,
    brooms: null,
    helper: false,
    furako: false,
    jacuzzi: false,
  },
  userData: {
    guest_house: '',
    bathhouse_order: '',
    people: null,
    arrivalTime: '14:00:00.000',
    leaveTime: '14:00:00.000',
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
  priceTable: {} as IPriceTable | null,
  bathhousePriceTable: {},
  bathhousePriceOption: {
    priceInterval: [
      {
        from: '',
        to: '',
      },
    ],
  },
  ordersList: [] as any[] | null,
  personalAgreement: false,
  personalData: false,
  test: {},
  takenDates: [],
  price: 0,
  options: [],
  houseDataLoaded: false,
  objectId: null,
  showPrecheck: false,
  dataToSend: null,
  BHOrder: {},
})

type BookingStore = ReturnType<typeof state>

type BookingStoreInitialData = {
  priceTable: BookingStore['priceTable']
  bathhousePriceTable: BookingStore['bathhousePriceTable']
  ordersList: BookingStore['ordersList']
  options: BookingStore['options']
  bathhouseOrdersList: BookingStore['bathhouseOrdersList']
  bathhouseOptions: BookingStore['bathhouseOptions']
  houseDataLoaded: BookingStore['houseDataLoaded']
}

export const mutations = {
  setStep(state: BookingStore, step: number) {
    state.step = step
  },
  setInitialBookingData(state: BookingStore, data: BookingStoreInitialData) {
    return (state = {
      ...state,
      ...data,
    })
  },

  // setFormData(state: BookingStore, formData: BookingStore['formData']) {
  //   state.formData = formData
  // },
}

export const actions = {
  goToStep({ commit }: { commit: Commit }, step: number) {
    commit('setStep', step)
  },
  saveFormData({ commit }: { commit: Commit }, formData: object) {
    commit('setFormData', formData)
  },
  async initBooking(
    { commit }: { commit: Commit } & VueInterface,
    objectType: ObjectType,
    objectId: number
  ) {
    const data: Partial<BookingStoreInitialData> = {}

    switch (objectType) {
      case ObjectType.House:
        await Promise.all([
          (data.priceTable = (
            await (Vue as any).http.$get(
              'guest-house-price-table?populate=deep%2C10'
            )
          ).data),
          (data.ordersList = (
            await (Vue as any).http.$get(
              `guest-house-orders?guesthouse=${objectId}`
            )
          ).data.filter(
            (x: {
              id: number
              status: string
              from: string
              to: string
              createdAt: string
              updatedAt: string
            }) => x.status !== 'cancelled'
          )),
          (data.options = (
            await (Vue as any).http.$get(
              `guest-house-options?populate=deep%2C%2010`
            )
          ).data),
          (data.bathhousePriceTable = (
            await (Vue as any).http.$get(
              'bathhouse-price-table?populate=deep%2C10'
            )
          ).data),
          (data.bathhouseOrdersList = (
            await (Vue as any).http.$get(`bathhouse-orders`)
          ).data),
          // data.options = [(await (Vue as any).http.$get(`guest-house-options?populate=deep%2C%2010`)).data]
          (data.bathhouseOptions = [
            (
              await (Vue as any).http.$get(
                `bathhouse-options?populate=deep%2C%2010`
              )
            ).data,
          ]),
        ])
        break
      case ObjectType.Apartment:
        await Promise.all([
          (data.priceTable = (
            await (Vue as any).http.$get(
              'apartment-price-table?populate=deep%2C10'
            )
          ).data),
          (data.ordersList = (
            await (Vue as any).http.$get(
              `apartment-orders?apartment=${objectId}`
            )
          )?.data?.filter((x: any) => x.status !== 'cancelled')),
          (data.options = (
            await (Vue as any).http.$get(
              `apartment-options?populate=deep%2C%2010`
            )
          ).data),
        ])
        break
      case ObjectType.Bathhouse:
        await Promise.all([
          (data.bathhousePriceTable = (
            await (Vue as any).http.$get(
              'bathhouse-price-table?populate=deep%2C10'
            )
          ).data),
          (data.bathhouseOrdersList = (
            await (Vue as any).http.$get(`bathhouse-orders`)
          ).data),
          // data.options = [(await (Vue as any).http.$get(`guest-house-options?populate=deep%2C%2010`)).data]
          (data.bathhouseOptions = [
            (
              await (Vue as any).http.$get(
                `bathhouse-options?populate=deep%2C%2010`
              )
            ).data,
          ]),
        ])
    }

    data.houseDataLoaded = true

    commit('setInitialBookingData', data)
  },
}

export const getters = {
  state: (state: BookingStore) => state,
  step: (state: BookingStore) => state.step,
}

// export export const booking = {
//   state,
//   mutations,
//   actions,
//   getters,
// }
