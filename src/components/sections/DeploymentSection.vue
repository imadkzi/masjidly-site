<script setup>
import { deployment } from '@/data/siteContent'
import AppIcon from '@/components/icons/AppIcon.vue'
</script>

<template>
  <section id="deployment" class="deploy-section">
    <div class="section-container">
      <header class="section-header" data-animate="fade-left">
        <span class="section-tag">{{ deployment.label }}</span>
        <h2 class="section-heading">{{ deployment.title }}</h2>
        <p class="section-desc">{{ deployment.description }}</p>
      </header>

      <div class="deploy-layout">
        <div class="deploy-list">
          <article
            v-for="(opt, i) in deployment.options"
            :key="i"
            class="deploy-block"
            data-animate
          >
            <div class="deploy-block-header">
              <span class="deploy-pill" :class="opt.badgeVariant">
                {{ opt.badge }}
              </span>
              <div class="deploy-icon-wrap">
                <AppIcon :name="opt.icon" :size="24" />
              </div>
            </div>
            <h3 class="deploy-name">{{ opt.name }}</h3>
            <p class="deploy-desc">{{ opt.description }}</p>
            <ul class="deploy-features">
              <li v-for="(f, j) in opt.features" :key="j">
                <AppIcon name="check" :size="12" />
                {{ f }}
              </li>
            </ul>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.deploy-section {
  padding: var(--section-padding-y) 0;
  background: var(--cream-dark);
}

.section-header { margin-bottom: 32px; }
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

.deploy-layout {
  margin-top: 48px;
}

.deploy-list {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.deploy-block {
  padding: 26px 24px 24px;
  background: var(--white);
  border-radius: 14px;
  border: 1px solid rgba(17, 43, 50, 0.09);
  box-shadow: 0 14px 40px rgba(17, 43, 50, 0.08);
  transition:
    transform 0.18s ease-out,
    box-shadow 0.18s ease-out,
    border-color 0.18s ease-out;
}

/* Staggered scroll-in animation for deployment cards */
.deploy-list .deploy-block[data-animate] {
  transition-delay: 0s;
}
.deploy-list .deploy-block[data-animate]:nth-child(2) {
  transition-delay: 0.06s;
}
.deploy-list .deploy-block[data-animate]:nth-child(3) {
  transition-delay: 0.12s;
}

/* Stronger scroll motion for deployment cards */
.deploy-list .deploy-block[data-animate].anim-ready {
  opacity: 0;
  transform: translateY(26px) scale(0.96);
}
.deploy-list .deploy-block[data-animate].anim-ready.in {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.deploy-block:hover {
  transform: translateY(-4px);
  border-color: rgba(201, 168, 76, 0.6);
  box-shadow: 0 18px 50px rgba(17, 43, 50, 0.14);
}

.deploy-block-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.deploy-pill {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 5px 12px;
  background: rgba(42, 110, 127, 0.1);
  color: var(--teal);
  border-radius: 999px;
}

.deploy-pill.gold {
  background: rgba(201, 168, 76, 0.18);
  color: var(--ink);
}

.deploy-icon-wrap {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--teal);
}

.deploy-name {
  font-family: 'Raleway', sans-serif;
  font-size: 19px;
  font-weight: 800;
  color: var(--ink);
  margin: 0 0 12px 0;
}

.deploy-desc {
  font-size: 14px;
  line-height: 1.6;
  color: var(--muted);
  margin: 0 0 20px 0;
}

.deploy-features {
  list-style: none;
  margin: 0;
  padding: 0;
}

.deploy-features li {
  font-size: 13px;
  color: var(--muted);
  display: flex;
  gap: 10px;
  padding: 6px 0;
  line-height: 1.4;
}

.deploy-features li svg { color: var(--teal); flex-shrink: 0; margin-top: 2px; }

@media (max-width: 1024px) {
  .deploy-list { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px) {
  .deploy-section { padding: 48px 0; }
  .deploy-list { grid-template-columns: 1fr; margin-top: 36px; }
}
</style>
