<script setup>
import { pricing } from '@/data/siteContent'
import { scrollToId } from '@/utils/format'
import SectionHeader from '@/components/SectionHeader.vue'
</script>

<template>
  <section id="pricing" class="pricing">
    <div class="section-container">
      <SectionHeader
        class="pricing__header"
        data-animate
        :label="pricing.label"
        :title="pricing.title"
        :description="pricing.subtitle"
        tone="light"
      />
    <div class="pricing__grid">
      <div
        v-for="(plan, i) in pricing.plans"
        :key="i"
        class="pricing__card"
        :class="{
          'pricing__card--featured': plan.featured,
          'pricing__card--hosted': plan.tier === 'Hosted',
          'pricing__card--self-hosted': plan.tier === 'Self-Hosted',
        }"
        data-animate
      >
        <div class="pricing__tier-row">
          <span class="pricing__tier">{{ plan.tier }}</span>
          <span v-if="plan.featured" class="pricing__badge">Recommended</span>
        </div>
        <div class="pricing__name">{{ plan.name }}</div>
        <div>
          <div class="pricing__amount-label">Setup fee</div>
          <div class="pricing__amount">{{ plan.setupFee }}</div>
        </div>
        <div class="pricing__divider"></div>
        <div>
          <div class="pricing__monthly-label">{{ plan.monthlyLabel }}</div>
          <div class="pricing__monthly-value">
            {{ plan.monthly }} <span>/ month</span>
          </div>
        </div>
        <ul class="pricing__list">
          <li
            v-for="(h, j) in plan.highlights"
            :key="`h-${j}`"
            class="pricing__list-item pricing__list-item--highlight"
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            {{ h }}
          </li>
          <li
            v-for="(f, j) in plan.features"
            :key="`f-${j}`"
            class="pricing__list-item"
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            {{ f }}
          </li>
        </ul>
        <a href="#cta" class="pricing__button" @click.prevent="scrollToId('cta')">Request Setup</a>
      </div>
    </div>
    <div class="pricing__player pricing__player--disabled" data-animate="scale">
      <div>
        <div class="pricing__player-tag">{{ pricing.player.tag }}</div>
        <div class="pricing__player-title">{{ pricing.player.title }}</div>
        <p class="pricing__player-desc">{{ pricing.player.description }}</p>
        <p class="pricing__player-coming">Coming soon</p>
      </div>
      <div>
        <div class="pricing__player-price">{{ pricing.player.price }}</div>
        <div class="pricing__player-price-sub">{{ pricing.player.priceLabel }}</div>
        <div class="pricing__player-price-note">{{ pricing.player.priceNote }}</div>
        <a
          href="#"
          class="pricing__button pricing__button--player"
          aria-disabled="true"
        >
          Coming soon
        </a>
      </div>
    </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/styles/mixins' as *;

.pricing {
  background:
    var(--ink)
    url("/ink-pattern.svg") center top / cover no-repeat;
  padding: var(--section-padding-y) 0;
  position: relative;
  overflow: hidden;
}

.pricing .section-title { color: var(--cream); }

.section-label.light { color: var(--gold); }

.section-label.light::before { background: var(--gold); }

.pricing__subtitle {
  color: rgba(245, 240, 232, 0.48);
  font-size: 15.5px;
  max-width: 460px;
  margin-top: 10px;
  margin-bottom: 48px;
  line-height: 1.65;
}

.pricing__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
}

.pricing__card {
  padding: 24px 20px;
  @include card-elevated(
    rgba(245, 240, 232, 0.08),
    rgba(245, 240, 232, 0.3),
    0 18px 48px rgba(0, 0, 0, 0.5)
  );
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: border-color 0.2s, background 0.2s;
}

/* Staggered scroll-in animation for pricing cards */
.pricing__grid .pricing__card[data-animate] {
  transition-delay: 0s;
}
.pricing__grid .pricing__card[data-animate]:nth-child(2) {
  transition-delay: 0.05s;
}
.pricing__grid .pricing__card[data-animate]:nth-child(3) {
  transition-delay: 0.1s;
}
.pricing__grid .pricing__card[data-animate]:nth-child(4) {
  transition-delay: 0.15s;
}

/* Stronger scroll motion for pricing cards */
.pricing__grid .pricing__card[data-animate].anim-ready {
  opacity: 0;
  transform: translateY(26px) scale(0.96);
}
.pricing__grid .pricing__card[data-animate].anim-ready.in {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.pricing__card:hover {
  background: rgba(245, 240, 232, 0.14);
  border-color: rgba(245, 240, 232, 0.45);
}

.pricing__card--hosted:not(.pricing__card--featured) {
  border-left-color: rgba(42, 110, 127, 0.5);
}
.pricing__card--hosted:not(.pricing__card--featured):hover {
  border-left-color: var(--teal);
}

.pricing__card--self-hosted:not(.pricing__card--featured) {
  border-left-color: rgba(245, 240, 232, 0.25);
}
.pricing__card--self-hosted:not(.pricing__card--featured):hover {
  border-left-color: rgba(245, 240, 232, 0.4);
}

.pricing__card--featured {
  border-color: rgba(201, 168, 76, 0.75);
  background: rgba(201, 168, 76, 0.22);
}
.pricing__card--featured:hover {
  background: rgba(201, 168, 76, 0.3);
  border-color: rgba(201, 168, 76, 0.9);
}

.pricing__tier-row {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.pricing__tier {
  font-family: 'DM Mono', monospace;
  font-size: 9px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--gold);
  opacity: 0.6;
}

.pricing__badge {
  font-family: 'DM Mono', monospace;
  font-size: 8px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--gold);
  background: rgba(201, 168, 76, 0.18);
  padding: 3px 8px;
  border-radius: 4px;
}

