import { Star } from 'lucide-react'
import {
  C,
} from '../landing-page/data'

export default function ReviewCard({
  name,
  time,
  text,
}: {
  name: string
  time: string
  text: string
}) {
  return (
    <div className='px-2 py-3'>
      <div
        className='p-5 rounded-sm border-2 border-t-[3px] h-full min-h-50 flex flex-col hover:border-[#FFCD11] transition-colors duration-200'
        style={{
          backgroundColor: C.blueBgAlt,
          borderColor: C.blueBorder,
          borderTopColor: C.blueAccent,
        }}>
        <div className='flex gap-0.5 mb-3'>
          {[1, 2, 3, 4, 5].map((i) => (
            <Star
              key={i}
              className='w-4 h-4 fill-current'
              style={{ color: C.starColor }}
            />
          ))}
        </div>
        <p
          className='text-base leading-relaxed mb-4 flex-grow'
          style={{ color: C.reviewText }}>
          "{text}"
        </p>
        <div
          className='mt-auto flex items-center gap-3 pt-3'
          style={{ borderTop: `1px solid ${C.blueBorder}` }}>
          <div
            className='w-10 h-10 rounded-sm flex items-center justify-center text-sm font-black'
            style={{ backgroundColor: C.blueAccent, color: '#111' }}>
            {name.charAt(0)}
          </div>
          <div>
            <p className='font-bold text-base' style={{ color: C.blueText }}>
              {name}
            </p>
            <p className='text-sm' style={{ color: C.blueTextFaint }}>
              {time}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}