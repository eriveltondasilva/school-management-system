import HeaderLeft from './HeaderLeft'
import HeaderRight from './HeaderRight'
import HeaderRoot from './HeaderRoot'

export default function Header({ children }) {
  return (
    <HeaderRoot>
      <HeaderLeft />
      <HeaderRight />
    </HeaderRoot>
  )
}
