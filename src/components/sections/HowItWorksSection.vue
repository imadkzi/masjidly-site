<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { howItWorks } from '@/data/siteContent'
import SectionHeader from '@/components/SectionHeader.vue'

const activeStep = ref(0)

let intervalId = null

onMounted(() => {
  intervalId = window.setInterval(() => {
    activeStep.value = (activeStep.value + 1) % howItWorks.steps.length
  }, 7000)
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
  <section id="how" class="how">
    <div class="section-container">
      <SectionHeader
        data-animate
        :label="howItWorks.label"
        :title="howItWorks.title"
        :description="howItWorks.description"
        tone="light"
      />

      <div class="how__layout">
        <!-- Desktop: vertical journey timeline -->
        <ol class="how__timeline how__timeline--desktop" data-animate="fade-right">
          <li
            v-for="(step, i) in howItWorks.steps"
            :key="i"
            class="how__step-row"
          >
            <div class="how__step-marker-wrap">
              <span class="how__step-marker">{{ step.num }}</span>
              <span
                v-if="i !== howItWorks.steps.length - 1"
                class="how__step-connector"
              ></span>
            </div>
            <article class="how__card">
              <h3 class="how__card-heading">{{ step.title }}</h3>
              <p class="how__card-text">{{ step.body }}</p>
            </article>
          </li>
        </ol>

        <!-- Mobile: tabbed carousel with cards -->
        <div class="how__mobile" data-animate>
          <div class="how__tabs" role="tablist">
            <button
              v-for="(step, i) in howItWorks.steps"
              :key="i"
              type="button"
              role="tab"
              class="how__tab"
              :class="{ active: activeStep === i }"
              :aria-selected="activeStep === i"
          @click="activeStep = i"
            >
          <span class="how__tab-dot">{{ step.num }}</span>
            </button>
          </div>
          <Transition name="how-step" mode="out-in">
            <article
              :key="activeStep"
              class="how__card how__card--mobile"
            >
              <h3 class="how__card-heading">{{ activeStepData.title }}</h3>
              <p class="how__card-text">{{ activeStepData.body }}</p>
            </article>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/styles/mixins' as *;
@use '@/styles/tokens' as *;

.how {
  padding: var(--section-padding-y) 0;
  background:
    var(--ink)
    url("/ink-pattern.svg") center top / cover no-repeat;
}

.how__header { margin-bottom: 40px; }

.how__layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
}

.section-tag {
  @include section-tag(var(--gold));
}

.section-heading {
  @include section-heading(var(--cream));
}

.section-desc {
  @include section-desc(rgba(245, 240, 232, 0.55));
}

.how__timeline {
  list-style: none;
  margin: 0;
  padding: 0;
}

.how__step-row {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  column-gap: 22px;
}

.how__step-row + .how__step-row {
  margin-top: 22px;
}

.how__step-marker-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.how__step-marker {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 999px;
  font-family: 'DM Mono', monospace;
  font-size: $font-size-body-xs;
  letter-spacing: 0.15em;
  color: var(--ink);
  background: var(--gold);
  box-shadow: 0 0 0 4px rgba(201, 168, 76, 0.25);
}

.how__step-connector {
  flex: 1;
  width: 2px;
  margin-top: 10px;
  background: linear-gradient(to bottom, rgba(201, 168, 76, 0.5), transparent);
}

.how__card {
  padding: 18px 18px 16px;
  border-radius: 14px;
  border: 1px solid rgba(42, 110, 127, 0.35);
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.4);
  background: rgba(10, 42, 52, 0.95);
}

.how__card-heading {
  font-family: 'Raleway', sans-serif;
  font-size: $font-size-body-lg;
  font-weight: 800;
  color: var(--cream);
  margin: 0 0 10px 0;
  line-height: 1.25;
}

.how__card-text {
  font-size: $font-size-body;
  line-height: 1.65;
  color: rgba(245, 240, 232, 0.5);
  margin: 0;
}

.how__mobile { display: none; }

.how__tabs {
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
}
.how__tab {
  width: 34px;
  height: 34px;
  font-family: 'DM Mono', monospace;
  font-size: $font-size-body-xs;
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
.how__tab.active {
  color: var(--ink);
  background: var(--gold);
  border-color: transparent;
  transform: translateY(-1px);
  box-shadow:
    0 0 0 3px rgba(201, 168, 76, 0.6),
    0 10px 24px rgba(0, 0, 0, 0.6);
}
.how__tab:hover:not(.active) {
  opacity: 0.85;
}

.how__tab-dot {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.how__card--mobile {
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
  .how { padding: clamp(40px, 5vw, 56px) 0; }
}
@media (max-width: 600px) {
  .how { padding: 48px 0; }
  .how__header { margin-bottom: 28px; }
  .how__timeline--desktop { display: none; }
  .how__mobile { display: block; }
}
</style>
