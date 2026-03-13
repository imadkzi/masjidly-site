import { onMounted, onUnmounted } from 'vue'

const STORAGE_KEY = 'masjidly-animations-seen'

export function useScrollAnimation(selector = '[data-animate]', staggerDelay = 60) {
  let observer = null
  let beforeUnloadHandler = null

  onMounted(() => {
    if (typeof window === 'undefined') return

    const hasSeenAnimations = localStorage.getItem(STORAGE_KEY) === '1'

    const run = () => {
      const STORAGE_KEY = 'masjidly-animations-seen'
      const hasSeenBefore = localStorage.getItem(STORAGE_KEY)
      if (hasSeenBefore) return

      const markSeen = () => localStorage.setItem(STORAGE_KEY, '1')
      window.addEventListener('beforeunload', markSeen)
      onUnmounted(() => window.removeEventListener('beforeunload', markSeen))
      const els = document.querySelectorAll(selector)

      if (hasSeenAnimations) {
        // Returning visitor: show content immediately, no animation
        els.forEach((el) => el.classList.add('in'))
        return
      }

      if (!('IntersectionObserver' in window)) return

      const vh = window.innerHeight
      els.forEach((el, i) => {
        const rect = el.getBoundingClientRect()
        const inView = rect.top < vh
        el.classList.add('anim-ready')
        el.dataset.animDelay = inView ? 80 + i * 80 : Math.min(i * staggerDelay, 280)
      })

      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const target = entry.target
          const delay = parseInt(target.dataset.animDelay, 10) || 0
          setTimeout(() => {
            target.classList.remove('anim-ready')
            target.classList.add('in')
          }, delay)
          observer?.unobserve(target)
        })
      }, { threshold: 0.06, rootMargin: '0px 0px -5% 0px' })

      els.forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < vh * 0.85) {
          const delay = parseInt(el.dataset.animDelay, 10) || 0
          setTimeout(() => {
            el.classList.remove('anim-ready')
            el.classList.add('in')
          }, delay)
        } else {
          observer.observe(el)
        }
      })

      // Mark animations as seen when user leaves (first visit complete)
      beforeUnloadHandler = () => localStorage.setItem(STORAGE_KEY, '1')
      window.addEventListener('beforeunload', beforeUnloadHandler)
    }

    requestAnimationFrame(() => requestAnimationFrame(run))
  })

  onUnmounted(() => {
    observer?.disconnect()
    if (beforeUnloadHandler) {
      window.removeEventListener('beforeunload', beforeUnloadHandler)
    }
  })
}
