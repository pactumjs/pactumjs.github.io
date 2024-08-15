<script setup>
import Icon from "./Icon.vue";
</script>

<template>
  <div class="ad-component">
    <a target="_blank" href="https://testbeats.com">
      <Icon class="icon" />
      <span
        >Revolutionize Your Test Reporting with AI-Powered Insights</span
      >
      <span class="cta">TestBeats</span>
       →
    </a>
  </div>
</template>

<style scoped>
.ad-component {
  text-align: center;
  margin-bottom: 2rem;
  padding: 0.5rem 0.85rem;
  text-decoration: none;
  color: white;
  transition: color 0.4s ease-in-out;
  font-size: 1rem;
  background-image: linear-gradient(to top right, #000000, #000842);
}

.ad-component .icon {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  margin-right: 2rem;
}

.ad-component .cta {
  margin-left: 0.3rem;
  text-decoration: underline;
  text-underline-offset: 2px;
  font-weight: 600;
}
</style>