import {
  Backpack,
  Briefcase,
  Calendar,
  CalendarDays,
  Home,
  LibraryBig,
  UsersRound,
} from 'lucide-react'

// prettier-ignore
export const sidebarItems = [
  [
    { title: 'Painel', icon: Home, routeName: 'dashboard' },
    { title: 'Calendário', icon: CalendarDays, routeName: 'calendar' },
  ],
  [
    { title: 'Alunos', icon: Backpack, routeName: 'student.index' },
    { title: 'Professor', icon: Briefcase, routeName: 'teacher.index' },
  ],
  [
    { title: 'Turmas', icon: UsersRound, routeName: 'group.index' },
    { title: 'Disciplinas', icon: LibraryBig, routeName: 'subject.index' },
    { title: 'Ano Letivo', icon: Calendar, routeName: 'academic-year.index' },
  ],
]

// const sidebarCollapseItems = [
//   {
//     title: 'Alunos',
//     icon: Backpack,
//     routes: 'student.*',
//     subItems: [
//       { title: 'Listar alunos', route: 'student.index' },
//       { title: 'Cadastrar aluno', route: 'student.create' },
//     ],
//   },
//   {
//     title: 'Professor',
//     icon: Briefcase,
//     routes: 'teacher.*',
//     subItems: [
//       { title: 'Listar professores', route: 'teacher.index' },
//       { title: 'Listar professores', route: 'teacher.create' },
//     ],
//   },
// ]
