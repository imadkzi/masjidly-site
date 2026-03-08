import { ref } from 'vue'

export function useFaqAccordion() {
  const openIndex = ref(null)
  function toggle(index) {
    openIndex.value = openIndex.value === index ? null : index
  }
  return { openIndex, toggle }
}
