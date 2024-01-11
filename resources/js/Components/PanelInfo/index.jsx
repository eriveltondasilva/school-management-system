import { BookCopy, Users, UsersRound } from 'lucide-react'
import { Fragment } from 'react'

import PanelInfoItem from './PanelInfoItem'
import PanelInfoRoot from './PanelInfoRoot'

// ====================================
export default function PanelInfo() {
  const iconClass = 'h-8 w-8'
  const items = [
    {
      title: 'Alunos',
      number: '250',
      icon: <UsersRound className={iconClass} />,
    },
    {
      title: 'Professores',
      number: '25',
      icon: <Users className={iconClass} />,
    },
    {
      title: 'Turmas',
      number: '5',
      icon: <BookCopy className={iconClass} />,
    },
  ]

  return (
    <PanelInfoRoot>
      {items.map(({ title, number, icon }, i) => (
        <Fragment key={`panel-info-${i}`}>
          <PanelInfoItem title={title} number={number} icon={icon} />
        </Fragment>
      ))}
    </PanelInfoRoot>
  )
}
