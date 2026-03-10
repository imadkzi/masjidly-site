<script setup>
const props = defineProps({
  label: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: false, default: '' },
  tone: {
    type: String,
    default: 'dark', // 'dark' on light backgrounds, 'light' on dark backgrounds
    validator: (v) => ['dark', 'light'].includes(v),
  },
})
</script>

<template>
  <header class="section-header" :data-tone="tone">
    <span
      v-if="label"
      class="section-header__label"
    >
      {{ label }}
    </span>
    <h2 class="section-header__title">
      {{ title }}
    </h2>
    <p v-if="description" class="section-header__desc">
      {{ description }}
    </p>
  </header>
</template>

<style scoped lang="scss">
@use '@/styles/mixins' as *;

.section-header {
  margin-bottom: 40px;
}

.section-header__label {
  @include section-tag();
}

.section-header__title {
  @include section-heading();
}

.section-header__desc {
  @include section-desc();
}

[data-tone='light'] {
  .section-header__label {
    color: var(--gold);
  }

  .section-header__title {
    color: var(--cream);
  }

  .section-header__desc {
    color: rgba(245, 240, 232, 0.55);
  }
}
</style>

