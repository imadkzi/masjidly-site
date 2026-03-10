<script setup>
import { footerLinks } from '@/data/siteContent'
import { scrollToId } from '@/utils/format'
</script>

<template>
  <footer class="footer">
    <div class="section-container footer__container">
      <div class="footer__top">
        <span class="footer__logo">Masjidly</span>
        <ul class="footer__links">
          <li v-for="link in footerLinks" :key="link.href">
            <a
              :href="link.href"
              class="footer__link"
              @click.prevent="scrollToId(link.href.slice(1))"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
      </div>
      <div class="footer__divider"></div>
      <div class="footer__copy">
        © 2026 Masjidly. Built for masajid, with care.
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@use '@/styles/tokens' as *;

.footer {
  background: var(--ink);
  padding: clamp(24px, 3vw, 36px) 0;
}

.footer__container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.footer__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
}
.footer__divider {
  height: 1px;
  background: rgba(245, 240, 232, 0.12);
}
.footer__logo {
  font-family: $font-display;
  font-size: 14px;
  font-weight: 800;
  color: rgba(245, 240, 232, 0.5);
}

.footer__links {
  display: flex;
  gap: 26px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.footer__link {
  color: rgba(245, 240, 232, 0.36);
  text-decoration: none;
  font-size: 11.5px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.footer__link:hover {
  color: var(--gold);
}

.footer__copy {
  font-size: 11px;
  color: rgba(245, 240, 232, 0.3);
}

@media (max-width: 900px) {
  .footer__top {
    flex-direction: column;
    align-items: flex-start;
  }
}
@media (max-width: 768px) {
  .footer {
    padding: 24px 0;
  }
}
@media (max-width: 600px) {
  .footer {
    padding: 24px 0;
  }

  .footer__container {
    gap: 16px;
  }

  .footer__links {
    flex-wrap: wrap;
    gap: 12px;
  }

  .footer__link {
    font-size: 11px;
  }

  .footer__copy {
    font-size: 10px;
  }
}
</style>
