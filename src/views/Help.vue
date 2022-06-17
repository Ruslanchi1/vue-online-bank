<template>
  <app-page back title="Помощь">
    <question-item v-for="q in questions" :key="q.title" :question="q"></question-item>
  </app-page>
</template>

<script>
import AppPage from '../components/ui/AppPage.vue'
import QuestionItem from '../components/question/QuestionItem.vue'

export default {
  setup() {
    const questions = [
      { title: 'title1', text: 'text1' },
      { title: 'title2', text: 'text2' }
    ]
    return {
      questions
    }
  },
  components: { AppPage, QuestionItem }
}
</script>
