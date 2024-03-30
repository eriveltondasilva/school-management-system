import {
  Backpack,
  Briefcase,
  Calendar,
  CalendarDays,
  Home,
  LibraryBig,
  UsersRound,
} from 'lucide-react'

// ===============================================
// prettier-ignore
const AdminSidebarItems = [
  [
    { title: 'Painel', icon: Home, route: 'admin.dashboard' },
    { title: 'Calendário', icon: CalendarDays, route: 'admin.calendar' },
  ],
  [
    { title: 'Alunos', icon: Backpack, route: 'admin.students.index' },
    { title: 'Professor', icon: Briefcase, route: 'admin.teachers.index' },
  ],
  [
    { title: 'Turmas', icon: UsersRound, route: 'admin.groups.index' },
    { title: 'Disciplinas', icon: LibraryBig, route: 'admin.subjects.index' },
    { title: 'Ano Letivo', icon: Calendar, route: 'admin.academic-years.index' },
  ],
]

// prettier-ignore
const TeacherSidebarItems = [
  [
    { title: 'Painel', icon: Home, route: 'teacher.dashboard' },
    { title: 'Calendário', icon: CalendarDays, route: 'teacher.calendar' },
  ]
]

// prettier-ignore
const StudentSidebarItems = [
  [
    { title: 'Painel', icon: Home, route: 'student.dashboard' },
    { title: 'Calendário', icon: CalendarDays, route: 'student.calendar' },
  ]
]

// prettier-ignore
const UserSidebarItems = [
  [
    // { title: 'Painel', icon: Home, route: null },
  ]
]

// ===============================================
export default {
  Admin: AdminSidebarItems,
  Teacher: TeacherSidebarItems,
  Student: StudentSidebarItems,
  User: UserSidebarItems,
}
