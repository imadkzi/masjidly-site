import { onMounted, onUnmounted } from 'vue'

export function useScrollAnimation(selector = '[data-animate]', staggerDelay = 60) {
  let observer = null

  onMounted(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return

    // Run after child components have mounted
    const run = () => {
      const els = document.querySelectorAll(selector)
      const vh = window.innerHeight
      els.forEach((el, i) => {
        const rect = el.getBoundingClientRect()
        const inView = rect.top < vh
        el.classList.add('anim-ready')
        // Elements above fold: animate in after short delay
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
    }

    requestAnimationFrame(() => requestAnimationFrame(run))
  })

  onUnmounted(() => observer?.disconnect())
}
