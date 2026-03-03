import { ArrowRight } from "lucide-react"

import {
  C,
  FONT_HEADING,
} from '../landing-page/data'

export default function MachineCard({
  title,
  image,
  code,
}: {
  title: string
  image: string
  code: string
}) {
  return (
    <div className='px-2 py-3'>
      <div
        className='group relative rounded-sm overflow-hidden border-2 hover:border-[#FFCD11]! transition-colors duration-200 h-100 '
        style={{
          backgroundColor: C.machineCardBg,
          borderColor: C.machineCardBorder,
        }}>
        <div className='absolute inset-0 overflow-hidden'>
          <img
            src={image}
            alt={title}
            className='w-full h-full object-cover opacity-40 group-hover:opacity-55 group-hover:scale-105 transition-all duration-500'
          />
          <div
            className='absolute inset-0'
            style={{
              background: `linear-gradient(to bottom, ${C.machineCardOverlay}80, transparent, ${C.machineCardOverlay})`,
            }}
          />
          <div
            className='absolute inset-0 transition-colors duration-300'
            style={{ backgroundColor: `${C.machineCardOverlay}4D` }}
          />
        </div>
        <div className='absolute top-4 right-4 flex flex-col items-end gap-1.5 z-10'>
          <div className='w-12 h-1 bg-[#FFCD11] group-hover:w-16 transition-all duration-300' />
          <div className='w-6 h-1 bg-[#555] group-hover:w-10 transition-all duration-300' />
          <span className='text-sm font-mono text-[#FFCD11] mt-1 tracking-widest font-bold'>
            {code}
          </span>
        </div>
        <div className='absolute top-0 left-0 w-10 h-10 border-l-[3px] border-t-[3px] border-[#FFCD11] opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10' />
        <div className='absolute bottom-0 right-0 w-10 h-10 border-r-[3px] border-b-[3px] border-[#FFCD11] opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10' />
        <div className='absolute bottom-0 left-0 right-0 p-5 z-10'>
          <div className='flex items-center gap-2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
            <div className='w-2 h-2 bg-[#16A34A] rounded-sm' />
            <span className='text-xs font-bold text-[#FFCD11] uppercase tracking-[0.2em]'>
              PEÇAS DISPONÍVEIS
            </span>
          </div>
          <h3
            className='text-white uppercase leading-[0.9] mb-3 text-3xl font-bold'
            style={{
              fontFamily: FONT_HEADING,
            }}>
            {title.split(' ').map((word, i) => (
              <span key={i} className='block'>
                {word}
              </span>
            ))}
          </h3>
          <div className='h-[2px] bg-[#333] group-hover:bg-[#FFCD11] transition-colors duration-300 mb-3' />
          <div className='flex justify-between items-center'>
            <span className='text-sm text-[#888] font-mono tracking-wider'>
              ESTOQUE:{' '}
              <span className='text-[#16A34A] font-bold'>DISPONÍVEL</span>
            </span>
            <a href={`whatsapp://send?phone=63999828455&text=Olá! Gostaria de saber mais sobre peças da máquina ${title}`} target="_blank" rel="noopener noreferrer">

            <div className='bg-[#FFCD11] text-[#111] p-2.5 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
              
              <ArrowRight size={18} strokeWidth={3} />
            </div>
            </a>

          </div>
        </div>
      </div>
    </div>
  )
}