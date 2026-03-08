<script setup>
import { pricing } from '@/data/siteContent'
import { scrollToId } from '@/utils/format'
</script>

<template>
  <section id="pricing" class="pricing-section">
    <div class="section-container">
    <div data-animate>
      <div class="section-label light">{{ pricing.label }}</div>
      <h2 class="section-title">{{ pricing.title }}</h2>
      <p class="pricing-sub">{{ pricing.subtitle }}</p>
    </div>
    <div class="pricing-grid">
      <div
        v-for="(plan, i) in pricing.plans"
        :key="i"
        class="price-card"
        :class="{
          featured: plan.featured,
          hosted: plan.tier === 'Hosted',
          'self-hosted': plan.tier === 'Self-Hosted',
        }"
        data-animate
      >
        <div class="price-tier-row">
          <span class="price-tier">{{ plan.tier }}</span>
          <span v-if="plan.featured" class="price-badge">Recommended</span>
        </div>
        <div class="price-name">{{ plan.name }}</div>
        <div>
          <div class="price-amount-label">Setup fee</div>
          <div class="price-amount">{{ plan.setupFee }}</div>
        </div>
        <div class="price-divider"></div>
        <div>
          <div class="price-monthly-label">{{ plan.monthlyLabel }}</div>
          <div class="price-monthly-val">
            {{ plan.monthly }} <span>/ month</span>
          </div>
        </div>
        <ul class="price-list">
          <li v-for="(h, j) in plan.highlights" :key="`h-${j}`" class="hi">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            {{ h }}
          </li>
          <li v-for="(f, j) in plan.features" :key="`f-${j}`">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            {{ f }}
          </li>
        </ul>
        <a href="#cta" class="price-btn" @click.prevent="scrollToId('cta')">Request Setup</a>
      </div>
    </div>
    <div class="player-banner" data-animate="scale">
      <div>
        <div class="player-tag">{{ pricing.player.tag }}</div>
        <div class="player-title">{{ pricing.player.title }}</div>
        <p class="player-desc">{{ pricing.player.description }}</p>
      </div>
      <div>
        <div class="player-price-num">{{ pricing.player.price }}</div>
        <div class="player-price-sub">{{ pricing.player.priceLabel }}</div>
        <div class="player-price-opt">{{ pricing.player.priceNote }}</div>
        <a href="#cta" class="price-btn player-cta" @click.prevent="scrollToId('cta')">
          {{ pricing.player.cta }}
        </a>
      </div>
    </div>
    </div>
  </section>
</template>

<style scoped>
.pricing-section {
  background: var(--ink);
  padding: var(--section-padding-y) 0;
  position: relative;
  overflow: hidden;
}

.pricing-section .section-title { color: var(--cream); }

.section-label.light { color: var(--gold); }

.section-label.light::before { background: var(--gold); }

.pricing-sub {
  color: rgba(245, 240, 232, 0.48);
  font-size: 15.5px;
  max-width: 460px;
  margin-top: 10px;
  margin-bottom: 48px;
  line-height: 1.65;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
}

.price-card {
  background: rgba(245, 240, 232, 0.02);
  border: 1px solid rgba(245, 240, 232, 0.08);
  border-left: 3px solid rgba(245, 240, 232, 0.12);
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: border-color 0.2s, background 0.2s;
  border-radius: 6px;
}

.price-card:hover {
  background: rgba(245, 240, 232, 0.04);
  border-color: rgba(245, 240, 232, 0.15);
}

.price-card.hosted:not(.featured) {
  border-left-color: rgba(42, 110, 127, 0.5);
}
.price-card.hosted:not(.featured):hover {
  border-left-color: var(--teal);
}

.price-card.self-hosted:not(.featured) {
  border-left-color: rgba(245, 240, 232, 0.25);
}
.price-card.self-hosted:not(.featured):hover {
  border-left-color: rgba(245, 240, 232, 0.4);
}

.price-card.featured {
  border: 1px solid rgba(201, 168, 76, 0.25);
  border-left-width: 3px;
  border-top-width: 3px;
  border-left-color: var(--gold);
  border-top-color: var(--gold);
  background: rgba(201, 168, 76, 0.06);
}
.price-card.featured:hover {
  background: rgba(201, 168, 76, 0.1);
  border-color: rgba(201, 168, 76, 0.35);
}

.price-tier-row {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.price-tier {
  font-family: 'DM Mono', monospace;
  font-size: 9px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--gold);
  opacity: 0.6;
}

