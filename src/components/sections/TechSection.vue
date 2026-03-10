<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { techCategories } from "@/data/techStack";
import AppIcon from "@/components/icons/AppIcon.vue";
import SectionHeader from "@/components/SectionHeader.vue";

const activeCat = ref(0);
let intervalId = null;

function startInterval() {
  if (intervalId) return;
  intervalId = setInterval(() => {
    activeCat.value = (activeCat.value + 1) % techCategories.length;
  }, 7000);
}

function stopInterval() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
}

onMounted(() => {
  const q = window.matchMedia("(max-width: 600px)");
  if (q.matches) startInterval();
  const handler = (e) => (e.matches ? startInterval() : stopInterval());
  q.addEventListener("change", handler);
  onUnmounted(() => {
    stopInterval();
    q.removeEventListener("change", handler);
  });
});
</script>

<template>
  <section id="tech" class="tech">
    <div class="section-container">
      <SectionHeader
        data-animate="fade-left"
        label="Tech Stack"
        title="A stable, well-chosen architecture."
        description="Every layer was selected for longevity and reliability. No experimental frameworks, no lock-in to single vendors — components that do their job well and can be swapped if needed."
      />
      <!-- Desktop: full grid -->
      <div class="tech__grid tech__grid--desktop">
        <div
          v-for="(cat, i) in techCategories"
          :key="i"
          class="tech__group"
          data-animate
        >
          <h4 class="tech__group-label">{{ cat.label }}</h4>
          <dl class="tech__items">
            <div v-for="(item, j) in cat.items" :key="j" class="tech__row">
              <div class="tech__row-icon">
                <AppIcon :name="item.icon || 'check'" :size="14" />
              </div>
              <div class="tech__row-content">
                <dt class="tech__name">{{ item.name }}</dt>
                <dd class="tech__item-desc">{{ item.desc }}</dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
      <!-- Mobile: category tabs -->
      <div class="tech__mobile" data-animate>
        <div class="tech__tabs" role="tablist">
          <button
            v-for="(cat, i) in techCategories"
            :key="i"
            type="button"
            role="tab"
            class="tech__tab"
            :class="{ active: activeCat === i }"
            :aria-selected="activeCat === i"
            @click="activeCat = i"
          >
            {{ cat.label }}
          </button>
        </div>
        <Transition name="tech-slide" mode="out-in">
          <div :key="activeCat" class="tech__group tech__group--mobile">
            <h4 class="tech__group-label">
              {{ techCategories[activeCat]?.label }}
            </h4>
            <dl class="tech__items">
              <div
                v-for="(item, j) in techCategories[activeCat]?.items"
                :key="j"
                class="tech__row"
              >
                <div class="tech__row-icon">
                  <AppIcon :name="item.icon || 'check'" :size="14" />
                </div>
                <div class="tech__row-content">
                  <dt class="tech__name">{{ item.name }}</dt>
                  <dd class="tech__item-desc">{{ item.desc }}</dd>
                </div>
              </div>
            </dl>
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/styles/mixins' as *;

.tech {
  padding: var(--section-padding-y) 0;
  background: var(--cream);
}

.tech__header {
  margin-bottom: 0;
}

.tech__tag {
  @include section-tag(var(--teal));
}

.tech__heading {
  @include section-heading(var(--ink));
}

.tech__desc {
  @include section-desc(var(--muted));
}

.tech__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-top: 40px;
}

.tech__group {
  padding: 20px 18px 16px;
  @include card-elevated(
    transparent,
    rgba(42, 110, 127, 0.3),
    0 14px 40px rgba(17, 43, 50, 0.08)
  );
}

.tech__group-label {
  font-family: "DM Mono", monospace;
  font-size: 10px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--muted);
  margin: 0 0 20px 0;
}

.tech__items {
  margin: 0;
}

.tech__row {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 10px 0;
  border-bottom: 1px solid rgba(17, 43, 50, 0.06);
}

.tech__row:last-child {
  border-bottom: none;
}

.tech__row-icon {
  @include icon-box(28px);
}

.tech__row-content {
  flex: 1;
  min-width: 0;
}

.tech__name {
  font-size: 14px;
  font-weight: 600;
  color: var(--ink);
  margin: 0 0 2px 0;
}

.tech__item-desc {
  font-size: 12px;
  color: var(--muted);
  margin: 0;
}

.tech__mobile {
  display: none;
}

.tech__tabs {
  display: flex;
  flex-wrap: nowrap;
  gap: 6px;
  margin-bottom: 20px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 4px;
  scrollbar-width: none;
}
.tech__tabs::-webkit-scrollbar {
  display: none;
}
.tech__tab {
  padding: 8px 12px;
  font-family: "DM Mono", monospace;
  font-size: 9px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
  background: rgba(17, 43, 50, 0.05);
  border: 1px solid var(--border);
  border-radius: 6px;
  cursor: pointer;
  transition:
    color 0.2s,
    background 0.2s,
    border-color 0.2s;
  flex-shrink: 0;
  white-space: nowrap;
}
.tech__tab.active {
  color: var(--teal);
  background: rgba(42, 110, 127, 0.08);
  border-color: rgba(42, 110, 127, 0.35);
}
.tech__tab:hover:not(.active) {
  color: var(--ink);
}

@media (max-width: 1100px) {
  .tech__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 600px) {
  .tech {
    padding: 48px 0;
  }
  .tech__grid--desktop {
    display: none;
  }
  .tech__mobile {
    display: block;
    margin-top: 28px;
  }
}

/* Tech stack switch animation (mobile) - slide in */
.tech-slide-enter-active,
.tech-slide-leave-active {
  transition:
    opacity 0.35s ease,
    transform 0.35s ease;
}
.tech-slide-enter-from {
  opacity: 0;
  transform: translateX(24px);
}
.tech-slide-leave-to {
  opacity: 0;
  transform: translateX(-24px);
}
</style>
