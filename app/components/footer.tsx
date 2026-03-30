import {
  Award,
  Clock,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Shield,
} from 'lucide-react'
import { COMPANY_INFO } from '../landing-page/data'
export default function Footer() {
  return (
    <footer
      className='bg-linear-to-b from-[#0c162d] to-[#0f1419] text-white p-4'
      role='contentinfo'>
      <div className='border-b border-(--neutral-800)'>
        <div className='max-w-9/10 mx-auto sm:py-2'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8'>
            <div className='flex flex-col items-center text-center gap-2 group'>
              <div className='w-12 h-12 sm:w-14 sm:h-14 bg-linear-to-br from-(--primary) to-(--primary)/50 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300'>
                <Shield
                  className='w-6 h-6 text-(--secondary)'
                  aria-hidden='true'
                />
              </div>
              <div>
                <div className='text-[10px] sm:text-xs text-(--neutral-400) uppercase tracking-wider mb-0.5'>
                  Peças Originais
                </div>
              </div>
            </div>

            <div className='flex flex-col items-center text-center gap-2 group'>
              <div className='w-12 h-12 sm:w-14 sm:h-14 bg-linear-to-br from-(--primary) to-(--primary)/50 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300'>
                <Award
                  className='w-6 h-6 text-(--secondary)'
                  aria-hidden='true'
                />
              </div>
            </div>

            <div className='flex flex-col items-center text-center gap-2 group'>
              <div className='w-12 h-12 sm:w-14 sm:h-14 bg-linear-to-br from-(--primary) to-(--primary)/50 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300'>
                <Clock
                  className='w-6 h-6 text-(--secondary)'
                  aria-hidden='true'
                />
              </div>
              <div>
                <div className='text-[10px] sm:text-xs text-(--neutral-400) uppercase tracking-wider mb-0.5'>
                  Experiência
                </div>
                <div className='text-xs sm:text-sm font-bold text-white'>
                  10+ Anos
                </div>
              </div>
            </div>

            <div className='flex flex-col items-center text-center gap-2 group'>
              <div className='w-12 h-12 sm:w-14 sm:h-14 bg-linear-to-br from-(--primary) to-(--primary)/50 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300'>
                <svg
                  className='w-6 h-6 text-(--secondary)'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'>
                  <path d='M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z' />
                  <path d='M13 7h-2v5H7v2h4v2l3-3-3-3v2h2z' />
                </svg>
              </div>
              <div>
                <div className='text-[10px] sm:text-xs text-[var(--neutral-400)] uppercase tracking-wider mb-0.5'>
                  Especialista
                </div>
                <div className='text-xs sm:text-sm font-bold text-white'>
                  Volvo
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='max-w-9/10 mx-auto py-10 sm:py-4 lg:py-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8'>
          <div className='sm:col-span-2 lg:col-span-3 flex flex-col items-center sm:items-start text-center sm:text-left'>
            <div className='mb-1'>
              <img
                src='/logo.webp'
                alt='Mg Tratorpeças - Peças para maquinas pesadas e Máquinas Pesadas'
                className='object-contain'
                width={220}
                height={100}
              />
            </div>

            <p className='text-(--neutral-300) text-sm mb-2 leading-relaxed max-w-sm'>
              Especialistas em{' '}
              <strong className='text-white'>
                peças originais para máquinas pesadas
              </strong>
              .
            </p>

            <div className='bg-[var(--neutral-800)]/30 rounded-2xl p-2 w-full text-start'>
              <div className='text-sm text-[var(--neutral-300)] space-y-2'>
                <p>
                  <span className='text-[var(--secondary)] font-semibold block sm:inline'>
                    Peças para:
                  </span>{' '}
                  Escavadeiras, Carregadeiras e mais.
                </p>
                <p>
                  <span className='text-[var(--secondary)] font-semibold block sm:inline'>
                    Marcas:
                  </span>{' '}
                  Caterpillar, Volvo e mais.
                </p>
              </div>
            </div>
          </div>

          <div className='col-span-1 lg:col-span-4'>
            <h4 className='text-white font-bold text-lg mb-5 flex items-center gap-3'>
              <div className='w-1.5 h-5 bg-[var(--secondary)] rounded-full'></div>
              Contato
            </h4>

            <div className='space-y-4 mb-6'>
              <div className='flex items-start gap-3 group'>
                <div className='w-12 h-12 bg-[var(--primary)]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--primary)]/20 transition-colors'>
                  <Phone
                    className='w-7 h-7 text-[var(--secondary)]'
                    aria-hidden='true'
                  />
                </div>
                <div className='flex-1 pt-0.5'>
                  <div className='text-md text-[var(--neutral-400)] mb-1 tracking-wide uppercase'>
                    WhatsApp
                  </div>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.phone.replace(/\D/g, '')}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-sm sm:text-base text-white hover:text-[var(--secondary)] transition-colors font-semibold'
                    aria-label='Enviar mensagem via WhatsApp'>
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              <div className='flex items-start gap-3 group'>
                <div className='w-12 h-12 bg-[var(--primary)]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--primary)]/20 transition-colors'>
                  <Mail
                    className='w-7 h-7 text-[var(--secondary)]'
                    aria-hidden='true'
                  />
                </div>
                <div className='flex-1 pt-0.5'>
                  <div className='text-md text-[var(--neutral-400)] mb-1 tracking-wide uppercase'>
                    E-mail
                  </div>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className='text-sm sm:text-base text-white hover:text-[var(--secondary)] transition-colors font-semibold break-all'
                    aria-label={`Enviar e-mail para ${COMPANY_INFO.email}`}>
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            <div className='flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-6'>
              <a
                href={`https://wa.me/${COMPANY_INFO.phone.replace(/\D/g, '')}`}
                target='_blank'
                rel='noopener noreferrer'
                className='flex-1 inline-flex justify-center items-center gap-2 bg-gradient-to-r from-[#25D366] to-[#20BD5A] hover:from-[#20BD5A] hover:to-[#1DA851] text-white  py-2 rounded-xl font-bold text-md transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]'
                aria-label='Solicitar orçamento via WhatsApp'>
                <Phone className='w-6 h-6' aria-hidden='true' />
                Cotação
              </a>

              <a
                href={COMPANY_INFO.instagram}
                target='_blank'
                rel='noopener noreferrer'
                className='flex-1 inline-flex justify-center items-center gap-2 text-white py-1 rounded-xl font-bold text-md transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] py-2 active:scale-[0.98] bg-[var(--neutral-800)] hover:bg-[var(--neutral-700)] border border-[var(--neutral-700)]'
                aria-label='Siga-nos no Instagram'>
                <Instagram className='w-6 h-6' aria-hidden='true' />
                Instagram
              </a>
            </div>
          </div>

          <div className='sm:col-span-2 lg:col-span-3'>
            <h4 className='text-white font-bold text-lg mb-4 flex items-center gap-3'>
              <div className='w-1.5 h-5 bg-[var(--secondary)] rounded-full'></div>
              Nossas Lojas
            </h4>

            <div className='grid grid-cols-1 lg:grid-cols-1 gap-3'>
              <div
                key={COMPANY_INFO.name}
                className='bg-[var(--neutral-800)]/40 border border-[var(--neutral-700)] rounded-2xl p-4 hover:border-[var(--primary)]/50 transition-all'>
                <div className='flex items-start gap-3'>
                  <div className='w-10 h-10 bg-[var(--primary)]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--primary)]/20 transition-colors'>
                    <MapPin
                      className='w-5 h-5 text-[var(--secondary)]'
                      aria-hidden='true'
                    />
                  </div>
                  <div className='flex-1 pt-0.5'>
                    <div className='font-bold text-white text-sm mb-1.5'>
                      {COMPANY_INFO.name}
                    </div>
                    <p className='text-xs text-[var(--neutral-400)] leading-relaxed'>
                      {COMPANY_INFO.addressLine}
                      <br />
                      {COMPANY_INFO.cityStateDisplay}
                    </p>
                  </div>
                </div>
              </div>

              <div className=' bg-gradient-to-br from-[var(--primary)]/10 to-[var(--primary)]/5 border border-[var(--primary)]/20 rounded-2xl p-4 mt-2'>
                <div className='text-xs sm:text-sm text-[var(--neutral-300)] flex items-center gap-3'>
                  <span className='w-2 h-2 rounded-full bg-[var(--secondary)] animate-pulse shadow-[0_0_8px_var(--secondary)]'></span>
                  <p>
                    <strong className='text-white font-bold'>
                      Atendimento:
                    </strong>{' '}
                    <br />
                    {COMPANY_INFO.topbarWorkingHours}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
