<template>
  <div
    class="h-screen container flex justify-center items-start overflow-auto fixed pb-24 w-screen top-0 left-0 z-10 bg-[#2D292980]"
    @click.self="closePrecheck"
  >
    <div class="check">
      <button
        class="block text-[16px] absolute right-[16px] top-[16px]"
        @click="closePrecheck"
      >
        ✕
      </button>
      <div class="decoration">HEDONIST</div>
      <div v-if="!showPayment" class="pb-[326px] flex flex-col items-center">
        <img
          class="h-[25px] lg:h-[56px] block ml-auto"
          src="~/assets/icons/logo_without-text.svg"
          alt=""
        />
        <h3 class="text-[18px] text-center font-medium mt-[211px]">
          Оплатите заказ по {{ $device.isMobile ? 'СБП' : 'QR-коду' }}
        </h3>
        <div class="option mt-4 w-[300px] max-w-full mx-auto">
          <span>К оплате</span>
          <span>{{ finalPrice | formatPrice }}₽</span>
        </div>
        <a
          v-if="$device.isMobile"
          :href="paymentLink"
          target="blank"
          class="btn text-[20px] my-[40px] mx-auto flex items-center justify-between bg-[#1b1537] py-0 px-[18px]"
        >
          <img src="~/assets/icons/sbplogo.png" alt="" class="w-[50%]" />
          Оплатить
        </a>
        <div v-else ref="qrContainer" class="inline-block mt-8"></div>
        <button
          class="btn text-[16px] py-[18px] px-[64px] mt-[24px] mx-auto block"
        >
          Оплатил
        </button>
      </div>
      <div v-else>
        <div class="flex justify-between items-center mb-[21px]">
          <SimpleTitle title="Пречек"></SimpleTitle>
          <img
            class="h-[25px] lg:h-[56px]"
            src="~/assets/icons/logo_without-text.svg"
            alt=""
          />
        </div>
        <div class="pt-[24px] border-t border-solid border-black">
          <div class="flex">
            <img
              :src="`https://admin.hedonistclub.ru${order?.objectParams?.images[0]?.url}`"
              alt=""
              class="w-[83px] h-[83px] object-cover mr-[18px]"
            />
            <div class="flex-1">
              <h3 class="text-[18px] font-medium">
                {{ mainObject }} "{{ order?.objectParams?.name }}"
              </h3>
              <ul class="flex flex-wrap">
                <li class="text-[#2D292980] text-[16px] mr-[12px]">
                  {{ mainObjectDuration }}
                </li>
                <li class="text-[#2D292980] text-[16px] mr-[12px]">
                  {{ mainObjectPersons }}
                </li>
                <li class="text-[#2D292980] text-[16px] mr-[12px]">
                  {{ new Date(order?.from ?? 0).toLocaleDateString() }}
                </li>
                <li class="text-[#2D292980] text-[16px] mr-[12px]">
                  {{ order?.arrivalTime | formatOrderTime }}
                </li>
              </ul>
              <div class="option option_without_dots mt-[13px]">
                <b>Базовая цена</b>
                <b>{{ order?.totalBasePrice | formatPrice }}₽</b>
              </div>
            </div>
          </div>
          <div
            v-for="option in objectOptions"
            :key="option.id"
            class="option mt-[30px]"
          >
            <b
              >{{ option.title }}
              {{ option.type === 'number' ? `(×${option.value})` : '' }}</b
            >
            <b
              >{{
                (option.type === 'number'
                  ? option.price * option.value
                  : option.price) | formatPrice
              }}₽</b
            >
          </div>
          <div class="summary">
            <div class="option">
              <b>Итог</b>
              <b>{{ objectTotalPrice | formatPrice }}₽</b>
            </div>
          </div>
        </div>
        <div v-if="order?.bathhouse_order?.bathhouse" class="pt-[24px] mt-10">
          <div class="flex">
            <img
              :src="`https://admin.hedonistclub.ru${bathParams?.images[0]?.url}`"
              alt=""
              class="w-[83px] h-[83px] object-cover mr-[18px]"
            />
            <div class="flex-1">
              <h3 class="text-[18px] font-medium">"{{ bathParams?.name }}"</h3>
              <ul class="flex flex-wrap">
                <li class="text-[#2D292980] text-[16px] mr-[12px]">
                  {{ bathDuration }}
                </li>
                <li class="text-[#2D292980] text-[16px] mr-[12px]">
                  {{ bathPersons }}
                </li>
                <li class="text-[#2D292980] text-[16px] mr-[12px]">
                  {{
                    new Date(
                      order?.bathhouse_order?.dateTime ?? 0
                    ).toLocaleDateString({ timezone: '' })
                  }}
                </li>
                <li class="text-[#2D292980] text-[16px] mr-[12px]">
                  {{
                    new Date(
                      order?.bathhouse_order?.dateTime ?? 0
                    ).toLocaleTimeString() | formatOrderTime
                  }}
                </li>
              </ul>
              <div class="option option_without_dots mt-[13px]">
                <b>Базовая цена</b>
                <b>{{ order?.bathhouse_order?.basePrice | formatPrice }}₽</b>
              </div>
            </div>
          </div>
          <div
            v-for="option in bathOptions"
            :key="option.id"
            class="option mt-[30px]"
          >
            <b
              >{{ option.title }}
              {{ option.type === 'number' ? `(×${option.value})` : '' }}</b
            >
            <b
              >{{
                (option.type === 'number'
                  ? option.price * option.value
                  : option.price) | formatPrice
              }}₽</b
            >
          </div>
          <div class="summary">
            <div class="option">
              <b>Итог</b>
              <b>{{ order?.bathhouse_order?.totalPrice | formatPrice }}₽</b>
            </div>
          </div>
        </div>
        <div class="total-summary">
          <div v-if="!order?.refundable" class="option">
            <b>Скидка</b>
            <b>{{ discount | formatPrice }}₽</b>
          </div>
          <div class="option">
            <b>Итог</b>
            <b>{{ finalPrice | formatPrice }}₽</b>
          </div>
        </div>
        <button
          class="btn text-[16px] py-[18px] px-[64px] mt-[24px] ml-auto block"
          @click="createOrder"
        >
          Перейти к оплате
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import QRCodeStyling from 'qr-code-styling'
import SimpleTitle from '~/components/ui/simple-title/simple-title.vue'
import sbpLogo from '~/assets/icons/sbp_logo.svg?url'
import {
  daysPluralize,
  hoursPluralize,
  personsPluralize,
} from '~/helpers/helpers'

