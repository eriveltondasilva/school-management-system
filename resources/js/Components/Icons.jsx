export function ChevronDown({ className }) {
  // className='lucide lucide-chevron-down'
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={className}>
      <path d='m6 9 6 6 6-6' />
    </svg>
  )
}

export function Menu({ className }) {
  // className='lucide lucide-menu'
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={className}>
      <line x1='4' x2='20' y1='12' y2='12' />
      <line x1='4' x2='20' y1='6' y2='6' />
      <line x1='4' x2='20' y1='18' y2='18' />
    </svg>
  )
}

export function Close({ className }) {
  // className='lucide lucide-x'
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={className}>
      <path d='M18 6 6 18' />
      <path d='m6 6 12 12' />
    </svg>
  )
}

export function Save({ className }) {
  // className='lucide lucide-save'
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={className}>
      <path d='M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z' />
      <polyline points='17 21 17 13 7 13 7 21' />
      <polyline points='7 3 7 8 15 8' />
    </svg>
  )
}

export function Delete({ className }) {
  // className='lucide lucide-trash-2'
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={className}>
      <path d='M3 6h18' />
      <path d='M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6' />
      <path d='M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2' />
      <line x1='10' x2='10' y1='11' y2='17' />
      <line x1='14' x2='14' y1='11' y2='17' />
    </svg>
  )
}

export function User({ className }) {
  // 'lucide lucide-user-round'

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={className}>
      <circle cx='12' cy='8' r='5' />
      <path d='M20 21a8 8 0 0 0-16 0' />
    </svg>
  )
}

export function LogOut({ className }) {
  // 'lucide lucide-log-out'

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={className}>
      <path d='M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4' />
      <polyline points='16 17 21 12 16 7' />
      <line x1='21' x2='9' y1='12' y2='12' />
    </svg>
  )
}

export function UserConfig({ className }) {
  // 'lucide lucide-user-round-cog'

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
      className={className}>
      <path d='M2 21a8 8 0 0 1 10.434-7.62' />
      <circle cx='10' cy='8' r='5' />
      <circle cx='18' cy='18' r='3' />
      <path d='m19.5 14.3-.4.9' />
      <path d='m16.9 20.8-.4.9' />
      <path d='m21.7 19.5-.9-.4' />
      <path d='m15.2 16.9-.9-.4' />
      <path d='m21.7 16.5-.9.4' />
      <path d='m15.2 19.1-.9.4' />
      <path d='m19.5 21.7-.4-.9' />
      <path d='m16.9 15.2-.4-.9' />
    </svg>
  )
}
