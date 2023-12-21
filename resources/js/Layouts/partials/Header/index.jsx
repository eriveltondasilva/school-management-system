import { twJoin } from 'tailwind-merge'

import HeaderLeft from './HeaderLeft'
import HeaderRight from './HeaderRight'

// ====================================
export default function Header({ children }) {
  return (
    <header>
      <nav
        className={twJoin(
          'flex items-center justify-between',
          'px-4 py-2.5 md:px-10 lg:px-20',
          'border-gray-200 bg-white dark:bg-gray-800'
        )}>
        {children}
      </nav>
    </header>
  )
}

// ====================================
Header.Left = HeaderLeft
Header.Right = HeaderRight
