<script setup>
import Icon from "./Icon.vue";
</script>

<template>
  <div class="ad-component">
    <a target="_blank" href="https://forms.gle/Wfc9c89j78He3Zap9">
      <Icon class="icon" />
      <span
        >Share Your Insights: Join Our Survey on Test Reporting Practices!</span
      >
      <span class="cta">Participate now →</span>
    </a>
  </div>
</template>

<style scoped>
@keyframes pulse {
  0% {
    border: 2px solid var(--vp-c-divider);
  }
  50% {
    border: 2px solid var(--vp-c-brand);
  }
  100% {
    border: 2px solid var(--vp-c-divider);
  }
}

.ad-component {
  margin-bottom: 2rem;
  padding: 0.5rem 0.85rem;
  border: 2px solid var(--vp-c-brand);
  border-radius: 4px;
  text-decoration: none;
  color: var(--vp-c-text-2);
  transition: color 0.4s ease-in-out;
  font-size: 0.8rem;
  animation: pulse 3s infinite;
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