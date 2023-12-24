import { Navbar } from 'flowbite-react'

export default function HeaderRoot({ children }) {
  return (
    <Navbar fluid rounded>
      {children}
    </Navbar>
  )
}
