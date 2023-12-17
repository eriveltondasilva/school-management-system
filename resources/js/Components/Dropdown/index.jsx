import DropdownProvider from '@/Contexts/DropdownContext'
import DropdownContent from './DropdownContent'
import DropdownLink from './DropdownLink'
import DropdownTrigger from './DropdownTrigger'

// ====================================
export default function Dropdown({ children }) {
  return (
    <DropdownProvider>
      <div className='relative'>{children}</div>
    </DropdownProvider>
  )
}

// ====================================
Dropdown.Content = DropdownContent
Dropdown.Link = DropdownLink
Dropdown.Trigger = DropdownTrigger
