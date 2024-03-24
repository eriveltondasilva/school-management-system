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
    { title: 'Alunos', icon: Backpack, route: 'admin.student.index' },
    { title: 'Professor', icon: Briefcase, route: 'admin.teacher.index' },
  ],
  [
    { title: 'Turmas', icon: UsersRound, route: 'admin.group.index' },
    { title: 'Disciplinas', icon: LibraryBig, route: 'admin.subject.index' },
    { title: 'Ano Letivo', icon: Calendar, route: 'admin.academic-year.index' },
  ],
]

const TeacherSidebarItems = []

const StudentSidebarItems = []

const UserSidebarItems = []

// ===============================================
export default {
  Admin: AdminSidebarItems,
  Teacher: TeacherSidebarItems,
  Student: StudentSidebarItems,
  User: UserSidebarItems,
}
