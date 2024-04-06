// import Calendar from '@/Components/Calendar'
import { usePage } from '@inertiajs/react'
import { BookCopy, Calendar, Users, UsersRound } from 'lucide-react'

import AuthLayout from '@/Layouts/AuthLayout'

import { breadcrumbs, titles } from './data'

let statistics = []

// ====================================
export default function DashboardPage({ counts }) {
  const { activeYear } = usePage().props.auth || {}

  statistics = [
    {
      title: 'Alunos',
      icon: <UsersRound />,
      value: counts.students,
    },
    {
      title: 'Professores',
      icon: <Users />,
      value: counts.teachers,
    },
    {
      title: 'Turmas',
      icon: <BookCopy />,
      value: counts.groups,
    },
    {
      title: 'Ano Letivo',
      icon: <Calendar />,
      value: activeYear,
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
