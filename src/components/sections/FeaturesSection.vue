<script setup>
import { ref } from 'vue'
import { features } from '@/data/siteContent'
import AppIcon from '@/components/icons/AppIcon.vue'

const openFeature = ref(null)
function toggleFeature(i) {
  openFeature.value = openFeature.value === i ? null : i
}
</script>

<template>
  <section id="features" class="features-section">
    <div class="section-container">
    <header class="section-header" data-animate>
      <span class="section-tag">{{ features.label }}</span>
      <h2 class="section-heading">{{ features.title }}</h2>
      <p class="section-desc">{{ features.description }}</p>
    </header>
    <!-- Desktop: full list -->
    <ul class="feature-list feature-desktop">
      <li
        v-for="(item, i) in features.items"
        :key="i"
        class="feature-row"
        data-animate
      >
        <span class="feature-num">{{ String(i + 1).padStart(2, '0') }}</span>
        <div class="feature-icon-wrap">
          <AppIcon :name="item.icon" />
        </div>
        <div class="feature-text">
          <h3 class="feature-title">{{ item.title }}</h3>
          <p class="feature-body">{{ item.body }}</p>
        </div>
      </li>
    </ul>
    <!-- Mobile: accordion -->
    <ul class="feature-list feature-mobile">
      <li
        v-for="(item, i) in features.items"
        :key="i"
        class="feature-accordion"
        :class="{ open: openFeature === i }"
        data-animate
      >
        <button type="button" class="feature-trigger" @click="toggleFeature(i)">
          <div class="feature-icon-wrap">
            <AppIcon :name="item.icon" />
          </div>
          <span class="feature-title">{{ item.title }}</span>
          <span class="feature-chevron">
            <AppIcon name="chevron-plus" :size="14" />
          </span>
        </button>
        <div class="feature-body-wrap">
          <p class="feature-body">{{ item.body }}</p>
        </div>
      </li>
    </ul>
    </div>
  </section>
</template>

<style scoped>
.features-section {
  padding: var(--section-padding-y) 0;
  background: var(--cream);
}

.section-header { margin-bottom: 56px; }

.section-tag {
  font-family: 'DM Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--teal);
  display: block;
  margin-bottom: 12px;
}

.section-heading {
  font-family: 'Raleway', sans-serif;
  font-size: clamp(28px, 3.5vw, 44px);
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: var(--ink);
  margin-bottom: 16px;
}

.section-desc {
  font-size: 16px;
  line-height: 1.7;
  color: var(--muted);
  max-width: 520px;
}

.feature-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.feature-mobile { display: none; }

.feature-accordion { border-bottom: 1px solid var(--border); }
.feature-accordion:last-child { border-bottom: none; }
.feature-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 18px 0;
  text-align: left;
  background: none;
  border: none;
  cursor: pointer;
  font: inherit;
}
.feature-trigger:hover { color: var(--teal); }
.feature-accordion .feature-icon-wrap {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
}
.feature-accordion .feature-title {
  flex: 1;
  margin: 0;
  font-size: 15px;
}
.feature-chevron {
  color: var(--teal);
  flex-shrink: 0;
  transition: transform 0.25s;
}
.feature-accordion.open .feature-chevron { transform: rotate(45deg); }
.feature-body-wrap {
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.3s;
}
.feature-accordion.open .feature-body-wrap { max-height: 200px; }
.feature-accordion .feature-body {
  padding: 0 0 20px 54px;
  font-size: 14px;
  line-height: 1.6;
}

.feature-row {
  display: grid;
  grid-template-columns: 48px 56px 1fr;
  gap: 24px;
  align-items: flex-start;
  padding: 32px 0;
  border-bottom: 1px solid var(--border);
}

.feature-row:first-child { padding-top: 0; }

.feature-row:last-child { border-bottom: none; }

.feature-num {
  font-family: 'DM Mono', monospace;
  font-size: 14px;
  font-weight: 500;
  color: var(--teal);
  opacity: 0.6;
}

.feature-icon-wrap {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--teal);
  background: rgba(42, 110, 127, 0.06);
  border-radius: 8px;
}

.feature-title {
  font-family: 'Raleway', sans-serif;
  font-size: 17px;
  font-weight: 800;
  color: var(--ink);
  margin: 0 0 6px 0;
  letter-spacing: -0.01em;
}

.feature-body {
  font-size: 14px;
  line-height: 1.65;
  color: var(--muted);
  margin: 0;
}

@media (max-width: 768px) {
  .features-section { padding: clamp(40px, 5vw, 56px) 0; }
}
@media (max-width: 600px) {
  .features-section { padding: 48px 0; }
  .section-header { margin-bottom: 36px; }
  .feature-desktop { display: none; }
  .feature-mobile { display: flex; flex-direction: column; }
  .feature-accordion.open .feature-body-wrap { max-height: 220px; }
  .feature-accordion .feature-body { padding: 0 0 16px 0; padding-left: 54px; }
}
</style>
