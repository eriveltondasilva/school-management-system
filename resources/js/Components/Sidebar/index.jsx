import SidebarBtnClose from './SidebarBtnClose'
import SidebarLogo from './SidebarLogo'
import SidebarMenu from './SidebarMenu'
import SidebarRoot from './SidebarRoot'

// ====================================
export default function Sidebar() {
  return (
    <SidebarRoot>
      <SidebarBtnClose />
      <SidebarLogo />
      <SidebarMenu />
    </SidebarRoot>
  )
}
