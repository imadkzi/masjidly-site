<script setup>
import AppNav from '@/components/AppNav.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
  <div class="app">
    <AppNav />
    <main>
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>

<style>
:root {
  --ink: #112b32;
  --cream: #f5f0e8;
  --cream-dark: #ede6d6;
  --gold: #c9a84c;
  --gold-light: #e8c97a;
  --teal: #2a6e7f;
  --white: #ffffff;
  --muted: rgba(17, 43, 50, 0.52);
  --border: rgba(17, 43, 50, 0.1);
  /* Responsive: breakpoints & container */
  --container-max: 1920px;
  --section-padding-x: clamp(16px, 3vw, 48px);
  --section-padding-y: clamp(32px, 4vw, 72px);
  --section-gap: clamp(14px, 1.5vw, 24px);
  /* Fixed nav height (for anchor offset + top padding) - updated at runtime */
  --nav-offset: 64px;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html {
  scroll-behavior: smooth;
  background: var(--cream);
}
body {
  font-family: 'DM Sans', sans-serif;
  background: var(--cream);
  color: var(--ink);
  overflow-x: hidden;
}

body::after {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
  opacity: 0.5;
}

/* Scroll-triggered animations */
[data-animate] {
  transition: opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}
[data-animate].anim-ready { opacity: 0; transform: translateY(24px); }
[data-animate].anim-ready.in { opacity: 1; transform: translateY(0); }
/* Variants */
[data-animate="fade"].anim-ready,
[data-animate="fade"].anim-ready.in { transform: none; }
[data-animate="fade-left"].anim-ready { transform: translateX(-24px); }
[data-animate="fade-left"].anim-ready.in { transform: translateX(0); }
[data-animate="fade-right"].anim-ready { transform: translateX(24px); }
[data-animate="fade-right"].anim-ready.in { transform: translateX(0); }
[data-animate="scale"].anim-ready { transform: scale(0.96); }
[data-animate="scale"].anim-ready.in { transform: scale(1); }

.app {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  padding-top: 0;
}

/* Ensure in-page anchors account for sticky nav height if needed */
section[id] {
  scroll-margin-top: var(--nav-offset);
}


.section-container {
  max-width: var(--container-max);
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--section-padding-x);
  padding-right: var(--section-padding-x);
  width: 100%;
}
</style>
