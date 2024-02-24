import { Backpack, Briefcase, Calendar, Home } from 'lucide-react'

// prettier-ignore
export const sidebarItems = [
  [
    { title: 'Painel', icon: Home, routeName: 'dashboard' }
  ],
  [
    { title: 'Calendário', icon: Calendar, routeName: 'calendar' },
    { title: 'Documentos', icon: Calendar, routeName: 'calendar' },
  ],
  [
    { title: 'Alunos', icon: Backpack, routeName: 'student.index' },
    { title: 'Professor', icon: Briefcase, routeName: 'teacher.index' },
  ],
  [
    { title: 'Notas', icon: Backpack, routeName: 'dashboard' },
    // { title: 'Frequências', icon: Briefcase, routeName: 'dashboard' },
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
