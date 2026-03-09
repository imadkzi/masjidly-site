<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { howItWorks } from '@/data/siteContent'

const activeStep = ref(0)

let intervalId = null

onMounted(() => {
  intervalId = window.setInterval(() => {
    activeStep.value = (activeStep.value + 1) % howItWorks.steps.length
  }, 4000)
})

onUnmounted(() => {
  if (intervalId !== null) {
    clearInterval(intervalId)
    intervalId = null
  }
})

const activeStepData = computed(() => howItWorks.steps[activeStep.value])
</script>

<template>
  <section id="how" class="how-section">
    <div class="section-container">
      <header class="how-header" data-animate>
        <span class="section-tag light">{{ howItWorks.label }}</span>
        <h2 class="section-heading light">{{ howItWorks.title }}</h2>
        <p class="section-desc light">{{ howItWorks.description }}</p>
      </header>

      <div class="how-layout">
        <!-- Desktop: vertical journey timeline -->
        <ol class="steps-timeline steps-desktop" data-animate="fade-right">
          <li
            v-for="(step, i) in howItWorks.steps"
            :key="i"
            class="step-row"
          >
            <div class="step-marker-wrap">
              <span class="step-marker">{{ step.num }}</span>
              <span
                v-if="i !== howItWorks.steps.length - 1"
                class="step-connector"
              ></span>
            </div>
            <article class="step-card">
              <h3 class="step-heading">{{ step.title }}</h3>
              <p class="step-text">{{ step.body }}</p>
            </article>
          </li>
        </ol>

        <!-- Mobile: tabbed carousel with cards -->
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
          <span class="step-tab-dot">{{ step.num }}</span>
            </button>
          </div>
          <Transition name="how-step" mode="out-in">
            <article
              :key="activeStep"
              class="step-card step-card-mobile"
            >
              <h3 class="step-heading">{{ activeStepData.title }}</h3>
              <p class="step-text">{{ activeStepData.body }}</p>
            </article>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.how-section {
  padding: var(--section-padding-y) 0;
  background:
    var(--ink)
    url("/ink-pattern.svg") center top / cover no-repeat;
}

.how-header { margin-bottom: 40px; }

.how-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
}

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

.steps-timeline {
  list-style: none;
  margin: 0;
  padding: 0;
}

.step-row {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  column-gap: 22px;
}

.step-row + .step-row {
  margin-top: 22px;
}

.step-marker-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.step-marker {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 999px;
  font-family: 'DM Mono', monospace;
  font-size: 12px;
  letter-spacing: 0.15em;
  color: var(--ink);
  background: var(--gold);
  box-shadow: 0 0 0 4px rgba(201, 168, 76, 0.25);
}

.step-connector {
  flex: 1;
  width: 2px;
  margin-top: 10px;
  background: linear-gradient(to bottom, rgba(201, 168, 76, 0.5), transparent);
}

.step-card {
  padding: 18px 18px 16px;
  border-radius: 14px;
  border: 1px solid rgba(42, 110, 127, 0.35);
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.4);
  background: rgba(10, 42, 52, 0.95);
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
  gap: 12px;
  margin-bottom: 20px;
}
.step-tab {
  width: 34px;
  height: 34px;
  font-family: 'DM Mono', monospace;
  font-size: 12px;
  letter-spacing: 0.15em;
  color: rgba(245, 240, 232, 0.65);
  background: transparent;
  border: 1px solid rgba(201, 168, 76, 0.45);
  border-radius: 999px;
  box-shadow: none;
  cursor: pointer;
  transition:
    transform 0.2s,
    box-shadow 0.2s,
    opacity 0.2s;
}
.step-tab.active {
  color: var(--ink);
  background: var(--gold);
  border-color: transparent;
  transform: translateY(-1px);
  box-shadow:
    0 0 0 3px rgba(201, 168, 76, 0.6),
    0 10px 24px rgba(0, 0, 0, 0.6);
}
.step-tab:hover:not(.active) {
  opacity: 0.85;
}

.step-tab-dot {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.step-card-mobile {
  margin-top: 10px;
}

/* Mobile step change animation */
.how-step-enter-active,
.how-step-leave-active {
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}
.how-step-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.how-step-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

@media (max-width: 768px) {
  .how-section { padding: clamp(40px, 5vw, 56px) 0; }
}
@media (max-width: 600px) {
  .how-section { padding: 48px 0; }
  .how-header { margin-bottom: 28px; }
  .steps-desktop { display: none; }
  .steps-mobile { display: block; }
}
</style>
