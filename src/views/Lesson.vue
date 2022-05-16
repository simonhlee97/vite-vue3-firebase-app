<script setup>
import courses from '../data/courses'
import { useRoute } from 'vue-router'
import CompleteButton from '../components/CompleteButton.vue'

const route = useRoute()
const { courseId, lessonId } = route.params
const course = courses.find(course => course.id === parseInt(courseId))
const lesson = course.lessons.find(lesson => lesson.id === parseInt(lessonId))
const currentIndex = course.lessons.indexOf(lesson)
const nextIndex = (currentIndex + 1) % course.lessons.length
const nextLessonId = course.lessons[nextIndex].id.toString()
</script>

<template>
  <div class="Lesson page">
    <header>
      <p>
        <router-link :to="'/courses/' + course.id">Back to {{ course.title }}</router-link>
      </p>
      <h1>{{ lesson.title }}</h1>
    </header>
    <div class="Content">
      <p>YouTube Video</p>
      <p>{{ lesson.youtubeId}}</p>
      <CompleteButton
        :courseId="courseId"
        :lessonId="nextLessonId"
      />
    </div>
  </div>
</template>