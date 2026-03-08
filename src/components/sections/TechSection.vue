<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { techCategories } from "@/data/techStack";
import AppIcon from "@/components/icons/AppIcon.vue";

const activeCat = ref(0);
let intervalId = null;

function startInterval() {
  if (intervalId) return;
  intervalId = setInterval(() => {
    activeCat.value = (activeCat.value + 1) % techCategories.length;
  }, 4000);
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
  <section id="tech" class="tech-section">
    <div class="section-container">
      <header class="section-header" data-animate="fade-left">
        <span class="section-tag">Tech Stack</span>
        <h2 class="section-heading">A stable, well-chosen architecture.</h2>
        <p class="section-desc">
          Every layer was selected for longevity and reliability. No
          experimental frameworks, no lock-in to single vendors — components
          that do their job well and can be swapped if needed.
        </p>
      </header>
      <!-- Desktop: full grid -->
      <div class="tech-stack tech-desktop">
        <div
          v-for="(cat, i) in techCategories"
          :key="i"
          class="tech-group"
          data-animate
        >
          <h4 class="tech-group-label">{{ cat.label }}</h4>
          <dl class="tech-items">
            <div v-for="(item, j) in cat.items" :key="j" class="tech-row">
              <div class="tech-row-icon">
                <AppIcon :name="item.icon || 'check'" :size="14" />
              </div>
              <div class="tech-row-content">
                <dt class="tech-name">{{ item.name }}</dt>
                <dd class="tech-desc">{{ item.desc }}</dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
      <!-- Mobile: category tabs -->
      <div class="tech-mobile" data-animate>
        <div class="tech-tabs" role="tablist">
          <button
            v-for="(cat, i) in techCategories"
            :key="i"
            type="button"
            role="tab"
            class="tech-tab"
            :class="{ active: activeCat === i }"
            :aria-selected="activeCat === i"
            @click="activeCat = i"
          >
            {{ cat.label }}
          </button>
        </div>
        <Transition name="tech-slide" mode="out-in">
          <div :key="activeCat" class="tech-group tech-group-mobile">
            <h4 class="tech-group-label">
              {{ techCategories[activeCat]?.label }}
            </h4>
            <dl class="tech-items">
              <div
                v-for="(item, j) in techCategories[activeCat]?.items"
                :key="j"
                class="tech-row"
              >
                <div class="tech-row-icon">
                  <AppIcon :name="item.icon || 'check'" :size="14" />
                </div>
                <div class="tech-row-content">
                  <dt class="tech-name">{{ item.name }}</dt>
                  <dd class="tech-desc">{{ item.desc }}</dd>
                </div>
              </div>
            </dl>
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tech-section {
  padding: var(--section-padding-y) 0;
  background: var(--cream);
}

.section-header {
  margin-bottom: 0;
}
.section-tag {
  font-family: "DM Mono", monospace;
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--teal);
  display: block;
  margin-bottom: 12px;
}
.section-heading {
  font-family: "Raleway", sans-serif;
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

.tech-stack {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-top: 48px;
}

.tech-group {
  padding-top: 20px;
  border-top: 2px solid var(--teal);
}

.tech-group-label {
  font-family: "DM Mono", monospace;
  font-size: 10px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--muted);
  margin: 0 0 20px 0;
}

.tech-items {
  margin: 0;
}

.tech-row {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 10px 0;
  border-bottom: 1px solid rgba(17, 43, 50, 0.06);
}

.tech-row:last-child {
  border-bottom: none;
}

.tech-row-icon {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(42, 110, 127, 0.08);
  border-radius: 6px;
  color: var(--teal);
}

.tech-row-content {
  flex: 1;
  min-width: 0;
}

.tech-name {
  font-size: 14px;
  font-weight: 600;
  color: var(--ink);
  margin: 0 0 2px 0;
}

.tech-desc {
  font-size: 12px;
  color: var(--muted);
  margin: 0;
}

.tech-mobile {
  display: none;
}

.tech-tabs {
  display: flex;
  flex-wrap: nowrap;
  gap: 6px;
  margin-bottom: 20px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 4px;
  scrollbar-width: none;
}
.tech-tabs::-webkit-scrollbar {
  display: none;
}
.tech-tab {
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
.tech-tab.active {
  color: var(--teal);
  background: rgba(42, 110, 127, 0.08);
  border-color: rgba(42, 110, 127, 0.35);
}
.tech-tab:hover:not(.active) {
  color: var(--ink);
}

@media (max-width: 1100px) {
  .tech-stack {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 600px) {
  .tech-section {
    padding: 48px 0;
  }
  .tech-desktop {
    display: none;
  }
  .tech-mobile {
    display: block;
    margin-top: 28px;
  }
  .tech-group-mobile {
    padding-top: 16px;
    border-top: 2px solid var(--teal);
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
