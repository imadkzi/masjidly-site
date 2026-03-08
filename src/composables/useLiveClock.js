import { ref, onMounted, onUnmounted } from 'vue'
import { formatTime } from '@/utils/format'

export function useLiveClock() {
  const time = ref(formatTime())
  let intervalId = null

  onMounted(() => {
    intervalId = setInterval(() => { time.value = formatTime() }, 1000)
  })

  onUnmounted(() => {
    if (intervalId) clearInterval(intervalId)
  })

  return { time }
}
