<script setup>
import { ref, computed } from 'vue'
import {
  docsNav,
  docsGettingStarted,
  docsPrayerTimes,
  docsAnnouncements,
  docsSettings,
  docsDeployments,
  docsRoles,
  docsTroubleshooting,
} from '@/data/docs'

const activeSlug = ref('getting-started')

const sectionsBySlug = {
  'getting-started': docsGettingStarted,
  'prayer-times': docsPrayerTimes,
  announcements: docsAnnouncements,
  settings: docsSettings,
  deployments: docsDeployments,
  roles: docsRoles,
  troubleshooting: docsTroubleshooting,
}

const activeDoc = computed(() => sectionsBySlug[activeSlug.value] || docsGettingStarted)

function setActive(slug) {
  activeSlug.value = slug
}
</script>

<template>
  <section id="docs" class="docs">
    <div class="docs__hero">
      <div class="section-container docs__hero-inner" data-animate="fade-left">
        <div class="docs__hero-copy">
          <p class="docs__hero-tag">Masjidly CMS Docs</p>
          <h1 class="docs__hero-title">
            Guides for managing your Masjidly display.
          </h1>
          <p class="docs__hero-body">
            Step‑by‑step instructions for uploading timetables, adding announcements,
            and keeping your masjid’s screens accurate and up to date.
          </p>
        </div>
        <div class="docs__hero-meta">
          <p class="docs__hero-meta-heading">Useful links</p>
          <ul class="docs__hero-meta-list">
            <li>Timetable CSV template (provided on setup)</li>
            <li>Announcement poster template</li>
            <li>Support: salaam@masjidly.co.uk</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="section-container docs__container">
      <aside class="docs__nav" aria-label="Docs navigation" data-animate="fade-left">
        <h2 class="docs__nav-title">Docs</h2>
        <ul class="docs__nav-list">
          <li
            v-for="item in docsNav"
            :key="item.slug"
          >
            <button
              type="button"
              class="docs__nav-link"
              :class="{ 'docs__nav-link--active': activeSlug === item.slug }"
              @click="setActive(item.slug)"
            >
              {{ item.label }}
            </button>
          </li>
        </ul>
      </aside>

      <article class="docs__content" data-animate>
        <header class="docs__header">
          <p class="docs__eyebrow">Section</p>
          <h2 class="docs__title">
            {{ activeDoc.title }}
          </h2>
        </header>

        <div class="docs__sections">
          <section
            v-for="(section, index) in activeDoc.sections"
            :key="index"
            class="docs__section"
          >
            <h3 class="docs__section-heading">
              {{ section.heading }}
            </h3>
            <ul class="docs__section-list" v-if="section.body && section.body.length">
              <li
                v-for="(line, i) in section.body"
                :key="i"
                :class="[
                  'docs__section-item',
                  typeof line === 'string' && line.startsWith('Screenshot')
                    ? 'docs__section-item--screenshot'
                    : ''
                ]"
              >
                {{ typeof line === 'string' ? line : '' }}
              </li>
            </ul>

            <table
              v-if="section.table"
              class="docs__table"
            >
              <thead>
                <tr>
                  <th
                    v-for="(head, i) in section.table.headers"
                    :key="i"
                  >
                    {{ head }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(row, rIndex) in section.table.rows"
                  :key="rIndex"
                >
                  <td
                    v-for="(cell, cIndex) in row"
                    :key="cIndex"
                  >
                    {{ cell }}
                  </td>
                </tr>
              </tbody>
            </table>
            <pre
              v-if="section.code"
              class="docs__code"
            ><code>{{ section.code }}</code></pre>
          </section>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/styles/tokens' as *;

.docs {
  padding-bottom: var(--section-padding-y);
  background: var(--cream);
  flex: 1;
  display: flex;
  flex-direction: column;
}

.docs__hero {
  background:
    radial-gradient(circle at top left, rgba(201, 168, 76, 0.18), transparent 55%),
    radial-gradient(circle at bottom right, rgba(42, 110, 127, 0.18), transparent 55%),
    $color-ink;
  color: $color-cream;
  /* Match main hero: account for fixed nav + safe area before content */
  padding-top: calc(
    var(--nav-offset) + env(safe-area-inset-top, 0px) + clamp(24px, 5vw, 48px)
  );
  padding-bottom: 40px;
}

.docs__hero-inner {
  display: grid;
  grid-template-columns: minmax(0, 2.2fr) minmax(0, 1.3fr);
  gap: 32px;
  align-items: center;
}

.docs__hero-copy {
  max-width: 640px;
}

.docs__hero-tag {
  font-family: $font-mono;
  font-size: $font-size-caption;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: $color-gold;
  margin: 0 0 10px 0;
}

.docs__hero-title {
  font-family: $font-display;
  font-size: clamp(28px, 3.4vw, 40px);
  font-weight: 900;
  letter-spacing: -0.03em;
  margin: 0 0 12px 0;
}

.docs__hero-body {
  font-size: $font-size-body-lg;
  line-height: 1.7;
  color: rgba(245, 240, 232, 0.72);
  margin: 0;
}

.docs__hero-meta {
  padding: 16px 18px 14px;
  border-radius: 14px;
  border: 1px solid rgba(245, 240, 232, 0.24);
  background: rgba(10, 26, 32, 0.88);
}

.docs__hero-meta-heading {
  font-family: $font-display;
  font-size: $font-size-body;
  font-weight: 700;
  color: $color-cream;
  margin: 0 0 6px 0;
}

.docs__hero-meta-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: $font-size-body-sm;
  color: rgba(245, 240, 232, 0.72);
}

