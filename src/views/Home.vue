<template>
  <Hero/>
  <div class="home">
    <header>
      <h1>Features</h1>
    </header>
    <div class="flex-container">
      <FeaturesSummary v-for="feature in features" :key="feature.id" :feature="feature" />
    </div>
  </div>
</template>

<script setup>
import features from '../data/features'
import FeaturesSummary from '../components/FeaturesSummary.vue'
import Hero from '../components/Hero.vue';
</script>

<style>
.flex-container {
  display: flex;
  justify-content: center;
}
</style>