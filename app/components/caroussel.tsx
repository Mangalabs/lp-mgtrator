import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { C } from '../landing-page/data'

type EmblaBreakpoint = { breakpoint: number; slidesToShow: number }

export default function EmblaCarousel({
  children,
  slidesToShow = 3,
  autoplayDelay = 4000,
  showDots = false,
  showArrows = false,
  loop = true,
  speed = 600,
  centerMode = false,
  responsive = [] as EmblaBreakpoint[],
}: {
  children: React.ReactNode
  slidesToShow?: number
  autoplayDelay?: number
  showDots?: boolean
  showArrows?: boolean
  loop?: boolean
  speed?: number
  centerMode?: boolean
  responsive?: EmblaBreakpoint[]
}) {
  const [currentSlides, setCurrentSlides] = React.useState(slidesToShow)

  React.useEffect(() => {
    const update = () => {
      const w = window.innerWidth
      const sorted = [...responsive].sort((a, b) => a.breakpoint - b.breakpoint)
      let result = slidesToShow
      for (const bp of sorted) {
        if (w < bp.breakpoint) {
          result = bp.slidesToShow
          break
        }
      }
      setCurrentSlides(result)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [slidesToShow, responsive])

  // key={currentSlides} force-remonta o Embla quando o nº de slides muda,
  // evitando o bug de posição/loop corrompido ao fazer reInit.
  return (
    <EmblaInner
      key={currentSlides}
      currentSlides={currentSlides}
      loop={loop}
      speed={speed}
      autoplayDelay={autoplayDelay}
      showDots={showDots}
      showArrows={showArrows}>
      {children}
    </EmblaInner>
  )
}

function EmblaInner({
  children,
  currentSlides,
  loop,
  speed,
  autoplayDelay,
  showDots,
  showArrows,
}: {
  children: React.ReactNode
  currentSlides: number
  loop: boolean
  speed: number
  autoplayDelay: number
  showDots: boolean
  showArrows: boolean
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop,
      align: 'start',
      slidesToScroll: 1,
      duration: speed / 25,
      containScroll: loop ? false : 'trimSnaps',
    },
    [
      Autoplay({
        delay: autoplayDelay,
        stopOnInteraction: true,
        stopOnMouseEnter: true,
      }),
    ],
  )

  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([])

  React.useEffect(() => {
    if (!emblaApi) return
    setScrollSnaps(emblaApi.scrollSnapList())
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on('select', onSelect)
    onSelect()
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  const slides = React.Children.toArray(children)

  return (
    <div className='relative'>
      <div ref={emblaRef} className='overflow-hidden'>
        <div className='flex' style={{ gap: 0 }}>
          {slides.map((child, index) => (
            <div
              key={index}
              className='min-w-0 flex-shrink-0'
              style={{
                flex: `0 0 ${100 / currentSlides}%`,
              }}>
              {child}
            </div>
          ))}
        </div>
      </div>
      {showArrows && emblaApi && (
        <>
          <div
            className='absolute left-0 top-1/2 -translate-y-1/2 z-20 hidden sm:flex cursor-pointer'
            style={{ marginLeft: '-6px' }}
            onClick={() => emblaApi.scrollPrev()}>
            <div
              className='w-12 h-12 border-2 rounded-sm flex items-center justify-center transition-colors hover:scale-105'
              style={{ backgroundColor: C.bgCard, borderColor: C.borderLight }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = C.accent
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = C.borderLight
              }}>
              <ChevronLeft className='w-6 h-6' style={{ color: C.textBody }} />
            </div>
          </div>
          <div
            className='absolute right-0 top-1/2 -translate-y-1/2 z-20 hidden sm:flex cursor-pointer'
            style={{ marginRight: '-6px' }}
            onClick={() => emblaApi.scrollNext()}>
            <div
              className='w-12 h-12 border-2 rounded-sm flex items-center justify-center transition-colors hover:scale-105'
              style={{ backgroundColor: C.bgCard, borderColor: C.borderLight }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = C.accent
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = C.borderLight
              }}>
              <ChevronRight className='w-6 h-6' style={{ color: C.textBody }} />
            </div>
          </div>
        </>
      )}
      {showDots && scrollSnaps.length > 1 && (
        <div className='flex justify-center gap-2 mt-6'>
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className='w-3 h-3 rounded-full transition-all duration-300'
              style={{
                backgroundColor: i === selectedIndex ? C.accent : C.borderLight,
                transform: i === selectedIndex ? 'scale(1.2)' : 'scale(1)',
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}