.docs__container {
  margin-top: clamp(18px, 3vw, 28px);
  display: grid;
  grid-template-columns: minmax(0, 230px) minmax(0, 1fr);
  gap: 28px;
  align-items: stretch;
  flex: 1;
}

.docs__nav {
  position: sticky;
  top: calc(var(--nav-offset) + 24px);
  align-self: flex-start;
}

.docs__nav-title {
  font-family: $font-display;
  font-size: $font-size-body;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: rgba(17, 43, 50, 0.5);
  margin: 0 0 10px 0;
}

.docs__nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.docs__nav-link {
  width: 100%;
  text-align: left;
  border-radius: 999px;
  border: 1px solid transparent;
  padding: 7px 12px;
  font-family: $font-sans;
  font-size: $font-size-body-sm;
  color: rgba(17, 43, 50, 0.7);
  background: transparent;
  cursor: pointer;
  transition:
    background 0.15s ease,
    border-color 0.15s ease,
    color 0.15s ease;
}

.docs__nav-link:hover {
  background: rgba(42, 110, 127, 0.04);
}

.docs__nav-link--active {
  background: rgba(42, 110, 127, 0.08);
  border-color: rgba(42, 110, 127, 0.35);
  color: $color-ink;
  font-weight: 600;
}

.docs__content {
  border-radius: $radius-card;
  border: 1px solid rgba(17, 43, 50, 0.08);
  background: $color-white;
  padding: 24px 24px 22px;
  box-shadow: $shadow-card-soft;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.docs__eyebrow {
  font-family: $font-mono;
  font-size: $font-size-caption;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(17, 43, 50, 0.6);
  margin: 0 0 6px 0;
}

.docs__title {
  font-family: $font-display;
  font-size: clamp(22px, 2.4vw, 28px);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: $color-ink;
  margin: 0;
}

.docs__sections {
  margin-top: 4px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.docs__section-heading {
  font-family: $font-display;
  font-size: $font-size-body-lg;
  font-weight: 700;
  color: $color-ink;
  margin: 0 0 4px 0;
}

.docs__section-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.docs__section-item {
  font-size: $font-size-body;
  line-height: 1.65;
  color: $color-ink;
}

.docs__section-item--screenshot {
  border-radius: 10px;
  border: 1px solid rgba(17, 43, 50, 0.16);
  padding: 0;
  background: #f8fafb;
  color: $color-muted;
  min-height: 500px;
  width: 75%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: $font-size-body-sm;
  font-style: italic;
}

.docs__section {
  padding-top: 10px;
  border-top: 1px solid rgba(17, 43, 50, 0.06);
}

.docs__section:first-of-type {
  border-top: none;
  padding-top: 4px;
}

.docs__table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 8px;
  font-size: $font-size-body-sm;
}

.docs__table th,
.docs__table td {
  border: 1px solid rgba(17, 43, 50, 0.08);
  padding: 6px 8px;
  text-align: left;
}

.docs__table th {
  background: rgba(17, 43, 50, 0.03);
  font-weight: 600;
}

.docs__code {
  margin-top: 12px;
  padding: 12px 16px;
  background: rgba(17, 43, 50, 0.06);
  border-radius: 6px;
  border: 1px solid rgba(17, 43, 50, 0.1);
  font-family: 'DM Mono', monospace;
  font-size: 11px;
  line-height: 1.5;
  overflow-x: auto;
  white-space: pre-wrap;
  word-break: break-all;
}

.docs__code code {
  background: none;
  padding: 0;
}

@media (max-width: 900px) {
  .docs__hero-inner {
    grid-template-columns: minmax(0, 1fr);
    gap: 20px;
  }

  .docs__container {
    grid-template-columns: minmax(0, 1fr);
    flex: none;
  }

  .docs__nav {
    position: static;
    order: -1;
  }

  .docs__content {
    padding: 20px 16px 18px;
    height: auto;
  }
}

@media (max-width: 600px) {
  .docs {
    padding-bottom: 48px;
  }

  .docs__tabs {
    border-radius: 10px;
  }
}
</style>

