<script setup>
import { footerLinks } from '@/data/siteContent'
import { scrollToId } from '@/utils/format'
</script>

<template>
  <footer class="app-footer">
    <div class="section-container">
    <div class="footer-top" data-animate>
      <span class="logo-text">Masjidly</span>
      <ul class="footer-links">
        <li v-for="link in footerLinks" :key="link.href"><a :href="link.href" @click.prevent="scrollToId(link.href.slice(1))">{{ link.label }}</a></li>
      </ul>
    </div>
    <div class="footer-divider" data-animate="fade"></div>
    <div class="footer-copy" data-animate>© 2025 Masjidly. Built for masajid, with care.</div>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  background: var(--ink);
  padding: clamp(24px, 3vw, 36px) 0;
}

.app-footer .section-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.footer-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
}
.footer-divider {
  height: 1px;
  background: rgba(245, 240, 232, 0.12);
}
.logo-text { font-family: 'Raleway', sans-serif; font-size: 14px; font-weight: 800; color: rgba(245,240,232,0.5); }
.footer-links { display: flex; gap: 26px; list-style: none; margin: 0; padding: 0; }
.footer-links a { color: rgba(245,240,232,0.36); text-decoration: none; font-size: 11.5px; letter-spacing: 0.06em; text-transform: uppercase; }
.footer-links a:hover { color: var(--gold); }
.footer-copy { font-size: 11px; color: rgba(245,240,232,0.3); }
@media (max-width: 900px) {
  .footer-top { flex-direction: column; align-items: flex-start; }
}
@media (max-width: 768px) {
  .app-footer { padding: 24px 0; }
}
@media (max-width: 600px) {
  .app-footer { padding: 24px 0; }
  .app-footer .section-container { gap: 16px; }
  .footer-links { flex-wrap: wrap; gap: 12px; }
  .footer-links a { font-size: 11px; }
  .footer-copy { font-size: 10px; }
}
</style>
