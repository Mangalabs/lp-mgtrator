import { motion } from 'motion/react'

import {
  C,
  FONT_HEADING,
  HIGHLIGHT_FEATURES,
} from '../landing-page/data'

export default function HighlightsSection() {
  return (
    <section
      className='relative overflow-hidden'
      style={{ backgroundColor: C.highlightBg }}>
      <div className='h-2 w-full hazard-stripe' />
      <div className='container mx-auto px-4 py-8 relative z-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {HIGHLIGHT_FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              className='flex items-center gap-4 p-5 rounded-sm border-l-4 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-default'
              style={{
                backgroundColor: C.highlightCardBg,
                borderLeftColor: C.highlightIconBg,
              }}>
              <div
                className='flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-sm'
                style={{
                  backgroundColor: C.highlightIconBg,
                  color: C.highlightIconColor,
                }}>
                {feature.icon}
              </div>
              <div>
                <h3
                  className='uppercase tracking-wide'
                  style={{
                    fontFamily: FONT_HEADING,
                    fontWeight: 800,
                    fontSize: '1.25rem',
                    color: C.highlightCardText,
                  }}>
                  {feature.title}
                </h3>
                <p className='text-base' style={{ color: C.highlightDescText }}>
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className='h-2 w-full hazard-stripe' />
    </section>
  )
}