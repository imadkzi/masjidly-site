<script setup>
import { hero } from "@/data/siteContent";
import { scrollToId } from "@/utils/format";

const heroScreenPlaceholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='900' height='506' viewBox='0 0 900 506'%3E%3Crect fill='%231a2830' width='900' height='506'/%3E%3Ctext x='50%25' y='45%25' fill='%23c9a84c' font-family='sans-serif' font-size='24' text-anchor='middle' dy='.3em'%3EPrayer Display%3C/text%3E%3Ctext x='50%25' y='55%25' fill='rgba(201,168,76,0.6)' font-family='sans-serif' font-size='14' text-anchor='middle' dy='.3em'%3EAdd hero-screen.png to public/%3C/text%3E%3C/svg%3E";
</script>

<template>
  <section id="hero" class="hero-section">
    <div class="section-container hero-container">
      <div class="hero-layout">
        <div class="hero-text" data-animate>
          <span class="hero-tag">{{ hero.eyebrow }}</span>
          <h1 class="hero-title">
            {{ hero.title }} <em>{{ hero.titleEmphasis }}</em>
          </h1>
          <p class="hero-desc">{{ hero.body }}</p>
          <div class="hero-btns">
            <a
              :href="hero.primaryCtaHref"
              class="hero-btn hero-btn-solid"
              @click.prevent="scrollToId('pricing')"
              >{{ hero.primaryCta }}</a
            >
            <a
              :href="hero.secondaryCtaHref"
              class="hero-btn hero-btn-outline"
              @click.prevent="scrollToId('features')"
              >{{ hero.secondaryCta }}</a
            >
          </div>
        </div>
        <div class="hero-visual" data-animate="fade-right">
          <div class="hero-screen-frame" aria-hidden="true">
            <div class="hero-screen-bezel">
              <img
                :src="hero.heroScreen"
                alt="Masjidly prayer display on TV"
                class="hero-screen-img"
                @error="(e) => (e.target.src = heroScreenPlaceholder)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  min-height: 85dvh;
  display: flex;
  align-items: center;
  padding: clamp(48px, 6vw, 80px) 0;
  /* Ensure hero content starts below fixed nav + iOS safe-area inset */
  padding-top: calc(var(--nav-offset) + env(safe-area-inset-top, 0px) + clamp(24px, 5vw, 56px));
  background:
    var(--ink)
    url("/ink-pattern.svg") center top / cover no-repeat;
  position: relative;
  overflow: hidden;
}
.hero-container {
  width: 100%;
  position: relative;
  z-index: 1;
}

.hero-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  max-width: 1920px;
  margin: 0 auto;
  width: 100%;
}

.hero-tag {
  font-family: "DM Mono", monospace;
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--gold);
  opacity: 0.9;
  display: block;
  margin-bottom: 20px;
}

.hero-title {
  font-family: "Raleway", sans-serif;
  font-size: clamp(38px, 4.5vw, 56px);
  font-weight: 900;
  line-height: 1.12;
  letter-spacing: -0.03em;
  color: var(--cream);
  margin-bottom: 24px;
}

.hero-title em {
  font-style: normal;
  color: var(--gold-light);
}

.hero-desc {
  font-size: 17px;
  line-height: 1.75;
  color: rgba(245, 240, 232, 0.65);
  max-width: 440px;
  margin-bottom: 32px;
}

.hero-btns {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.hero-btn {
  padding: 14px 28px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s;
  border-radius: 6px;
}

.hero-btn-solid {
  background: var(--gold);
  color: var(--ink);
  border: none;
}

.hero-btn-solid:hover {
  background: var(--gold-light);
}

.hero-btn-outline {
  background: transparent;
  color: var(--cream);
  border: 2px solid rgba(245, 240, 232, 0.35);
}

.hero-btn-outline:hover {
  border-color: var(--cream);
  color: var(--cream);
}

.hero-visual {
  position: relative;
  min-height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-screen-frame {
  max-width: 100%;
}

.hero-screen-bezel {
  border-radius: 12px;
  overflow: hidden;
  border: 8px solid rgba(17, 43, 50, 0.9);
  box-shadow:
    0 24px 64px rgba(0, 0, 0, 0.5),
    inset 0 0 0 1px rgba(245, 240, 232, 0.06);
  background: #1a2830;
}

.hero-screen-img {
  display: block;
  width: 100%;
  max-width: 720px;
  height: auto;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

@media (max-width: 900px) {
  .hero-section {
    min-height: 70dvh;
  }
  .hero-layout {
    grid-template-columns: 1fr;
    gap: 48px;
    text-align: center;
  }
  .hero-desc {
    max-width: none;
    margin-left: auto;
    margin-right: auto;
  }
  .hero-btns {
    justify-content: center;
  }
  .hero-visual {
    min-height: 200px;
  }
  .hero-screen-img {
    max-width: 500px;
  }
}
@media (max-width: 600px) {
  .hero-title {
    font-size: clamp(30px, 8vw, 42px);
  }
  .hero-btns {
    flex-direction: column;
  }
  .hero-btn {
    width: 100%;
    text-align: center;
  }
  .hero-visual {
    display: none;
  }
}
</style>
