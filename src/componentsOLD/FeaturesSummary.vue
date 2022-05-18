<script setup>
defineProps({
  feature: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <section class="summary">
    <div class="title">
      <h2>
        {{ feature.title }}
      </h2>
    </div>
    <div class="description">
      <p>{{ feature.description }}</p>
    </div>
  </section>
</template>

<style>
  .summary {
    width: 340px;
    border-radius: 10px;
    border: 1px solid gray;
    margin: 5px;
    padding: 0 4px;
  }
  .title {
    text-align: center;
  }
</style>