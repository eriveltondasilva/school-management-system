// import Calendar from '@/Components/Calendar'
import { BookCopy, Calendar, Users, UsersRound } from 'lucide-react'

import AuthLayout from '@/Layouts/AuthLayout'

import { breadcrumbs, titles } from './data'

let statistics = []

// ====================================
export default function DashboardPage({ data }) {
  const { studentsCount, teachersCount, groupsCount, currentYear } = data || {}

  statistics = [
    {
      title: 'Alunos',
      icon: <UsersRound />,
      value: studentsCount,
    },
    {
      title: 'Professores',
      icon: <Users />,
      value: teachersCount,
    },
    {
      title: 'Turmas',
      icon: <BookCopy />,
      value: groupsCount,
    },
    {
      title: 'Ano Letivo',
      icon: <Calendar />,
      value: currentYear.year,
    },
  ]

  return null
}

// ====================================
DashboardPage.layout = (page) => (
  <AuthLayout
    title={titles.dashboard}
    breadcrumb={breadcrumbs.dashboard}
    statistics={statistics}>
    {page}
  </AuthLayout>
)
