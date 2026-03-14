<script setup>
defineProps({
  name: { type: String, required: true },
  size: { type: [Number, String], default: 22 },
})
</script>

<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="app-icon">
    <template v-if="name === 'clock'"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></template>
    <template v-else-if="name === 'calendar'"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></template>
    <template v-else-if="name === 'users'"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></template>
    <template v-else-if="name === 'tv'"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></template>
    <template v-else-if="name === 'offline'"><path d="M12 2a10 10 0 100 20A10 10 0 0012 2z"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></template>
    <template v-else-if="name === 'layers'"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></template>
    <template v-else-if="name === 'cloud'"><path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/></template>
    <template v-else-if="name === 'monitor'"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></template>
    <template v-else-if="name === 'smartphone'"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18" stroke-width="3"/></template>
    <template v-else-if="name === 'chevron-plus'"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></template>
    <template v-else-if="name === 'check'"><polyline points="20 6 9 17 4 12"/></template>
    <template v-else-if="name === 'home'"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></template>
    <template v-else-if="name === 'users-group'"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></template>
    <template v-else-if="name === 'sparkles'"><path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z"/><path d="M5 17l.75 2.25L8 20l-2.25.75L5 23l-.75-2.25L2 20l2.25-.75L5 17z"/><path d="M19 17l.75 2.25L22 20l-2.25.75L19 23l-.75-2.25L16 20l2.25-.75L19 17z"/></template>
    <template v-else-if="name === 'zap'"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></template>
    <template v-else-if="name === 'cpu'"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/></template>
    <template v-else-if="name === 'tag'"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></template>
    <template v-else-if="name === 'help-circle'"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></template>
    <template v-else-if="name === 'mail'"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></template>
    <template v-else-if="name === 'image'"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></template>
    <template v-else-if="name === 'database'"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></template>
    <template v-else-if="name === 'package'"><path d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></template>
    <template v-else-if="name === 'download'"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></template>
  </svg>
</template>

<style scoped>.app-icon { flex-shrink: 0; }</style>
