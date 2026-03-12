<script setup>
import { deployment } from '@/data/siteContent'
import AppIcon from '@/components/icons/AppIcon.vue'
import SectionHeader from '@/components/SectionHeader.vue'
</script>

<template>
  <section id="deployment" class="deploy">
    <div class="section-container">
      <SectionHeader
        class="deploy__header"
        data-animate="fade-left"
        :label="deployment.label"
        :title="deployment.title"
        :description="deployment.description"
      />

      <div class="deploy__layout">
        <div class="deploy__list">
          <article
            v-for="(opt, i) in deployment.options"
            :key="i"
            class="deploy__card"
            data-animate
          >
            <div class="deploy__card-header">
              <span class="deploy__pill" :class="opt.badgeVariant">
                {{ opt.badge }}
              </span>
              <div class="deploy__icon">
                <AppIcon :name="opt.icon" :size="24" />
              </div>
            </div>
            <h3 class="deploy__name">{{ opt.name }}</h3>
            <p class="deploy__desc-card">{{ opt.description }}</p>
            <ul class="deploy__features">
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

<style scoped lang="scss">
@use '@/styles/mixins' as *;
@use '@/styles/tokens' as *;

.deploy {
  padding: var(--section-padding-y) 0;
  background: var(--cream-dark);
}

.deploy__header { margin-bottom: 32px; }
.deploy__tag { @include section-tag(var(--teal)); }
.deploy__heading { @include section-heading(var(--ink)); }
.deploy__desc { @include section-desc(var(--muted)); }

.deploy__layout {
  margin-top: 48px;
}

.deploy__list {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.deploy__card {
  padding: 26px 24px 24px;
  @include card-elevated();
  transition:
    transform 0.18s ease-out,
    box-shadow 0.18s ease-out,
    border-color 0.18s ease-out;
}

/* Staggered scroll-in animation for deployment cards */
.deploy__list .deploy__card[data-animate] {
  transition-delay: 0s;
}
.deploy__list .deploy__card[data-animate]:nth-child(2) {
  transition-delay: 0.06s;
}
.deploy__list .deploy__card[data-animate]:nth-child(3) {
  transition-delay: 0.12s;
}

/* Stronger scroll motion for deployment cards */
.deploy__list .deploy__card[data-animate].anim-ready {
  opacity: 0;
  transform: translateY(26px) scale(0.96);
}
.deploy__list .deploy__card[data-animate].anim-ready.in {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.deploy__card:hover {
  transform: translateY(-4px);
  border-color: rgba(201, 168, 76, 0.6);
  box-shadow: 0 18px 50px rgba(17, 43, 50, 0.14);
}

.deploy__card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.deploy__pill {
  font-size: $font-size-caption;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 5px 12px;
  background: rgba(42, 110, 127, 0.1);
  color: var(--teal);
  border-radius: 999px;
}

.deploy__pill.gold {
  background: rgba(201, 168, 76, 0.18);
  color: var(--ink);
}

.deploy__icon {
  @include icon-box(44px);
}

.deploy__name {
  font-family: 'Raleway', sans-serif;
  font-size: $font-size-section-body;
  font-weight: 800;
  color: var(--ink);
  margin: 0 0 12px 0;
}

.deploy__desc-card {
  font-size: $font-size-body;
  line-height: 1.6;
  color: var(--muted);
  margin: 0 0 20px 0;
}

.deploy__features {
  list-style: none;
  margin: 0;
  padding: 0;
}

.deploy__features li {
  font-size: $font-size-body-sm;
  color: var(--muted);
  display: flex;
  gap: 10px;
  padding: 6px 0;
  line-height: 1.4;
}

.deploy__features li svg { color: var(--teal); flex-shrink: 0; margin-top: 2px; }

@media (max-width: 1024px) {
  .deploy__list { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px) {
  .deploy { padding: 48px 0; }
  .deploy__list { grid-template-columns: 1fr; margin-top: 36px; }
}
</style>
