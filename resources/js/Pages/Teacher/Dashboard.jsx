import { BookCopy, Calendar, Users, UsersRound } from 'lucide-react'
import toast from 'react-hot-toast'

import Alert from '@/Components/Alert'
import AuthLayout from '@/Layouts/AuthLayout'

import { usePage } from '@inertiajs/react'
import { breadcrumbs, titles } from './data'

let statistics = []

// ====================================
export default function DashboardPage({ data }) {
  const { currentYear, studentsCount, groupsCount } = data || {}
  const { message } = usePage().props

  if (message)
    toast.success(message, {
      id: 'clipboard',
    })

  statistics = [
    {
      title: 'Alunos',
      icon: <UsersRound />,
      value: studentsCount,
    },
    {
      title: 'Turmas',
      icon: <Users />,
      value: groupsCount,
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

  return <>{message && <Alert>{message}</Alert>}</>
}

// ====================================
DashboardPage.layout = (page) => (
  <AuthLayout
    title={titles.dashboard}
    breadcrumb={breadcrumbs.dashboard}
    statistics={statistics}
    children={page}
  />
)
