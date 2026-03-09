<script setup>
import { why } from '@/data/siteContent'
import { useFaqAccordion } from '@/composables/useFaqAccordion'
import AppIcon from '@/components/icons/AppIcon.vue'

const { openIndex, toggle } = useFaqAccordion()
</script>

<template>
  <section id="why" class="why-section">
    <div class="section-container">
    <header class="section-header" data-animate>
      <span class="section-tag">{{ why.label }}</span>
      <h2 class="section-heading">{{ why.title }}</h2>
      <p class="section-desc">{{ why.description }}</p>
    </header>
    <div class="why-grid">
      <div class="stats-strip">
        <div
          v-for="(stat, i) in why.stats"
          :key="i"
          class="stat-item"
          data-animate
        >
          <span class="stat-value">{{ stat.value }}</span>
          <span class="stat-text">{{ stat.label }}</span>
        </div>
      </div>

      <div data-animate="fade">
        <p class="faq-heading">Frequently Asked Questions</p>
      </div>
      <div class="faq-strip" data-animate>
        <div
          v-for="(item, i) in why.faq"
          :key="i"
          class="faq-row"
          :class="{ open: openIndex === i }"
        >
          <button type="button" class="faq-trigger" @click="toggle(i)">
            {{ item.q }}
            <span class="faq-icon">
              <AppIcon name="chevron-plus" :size="14" />
            </span>
          </button>
          <div class="faq-answer">{{ item.a }}</div>
        </div>
      </div>
    </div>
    </div>
  </section>
</template>

<style scoped>
.why-section {
  padding: var(--section-padding-y) 0;
  background: var(--cream-dark);
}

.why-grid {
  margin-top: 40px;
}

.stats-strip {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 16px;
  margin-bottom: 12px;
}

.stat-item {
  flex: 1 1 calc(25% - 16px);
  min-width: 140px;
  padding: 10px 12px;
  border-radius: 14px;
  border: 1px solid rgba(42, 110, 127, 0.24);
  background: transparent;
}

.stat-value {
  font-family: 'Raleway', sans-serif;
  font-size: 28px;
  font-weight: 900;
  color: var(--teal);
  line-height: 1;
  display: block;
  margin-bottom: 6px;
}

.stat-text {
  font-size: 14px;
  color: var(--muted);
  line-height: 1.5;
}

/* Mobile: stacked stats */
@media (max-width: 600px) {
  .stats-strip {
    flex-direction: column;
    gap: 10px;
  }
  .stat-value { font-size: 22px; margin-bottom: 4px; }
  .stat-text { font-size: 11px; line-height: 1.35; }
}

.faq-strip {
  margin-top: 8px;
}

.faq-heading {
  font-family: 'DM Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--teal);
  margin-top: 20px;
  margin-bottom: 8px;
}

.faq-row { border-bottom: 1px solid var(--border); }
.faq-row + .faq-row { border-top: 1px solid var(--border); }

.faq-trigger {
  width: 100%;
  padding: 20px 0;
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  color: var(--ink);
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.faq-trigger:hover { color: var(--teal); }

.faq-icon {
  color: var(--teal);
  flex-shrink: 0;
  transition: transform 0.25s;
}

.faq-row.open .faq-icon { transform: rotate(45deg); }

.faq-answer {
  font-size: 14px;
  color: var(--muted);
  line-height: 1.65;
  overflow: hidden;
  max-height: 0;
  padding: 0;
  transition: max-height 0.3s, padding 0.3s;
}

.faq-row.open .faq-answer {
  max-height: 200px;
  padding: 0 0 20px 0;
}

.section-header { margin-bottom: 0; }
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

@media (max-width: 900px) {
  .why-grid { margin-top: 32px; }
}
@media (max-width: 600px) {
  .why-section { padding: 48px 0; }
  .why-grid { margin-top: 28px; gap: 24px; }
  .faq-strip { padding-top: 24px; }
  .faq-trigger { padding: 14px 0; font-size: 13px; }
  .faq-row.open .faq-answer { max-height: 250px; padding: 0 0 14px 0; }
}
</style>
