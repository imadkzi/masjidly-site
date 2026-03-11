<script setup>
import { ref } from 'vue'
import { cta } from '@/data/siteContent'

const name = ref('')
const masjidName = ref('')
const role = ref('')
const email = ref('')
const buttonText = ref(cta.buttonText)
const sending = ref(false)
const message = ref('')
const error = ref(false)

async function handleSubmit() {
  if (!name.value.trim() || !masjidName.value.trim() || !email.value || !email.value.includes('@')) {
    error.value = true
    message.value = 'Please fill in your name, masjid name, and a valid email.'
    return
  }

  sending.value = true
  error.value = false
  message.value = ''

  try {
    const res = await fetch('/.netlify/functions/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name.value.trim(),
        masjidName: masjidName.value.trim(),
        role: role.value.trim(),
        email: email.value.trim(),
      }),
    })

    if (!res.ok) throw new Error('Request failed')

    buttonText.value = 'Sent ✓'
    message.value = 'Thanks — we’ll be in touch shortly.'
    name.value = ''
    masjidName.value = ''
    role.value = ''
    email.value = ''
  } catch (e) {
    console.error(e)
    error.value = true
    message.value = 'Something went wrong. Please try again in a moment.'
  } finally {
    sending.value = false
    setTimeout(() => {
      buttonText.value = cta.buttonText
      message.value = ''
      error.value = false
    }, 4000)
  }
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
        <div class="cta__field-group">
          <label class="cta__label">
            Name
            <input
              v-model="name"
              type="text"
              name="name"
              class="cta__input"
              autocomplete="name"
              required
            />
          </label>
          <label class="cta__label">
            Masjid name
            <input
              v-model="masjidName"
              type="text"
              name="masjid"
              class="cta__input"
              autocomplete="organization"
              required
            />
          </label>
        </div>
        <div class="cta__field-group cta__field-group--secondary">
          <label class="cta__label">
            Role
            <input
              v-model="role"
              type="text"
              name="role"
              class="cta__input"
              autocomplete="organization-title"
            />
          </label>
          <label class="cta__label">
            Email
            <input
              v-model="email"
              type="email"
              name="email"
              :placeholder="cta.emailPlaceholder"
              class="cta__input"
              autocomplete="email"
              required
            />
          </label>
        </div>
        <button type="submit" class="cta__button" :disabled="sending">
          {{ sending ? 'Sending…' : buttonText }}
        </button>
      </form>
      <p v-if="message" class="cta__note" :class="{ 'cta__note--error': error }">
        {{ message }}
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
  max-width: 920px;
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
  flex-direction: column;
  gap: 12px;
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 14px 14px 12px;
  margin-bottom: 16px;
  background: #ffffff;
}

.cta__field-group {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px 12px;
}

.cta__field-group--secondary {
  margin-top: 4px;
}

.cta__label {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(17, 43, 50, 0.7);
}

.cta__input {
  width: 100%;
  padding: 10px 12px;
  border-radius: 6px;
  border: 1px solid rgba(17, 43, 50, 0.14);
  font-size: 14px;
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

.cta__note--error {
  color: #b91c1c;
}

.cta__note a {
  color: var(--teal);
  text-decoration: none;
  font-weight: 600;
}

@media (max-width: 600px) {
  .cta { padding: 48px 0; }
  .cta__field-group {
    grid-template-columns: 1fr;
  }
  .cta__button {
    width: 100%;
  }
}
</style>
