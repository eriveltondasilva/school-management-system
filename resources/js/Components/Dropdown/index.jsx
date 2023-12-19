import DropdownProvider from '@/Contexts/DropdownContext'
import DropdownContent from './DropdownContent'
import DropdownHeader from './DropdownHeader'
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
Dropdown.Header = DropdownHeader
Dropdown.Content = DropdownContent
Dropdown.Link = DropdownLink
Dropdown.Trigger = DropdownTrigger
