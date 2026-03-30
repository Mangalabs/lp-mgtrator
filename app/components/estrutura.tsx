import { motion } from 'motion/react'

import { MapPin, Phone, Truck } from 'lucide-react'

import {
  C,
  COMPANY_INFO,
  ESTRUTURA_CARDS,
  ESTRUTURA_DISTRIBUICAO_STATS,
  ESTRUTURA_PARTS,
  ESTRUTURA_RESUME_STATS,
  FONT_HEADING,
} from '../landing-page/data'
import GreenCTA from './cta'
import BrazilMap from './mapa'

export default function EstruturaFisicaSection() {
  return (
    <section
      className='relative overflow-hidden'
      style={{ backgroundColor: C.bg }}>
      <div className='h-1' style={{ backgroundColor: C.accent }} />
      <div className='absolute inset-0 opacity-[0.03] pointer-events-none grid-estrutura' />
      <div className='container mx-auto px-4 py-16 md:py-24 relative z-10'>
        <div className='grid lg:grid-cols-12 lg:gap-30 items-start'>
          <div className='lg:col-span-6 order-2 lg:order-1'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className='inline-flex items-center gap-2 px-3 py-1.5 mb-5 rounded-sm'
              style={{ backgroundColor: C.yellow, color: C.yellowText }}>
              <MapPin className='w-5 h-5' />
              <span className='text-sm font-black uppercase tracking-widest'>
                Portas Abertas
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className='uppercase leading-[0.95] mb-4'
              style={{
                fontFamily: FONT_HEADING,
                fontWeight: 900,
                fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                color: C.textPrimary,
              }}>
              SUA PEÇA, COM QUEM TEM{' '}
              <span style={{ color: C.accent }}>ESTRUTURA DE VERDADE</span>
            </motion.h2>
            <motion.div
              className='h-1 mb-5'
              style={{ backgroundColor: C.accent }}
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
            />
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className='text-lg mb-8 max-w-md leading-relaxed'
              style={{ color: C.textMuted }}>
              Loja física e equipe técnica pronta pra te atender. Aqui você vê
              de onde sua peça sai — e fala com quem entende do assunto.
            </motion.p>
            <div className='space-y-3 mb-8'>
              {ESTRUTURA_CARDS.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * i + 0.3 }}
                  className='group relative border-l-4 p-4 rounded-sm transition-colors duration-200'
                  style={{
                    backgroundColor: C.bgAlt,
                    borderLeftColor: C.accent,
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = C.bgCardHover)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = C.bgAlt)
                  }>
                  <div
                    className='absolute top-3 right-3 text-[8px] font-mono uppercase tracking-widest'
                    style={{ color: C.textFaint }}>
                    {card.code}
                  </div>
                  <h4
                    className='uppercase tracking-wide mb-1 group-hover:!text-[#FFCD11] transition-colors duration-200'
                    style={{
                      fontFamily: FONT_HEADING,
                      fontWeight: 700,
                      fontSize: '1.2rem',
                      color: C.textPrimary,
                    }}>
                    {card.title}
                  </h4>
                  <p
                    className='text-sm leading-relaxed'
                    style={{ color: C.textBody }}>
                    {card.text}
                  </p>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}>
              <GreenCTA size='md'>
                <Phone className='w-5 h-5' />
                <span>FALAR COM ESPECIALISTA</span>
              </GreenCTA>
            </motion.div>
          </div>
          <div className='lg:col-span-6 order-1 lg:order-2'>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='space-y-4'>
              <div
                className='relative border-2 rounded-sm p-4 overflow-hidden'
                style={{ backgroundColor: C.bgAlt, borderColor: C.border }}>
                <div
                  className='flex items-center justify-between mb-3 pb-3'
                  style={{ borderBottom: `1px solid ${C.border}` }}>
                  <div className='flex items-center gap-2'>
                    <Truck className='w-4 h-4' style={{ color: C.accent }} />
                    <span
                      className='uppercase tracking-widest'
                      style={{
                        fontFamily: FONT_HEADING,
                        fontWeight: 700,
                        fontSize: '0.7rem',
                        color: C.accent,
                      }}>
                      REDE DE DISTRIBUIÇÃO
                    </span>
                  </div>
                  <div className='flex items-center gap-1.5'>
                    <div
                      className='w-2 h-2 rounded-sm live-dot'
                      style={{ backgroundColor: C.green }}
                    />
                    <span
                      className='text-[10px] font-mono font-bold'
                      style={{ color: C.green }}>
                      ATIVO
                    </span>
                  </div>
                </div>
                <div className='flex justify-center items-center'>
                  <BrazilMap />
                </div>
                <div
                  className='flex items-center justify-between mt-3 pt-3'
                  style={{ borderTop: `1px solid ${C.border}` }}>
                  <div className='flex items-center gap-2'>
                    <MapPin className='w-4 h-4' style={{ color: C.accent }} />
                    <div>
                      <p
                        className='text-xs font-bold'
                        style={{ color: C.textPrimary }}>
                        {COMPANY_INFO.addressLine}
                      </p>
                      <p
                        className='text-[10px] font-mono tracking-wider'
                        style={{ color: C.textFaint }}>
                        {COMPANY_INFO.cityState}
                      </p>
                    </div>
                  </div>
                  <div className='hidden sm:flex items-center gap-4'>
                    {ESTRUTURA_DISTRIBUICAO_STATS.map((s) => (
                      <div key={s.label} className='text-right'>
                        <div
                          className='text-sm font-black leading-none'
                          style={{ color: C.accent }}>
                          {s.value}
                        </div>
                        <div
                          className='text-[8px] uppercase tracking-wider font-bold mt-0.5'
                          style={{ color: C.textFaint }}>
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
                {ESTRUTURA_PARTS.map((part) => (
                  <div key={part.label} className='group relative'>
                    <div
                      className='relative h-[140px] md:h-[170px] rounded-sm overflow-hidden border-2 cursor-pointer hover:border-[#FFCD11]! transition-colors duration-200'
                      style={{
                        borderColor: C.border,
                        backgroundColor: C.machineCardBg,
                      }}>
                      <img
                        src={part.img}
                        alt={part.label}
                        className='absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-300'
                      />
                      <div
                        className='absolute inset-0'
                        style={{
                          background: `linear-gradient(to top, ${C.machineCardOverlay}, ${C.machineCardOverlay}99, transparent)`,
                        }}
                      />
                      <div className='absolute bottom-0 left-0 right-0 p-3 z-10'>
                        <span
                          className='text-white uppercase tracking-wide'
                          style={{
                            fontFamily: FONT_HEADING,
                            fontWeight: 700,
                            fontSize: '0.95rem',
                          }}>
                          {part.label}
                        </span>
                      </div>
                      <div
                        className='absolute bottom-0 left-0 right-0 h-0.75 opacity-0 group-hover:opacity-100 transition-opacity duration-200'
                        style={{ backgroundColor: C.accent }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className='border-2 rounded-sm p-3 flex items-center justify-around'
                style={{ backgroundColor: C.bgAlt, borderColor: C.border }}>
                {ESTRUTURA_RESUME_STATS.map((stat) => (
                  <div key={stat.label} className='text-center'>
                    <div
                      className='text-base font-black leading-none'
                      style={{ color: C.accent }}>
                      {stat.value}
                    </div>
                    <div
                      className='text-[10px] uppercase tracking-wider font-bold mt-1'
                      style={{ color: C.textFaint }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className='h-1' style={{ backgroundColor: C.accent }} />
    </section>
  )
}
