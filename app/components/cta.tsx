import {
  C,
  FONT_HEADING,
  WA_LINK,
} from '../landing-page/data'

export default function GreenCTA({
  children,
  className = '',
  size = 'md',
}: {
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg'
}) {
  const sizeClasses = {
    sm: 'py-2.5 px-6 text-sm gap-2',
    md: 'py-4 px-10 gap-3',
    lg: 'py-4 px-10 md:py-5 md:px-12 gap-3',
  }
  return (
    <a
      href={WA_LINK}
      target='_blank'
      rel='noopener noreferrer'
      className={`cta-shimmer inline-flex items-center justify-center text-white rounded-sm uppercase tracking-wider border-b-4 hover:translate-y-0.5 hover:border-b-2 transition-all duration-150 active:translate-y-0.75 active:border-b-0 ${sizeClasses[size]} ${className}`}
      style={{
        fontFamily: FONT_HEADING,
        fontWeight: 800,
        fontSize:
          size === 'lg'
            ? 'clamp(0.95rem, 1.8vw, 1.15rem)'
            : size === 'sm'
              ? '0.85rem'
              : '1rem',
        backgroundColor: C.green,
        borderBottomColor: C.greenDark,
        boxShadow: `0 8px 25px ${C.green}35`,
      }}>
      {children}
    </a>
  )
}