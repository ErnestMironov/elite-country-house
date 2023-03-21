<template>
  <section class="container mt-[7.5rem] mb-[8.125rem]">
    <SimpleTitle title="Услуги" />
    <div
      v-for="(itemsRow, rowIdx) of optionsList"
      :key="itemsRow[0]?.id + itemsRow[1]?.id"
      class="flex flex-wrap items-start mt-[5.3125rem] mobile-ot-0 gap-x-[6rem]"
    >
      <div
        v-for="(item, itemIdx) of itemsRow"
        :key="item?.id"
        class="card"
        :class="{ card_square: !((rowIdx + itemIdx) % 2) }"
      >
        <img
          :src="`https://admin.hedonistclub.ru${item?.image?.url}`"
          :alt="item?.image?.alternativeText"
        />
        <h3>{{ item.title }}</h3>
        <p>
          {{ item.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import SimpleTitle from '~/components/ui/simple-title/simple-title.vue'
export default {
  name: 'HouseFunctions',
  components: { SimpleTitle },
  props: {
    options: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    optionsList() {
      return this.options.reduce((accum, item, idx) => {
        if (idx % 2 === 0) {
          accum.push([item])
        } else {
          accum[accum.length - 1].push(item)
        }

        return accum
      }, [])
    },
  },
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