.pricing__name {
  font-family: 'Raleway', sans-serif;
  font-size: 15.5px;
  font-weight: 800;
  color: var(--cream);
  line-height: 1.2;
  letter-spacing: -0.01em;
}

.pricing__amount {
  font-family: 'Raleway', sans-serif;
  font-size: 30px;
  font-weight: 900;
  color: var(--cream);
  letter-spacing: -0.03em;
  line-height: 1;
}

.pricing__amount-label {
  font-size: 9.5px;
  color: rgba(245, 240, 232, 0.3);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 3px;
}

.pricing__divider {
  height: 1px;
  background: rgba(245, 240, 232, 0.07);
}

.pricing__monthly-value {
  font-family: 'Raleway', sans-serif;
  font-size: 17px;
  font-weight: 800;
  color: var(--gold-light);
}

.pricing__monthly-value span {
  font-family: 'DM Sans', sans-serif;
  font-size: 11px;
  font-weight: 400;
  color: rgba(245, 240, 232, 0.3);
}

.pricing__monthly-label {
  font-size: 9.5px;
  color: rgba(245, 240, 232, 0.3);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 3px;
}

.pricing__list {
  list-style: none;
  margin: 0;
  padding: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.pricing__list-item {
  font-size: 12px;
  color: rgba(245, 240, 232, 0.45);
  display: flex;
  align-items: flex-start;
  gap: 7px;
  line-height: 1.4;
}

.pricing__list-item--highlight {
  color: rgba(245, 240, 232, 0.8);
}

.pricing__list-item svg {
  flex-shrink: 0;
  color: var(--gold);
  opacity: 0.55;
  margin-top: 2px;
}

.pricing__list-item--highlight svg {
  opacity: 1;
}

.pricing__button {
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

.pricing__button:hover {
  background: var(--gold);
  border-color: var(--gold);
  color: var(--ink);
}

.pricing__card--featured .pricing__button {
  background: var(--gold);
  border-color: var(--gold);
  color: var(--ink);
}

.pricing__player {
  background: rgba(201, 168, 76, 0.18);
  border: 1px solid rgba(201, 168, 76, 0.5);
  border-radius: 14px;
  padding: 32px 36px;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 40px;
  align-items: center;
  position: relative;
  z-index: 1;
  box-shadow: 0 22px 60px rgba(0, 0, 0, 0.55);
}

.pricing__player-tag {
  font-family: 'DM Mono', monospace;
  font-size: 9.5px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 6px;
}

.pricing__player-title {
  font-family: 'Raleway', sans-serif;
  font-size: 22px;
  font-weight: 900;
  color: var(--cream);
  margin-bottom: 8px;
  letter-spacing: -0.02em;
}

.pricing__player-desc {
  font-size: 13.5px;
  color: rgba(245, 240, 232, 0.46);
  line-height: 1.65;
  max-width: 500px;
  margin: 0;
}

.pricing__player-coming {
  margin-top: 6px;
  font-size: 12px;
  font-family: 'DM Mono', monospace;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(245, 240, 232, 0.7);
}

.pricing__player-price {
  font-family: 'Raleway', sans-serif;
  font-size: 42px;
  font-weight: 900;
  color: var(--gold);
  line-height: 1;
  letter-spacing: -0.03em;
  text-align: right;
}

.pricing__player-price-sub {
  font-family: 'DM Mono', monospace;
  font-size: 9.5px;
  color: rgba(245, 240, 232, 0.28);
  letter-spacing: 0.06em;
  text-align: right;
  margin-top: 4px;
}

.pricing__player-price-note {
  font-size: 12.5px;
  color: rgba(245, 240, 232, 0.45);
  text-align: right;
  margin-top: 6px;
}

.pricing__button--player {
  margin-top: 14px;
  background: var(--gold);
  border-color: var(--gold);
  color: var(--ink);
}

.pricing__player--disabled {
  background: rgba(17, 43, 50, 0.22);
  border-color: rgba(245, 240, 232, 0.35);
  box-shadow: 0 18px 48px rgba(0, 0, 0, 0.3);
  opacity: 0.82;
}

.pricing__player--disabled .pricing__player-tag,
.pricing__player--disabled .pricing__player-coming {
  color: rgba(245, 240, 232, 0.7);
}

.pricing__player--disabled .pricing__player-title {
  color: rgba(245, 240, 232, 0.9);
}

.pricing__player--disabled .pricing__player-price {
  color: rgba(245, 240, 232, 0.75);
}

.pricing__player--disabled .pricing__button--player {
  opacity: 0.6;
  cursor: not-allowed;
  pointer-events: none;
}

@media (max-width: 1100px) {
  .pricing__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 900px) {
  .pricing__player {
    grid-template-columns: 1fr;
  }
  .pricing__player-price,
  .pricing__player-price-sub,
  .pricing__player-price-note {
    text-align: left;
  }
}
@media (max-width: 768px) {
  .pricing {
    padding: clamp(40px, 5vw, 56px) 0;
  }
}
@media (max-width: 600px) {
  .pricing {
    padding: 48px 0;
    /* On small screens the section is shorter, so keep the SVG pattern tile size consistent
       with other blue sections instead of letting `cover` zoom it in. */
    background-size: 720px auto;
    background-repeat: repeat;
    background-position: center top;
  }
  .pricing__grid { grid-template-columns: 1fr; }
  .pricing__player { padding: 24px 20px; gap: 24px; }
  .pricing__player-title { font-size: 18px; }
  .pricing__player-price { font-size: 32px; }
}
</style>
