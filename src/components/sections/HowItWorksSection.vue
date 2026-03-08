<script setup>
import { ref } from 'vue'
import { howItWorks } from '@/data/siteContent'

const activeStep = ref(0)
</script>

<template>
  <section id="how" class="how-section">
    <div class="section-container">
    <header class="how-header" data-animate>
      <span class="section-tag light">{{ howItWorks.label }}</span>
      <h2 class="section-heading light">{{ howItWorks.title }}</h2>
      <p class="section-desc light">{{ howItWorks.description }}</p>
    </header>
    <!-- Desktop: full grid -->
    <div class="steps-row steps-desktop">
      <article
        v-for="(step, i) in howItWorks.steps"
        :key="i"
        class="step-block"
        data-animate
      >
        <span class="step-digit">{{ step.num }}</span>
        <h3 class="step-heading">{{ step.title }}</h3>
        <p class="step-text">{{ step.body }}</p>
      </article>
    </div>
    <!-- Mobile: tabbed carousel -->
    <div class="steps-mobile" data-animate>
      <div class="step-tabs" role="tablist">
        <button
          v-for="(step, i) in howItWorks.steps"
          :key="i"
          type="button"
          role="tab"
          class="step-tab"
          :class="{ active: activeStep === i }"
          :aria-selected="activeStep === i"
          @click="activeStep = i"
        >
          {{ step.num }}
        </button>
      </div>
      <article
        v-for="(step, i) in howItWorks.steps"
        :key="i"
        v-show="activeStep === i"
        class="step-block step-block-mobile"
      >
        <span class="step-digit">{{ step.num }}</span>
        <h3 class="step-heading">{{ step.title }}</h3>
        <p class="step-text">{{ step.body }}</p>
      </article>
    </div>
    </div>
  </section>
</template>

<style scoped>
.how-section {
  padding: var(--section-padding-y) 0;
  background: var(--ink);
}

.how-header { margin-bottom: 48px; }

.section-tag {
  font-family: 'DM Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  display: block;
  margin-bottom: 12px;
}
.section-tag.light { color: var(--gold); }

.section-heading {
  font-family: 'Raleway', sans-serif;
  font-size: clamp(28px, 3.5vw, 44px);
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -0.03em;
  margin-bottom: 16px;
}
.section-heading.light { color: var(--cream); }

.section-desc {
  font-size: 16px;
  line-height: 1.7;
  max-width: 520px;
}
.section-desc.light { color: rgba(245, 240, 232, 0.55); }

.steps-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
}

.step-block {
  padding: 28px 0;
  border-top: 3px solid rgba(201, 168, 76, 0.35);
}

.step-digit {
  font-family: 'DM Mono', monospace;
  font-size: 12px;
  letter-spacing: 0.15em;
  color: var(--gold);
  opacity: 0.8;
  display: block;
  margin-bottom: 16px;
}

.step-heading {
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  font-weight: 800;
  color: var(--cream);
  margin: 0 0 10px 0;
  line-height: 1.25;
}

.step-text {
  font-size: 14px;
  line-height: 1.65;
  color: rgba(245, 240, 232, 0.5);
  margin: 0;
}

.steps-mobile { display: none; }

.step-tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
}
.step-tab {
  padding: 10px 18px;
  font-family: 'DM Mono', monospace;
  font-size: 12px;
  letter-spacing: 0.1em;
  color: rgba(245, 240, 232, 0.5);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(245, 240, 232, 0.15);
  border-radius: 6px;
  cursor: pointer;
  transition: color 0.2s, background 0.2s, border-color 0.2s;
}
.step-tab.active {
  color: var(--gold);
  background: rgba(201, 168, 76, 0.12);
  border-color: rgba(201, 168, 76, 0.4);
}
.step-tab:hover:not(.active) { color: rgba(245, 240, 232, 0.8); }

@media (max-width: 1024px) {
  .steps-row { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 768px) {
  .how-section { padding: clamp(40px, 5vw, 56px) 0; }
}
@media (max-width: 600px) {
  .how-section { padding: 48px 0; }
  .how-header { margin-bottom: 28px; }
  .steps-desktop { display: none; }
  .steps-mobile { display: block; }
  .step-block-mobile {
    padding: 20px 0 0;
    border-top: 2px solid rgba(201, 168, 76, 0.35);
  }
}
</style>
