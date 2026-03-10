<script setup>
import { ref, computed } from 'vue'
import { features } from '@/data/siteContent'
import AppIcon from '@/components/icons/AppIcon.vue'
import SectionHeader from '@/components/SectionHeader.vue'

const openFeature = ref(null)
function toggleFeature(i) {
  openFeature.value = openFeature.value === i ? null : i
}

const midpoint = computed(() => Math.ceil(features.items.length / 2))
const leftFeatures = computed(() => features.items.slice(0, midpoint.value))
const rightFeatures = computed(() => features.items.slice(midpoint.value))
</script>

<template>
  <section id="features" class="features">
    <div class="section-container">
      <SectionHeader
        data-animate
        :label="features.label"
        :title="features.title"
        :description="features.description"
      />
    <!-- Desktop: two-column list (1,4 / 2,5 / 3,6) -->
    <div class="features__desktop">
      <ul class="features__list">
        <li
          v-for="(item, i) in leftFeatures"
          :key="`left-${i}`"
          class="features__row"
          data-animate
        >
          <span class="features__num">{{ String(i + 1).padStart(2, '0') }}</span>
          <div class="features__icon">
            <AppIcon :name="item.icon" />
          </div>
          <div class="features__text">
            <h3 class="features__title">{{ item.title }}</h3>
            <p class="features__body">{{ item.body }}</p>
          </div>
        </li>
      </ul>
      <ul class="features__list">
        <li
          v-for="(item, i) in rightFeatures"
          :key="`right-${i}`"
          class="features__row"
          data-animate
        >
          <span class="features__num">{{
            String(midpoint + i + 1).padStart(2, '0')
          }}</span>
          <div class="features__icon">
            <AppIcon :name="item.icon" />
          </div>
          <div class="features__text">
            <h3 class="features__title">{{ item.title }}</h3>
            <p class="features__body">{{ item.body }}</p>
          </div>
        </li>
      </ul>
    </div>
    <!-- Mobile: accordion -->
    <ul class="features__list features__mobile">
      <li
        v-for="(item, i) in features.items"
        :key="i"
        class="features__accordion"
        :class="{ open: openFeature === i }"
        data-animate
      >
        <button type="button" class="features__trigger" @click="toggleFeature(i)">
          <div class="features__icon">
            <AppIcon :name="item.icon" />
          </div>
          <span class="features__title">{{ item.title }}</span>
          <span class="features__chevron">
            <AppIcon name="chevron-plus" :size="14" />
          </span>
        </button>
        <div class="features__body-wrap">
          <p class="features__body">{{ item.body }}</p>
        </div>
      </li>
    </ul>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/styles/mixins' as *;

.features {
  padding: var(--section-padding-y) 0;
  background: var(--cream);
}

.features__header {
  margin-bottom: 56px;
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

.features__list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.features__desktop {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px 32px;
}

.features__mobile {
  display: none;
}

.features__accordion {
  border-bottom: 1px solid var(--border);
}

.features__accordion:last-child {
  border-bottom: none;
}

.features__trigger {
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

.features__trigger:hover {
  color: var(--teal);
}

.features__accordion .features__icon {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
}

.features__accordion .features__title {
  flex: 1;
  margin: 0;
  font-size: 15px;
}

.features__chevron {
  color: var(--teal);
  flex-shrink: 0;
  transition: transform 0.25s;
}

.features__accordion.open .features__chevron {
  transform: rotate(45deg);
}

.features__body-wrap {
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.3s;
}

.features__accordion.open .features__body-wrap {
  max-height: 200px;
}

.features__accordion .features__body {
  padding: 0 0 20px 54px;
  font-size: 14px;
  line-height: 1.6;
}

.features__row {
  display: flex;
  gap: 18px;
  align-items: flex-start;
}

.features__row + .features__row {
  margin-top: 25px;
}

.features__num {
  font-family: 'DM Mono', monospace;
  font-size: 14px;
  font-weight: 500;
  color: var(--teal);
  opacity: 0.6;
}

.features__icon {
  @include icon-box(48px, 8px, rgba(42, 110, 127, 0.06));
}

.features__title {
  font-family: 'Raleway', sans-serif;
  font-size: 17px;
  font-weight: 800;
  color: var(--ink);
  margin: 0 0 6px 0;
  letter-spacing: -0.01em;
}

.features__body {
  font-size: 14px;
  line-height: 1.65;
  color: var(--muted);
  margin: 0;
}

@media (max-width: 768px) {
  .features {
    padding: clamp(40px, 5vw, 56px) 0;
  }
}

@media (max-width: 600px) {
  .features {
    padding: 48px 0;
  }

  .features__header {
    margin-bottom: 36px;
  }

  .features__desktop {
    display: none;
  }

  .features__mobile {
    display: flex;
    flex-direction: column;
  }

  .features__accordion.open .features__body-wrap {
    max-height: 220px;
  }

  .features__accordion .features__body {
    padding: 0 0 16px 0;
    padding-left: 54px;
  }
}
</style>
