<script setup>
import { ref, computed } from "vue";
import { showcase } from "@/data/siteContent";

const activeTab = ref("display");

// Add your screenshots to public/showcase/ (display.png, cms.png, wall.png) and set image: '/showcase/display.png' etc
const showcaseItems = [
  {
    id: "display",
    label: "TV Display",
    caption:
      "The full-screen prayer display your congregation sees — prayer times, announcements, and scrolling notices.",
    placeholder:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='900' height='506' viewBox='0 0 900 506'%3E%3Crect fill='%231a2830' width='900' height='506'/%3E%3Ctext x='50%25' y='50%25' fill='%23c9a84c' font-family='sans-serif' font-size='20' text-anchor='middle' dy='.3em' opacity='0.8'%3ETV Display Screenshot%3C/text%3E%3C/svg%3E",
    image: null,
  },
  {
    id: "cms",
    label: "CMS Dashboard",
    caption:
      "The browser dashboard your committee uses to manage prayer times, announcements, and branding.",
    placeholder:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='900' height='506' viewBox='0 0 900 506'%3E%3Crect fill='%231e2a30' width='900' height='506'/%3E%3Ctext x='50%25' y='50%25' fill='%23c9a84c' font-family='sans-serif' font-size='20' text-anchor='middle' dy='.3em' opacity='0.8'%3ECMS Dashboard Screenshot%3C/text%3E%3C/svg%3E",
    image: null,
  },
  {
    id: "wall",
    label: "Wall Mockup",
    caption:
      "How Masjidly looks installed in a real prayer hall — wall-mounted display, Raspberry Pi behind the screen.",
    placeholder:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='900' height='506' viewBox='0 0 900 506'%3E%3Crect fill='%23162e35' width='900' height='506'/%3E%3Ctext x='50%25' y='50%25' fill='%23c9a84c' font-family='sans-serif' font-size='20' text-anchor='middle' dy='.3em' opacity='0.8'%3EWall Installation Photo%3C/text%3E%3C/svg%3E",
    image: null,
  },
];

const activeItem = computed(
  () => showcaseItems.find((item) => item.id === activeTab.value) ?? showcaseItems[0]
);
</script>

<template>
  <section id="showcase" class="showcase-section">
    <div class="section-container">
      <header class="showcase-header" data-animate="fade-left">
        <span class="showcase-tag">{{ showcase.label }}</span>
        <h2 class="showcase-title">{{ showcase.title }}</h2>
        <p class="showcase-desc">{{ showcase.description }}</p>
      </header>

      <div class="showcase-nav" data-animate>
        <button
          v-for="item in showcaseItems"
          :key="item.id"
          class="showcase-nav-btn"
          :class="{ active: activeTab === item.id }"
          @click="activeTab = item.id"
        >
          {{ item.label }}
        </button>
      </div>

      <div class="showcase-panels">
        <div class="showcase-panel" data-animate>
          <div class="showcase-frame">
            <img
              :src="activeItem.image || activeItem.placeholder"
              :alt="activeItem.label"
              class="showcase-img"
              @error="(e) => (e.target.src = activeItem.placeholder)"
            />
          </div>
          <p class="showcase-caption">{{ activeItem.caption }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.showcase-section {
  background: var(--ink);
  padding: var(--section-padding-y) 0;
  overflow: hidden;
  position: relative;
}

.showcase-tag {
  font-family: "DM Mono", monospace;
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--gold);
  display: block;
  margin-bottom: 12px;
}

.showcase-title {
  font-family: "Raleway", sans-serif;
  font-size: clamp(28px, 3.5vw, 44px);
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: var(--cream);
  margin-bottom: 12px;
}

.showcase-desc {
  font-size: 16px;
  line-height: 1.72;
  color: rgba(245, 240, 232, 0.48);
  max-width: 560px;
}

.showcase-header {
  margin-bottom: 40px;
}

.showcase-nav {
  display: flex;
  gap: 8px;
  margin-bottom: 32px;
  flex-wrap: wrap;
}

.showcase-nav-btn {
  font-family: "DM Mono", monospace;
  font-size: 11px;
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

.showcase-nav-btn:hover {
  color: rgba(245, 240, 232, 0.8);
  background: rgba(245, 240, 232, 0.06);
}

.showcase-nav-btn.active {
  background: rgba(201, 168, 76, 0.15);
  color: var(--gold);
  border-color: rgba(201, 168, 76, 0.3);
}

.showcase-frame {
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(245, 240, 232, 0.08);
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.4);
  max-width: 900px;
  margin: 0 auto;
}

.showcase-img {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  background: #1a2830;
}

.showcase-caption {
  text-align: center;
  margin-top: 24px;
  font-size: 14px;
  color: rgba(245, 240, 232, 0.45);
  max-width: 560px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .showcase-section {
    padding: clamp(40px, 5vw, 56px) 0;
  }
  .showcase-nav {
    margin-bottom: 24px;
  }
  .showcase-nav-btn {
    padding: 8px 16px;
    font-size: 10px;
  }
}
@media (max-width: 600px) {
  .showcase-section {
    padding: 36px 0;
  }
}
</style>
