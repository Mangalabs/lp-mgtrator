import React from "react"

export default function AnimatedCounter({
  value,
  suffix = '',
}: {
  value: number
  suffix?: string
}) {
  const [count, setCount] = React.useState(0)
  const [hasAnimated, setHasAnimated] = React.useState(false)
  const ref = React.useRef<HTMLSpanElement>(null)

  React.useEffect(() => {
    if (!ref.current || hasAnimated) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const duration = 1800
          const startTime = performance.now()
          const step = (now: number) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(eased * value))
            if (progress < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.5 },
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value, hasAnimated])

  return (
    <span ref={ref}>
      {count.toLocaleString('pt-BR')}
      {suffix}
    </span>
  )
}
