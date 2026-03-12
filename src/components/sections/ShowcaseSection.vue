<script setup>
import { ref, computed } from "vue";
import { showcase } from "@/data/siteContent";
import SectionHeader from "@/components/SectionHeader.vue";

const activeTab = ref("display");

const activeItem = computed(
  () =>
    showcase.items?.find((item) => item.id === activeTab.value) ??
    showcase.items?.[0]
);
</script>

<template>
  <section id="showcase" class="showcase">
    <div class="section-container">
      <SectionHeader
        data-animate="fade-left"
        :label="showcase.label"
        :title="showcase.title"
        :description="showcase.description"
        tone="light"
      />

      <div class="showcase__nav" data-animate>
        <button
          v-for="item in showcase.items"
          :key="item.id"
          class="showcase__nav-button"
          :class="{ active: activeTab === item.id }"
          @click="activeTab = item.id"
        >
          {{ item.label }}
        </button>
      </div>

      <div class="showcase__panels">
        <div class="showcase__panel" data-animate>
          <div class="showcase__frame">
            <img
              :src="activeItem.image || activeItem.placeholder"
              :alt="activeItem.label"
              class="showcase__image"
              @error="(e) => (e.target.src = activeItem.placeholder)"
            />
          </div>
          <p class="showcase__caption">{{ activeItem.caption }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/styles/tokens' as *;

.showcase {
  background:
    var(--ink)
    url("/ink-pattern.svg") center top / cover no-repeat;
  padding: var(--section-padding-y) 0;
  overflow: hidden;
  position: relative;
}

.showcase__tag {
  font-family: $font-mono;
  font-size: $font-size-caption;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--gold);
  display: block;
  margin-bottom: 12px;
}

.showcase__title {
  font-family: $font-display;
  font-size: clamp(28px, 3.5vw, 44px);
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: var(--cream);
  margin-bottom: 12px;
}

.showcase__desc {
  font-size: $font-size-body-lg;
  line-height: 1.72;
  color: rgba(245, 240, 232, 0.48);
  max-width: 560px;
}

.showcase__header {
  margin-bottom: 40px;
}

.showcase__nav {
  display: flex;
  gap: 8px;
  margin-bottom: 32px;
  flex-wrap: wrap;
}

.showcase__nav-button {
  font-family: $font-mono;
  font-size: $font-size-caption;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 10px 20px;
  border-radius: 8px;
  border: 1px solid rgba(245, 240, 232, 0.12);
  background: rgba(245, 240, 232, 0.04);
  color: rgba(245, 240, 232, 0.5);
  cursor: pointer;
  transition: all 0.2s;
}

.showcase__nav-button:hover {
  color: rgba(245, 240, 232, 0.8);
  background: rgba(245, 240, 232, 0.06);
}

.showcase__nav-button.active {
  background: rgba(201, 168, 76, 0.15);
  color: var(--gold);
  border-color: rgba(201, 168, 76, 0.3);
}

.showcase__frame {
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(245, 240, 232, 0.08);
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.4);
  max-width: 900px;
  margin: 0 auto;
}

.showcase__image {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  background: #1a2830;
}

.showcase__caption {
  text-align: center;
  margin-top: 24px;
  font-size: $font-size-body;
  color: rgba(245, 240, 232, 0.45);
  max-width: 560px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .showcase {
    padding: clamp(40px, 5vw, 56px) 0;
  }
  .showcase__nav {
    margin-bottom: 24px;
  }
  .showcase__nav-button {
    padding: 8px 16px;
    font-size: $font-size-micro;
  }
}

@media (max-width: 600px) {
  .showcase {
    padding: 36px 0;
  }
}
</style>
