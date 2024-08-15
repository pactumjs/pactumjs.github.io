<template>
  <a class="ad-side-component" href="https://testbeats.com" target="_blank">
    <img src="https://testbeats.nyc3.cdn.digitaloceanspaces.com/assets/hero.svg" alt="">

    <p class="header">Empower Your Test Results with AI-Powered Insights -></p>
    <!-- <p class="tagline">✨ TestBeats ✨</p> -->
    <img class="logo"  src="https://testbeats.com/static/icons/logo-wordmark-white.svg" alt="">
  </a>
</template>

<style scoped>

@keyframes gradient-animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.ad-side-component {
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 0.5rem 0.85rem;
  text-decoration: none;
  color: white;
  font-size: 1rem;
  border-radius: 4px;
  background: linear-gradient(45deg, #3538cd, #2c3183, #d3001a, #74000e);
  background-size: 300% 300%;
  animation: gradient-animation 6s ease-in-out infinite;
}

.ad-side-component .header {
  font-weight: 700;
  margin-top: 1rem;
}

.ad-side-component .tagline {
  font-weight: 500;
  font-size: 0.8rem;
  margin-top: 1rem;
  letter-spacing: 3px;
}

.ad-side-component .logo {
  width: 100%;
  padding-left: 36px;
  padding-right: 36px;
  margin-top: 2rem;
  margin-bottom: 1rem;
}
</style>