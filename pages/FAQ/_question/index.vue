<template>
  <section class="container question">
    <SimpleTitle :title="data.title" />

    <div
      v-html="$md.render(data.text.replace('/uploads', `${baseUrl}uploads/`))"
    ></div>
    <img src="@/assets/images/HEDONIST.svg" alt="" class="question__bg-img" />
  </section>
</template>

<script>
import SimpleTitle from '@/components/ui/simple-title/simple-title.vue'

export default {
  components: {
    SimpleTitle,
  },
  async asyncData({ params, $http }) {
    const data = (await $http.$get(`faqs/${params.question}`)).data

    return { data }
  },
  data() {
    return {
      baseUrl: 'https://admin.hedonistclub.ru/',
    }
  },
}
</script>

<style scoped lang="scss" src="./index.scss"></style>
<style lang="scss" src="./md.scss"></style>
