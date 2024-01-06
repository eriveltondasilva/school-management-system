import HeaderLeft from './HeaderLeft'
import HeaderRight from './HeaderRight'
import HeaderRoot from './HeaderRoot'

// ====================================
export default function Header() {
  return (
    <HeaderRoot>
      <HeaderLeft />
      <HeaderRight />
    </HeaderRoot>
  )
}
