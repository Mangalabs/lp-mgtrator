import React from 'react'
import { Menu, Phone, X } from 'lucide-react'

import { C, FONT_HEADING, NAV_ITEMS, WA_LINK } from '../landing-page/data'

export default function StickyHeader() {
  const [scrolled, setScrolled] = React.useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className='sticky top-0 z-50 transition-shadow duration-300'
      style={{
        backgroundColor: C.headerBg,
        borderBottom: `2px solid ${scrolled ? C.headerBorder : 'transparent'}`,
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
      }}>
      <div className='container mx-auto px-4 flex items-center justify-between'>
        <a href='#'>
          <img
            src='/logo.webp'
            alt='MG Trator Peças'
            className='h-22 w-50 m-2'
            style={{
              filter:
                'brightness(0) saturate(100%) invert(15%) sepia(58%) saturate(2786%) hue-rotate(210deg)',
            }}
          />
        </a>
        <nav className='hidden lg:flex items-center gap-6'>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className='uppercase tracking-wider transition-colors duration-200 hover:opacity-80'
              style={{
                fontFamily: FONT_HEADING,
                fontWeight: 700,
                fontSize: '1.2rem',
                color: C.headerText,
              }}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className='hidden lg:flex items-center'>
          <a
            href={WA_LINK}
            target='_blank'
            rel='noopener noreferrer'
            className='cta-shimmer inline-flex items-center gap-2 text-white py-2.5 px-6 rounded-sm border-b-[3px] hover:translate-y-px hover:border-b-2 transition-all duration-150 active:translate-y-0.5 active:border-b-0'
            style={{
              fontFamily: FONT_HEADING,
              fontWeight: 800,
              fontSize: '0.9rem',
              backgroundColor: C.green,
              borderBottomColor: C.greenDark,
              boxShadow: `0 4px 15px ${C.green}30`,
            }}>
            <Phone className='w-4 h-4' />
            <span className='uppercase tracking-wider'>ORÇAMENTO GRÁTIS</span>
          </a>
        </div>
        <button
          className='lg:hidden p-2'
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ color: C.headerText }}>
          {mobileOpen ? (
            <X className='w-6 h-6' />
          ) : (
            <Menu className='w-6 h-6' />
          )}
        </button>
      </div>
      {mobileOpen && (
        <div
          className='lg:hidden border-t-2 py-4 px-4'
          style={{ borderColor: C.headerBorder, backgroundColor: C.headerBg }}>
          <div className='flex flex-col gap-3'>
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className='uppercase tracking-wider py-2'
                style={{
                  fontFamily: FONT_HEADING,
                  fontWeight: 700,
                  fontSize: '1rem',
                  color: C.headerText,
                }}
                onClick={() => setMobileOpen(false)}>
                {item.label}
              </a>
            ))}
            <div
              className='pt-3 mt-2'
              style={{ borderTop: `1px solid ${C.headerBorder}` }}>
              <a
                href={WA_LINK}
                target='_blank'
                rel='noopener noreferrer'
                className='w-full inline-flex items-center justify-center gap-2 text-white py-2.5 px-4 rounded-sm border-b-[3px]'
                style={{
                  fontFamily: FONT_HEADING,
                  fontWeight: 800,
                  fontSize: '1rem',
                  backgroundColor: C.green,
                  borderBottomColor: C.greenDark,
                }}>
                <Phone className='w-4 h-4' />
                <span className='uppercase tracking-wider'>
                  ORÇAMENTO GRÁTIS
                </span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
