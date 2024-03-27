// import Calendar from '@/Components/Calendar'
import { usePage } from '@inertiajs/react'

import AuthLayout from '@/Layouts/AuthLayout'

import { breadcrumbs, titles } from './data'

// ====================================
export default function DashboardPage({}) {
  const flash = usePage().props || {}

  return null
}

// ====================================
DashboardPage.layout = (page) => (
  <AuthLayout title={titles.dashboard} breadcrumb={breadcrumbs.dashboard}>
    {page}
  </AuthLayout>
)
