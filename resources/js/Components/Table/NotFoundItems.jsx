import { SearchX } from 'lucide-react'

// ====================================
export default function NotFound({ text }) {
  return (
    <div className='my-8 flex items-center gap-3 text-xl opacity-50'>
      <SearchX />
      {text}
    </div>
  )
}
