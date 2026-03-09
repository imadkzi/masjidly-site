<script setup>
import AppNav from '@/components/AppNav.vue'
import AppFooter from '@/components/AppFooter.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import MarqueeStrip from '@/components/sections/MarqueeStrip.vue'
import FeaturesSection from '@/components/sections/FeaturesSection.vue'
import ShowcaseSection from '@/components/sections/ShowcaseSection.vue'
import HowItWorksSection from '@/components/sections/HowItWorksSection.vue'
import DeploymentSection from '@/components/sections/DeploymentSection.vue'
import TechSection from '@/components/sections/TechSection.vue'
import PricingSection from '@/components/sections/PricingSection.vue'
import WhySection from '@/components/sections/WhySection.vue'
import CtaSection from '@/components/sections/CtaSection.vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

useScrollAnimation('[data-animate]', 80)
</script>

<template>
  <div class="app">
    <AppNav />
    <main>
      <HeroSection />
      <MarqueeStrip />
      <FeaturesSection />
      <ShowcaseSection />
      <HowItWorksSection />
      <DeploymentSection />
      <TechSection />
      <PricingSection />
      <WhySection />
      <CtaSection />
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
html { scroll-behavior: smooth; }
body { font-family: 'DM Sans', sans-serif; background: var(--cream); color: var(--ink); overflow-x: hidden; }

body::after {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9000;
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

.section-label {
  font-family: 'DM Mono', monospace;
  font-size: clamp(9px, 1.1vw, 11px);
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--teal);
  margin-bottom: 14px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.section-label::before {
  content: '';
  display: block;
  width: 18px;
  height: 1px;
  background: var(--teal);
}

.section-title {
  font-family: 'Raleway', sans-serif;
  font-size: clamp(24px, 3.2vw, 52px);
  font-weight: 900;
  line-height: 1.08;
  letter-spacing: -0.03em;
  margin-bottom: 12px;
}

.section-intro p {
  font-size: clamp(14px, 1.6vw, 17px);
  margin-top: 10px;
}

.app { width: 100%; }

main {
  /* Prevent content from sliding under fixed nav, especially on iOS Safari */
  padding-top: var(--nav-offset);
}

/* Ensure in-page anchors account for fixed nav height */
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
