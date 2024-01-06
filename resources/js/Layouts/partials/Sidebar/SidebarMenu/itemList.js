import { Backpack, Briefcase, Calendar, Home } from 'lucide-react'

// ==================================
export const sidebarItems = [
  { title: 'Painel', icon: Home, route: 'dashboard' },
  { title: 'Calendário', icon: Calendar, route: 'calendar' },
]

// ---------------------------------
export const sidebarCollapseItems = [
  {
    title: 'Estudantes',
    icon: Backpack,
    subItems: [
      { title: 'Notas', route: 'calendar' },
      { title: 'Frequência', route: 'calendar' },
    ],
  },
  {
    title: 'Professor',
    icon: Briefcase,
    subItems: [
      { title: 'Notas', route: 'calendar' },
      { title: 'Frequência', route: 'calendar' },
    ],
  },
]
