import {
  HeaderDropdown,
  HeaderDropdownHeader,
  HeaderDropdownItem,
} from './HeaderDropdown'
import HeaderLeft from './HeaderLeft'
import HeaderRight from './HeaderRight'
import HeaderRoot from './HeaderRoot'

// ====================================
const Header = HeaderRoot
Header.Left = HeaderLeft
Header.Right = HeaderRight
Header.Dropdown = HeaderDropdown
Header.DropdownHeader = HeaderDropdownHeader
Header.DropdownItem = HeaderDropdownItem

export default Header
