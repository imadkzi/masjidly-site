<script setup>
import { ref, watch, onMounted, onUnmounted } from "vue";
import { navLinks } from "@/data/siteContent";
import { scrollToId } from "@/utils/format";

const menuOpen = ref(false);
const isScrolled = ref(false);
const navEl = ref(null);

function updateNavOffset() {
  const el = navEl.value;
  if (!el || typeof window === "undefined" || typeof document === "undefined")
    return;
  const height = el.offsetHeight || 0;
  const root = document.documentElement;
  // Add a small buffer so sections don't touch the nav
  root.style.setProperty("--nav-offset", `${height + 8}px`);
}

function closeMenu() {
  menuOpen.value = false;
}

function handleNavClick(href) {
  scrollToId(href.slice(1));
  closeMenu();
}

function onScroll() {
  isScrolled.value = window.scrollY > 24;
}

onMounted(() => {
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  updateNavOffset();
  window.addEventListener("resize", updateNavOffset, { passive: true });
});
onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
  window.removeEventListener("resize", updateNavOffset);
});

watch(menuOpen, (open) => {
  document.body.style.overflow = open ? "hidden" : "";
});
</script>

<template>
  <nav class="app-nav" :class="{ scrolled: isScrolled }" ref="navEl">
    <div class="nav-container">
      <a href="#" class="nav-logo" @click.prevent="handleNavClick('#hero')">
        <img src="/logo-full.svg" alt="Masjidly" class="nav-logo-img" />
      </a>
      <ul class="nav-links">
        <li v-for="link in navLinks" :key="link.href">
          <a :href="link.href" @click.prevent="handleNavClick(link.href)">{{
            link.label
          }}</a>
        </li>
        <li>
          <a href="#cta" class="nav-cta" @click.prevent="handleNavClick('#cta')"
            >Request Setup</a
          >
        </li>
      </ul>
      <button
        type="button"
        class="nav-toggle"
        :class="{ open: menuOpen }"
        :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
        :aria-expanded="menuOpen"
        @click="menuOpen = !menuOpen"
      >
        <span class="nav-toggle-line"></span>
        <span class="nav-toggle-line"></span>
        <span class="nav-toggle-line"></span>
      </button>
    </div>
  </nav>
  <Transition name="menu">
    <div v-if="menuOpen" class="nav-overlay" @click="closeMenu">
      <div class="nav-drawer" @click.stop>
        <ul class="nav-mobile-links">
          <li v-for="link in navLinks" :key="link.href">
            <a :href="link.href" @click.prevent="handleNavClick(link.href)">{{
              link.label
            }}</a>
          </li>
          <li>
            <a
              href="#cta"
              class="nav-cta"
              @click.prevent="handleNavClick('#cta')"
              >Request Setup</a
            >
          </li>
        </ul>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.app-nav {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(245, 240, 232, 0.98);
  border-bottom: 1px solid transparent;
  padding-top: env(safe-area-inset-top, 0px);
  transition:
    background 0.25s ease,
    backdrop-filter 0.25s ease,
    border-color 0.25s ease;
}
.app-nav.scrolled {
  background: rgba(245, 240, 232, 0.78);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom-color: var(--border);
}
.nav-container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: clamp(10px, 1.1vw, 18px) var(--section-padding-x);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav-logo {
  display: flex;
  align-items: center;
}
.nav-logo-img {
  height: 40px;
  width: auto;
  display: block;
}
.nav-links {
  display: flex;
  gap: 28px;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
}
.nav-links a {
  text-decoration: none;
  color: var(--ink);
  font-size: 13.5px;
  font-weight: 500;
  opacity: 0.65;
  transition: opacity 0.2s;
}
.nav-links a:hover {
  opacity: 1;
}
.nav-cta {
  background: var(--ink) !important;
  color: var(--cream) !important;
  opacity: 1 !important;
  padding: 10px 22px;
  border-radius: 8px;
  font-size: 13px !important;
  font-weight: 600 !important;
  transition: background 0.2s !important;
}
.nav-cta:hover {
  background: var(--teal) !important;
}

.nav-toggle {
  position: relative;
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 36px;
  height: 36px;
  padding: 8px;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: 4px;
}
.nav-toggle-line {
  display: block;
  width: 100%;
  height: 2px;
  background: var(--ink);
  border-radius: 1px;
  transition:
    transform 0.25s ease,
    opacity 0.2s;
}
.nav-toggle:hover .nav-toggle-line {
  opacity: 0.8;
}
.nav-toggle.open .nav-toggle-line:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.nav-toggle.open .nav-toggle-line:nth-child(2) {
  opacity: 0;
}
.nav-toggle.open .nav-toggle-line:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

.nav-overlay {
  position: fixed;
  inset: 0;
  z-index: 99;
  background: rgba(17, 43, 50, 0.4);
  backdrop-filter: blur(4px);
}
.nav-drawer {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--cream);
  display: flex;
  flex-direction: column;
  padding: calc(env(safe-area-inset-top) + 72px) 24px 24px 24px;
}
.nav-mobile-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
}
.nav-mobile-links a {
  display: block;
  padding: 16px 0;
  color: var(--ink);
  text-decoration: none;
  font-family: 'Raleway', sans-serif;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.2;
  border-bottom: 1px solid var(--border);
  transition: color 0.2s, padding-left 0.2s;
}
.nav-mobile-links a:first-of-type { border-top: 1px solid var(--border); }
.nav-mobile-links a:hover {
  color: var(--teal);
  padding-left: 8px;
}
.nav-mobile-links .nav-cta {
  text-align: center;
  margin-top: 24px;
  padding: 20px 0;
  border: 2px solid var(--ink);
  border-radius: 8px;
  font-size: 16px !important;
}

.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.2s ease;
}
.menu-enter-from,
.menu-leave-to {
  opacity: 0;
}

@media (max-width: 1024px) {
  .nav-links {
    gap: 24px;
  }
}
@media (max-width: 900px) {
  .nav-container {
    padding: 8px var(--section-padding-x);
  }
  .nav-links {
    display: none;
  }
  .nav-toggle {
    display: flex;
    width: 32px;
    height: 32px;
    padding: 6px;
  }
  .nav-toggle-line {
    height: 1.5px;
  }
}
@media (max-width: 768px) {
  .nav-container {
    padding: 6px var(--section-padding-x);
  }
}
@media (max-width: 480px) {
  .nav-container {
    padding: 6px 14px;
  }
}
</style>
