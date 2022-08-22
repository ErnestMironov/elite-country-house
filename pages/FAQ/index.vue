<template>
  <section class="container questions">
    <SimpleTitle
    title="Частозадаваемые вопросы"/>
    <div class="questions-wrapper" >
      <div v-for="question in questions" :key="question.id" class="questions__item" @click="navigateToQuestion">
        <h3 class="questions__title">{{question.title}}</h3>
      </div>
    </div>
    <img src="@/assets/images/HEDONIST.svg" alt="" class="questions__bg-img">
  </section>
</template>

<script>
import SimpleTitle from '@/components/ui/simple-title/simple-title.vue';
import {useRouter}  from 'vue-router'

const router = useRouter()

export default {
  components:{
   SimpleTitle
  },
  data() {
    return {
     questions: [
      {
        id: 1,
        title: 'Частозадаваемый вопрос номер N'
      },
      {
        id: 2,
        title: 'Частозадаваемый вопрос номер N'
      },
      {
        id: 3,
        title: 'Частозадаваемый вопрос номер N'
      },
      {
        id: 4,
        title: 'Частозадаваемый вопрос номер N'
      },
      {
        id: 5,
        title: 'Частозадаваемый вопрос номер N'
      },
      {
        id: 6,
        title: 'Частозадаваемый вопрос номер N'
      },
      {
        id: 7,
        title: 'Частозадаваемый вопрос номер N'
      },
      {
        id: 8,
        title: 'Частозадаваемый вопрос номер N'
      },
      {
        id: 9,
        title: 'Частозадаваемый вопрос номер N'
      },
      {
        id: 10,
        title: 'Частозадаваемый вопрос номер N'
      },
     ]
    }
  },
}

const navigateToQuestion = (id) => {
  router.push(`faq/${question.id}`)
}
</script>

<style lang="scss" scoped>
  @import './index.scss';
</style>