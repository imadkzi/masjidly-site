<script setup>
import { why } from '@/data/siteContent'
import { useFaqAccordion } from '@/composables/useFaqAccordion'
import AppIcon from '@/components/icons/AppIcon.vue'
import SectionHeader from '@/components/SectionHeader.vue'

const { openIndex, toggle } = useFaqAccordion()
</script>

<template>
  <section id="why" class="why">
    <div class="section-container">
      <SectionHeader
        data-animate
        :label="why.label"
        :title="why.title"
        :description="why.description"
      />
    <div class="why__grid">
      <div class="why__stats">
        <div
          v-for="(stat, i) in why.stats"
          :key="i"
          class="why__stat"
          data-animate
        >
          <span class="why__stat-value">{{ stat.value }}</span>
          <span class="why__stat-text">{{ stat.label }}</span>
        </div>
      </div>

      <div data-animate="fade">
        <p class="why__faq-heading">Frequently Asked Questions</p>
      </div>
      <div class="why__faq" data-animate>
        <div
          v-for="(item, i) in why.faq"
          :key="i"
          class="why__faq-row"
          :class="{ open: openIndex === i }"
        >
          <button type="button" class="why__faq-trigger" @click="toggle(i)">
            {{ item.q }}
            <span class="why__faq-icon">
              <AppIcon name="chevron-plus" :size="14" />
            </span>
          </button>
          <div class="why__faq-answer">{{ item.a }}</div>
        </div>
      </div>
    </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/styles/mixins' as *;
@use '@/styles/tokens' as *;

.why {
  padding: var(--section-padding-y) 0;
  background: var(--cream-dark);
}

.why__grid {
  margin-top: 40px;
}

.why__stats {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 16px;
  margin-bottom: 12px;
}

.why__stat {
  flex: 1 1 calc(25% - 16px);
  min-width: 140px;
  padding: 10px 12px;
  border-radius: 14px;
  border: 1px solid rgba(42, 110, 127, 0.24);
  background: var(--cream);
}

.why__stat-value {
  font-family: 'Raleway', sans-serif;
  font-size: $font-size-section-body;
  font-weight: 900;
  color: var(--teal);
  line-height: 1;
  display: block;
  margin-bottom: 6px;
}

.why__stat-text {
  font-size: $font-size-body;
  color: var(--muted);
  line-height: 1.5;
}

/* Mobile: stacked stats */
@media (max-width: 600px) {
  .why__stats {
    flex-direction: column;
    gap: 10px;
  }

  .why__stat-value {
    font-size: $font-size-body-lg;
    margin-bottom: 4px;
  }

  .why__stat-text {
    font-size: $font-size-caption;
    line-height: 1.35;
  }
}

.why__faq {
  margin-top: 8px;
}

.why__faq-heading {
  font-family: 'DM Mono', monospace;
  font-size: $font-size-caption;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--teal);
  margin-top: 20px;
  margin-bottom: 8px;
}

.why__faq-row {
  border-bottom: 1px solid var(--border);
}

.why__faq-row + .why__faq-row {
  border-top: 1px solid var(--border);
}

.why__faq-trigger {
  width: 100%;
  padding: 20px 0;
  text-align: left;
  font-size: $font-size-body;
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

.why__faq-trigger:hover {
  color: var(--teal);
}

.why__faq-icon {
  color: var(--teal);
  flex-shrink: 0;
  transition: transform 0.25s;
}

.why__faq-row.open .why__faq-icon {
  transform: rotate(45deg);
}

.why__faq-answer {
  font-size: $font-size-body;
  color: var(--muted);
  line-height: 1.65;
  overflow: hidden;
  max-height: 0;
  padding: 0;
  transition: max-height 0.3s, padding 0.3s;
}

.why__faq-row.open .why__faq-answer {
  max-height: 200px;
  padding: 0 0 20px 0;
}

.why__header {
  margin-bottom: 0;
}

.section-tag {
  @include section-tag(var(--teal));
}

.section-heading {
  @include section-heading(var(--ink));
}

.section-desc {
  @include section-desc(var(--muted));
}

@media (max-width: 900px) {
  .why__grid {
    margin-top: 32px;
  }
}

@media (max-width: 600px) {
  .why {
    padding: 48px 0;
  }

  .why__grid {
    margin-top: 28px;
    gap: 24px;
  }

  .why__faq {
    padding-top: 24px;
  }

  .why__faq-trigger {
    padding: 14px 0;
    font-size: $font-size-body-sm;
  }

  .why__faq-row.open .why__faq-answer {
    max-height: 250px;
    padding: 0 0 14px 0;
  }
}
</style>
