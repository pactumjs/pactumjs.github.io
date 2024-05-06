<script setup>
import Icon from "./Icon.vue";
</script>

<template>
  <div class="ad-component">
    <a target="_blank" href="https://testbeats.com">
      <Icon class="icon" />
      <span
        >Keep your tests in tune with</span
      >
      <span class="cta">testbeats</span>
       →
    </a>
  </div>
</template>

<style scoped>
@keyframes pulse {
  0% {
    border: 1px solid var(--vp-c-divider);
  }
  50% {
    border: 1px solid var(--vp-c-brand);
  }
  100% {
    border: 1px solid var(--vp-c-divider);
  }
}

.ad-component {
  text-align: center;
  margin-bottom: 2rem;
  padding: 0.5rem 0.85rem;
  border: 1px solid var(--vp-c-brand);
  border-radius: 4px;
  text-decoration: none;
  color: white;
  transition: color 0.4s ease-in-out;
  font-size: 1rem;
  animation: pulse 3s infinite;
  background-image: linear-gradient(to top right, #000000, #000842);
}

.ad-component:hover {
  color: var(--vp-c-text-1);
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