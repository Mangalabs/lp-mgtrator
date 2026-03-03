import React from 'react'
import { motion } from 'motion/react'

import GreenCTA from '../components/cta'
import AnimatedCounter from '../components/animatedCounter'
import EmblaCarousel from '../components/caroussel'
import FloatingWhatsApp from '../components/floatingWhatsap'
import StickyHeader from '../components/header'
import MachineCard from '../components/machineCards'
import ReviewCard from '../components/reviewCard'
import HighlightsSection from '../components/highlight'
import EstruturaFisicaSection from '~/components/estrutura'

import {
  C,
  COMPANY_INFO,
  FAQ_ITEMS,
  FONT_BODY,
  FONT_HEADING,
  HERO_BRANDS,
  HERO_FEATURES,
  HERO_STATS,
  ICONS,
  MACHINE_BREAKPOINTS,
  MACHINE_CARDS,
  POPULAR_PARTS,
  REVIEW_BREAKPOINTS,
  REVIEWS,
  WA_LINK,
} from './data'

const {
  Phone,
  MapPin,
  Clock,
  Truck,
  Star,
  Play,
  ChevronDown,
  HelpCircle,
  MessageCircle,
  Cog,
  Zap,
  CheckCircle2,
} = ICONS

export default function LandingPage() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null)

  return (
    <div
      className='min-h-screen flex flex-col relative'
      style={{ fontFamily: FONT_BODY, backgroundColor: C.bg }}>
      <FloatingWhatsApp />
      <div
        className='py-2 px-4'
        style={{ backgroundColor: C.accent, color: '#FFFFFF' }}>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-center gap-1 text-center md:text-left'>
          <div className='flex items-center gap-2'>
            <Phone className='w-3.5 h-3.5' />
            <span className='text-xs font-bold uppercase tracking-wide'>
              {COMPANY_INFO.phoneDisplay} · {COMPANY_INFO.topbarWorkingHours}
            </span>
          </div>
          <div className='hidden md:flex items-center gap-4'>
            <div className='flex items-center gap-2'>
              <MapPin className='w-3.5 h-3.5' />
              <span className='text-xs font-bold'>
                {COMPANY_INFO.addressLine} · {COMPANY_INFO.cityStateDisplay}
              </span>
            </div>
          </div>
        </div>
      </div>
      <StickyHeader />
      <section
        className='relative overflow-hidden py-14 md:py-20 lg:py-24'
        style={{ backgroundColor: C.blueBg }}>
        <div className='absolute inset-0 opacity-[0.04] pointer-events-none grid-hero' />
        <div
          className='absolute top-0 right-0 w-[400px] h-[600px] pointer-events-none opacity-10'
          style={{
            background: `linear-gradient(135deg, ${C.blueAccent} 0%, transparent 60%)`,
          }}
        />
        <div className='container mx-auto px-4 relative z-10'>
          <div className='grid lg:grid-cols-12 gap-8 lg:gap-6 items-center'>
            <div className='lg:col-span-7'>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className='flex items-center gap-3 mb-5'>
                <div
                  className='w-2.5 h-2.5 rounded-sm live-dot'
                  style={{ backgroundColor: C.green }}
                />
                <span
                  className='text-xs font-bold uppercase tracking-widest'
                  style={{ color: C.green }}>
                  Estoque disponível · Despacho imediato
                </span>
                <div
                  className='h-[2px] flex-1'
                  style={{ backgroundColor: C.blueBorder }}
                />
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='uppercase leading-[0.90] mb-5'
                style={{
                  fontFamily: FONT_HEADING,
                  fontWeight: 900,
                  fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
                  color: C.blueText,
                }}>
                SUA MÁQUINA
                <br />
                PARADA{' '}
                <span
                  className='relative inline-block urgency-pulse'
                  style={{ color: C.blueAccent }}>
                  CUSTA CARO.
                  <motion.span
                    className='absolute bottom-1 left-0 w-full h-[4px] rounded-sm origin-left'
                    style={{ backgroundColor: C.blueAccent, opacity: 0.45 }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 1.2, ease: 'easeOut' }}
                  />
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.45 }}
                className='text-lg mb-2 max-w-xl leading-relaxed'
                style={{ color: C.blueTextMuted }}>
                Peças{' '}
                <strong style={{ color: C.blueText }}>
                  Volvo e Caterpillar
                </strong>{' '}
                com certificação ISO. Despacho no mesmo dia, parcele em{' '}
                <strong style={{ color: C.blueAccent }}>
                  até 12x sem juros
                </strong>
                .
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.55 }}
                className='uppercase tracking-wider mb-7'
                style={{
                  fontFamily: FONT_HEADING,
                  fontWeight: 600,
                  fontSize: '1.2rem',
                  color: C.blueTextFaint,
                }}>
                Mineração · Construção · Terraplanagem
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                className='flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8'>
                <motion.div
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: 'easeInOut',
                  }}>
                  <GreenCTA size='lg'>
                    <Phone className='w-5 h-5 md:w-6 md:h-6' /> SOLICITAR
                    ORÇAMENTO GRÁTIS
                  </GreenCTA>
                </motion.div>
                <div className='flex flex-col gap-1.5'>
                  <div
                    className='flex items-center gap-2 text-sm'
                    style={{ color: C.blueTextMuted }}>
                    <Clock
                      className='w-4 h-4 flex-shrink-0'
                      style={{ color: C.blueAccent }}
                    />
                    <span>
                      Resposta em{' '}
                      <strong style={{ color: C.blueText }}>
                        menos de 5 min
                      </strong>
                    </span>
                  </div>
                  <div
                    className='flex items-center gap-2 text-sm'
                    style={{ color: C.blueTextMuted }}>
                    <CheckCircle2
                      className='w-4 h-4 flex-shrink-0'
                      style={{ color: C.green }}
                    />
                    <span>
                      Orçamento{' '}
                      <strong style={{ color: C.blueText }}>
                        sem compromisso
                      </strong>
                    </span>
                  </div>
                </div>
              </motion.div>
              <div
                className='flex flex-wrap items-center gap-x-6 gap-y-2 text-sm'
                style={{ color: C.blueTextMuted }}>
                {HERO_FEATURES.map((item, i) => (
                  <motion.div
                    key={item.text}
                    className='flex items-center gap-1.5'
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.9 + i * 0.12,
                      duration: 0.35,
                      type: 'spring',
                      stiffness: 200,
                    }}>
                    <motion.div
                      animate={{ rotate: [0, -8, 8, 0] }}
                      transition={{
                        delay: 2 + i * 0.3,
                        duration: 0.5,
                        repeat: Infinity,
                        repeatDelay: 8,
                      }}>
                      <item.icon
                        className='w-4 h-4'
                        style={{ color: C.blueAccent }}
                      />
                    </motion.div>
                    <span>{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className='lg:col-span-5'>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='relative'>
                <div
                  className='relative border-[3px] rounded-sm overflow-hidden'
                  style={{
                    borderColor: C.blueBorder,
                    backgroundColor: C.blueBgAlt,
                  }}>
                  {[
                    'top-[-5px] left-[-5px]',
                    'top-[-5px] right-[-5px]',
                    'bottom-[-5px] left-[-5px]',
                    'bottom-[-5px] right-[-5px]',
                  ].map((pos, i) => (
                    <div
                      key={i}
                      className={`absolute ${pos} w-3 h-3 border rounded-sm z-30`}
                      style={{
                        backgroundColor: C.blueBorder,
                        borderColor: C.blueTextFaint,
                      }}>
                      <div
                        className='absolute inset-[2px] rounded-sm'
                        style={{ backgroundColor: C.blueBgAlt }}
                      />
                    </div>
                  ))}
                  <div
                    className='relative aspect-[16/10] group'
                    style={{ backgroundColor: C.blueBgAlt }}>
                    <img
                      src='/fachada-saoluis.jpeg'
                      alt='Estrutura MG Tratorpeças'
                      className='size-full object-fit duration-500'
                    />
                    <div
                      className='absolute inset-0'
                      style={{
                        background: `linear-gradient(to top, ${C.blueBg}, ${C.blueBg}66, ${C.blueBg}4D)`,
                      }}
                    />
                    <div className='absolute top-4 left-4 z-20'>
                      <div
                        className='flex items-center gap-2 px-3 py-1.5 rounded-sm border'
                        style={{
                          backgroundColor: C.blueBgAlt,
                          borderColor: C.blueBorder,
                        }}>
                        <div
                          className='w-2 h-2 rounded-sm live-dot'
                          style={{ backgroundColor: C.green }}
                        />
                        <span
                          className='text-[10px] font-bold uppercase tracking-wider'
                          style={{ color: C.blueText }}>
                          Portas Abertas
                        </span>
                      </div>
                    </div>
                    <div className='absolute top-4 right-4 z-20'>
                      <div
                        className='px-3 py-1.5 rounded-sm border'
                        style={{
                          backgroundColor: C.blueBgAlt,
                          borderColor: C.blueBorder,
                        }}>
                        <span
                          className='text-[10px] font-mono'
                          style={{ color: C.blueTextMuted }}>
                          02:47
                        </span>
                      </div>
                    </div>
                    <div
                      className='absolute bottom-0 left-0 right-0 z-20 px-4 py-3'
                      style={{
                        backgroundColor: `${C.blueBg}E6`,
                        borderTop: `2px solid ${C.blueBorder}`,
                      }}>
                      <div className='flex items-center gap-3'>
                        <div
                          className='w-7 h-7 rounded-sm flex items-center justify-center'
                          style={{ backgroundColor: C.yellow }}>
                          <MapPin
                            className='w-3.5 h-3.5'
                            style={{ color: '#111' }}
                          />
                        </div>
                        <div>
                          <p
                            className='text-xs font-bold'
                            style={{ color: C.blueText }}>
                            Av. Guajajaras, Tirirical
                          </p>
                          <p
                            className='text-[9px] font-mono tracking-wider'
                            style={{ color: C.blueTextFaint }}>
                            SÃO LUÍS - MA
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className='absolute bottom-0 left-0 right-0 h-[4px] z-30'
                      style={{ backgroundColor: C.blueBorder }}>
                      <motion.div
                        className='h-full'
                        style={{ backgroundColor: C.yellow }}
                        initial={{ width: '0%' }}
                        animate={{ width: '35%' }}
                        transition={{
                          duration: 2,
                          delay: 1.5,
                          ease: 'easeOut',
                        }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className='container mx-auto px-4 relative z-10 mt-10'>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className='grid grid-cols-2 md:grid-cols-4 gap-px rounded-sm overflow-hidden border-2'
            style={{
              borderColor: C.blueBorder,
              backgroundColor: C.blueBorder,
            }}>
            {HERO_STATS.map((stat) => (
              <div
                key={stat.label}
                className='flex items-center gap-3 p-4 md:p-5'
                style={{ backgroundColor: C.blueBgAlt }}>
                <stat.icon
                  className='w-5 h-5 flex-shrink-0'
                  style={{ color: C.blueAccent }}
                />
                <div>
                  <div
                    className='font-black leading-none'
                    style={{
                      fontFamily: FONT_HEADING,
                      fontWeight: 900,
                      fontSize: '1.5rem',
                      color: C.blueAccent,
                    }}>
                    {stat.isDecimal ? (
                      <span>
                        {stat.numValue}
                        {stat.suffix}
                      </span>
                    ) : (
                      <AnimatedCounter
                        value={stat.numValue}
                        suffix={stat.suffix}
                      />
                    )}
                  </div>
                  <div
                    className='text-xs uppercase tracking-wider font-bold mt-1'
                    style={{ color: C.blueTextFaint }}>
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        <div
          className='absolute bottom-0 left-0 right-0 h-1'
          style={{ backgroundColor: C.yellow }}
        />
      </section>
      <div
        className='relative py-5 overflow-hidden'
        style={{
          backgroundColor: C.bg,
          borderBottom: `2px solid ${C.border}`,
        }}>
        <div className='container mx-auto px-4 relative z-10'>
          <div className='flex flex-wrap justify-center items-center gap-4 md:gap-10'>
            <span
              className='uppercase tracking-[0.2em]'
              style={{
                fontFamily: FONT_HEADING,
                fontWeight: 600,
                fontSize: '0.75rem',
                color: C.textFaint,
              }}>
              Especialistas em:
            </span>
            {HERO_BRANDS.map((brand) => (
              <span
                key={brand}
                className='tracking-tighter'
                style={{
                  fontFamily: FONT_HEADING,
                  fontWeight: 900,
                  fontSize: '1.8rem',
                  color: C.textSecondary,
                }}>
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
      <HighlightsSection />
      <section
        id='maquinas'
        className='py-20 relative overflow-hidden'
        style={{
          backgroundColor: C.bgAlt,
          borderTop: `2px solid ${C.border}`,
        }}>
        <div className='absolute inset-0'>
          <img
            src='https://images.unsplash.com/photo-1720036236697-018370867320?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWF2eSUyMG1hY2hpbmVyeSUyMHdhcmVob3VzZSUyMGluZHVzdHJpYWwlMjBkYXJrfGVufDF8fHx8MTc3MjMwOTMyOXww&ixlib=rb-4.1.0&q=80&w=1080'
            alt=''
            className='w-full h-full object-cover opacity-[0.03]'
          />
        </div>
        <div className='container mx-auto px-4 relative z-10'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='flex flex-col items-start mb-10 gap-4'>
            <div
              className='inline-flex items-center gap-2 px-3 py-1.5 rounded-sm'
              style={{ backgroundColor: C.yellow, color: C.yellowText }}>
              <Cog className='w-4 h-4' />
              <span className='text-xs font-black uppercase tracking-widest'>
                Catálogo Digital
              </span>
            </div>
            <div className='flex flex-col gap-4 max-w-4xl'>
              <h2
                className='uppercase leading-[0.9] tracking-tight'
                style={{
                  fontFamily: FONT_HEADING,
                  fontWeight: 900,
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  color: C.textPrimary,
                }}>
                QUAL A SUA <span style={{ color: C.accent }}>MÁQUINA?</span>
              </h2>
              <motion.div
                className='h-1.5 origin-left'
                style={{ backgroundColor: C.accent }}
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              />
              <p
                className='text-lg md:text-xl leading-relaxed max-w-2xl'
                style={{ color: C.textMuted }}>
                Selecione o equipamento e receba um orçamento personalizado em
                minutos.{' '}
                <strong style={{ color: C.textPrimary }}>
                  Atendemos todas as linhas da linha amarela
                </strong>{' '}
                com peças originais e paralelas de primeira linha.
              </p>
            </div>
          </motion.div>
          <div className='mb-14 -mx-4'>
            <EmblaCarousel
              slidesToShow={3}
              autoplayDelay={2000}
              showArrows
              loop
              speed={600}
              responsive={MACHINE_BREAKPOINTS}>
              {MACHINE_CARDS.map((machine) => (
                <MachineCard
                  key={machine.code}
                  title={machine.title}
                  code={machine.code}
                  image={machine.image}
                />
              ))}
            </EmblaCarousel>
          </div>
          <div id='pecas' className='mb-14'>
            <div className='flex items-center gap-4 mb-8'>
              <div
                className='h-[2px] flex-1'
                style={{ backgroundColor: C.border }}
              />
              <div
                className='inline-flex items-center gap-2 px-4 py-2 border-2 rounded-sm'
                style={{ backgroundColor: C.bgAlt, borderColor: C.border }}>
                <Cog className='w-4 h-4' style={{ color: C.accent }} />
                <span
                  className='uppercase tracking-widest'
                  style={{
                    fontFamily: FONT_HEADING,
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    color: C.accent,
                  }}>
                  Peças mais procuradas
                </span>
              </div>
              <div
                className='h-[2px] flex-1'
                style={{ backgroundColor: C.border }}
              />
            </div>
            <div className='max-w-3xl mx-auto'>
              <EmblaCarousel
                slidesToShow={3}
                autoplayDelay={2800}
                loop
                speed={600}
                centerMode
                responsive={[{ breakpoint: 768, slidesToShow: 1 }]}>
                {POPULAR_PARTS.map((cat) => (
                  <div key={cat.title} className='px-3'>
                    <div
                      className='relative h-[220px] border-2 rounded-sm overflow-hidden flex flex-col items-center justify-end pb-6'
                      style={{
                        backgroundColor: C.bgAlt,
                        borderColor: C.border,
                      }}>
                      <div className='absolute top-5 left-1/2 -translate-x-1/2 w-[100px] h-[100px] z-10 pointer-events-none'>
                        <img
                          src={cat.img}
                          alt={cat.title}
                          className='w-full h-full object-cover rounded-sm border'
                          style={{ borderColor: C.borderLight }}
                        />
                      </div>
                      <div className='relative z-10 text-center mt-auto px-3'>
                        <div className='flex items-center justify-center gap-1.5 mb-1'>
                          <h4
                            className='uppercase tracking-wide'
                            style={{
                              fontFamily: FONT_HEADING,
                              fontWeight: 700,
                              fontSize: '0.9rem',
                              color: C.textPrimary,
                            }}>
                            {cat.title}
                          </h4>
                        </div>
                        <p
                          className='text-xs font-mono tracking-wider'
                          style={{ color: C.textFaint }}>
                          {cat.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </EmblaCarousel>
            </div>
          </div>
          <div className='flex justify-center'>
            <GreenCTA size='md'>
              <Phone className='w-5 h-5' /> NÃO ENCONTROU? CONSULTE AQUI
            </GreenCTA>
          </div>
        </div>
      </section>
      <div id='estrutura'>
        <EstruturaFisicaSection />
      </div>
      <section
        id='avaliacoes'
        className='relative py-20 overflow-hidden'
        style={{
          backgroundColor: C.blueBg,
          borderTop: `2px solid ${C.blueBorder}`,
        }}>
        <div className='absolute inset-0'>
          <img
            src='https://images.unsplash.com/photo-1711267250139-a91ab3db9772?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwYWVyaWFsJTIwdmlldyUyMG1hY2hpbmVyeXxlbnwxfHx8fDE3NzIzMDkzMzB8MA&ixlib=rb-4.1.0&q=80&w=1080'
            alt=''
            className='w-full h-full object-cover opacity-[0.04]'
          />
        </div>
        <div className='container mx-auto px-4 relative z-10'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='text-center mb-12'>
            <h2
              className='uppercase mb-3'
              style={{
                fontFamily: FONT_HEADING,
                fontWeight: 900,
                fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
                color: C.blueText,
              }}>
              QUEM COMPRA,{' '}
              <span style={{ color: C.blueAccent }}>RECOMENDA.</span>
            </h2>
            <div className='flex items-center justify-center gap-3 mb-2'>
              <span
                className='uppercase'
                style={{
                  fontFamily: FONT_HEADING,
                  fontWeight: 900,
                  fontSize: '1.5rem',
                  color: C.blueAccent,
                }}>
                EXCELENTE
              </span>
              <div className='flex gap-0.5'>
                {[1, 2, 3, 4, 5].map((i) => (
                  <motion.span
                    key={i}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.3 + i * 0.1,
                      type: 'spring',
                      stiffness: 400,
                      damping: 12,
                    }}>
                    <Star
                      className='w-5 h-5 fill-current'
                      style={{ color: C.starColor }}
                    />
                  </motion.span>
                ))}
              </div>
            </div>
            <p className='text-base' style={{ color: C.blueTextMuted }}>
              4.9/5.0 com base em 114 avaliações no Google
            </p>
          </motion.div>
          <div className='px-4'>
            <EmblaCarousel
              slidesToShow={3}
              autoplayDelay={4000}
              showDots
              loop
              speed={500}
              responsive={REVIEW_BREAKPOINTS}>
              {REVIEWS.map((review) => (
                <ReviewCard
                  key={review.name}
                  name={review.name}
                  time={review.time}
                  text={review.text}
                />
              ))}
            </EmblaCarousel>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className='text-center mt-10'>
            <GreenCTA size='md'>
              <Phone className='w-5 h-5' /> QUERO A MESMA EXPERIÊNCIA
            </GreenCTA>
          </motion.div>
        </div>
      </section>
      <div
        className='relative py-16 overflow-hidden'
        style={{ backgroundColor: C.blueBgAlt }}>
        <div className='absolute inset-0 overflow-hidden pointer-events-none'>
          <motion.div
            className='flex whitespace-nowrap'
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}>
            {[...Array(6)].map((_, i) => (
              <span
                key={i}
                className='uppercase tracking-[0.3em] mx-8'
                style={{
                  fontFamily: FONT_HEADING,
                  fontWeight: 900,
                  fontSize: 'clamp(3rem, 8vw, 6rem)',
                  color: 'rgba(255,255,255,0.04)',
                }}>
                MG TRATORPEÇAS · PEÇAS PARA MÁQUINAS PESADAS ·{' '}
              </span>
            ))}
          </motion.div>
        </div>
        <div className='absolute inset-0 flex items-center justify-center z-10'>
          <div
            className='border-2 px-8 py-4 rounded-sm flex items-center gap-3'
            style={{ backgroundColor: C.blueBgAlt, borderColor: C.blueAccent }}>
            <Zap className='w-6 h-6' style={{ color: C.blueAccent }} />
            <span
              className='uppercase'
              style={{
                fontFamily: FONT_HEADING,
                fontWeight: 900,
                fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
                color: C.blueText,
              }}>
              + DE <span style={{ color: C.blueAccent }}>5.000</span> PEÇAS EM
              ESTOQUE
            </span>
          </div>
        </div>
        <div className='absolute top-0 left-0 right-0 h-2 z-20 hazard-stripe' />
        <div className='absolute bottom-0 left-0 right-0 h-2 z-20 hazard-stripe' />
      </div>
      <section
        id='faq'
        className='py-20 relative overflow-hidden'
        style={{ backgroundColor: C.bg, borderTop: `2px solid ${C.border}` }}>
        <div className='absolute inset-0 opacity-[0.02] pointer-events-none grid-light' />
        <div className='container mx-auto px-4 relative z-10 max-w-4xl'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='text-center mb-12'>
            <div
              className='inline-flex items-center gap-2 px-4 py-2 mb-5 rounded-sm'
              style={{ backgroundColor: C.yellow, color: C.yellowText }}>
              <HelpCircle className='w-4 h-4' />
              <span className='text-xs font-black uppercase tracking-widest'>
                Tire suas Dúvidas
              </span>
            </div>
            <h2
              className='uppercase mb-4'
              style={{
                fontFamily: FONT_HEADING,
                fontWeight: 900,
                fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                color: C.textPrimary,
              }}>
              PERGUNTAS <span style={{ color: C.accent }}>FREQUENTES</span>
            </h2>
            <motion.div
              className='h-1 mx-auto mb-4'
              style={{ backgroundColor: C.accent }}
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            />
            <p
              className='max-w-2xl mx-auto text-base'
              style={{ color: C.textMuted }}>
              Reunimos as principais dúvidas dos nossos clientes. Se não
              encontrar a sua, fale direto com a equipe pelo WhatsApp.
            </p>
          </motion.div>
          <div className='space-y-2 mb-14'>
            {FAQ_ITEMS.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}>
                <div
                  className='rounded-sm border-2 transition-colors duration-200 overflow-hidden'
                  style={{
                    backgroundColor: openFaq === index ? C.bgCard : C.bgAlt,
                    borderColor: openFaq === index ? C.accent : C.border,
                  }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className='w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer group'>
                    <div className='flex items-center gap-4'>
                      <div
                        className='flex-shrink-0 w-8 h-8 rounded-sm flex items-center justify-center text-xs font-black font-mono transition-colors duration-200'
                        style={{
                          backgroundColor:
                            openFaq === index ? C.accent : C.border,
                          color: openFaq === index ? '#FFFFFF' : C.textBody,
                          border:
                            openFaq !== index
                              ? `1px solid ${C.borderLight}`
                              : 'none',
                        }}>
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <span
                        className='font-bold transition-colors duration-200'
                        style={{
                          color: openFaq === index ? C.accent : C.textPrimary,
                        }}>
                        {item.question}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: openFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className='flex-shrink-0'>
                      <ChevronDown
                        className='w-5 h-5'
                        style={{
                          color: openFaq === index ? C.accent : C.textFaint,
                        }}
                      />
                    </motion.div>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openFaq === index ? 'auto' : 0,
                      opacity: openFaq === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                    className='overflow-hidden'>
                    <div className='px-5 pb-5 pl-[4.25rem]'>
                      <div
                        className='h-[2px] mb-4'
                        style={{ backgroundColor: C.border }}
                      />
                      <p
                        className='leading-relaxed text-base'
                        style={{ color: C.textMuted }}>
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className='text-center'>
            <div
              className='border-2 rounded-sm p-8 md:p-10 relative overflow-hidden'
              style={{ backgroundColor: C.accent, borderColor: C.accentDark }}>
              <div className='absolute top-0 left-0 w-12 h-12 border-t-[3px] border-l-[3px] border-white/20' />
              <div className='absolute bottom-0 right-0 w-12 h-12 border-b-[3px] border-r-[3px] border-white/20' />
              <MessageCircle className='w-10 h-10 mx-auto mb-4 text-white' />
              <h3
                className='uppercase mb-3 text-white'
                style={{
                  fontFamily: FONT_HEADING,
                  fontWeight: 900,
                  fontSize: '1.5rem',
                }}>
                AINDA TEM DÚVIDAS? FALE COM A GENTE!
              </h3>
              <p className='text-base mb-6 max-w-md mx-auto text-white/80'>
                Nossa equipe técnica está pronta para te ajudar. Resposta rápida
                e orçamento sem compromisso.
              </p>
              <GreenCTA size='md'>
                <Phone className='w-5 h-5' /> TIRAR DÚVIDA NO WHATSAPP
              </GreenCTA>
            </div>
          </motion.div>
        </div>
      </section>
      <footer
        className='relative py-12 overflow-hidden'
        style={{
          backgroundColor: C.blueBg,
          color: C.blueTextMuted,
          borderTop: `2px solid ${C.blueBorder}`,
        }}>
        <div className='absolute inset-0'>
          <img
            src='https://images.unsplash.com/photo-1571414793707-820e48aea639?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWxsZG96ZXIlMjB0cmFjayUyMGNsb3NlJTIwdXAlMjBkZXRhaWx8ZW58MXx8fHwxNzcyMzA5MzM2fDA&ixlib=rb-4.1.0&q=80&w=1080'
            alt=''
            className='w-full h-full object-cover opacity-[0.03]'
          />
          <div
            className='absolute inset-0'
            style={{ backgroundColor: `${C.blueBg}F2` }}
          />
        </div>
        <div className='container mx-auto px-4 grid md:grid-cols-3 gap-8 text-center md:text-left relative z-10'>
          <div>
            <div className='mb-4 flex items-center justify-center md:justify-start gap-2'>
              <a href='#'>
                <img
                  src='/logo.png'
                  alt='MG Trator Peças'
                  className='h-25 w-55 m-2'
                />
              </a>
            </div>
            <p className='text-base' style={{ color: C.blueTextMuted }}>
              Especialistas em peças para máquinas pesadas. Qualidade, agilidade
              e confiança para todo o Brasil.
            </p>
          </div>
          <div>
            <h3
              className='uppercase tracking-wider mb-4'
              style={{
                fontFamily: FONT_HEADING,
                fontWeight: 700,
                fontSize: '1rem',
                color: C.blueText,
              }}>
              CONTATO
            </h3>
            <ul className='space-y-2 text-base'>
              <li className='flex items-center justify-center md:justify-start gap-2'>
                <Phone className='w-4 h-4' style={{ color: C.blueAccent }} />
                <span>{COMPANY_INFO.phone}</span>
              </li>
              <li className='flex items-center justify-center md:justify-start gap-2'>
                <Clock className='w-4 h-4' style={{ color: C.blueAccent }} />
                <span>{COMPANY_INFO.workingHours}</span>
              </li>
            </ul>
          </div>
          <div>
            <h3
              className='uppercase tracking-wider mb-4'
              style={{
                fontFamily: FONT_HEADING,
                fontWeight: 700,
                fontSize: '1rem',
                color: C.blueText,
              }}>
              LOCALIZAÇÃO
            </h3>
            <div className='flex items-start justify-center md:justify-start gap-2 text-base'>
              <MapPin
                className='w-4 h-4 mt-1 flex-shrink-0'
                style={{ color: C.blueAccent }}
              />
              <span>
                {COMPANY_INFO.addressLine}
                <br />
                {COMPANY_INFO.cityStateDisplay}
              </span>
            </div>
            <a
              href={WA_LINK}
              target='_blank'
              rel='noopener noreferrer'
              className='mt-4 inline-flex items-center gap-2 text-xs font-black uppercase px-5 py-2.5 rounded-sm border-b-[3px] hover:translate-y-[1px] hover:border-b-[2px] transition-all duration-150 text-white'
              style={{
                fontFamily: FONT_HEADING,
                fontWeight: 800,
                backgroundColor: C.green,
                borderBottomColor: C.greenDark,
              }}>
              <Phone className='w-3.5 h-3.5' /> COMO CHEGAR
            </a>
          </div>
        </div>
        <div
          className='container mx-auto mt-12 pt-4 text-center text-sm relative z-10'
          style={{
            borderTop: `1px solid ${C.blueBorder}`,
            color: C.blueTextFaint,
          }}>
          <div className='text-xs text-(--neutral-500) text-center font-medium'>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. Todos os direitos
            reservados.
            <span className='bold ml-1'>
              Desenvolvido com{' '}
              <img
                src='/icon-copyright.png'
                alt='amor'
                className='h-4 w-4 inline mx-1 size-16'
              />{' '}
              pela equipe{' '}
              <b>
                <a
                  href='https://www.mangalab.io'
                  target='_blank'
                  className='text-amber-300 hover:text-green-700 underline'>
                  MangaLab
                </a>
              </b>
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}
