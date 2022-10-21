<template>
  <div
    class="min-h-screen container flex justify-center items-start overflow-hidden"
  >
    <div class="check">
      <div class="decoration">HEDONIST</div>
      <div class="flex justify-between items-center mb-[21px]">
        <SimpleTitle title="Пречек"></SimpleTitle>
        <img
          class="h-[3.5rem]"
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
            <ul class="flex">
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
                {{ order?.arrivalTime.split('.')[0] }}
              </li>
            </ul>
            <div class="option option_without_dots mt-[13px]">
              <b>Базовая цена</b>
              <b>{{ order?.objectParams?.basePrice | formatPrice }}₽</b>
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
            <h3 class="text-[18px] font-medium">
              {{ mainObject }} "{{ order?.objectParams?.name }}"
            </h3>
            <ul class="flex">
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
                  ).toLocaleTimeString()
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
        <div class="option">
          <b>Итог</b>
          <b>{{ totalPrice | formatPrice }}₽</b>
        </div>
      </div>
      <button
        class="btn text-[16px] py-[18px] px-[64px] mt-[24px] ml-auto block"
      >
        Далее
      </button>
    </div>
  </div>
</template>

<script>
import SimpleTitle from '~/components/ui/simple-title/simple-title.vue'
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
  },
  data() {
    return {
      order: null,
      objectOptions: null,
      bathOptions: null,
      bathParams: null,
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

      return (
        this.order?.objectParams?.basePrice * dur +
        this.objectOptions?.reduce((prev, cur) => prev + cur.price, 0)
      )
    },

    totalPrice() {
      return this.objectTotalPrice + this.order?.bathhouse_order?.totalPrice
    },
  },
  async mounted() {
    if (window.localStorage) {
      this.order = JSON.parse(localStorage.getItem('order'))
      this.objectOptions = JSON.parse(localStorage.getItem('GHOptions'))
      this.bathOptions = JSON.parse(localStorage.getItem('BHOptions'))

      this.bathParams = (
        await this.$http.$get(
          `bathhouses/${this.order?.bathhouse_order?.bathhouse}?populate=deep,10`
        )
      ).data
    }
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
  padding: 24px 36px 36px;
  display: inline-block;
  min-width: 540px;
  margin-top: 50px;
  position: relative;
}

.option {
  display: flex;

  b {
    font-size: 18px;
    line-height: 24px;
    font-weight: 500;

    &:first-child {
      order: 1;
    }

    &:nth-child(2) {
      order: 3;
    }
  }

  &::after {
    content: '';
    border-bottom: 2px dotted #e4e4e4;
    flex: 1;
    order: 2;
    position: relative;
    bottom: 6px;
    margin: 0 5px;
    min-width: 20px;
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
      font-size: 24px;
      line-height: 32px;
    }
  }
}
</style>