.price-badge {
  font-family: 'DM Mono', monospace;
  font-size: 8px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--gold);
  background: rgba(201, 168, 76, 0.18);
  padding: 3px 8px;
  border-radius: 4px;
}

.price-name {
  font-family: 'Raleway', sans-serif;
  font-size: 15.5px;
  font-weight: 800;
  color: var(--cream);
  line-height: 1.2;
  letter-spacing: -0.01em;
}

.price-amount {
  font-family: 'Raleway', sans-serif;
  font-size: 30px;
  font-weight: 900;
  color: var(--cream);
  letter-spacing: -0.03em;
  line-height: 1;
}

.price-amount-label {
  font-size: 9.5px;
  color: rgba(245, 240, 232, 0.3);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 3px;
}

.price-divider {
  height: 1px;
  background: rgba(245, 240, 232, 0.07);
}

.price-monthly-val {
  font-family: 'Raleway', sans-serif;
  font-size: 17px;
  font-weight: 800;
  color: var(--gold-light);
}

.price-monthly-val span {
  font-family: 'DM Sans', sans-serif;
  font-size: 11px;
  font-weight: 400;
  color: rgba(245, 240, 232, 0.3);
}

.price-monthly-label {
  font-size: 9.5px;
  color: rgba(245, 240, 232, 0.3);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 3px;
}

.price-list {
  list-style: none;
  margin: 0;
  padding: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.price-list li {
  font-size: 12px;
  color: rgba(245, 240, 232, 0.45);
  display: flex;
  align-items: flex-start;
  gap: 7px;
  line-height: 1.4;
}

.price-list li.hi {
  color: rgba(245, 240, 232, 0.8);
}

.price-list li svg {
  flex-shrink: 0;
  color: var(--gold);
  opacity: 0.55;
  margin-top: 2px;
}

.price-list li.hi svg {
  opacity: 1;
}

.price-btn {
  display: block;
  text-align: center;
  padding: 10px;
  border-radius: 4px;
  font-family: 'Raleway', sans-serif;
  font-size: 11.5px;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-decoration: none;
  border: 1px solid rgba(245, 240, 232, 0.18);
  color: var(--cream);
  background: transparent;
  transition: all 0.2s;
}

.price-btn:hover {
  background: var(--gold);
  border-color: var(--gold);
  color: var(--ink);
}

.price-card.featured .price-btn {
  background: var(--gold);
  border-color: var(--gold);
  color: var(--ink);
}

.player-banner {
  background: rgba(201, 168, 76, 0.06);
  border: 1px solid rgba(201, 168, 76, 0.2);
  border-radius: 8px;
  padding: 32px 36px;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 40px;
  align-items: center;
  position: relative;
  z-index: 1;
}

.player-tag {
  font-family: 'DM Mono', monospace;
  font-size: 9.5px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 6px;
}

.player-title {
  font-family: 'Raleway', sans-serif;
  font-size: 22px;
  font-weight: 900;
  color: var(--cream);
  margin-bottom: 8px;
  letter-spacing: -0.02em;
}

.player-desc {
  font-size: 13.5px;
  color: rgba(245, 240, 232, 0.46);
  line-height: 1.65;
  max-width: 500px;
  margin: 0;
}

.player-price-num {
  font-family: 'Raleway', sans-serif;
  font-size: 42px;
  font-weight: 900;
  color: var(--gold);
  line-height: 1;
  letter-spacing: -0.03em;
  text-align: right;
}

.player-price-sub {
  font-family: 'DM Mono', monospace;
  font-size: 9.5px;
  color: rgba(245, 240, 232, 0.28);
  letter-spacing: 0.06em;
  text-align: right;
  margin-top: 4px;
}

.player-price-opt {
  font-size: 12.5px;
  color: rgba(245, 240, 232, 0.45);
  text-align: right;
  margin-top: 6px;
}

.player-cta {
  margin-top: 14px;
  background: var(--gold);
  border-color: var(--gold);
  color: var(--ink);
}

@media (max-width: 1100px) {
  .pricing-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 900px) {
  .player-banner {
    grid-template-columns: 1fr;
  }
  .player-price-num,
  .player-price-sub,
  .player-price-opt {
    text-align: left;
  }
}
@media (max-width: 768px) {
  .pricing-section { padding: clamp(40px, 5vw, 56px) 0; }
}
@media (max-width: 600px) {
  .pricing-section { padding: 48px 0; }
  .pricing-grid { grid-template-columns: 1fr; }
  .player-banner { padding: 24px 20px; gap: 24px; }
  .player-title { font-size: 18px; }
  .player-price-num { font-size: 32px; }
}
</style>
