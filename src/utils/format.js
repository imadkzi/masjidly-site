export function formatTime(date = new Date()) {
  return [date.getHours(), date.getMinutes(), date.getSeconds()]
    .map((v) => String(v).padStart(2, '0'))
    .join(':')
}

export function formatDisplayDate(date = new Date()) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  return `${days[date.getDay()]} · ${date.getDate()} Ramadan 1447`
}

export function scrollToId(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
