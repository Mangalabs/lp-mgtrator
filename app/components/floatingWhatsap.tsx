import {
  WA_LINK,
} from '../landing-page/data'
import { Phone } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      href={WA_LINK}
      target='_blank'
      rel='noopener noreferrer'
      className='fixed bottom-6 right-6 z-[60] group fab-float'
      aria-label='Fale conosco no WhatsApp'>
      <span
        className='absolute inset-0 rounded-full animate-ping'
        style={{
          backgroundColor: '#25D366',
          opacity: 0.25,
          animationDuration: '3s',
        }}
      />
      <span
        className='relative flex items-center justify-center w-[60px] h-[60px] rounded-full shadow-xl group-hover:scale-110 transition-transform duration-200'
        style={{
          backgroundColor: '#25D366',
          boxShadow: '0 6px 20px rgba(37,211,102,0.45)',
        }}>
        <Phone className='w-7 h-7 text-white' />
      </span>
    </a>
  )
}
