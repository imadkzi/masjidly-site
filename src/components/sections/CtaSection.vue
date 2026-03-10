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
  <section id="cta" class="cta">
    <div class="section-container">
    <div class="cta__inner" data-animate>
      <span class="cta__tag">{{ cta.label }}</span>
      <h2 class="cta__title">{{ cta.title }}</h2>
      <p class="cta__body">{{ cta.body }}</p>
      <form class="cta__form" @submit.prevent="handleSubmit">
        <input
          v-model="email"
          type="email"
          :placeholder="cta.emailPlaceholder"
          class="cta__input"
          required
        />
        <button type="submit" class="cta__button">{{ buttonText }}</button>
      </form>
      <p class="cta__note">
        {{ cta.note }}
        <a :href="`mailto:${cta.email}`">{{ cta.email }}</a>
      </p>
    </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/styles/mixins' as *;

.cta {
  padding: var(--section-padding-y) 0;
  background: var(--cream);
}

.cta__inner {
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
}

.cta__tag {
  font-family: 'DM Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--teal);
  display: block;
  margin-bottom: 16px;
}

.cta__title {
  font-family: 'Raleway', sans-serif;
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: var(--ink);
  margin-bottom: 16px;
}

.cta__body {
  font-size: 16px;
  color: var(--muted);
  line-height: 1.7;
  margin-bottom: 28px;
}

.cta__form {
  display: flex;
  gap: 0;
  border: 1px solid var(--border);
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 16px;
}

.cta__input {
  flex: 1;
  padding: 16px 20px;
  border: none;
  font-size: 15px;
  color: var(--ink);
  background: var(--white);
}

.cta__input:focus { outline: none; }

.cta__button {
  @include button-base();
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

.cta__button:hover { background: var(--teal); }

.cta__note {
  font-size: 13px;
  color: var(--muted);
}

.cta__note a {
  color: var(--teal);
  text-decoration: none;
  font-weight: 600;
}

@media (max-width: 600px) {
  .cta { padding: 48px 0; }
  .cta__form { flex-direction: column; }
  .cta__button { width: 100%; }
}
</style>