export default {
  components: { SimpleTitle },
  filters: {
    formatPrice(val) {
      return Number(val).toLocaleString()
    },
    formatOrderTime(time) {
      if (!time) return ''

      const t = time?.split(':')
      return t[0] + ':' + t[1]
    },
  },
  props: {
    order: {
      type: Object,
      required: true,
    },
    objectOptions: {
      type: Array,
      required: true,
    },
    bathOptions: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      bathParams: null,
      showPayment: false,
    }
  },
  computed: {
    mainObject() {
      switch (this?.order?.objectType) {
        case 0:
          return 'Гостевой дом'
        case 1:
          return 'Апартаменты'
        case 2:
          return 'Баня'

        default:
          return ''
      }
    },
    mainObjectDuration() {
      let dur = Math.abs(
        Math.floor(
          (new Date(this.order?.to) - new Date(this.order?.from)) /
            1000 /
            60 /
            60 /
            24
        )
      )

      dur = dur === 0 ? 1 : dur

      return `${dur} ${daysPluralize(dur)}`
    },
    bathDuration() {
      return `${this.order?.bathhouse_order?.hours} ${hoursPluralize(
        this.order?.bathhouse_order?.hours
      )}`
    },
    mainObjectPersons() {
      return `${this.order?.people} ${personsPluralize(this.order?.people)}`
    },
    bathPersons() {
      return `${this.order?.bathhouse_order?.people} ${personsPluralize(
        this.order?.bathhouse_order?.people
      )}`
    },

    objectTotalPrice() {
      return (
        this.order?.totalBasePrice +
        this.objectOptions?.reduce((prev, cur) => {
          if (cur.type === 'number') {
            return prev + cur.price * cur.value
          } else {
            return prev + cur.price
          }
        }, 0)
      )
    },

    totalPrice() {
      return (
        this.objectTotalPrice + (this.order?.bathhouse_order?.totalPrice ?? 0)
      )
    },

    discount() {
      return this.totalPrice * 0.1
    },

    finalPrice() {
      return this.order?.refundable === false
        ? this.totalPrice - this.discount
        : this.totalPrice
    },

    paymentLink() {
      return `https://qr.nspk.ru/AS1A007E0LK6NJ3L8RLAHG0RK82BSAQ9?type=01&bank=100000000008&crc=5D89&sum=${this.finalPrice}00&cur=RUB`
    },
  },
  async mounted() {
    if (this.order?.bathhouse_order?.bathhouse) {
      this.bathParams = (
        await this.$http.$get(
          `bathhouses/${this.order?.bathhouse_order?.bathhouse}?populate=deep,10`
        )
      ).data
    }

    const qrCode = new QRCodeStyling({
      width: 300,
      height: 300,
      type: 'svg',
      data: this.paymentLink,
      image: sbpLogo,
      dotsOptions: {
        color: '#2D2929',
        type: 'rounded',
      },
      backgroundOptions: {
        color: 'transparent',
      },
      imageOptions: {
        crossOrigin: 'anonymous',
        margin: 20,
      },
    })

    qrCode.append(this.$refs.qrContainer)
  },
  methods: {
    closePrecheck() {
      this.$emit('onClose')
    },
    async createOrder() {
      try {
        await this.$http.$post('guest-house-orders', dataToSend)
        this.showPayment = true
      } catch (error) {
        alert(error.message)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.decoration {
  color: #302c26;
  font-weight: 450;
  font-size: 160px;
  opacity: 0.05;
  transform: rotate(-90deg) translate(-50%, -130%);
  position: absolute;
  left: 0;
  top: 0;
}

.check {
  padding: 40px 36px 36px;
  display: inline-block;
  max-width: 90vw;
  margin-top: 50px;
  position: relative;
  background: #fff;
  overflow: hidden;
  position: relative;
  opacity: 0;
  animation: slideDown 300ms ease-out forwards;

  @media screen and (min-width: 1000px) {
    min-width: 540px;
  }
}

.option {
  display: flex;

  b,
  span {
    font-size: 18px;
    line-height: 24px;

    &:first-child {
      order: 1;
    }

    &:nth-child(2) {
      order: 3;
    }
  }

  b {
    font-weight: 500;
  }

  &::after {
    content: '';
    border-bottom: 2px dotted #e4e4e4;
    flex: 1;
    order: 2;
    position: relative;
    bottom: 6px;
    margin: 0 5px;
    min-width: 5px;

    @media screen and (min-width: 1000px) {
      min-width: 20px;
    }
  }

  &_without_dots {
    &::after {
      opacity: 0;
    }
  }
}

.summary {
  padding-top: 12px;
  margin-top: 12px;
  border-top: 1px solid #000;
  .option {
    &::after {
      border-bottom: 2px dotted #302c26;
    }
  }
}

.total-summary {
  margin-top: 2.25rem;

  .option {
    &::after {
      border-bottom: 2px dotted #302c26;
    }

    b {
      font-size: 20px;
      line-height: 32px;
    }

    &:last-child {
      b {
        font-size: 24px;
        line-height: 32px;
      }
    }
  }
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-30%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
