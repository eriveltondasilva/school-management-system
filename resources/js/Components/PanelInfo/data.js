import { BookCopy, Users, UsersRound } from 'lucide-react'

const iconClass = 'h-6 w-6'

export const items = [
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
  {
    title: 'Ano Letivo',
    number: '2024',
    icon: <Calendar className={iconClass} />,
  },
]
