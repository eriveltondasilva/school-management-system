import schoolImg from '/resources/images/school.png'
import { Sidebar } from 'flowbite-react'

// ==================================== 
export default function SidebarLogo() {
  return (
    <Sidebar.Logo img={schoolImg} imgAlt='Escola Viver'>
      Escola Viver
    </Sidebar.Logo>
  )
}
