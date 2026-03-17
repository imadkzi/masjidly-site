<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { showcase } from "@/data/siteContent";
import SectionHeader from "@/components/SectionHeader.vue";

const currentIndex = ref(0);
let intervalId = null;

const activeItem = computed(
  () => showcase.items?.[currentIndex.value] ?? showcase.items?.[0]
);

onMounted(() => {
  if (!showcase.items || showcase.items.length <= 1) return;
  intervalId = window.setInterval(() => {
    currentIndex.value =
      (currentIndex.value + 1) % showcase.items.length;
  }, 7000);
});

onUnmounted(() => {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
  }
});
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
          <div
            v-if="showcase.items && showcase.items.length > 1"
            class="showcase__dots"
          >
            <button
              v-for="(item, index) in showcase.items"
              :key="item.id"
              type="button"
              class="showcase__dot"
              :class="{ 'showcase__dot--active': index === currentIndex }"
              @click="currentIndex = index"
              :aria-label="`Show ${item.label}`"
            />
          </div>
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

.showcase__frame {
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(245, 240, 232, 0.08);
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.4);
  max-width: 1120px;
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

.showcase__dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 16px;
}

.showcase__dot {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  border: none;
  background: rgba(245, 240, 232, 0.4);
  padding: 0;
  cursor: pointer;
  transition:
    background 0.2s ease,
    transform 0.2s ease;
}

.showcase__dot--active {
  background: var(--gold);
  transform: scale(1.4);
}

@media (max-width: 768px) {
  .showcase {
    padding: clamp(40px, 5vw, 56px) 0;
  }
}

@media (max-width: 600px) {
  .showcase {
    padding: 36px 0;
  }
}
</style>
