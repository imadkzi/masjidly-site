<script setup>
import { marqueeItems } from '@/data/siteContent'
</script>

<template>
  <div class="marquee-wrap">
    <div class="marquee-track">
      <template v-for="(item, i) in marqueeItems" :key="i">
        <span class="marquee-item"><span class="mdot"></span>{{ item }}</span>
      </template>
      <template v-for="(item, i) in marqueeItems" :key="`dup-${i}`">
        <span class="marquee-item"><span class="mdot"></span>{{ item }}</span>
      </template>
    </div>
  </div>
</template>

<style scoped>
.marquee-wrap {
  background: var(--ink);
  padding: clamp(12px, 1.2vw, 20px) 0;
  overflow: hidden;
  border-top: 1px solid rgba(201, 168, 76, 0.14);
  border-bottom: 1px solid rgba(201, 168, 76, 0.14);
}

.marquee-track {
  display: flex;
  gap: clamp(24px, 3vw, 48px);
  width: max-content;
  animation: marquee 24s linear infinite;
}

.marquee-item {
  font-family: 'DM Mono', monospace;
  font-size: 11.5px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--gold);
  display: flex;
  align-items: center;
  gap: 10px;
  white-space: nowrap;
}

.mdot {
  width: 3px;
  height: 3px;
  background: rgba(201, 168, 76, 0.4);
  border-radius: 50%;
}

@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

@media (max-width: 768px) {
  .marquee-track { gap: 24px; }
  .marquee-item { font-size: clamp(10px, 2.2vw, 12px); }
}
@media (max-width: 600px) {
  .marquee-wrap { padding: 12px 0; }
  .marquee-track { gap: 20px; }
  .marquee-item { font-size: 10px; }
}
</style>
