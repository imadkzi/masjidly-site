<script setup>
import { ref } from 'vue'
import { cta } from '@/data/siteContent'
import AppIcon from '@/components/icons/AppIcon.vue'

const name = ref('')
const masjidName = ref('')
const role = ref('')
const email = ref('')
const buttonText = ref(cta.buttonText)
const sending = ref(false)
const message = ref('')
const error = ref(false)
const success = ref(false)

async function handleSubmit() {
  if (!name.value.trim() || !masjidName.value.trim() || !email.value || !email.value.includes('@')) {
    error.value = true
    message.value = 'Please fill in your name, masjid name, and a valid email.'
    return
  }

  sending.value = true
  error.value = false
  message.value = ''

  const markSuccess = () => {
    success.value = true
    buttonText.value = 'Sent ✓'
    name.value = ''
    masjidName.value = ''
    role.value = ''
    email.value = ''
  }

  // For local testing (when functions may not be running), always show success
  if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
    markSuccess()
    sending.value = false
    setTimeout(() => {
      buttonText.value = cta.buttonText
      success.value = false
      error.value = false
    }, 5000)
    return
  }

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

    markSuccess()
  } catch (e) {
    console.error(e)
    error.value = true
    message.value = 'Something went wrong. Please try again in a moment.'
  } finally {
    sending.value = false
    setTimeout(() => {
      buttonText.value = cta.buttonText
      error.value = false
    }, 5000)
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
      <form class="cta__form" @submit.prevent="handleSubmit" aria-live="polite">
        <template v-if="!success">
          <div class="cta__field-group">
            <label class="cta__label">
              Name
              <input
                v-model="name"
                type="text"
                name="name"
                class="cta__input"
                autocomplete="name"
                :placeholder="cta.namePlaceholder"
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
                :placeholder="cta.masjidNamePlaceholder"
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
                :placeholder="cta.rolePlaceholder"
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

          <p v-if="message" class="cta__note cta__note--error">
            {{ message }}
          </p>
        </template>

        <div v-else class="cta__success">
          <div class="cta__success-icon" aria-hidden="true">
            <AppIcon name="check" :size="20" />
          </div>
          <h3 class="cta__success-title">Thanks, we’ve got your details.</h3>
          <p class="cta__success-text">
            We’ll reach out shortly to walk through Masjidly and the next steps for your masjid.
          </p>
        </div>
      </form>
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
  background: var(--white);
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 14px 40px rgba(17, 43, 50, 0.08);
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
  padding: 14px 14px 12px;
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

.cta__input::placeholder {
  color: rgba(17, 43, 50, 0.3);
}

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
  margin-top: 8px;
}

.cta__note--error {
  color: #b91c1c;
  padding: 8px 10px;
  border-radius: 8px;
  background: rgba(248, 113, 113, 0.08);
  border: 1px solid rgba(248, 113, 113, 0.4);
}

.cta__note a {
  color: var(--teal);
  text-decoration: none;
  font-weight: 600;
}

.cta__success {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 22px 16px 20px;
  gap: 10px;
}

.cta__success-icon {
  width: 52px;
  height: 52px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(16, 185, 129, 0.08);
  border: 1px solid rgba(16, 185, 129, 0.5);
  color: #047857;
  box-shadow: 0 12px 30px rgba(16, 185, 129, 0.2);
}

.cta__success-title {
  font-family: 'Raleway', sans-serif;
  font-size: 18px;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--ink);
}

.cta__success-text {
  font-size: 14px;
  line-height: 1.7;
  color: var(--muted);
  max-width: 420px;
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
