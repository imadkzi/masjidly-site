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
  display: grid;
  grid-template-columns: 340px 1fr;
  gap: 48px;
  margin-top: 48px;
  align-items: start;
}

.stats-strip {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.stat-item {
  padding-bottom: 20px;
  border-bottom: 1px solid var(--border);
}

.stat-item:last-child { border-bottom: none; padding-bottom: 0; }

.stat-value {
  font-family: 'Raleway', sans-serif;
  font-size: 36px;
  font-weight: 900;
  color: var(--teal);
  line-height: 1;
  display: block;
  margin-bottom: 6px;
}

.stat-text {
  font-size: 13px;
  color: var(--muted);
  line-height: 1.5;
}

/* Mobile: compact 2x2 stats grid */
@media (max-width: 600px) {
  .stats-strip {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px 20px;
  }
  .stat-item {
    padding-bottom: 12px;
    border-bottom: 1px solid var(--border);
  }
  .stat-item:nth-child(3),
  .stat-item:nth-child(4) { border-bottom: none; padding-bottom: 0; }
  .stat-value { font-size: 26px; margin-bottom: 4px; }
  .stat-text { font-size: 11px; line-height: 1.35; }
}

.faq-strip {
  border-left: 2px solid var(--border);
  padding-left: 32px;
}

.faq-row { border-bottom: 1px solid var(--border); }

.faq-row:last-child { border-bottom: none; }

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
  .why-grid { grid-template-columns: 1fr; }
  .faq-strip { border-left: none; padding-left: 0; border-top: 2px solid var(--border); padding-top: 32px; }
}
@media (max-width: 600px) {
  .why-section { padding: 48px 0; }
  .why-grid { margin-top: 28px; gap: 24px; }
  .faq-strip { padding-top: 24px; }
  .faq-trigger { padding: 14px 0; font-size: 13px; }
  .faq-row.open .faq-answer { max-height: 250px; padding: 0 0 14px 0; }
}
</style>
