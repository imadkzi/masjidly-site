<script setup>
import { ref } from 'vue'
import { cta } from '@/data/siteContent'

const email = ref('')
const buttonText = ref(cta.buttonText)

function handleSubmit() {
  if (!email.value.includes('@')) return
  buttonText.value = 'Sent ✓'
  email.value = ''
  setTimeout(() => {
    buttonText.value = cta.buttonText
  }, 3000)
}
</script>

<template>
  <section id="cta" class="cta-section">
    <div class="section-container">
    <div class="cta-inner" data-animate>
      <span class="cta-tag">{{ cta.label }}</span>
      <h2 class="cta-title">{{ cta.title }}</h2>
      <p class="cta-body">{{ cta.body }}</p>
      <form class="cta-form" @submit.prevent="handleSubmit">
        <input
          v-model="email"
          type="email"
          :placeholder="cta.emailPlaceholder"
          class="cta-input"
          required
        />
        <button type="submit" class="cta-btn">{{ buttonText }}</button>
      </form>
      <p class="cta-note">
        {{ cta.note }}
        <a :href="`mailto:${cta.email}`">{{ cta.email }}</a>
      </p>
    </div>
    </div>
  </section>
</template>

<style scoped>
.cta-section {
  padding: var(--section-padding-y) 0;
  background: var(--cream);
}

.cta-inner {
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
}

.cta-tag {
  font-family: 'DM Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--teal);
  display: block;
  margin-bottom: 16px;
}

.cta-title {
  font-family: 'Raleway', sans-serif;
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: var(--ink);
  margin-bottom: 16px;
}

.cta-body {
  font-size: 16px;
  color: var(--muted);
  line-height: 1.7;
  margin-bottom: 28px;
}

.cta-form {
  display: flex;
  gap: 0;
  border: 1px solid var(--border);
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 16px;
}

.cta-input {
  flex: 1;
  padding: 16px 20px;
  border: none;
  font-size: 15px;
  color: var(--ink);
  background: var(--white);
}

.cta-input:focus { outline: none; }

.cta-btn {
  padding: 16px 28px;
  background: var(--ink);
  color: var(--cream);
  border: none;
  font-family: 'Raleway', sans-serif;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.2s;
}

.cta-btn:hover { background: var(--teal); }

.cta-note {
  font-size: 13px;
  color: var(--muted);
}

.cta-note a {
  color: var(--teal);
  text-decoration: none;
  font-weight: 600;
}

@media (max-width: 600px) {
  .cta-section { padding: 48px 0; }
  .cta-form { flex-direction: column; }
  .cta-btn { width: 100%; }
}
</style>
