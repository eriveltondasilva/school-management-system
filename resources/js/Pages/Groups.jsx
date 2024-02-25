import AuthLayout from '@/Layouts/AuthLayout'
import { breadcrumbs, titles } from './data'

// ====================================
export default function GroupsPage() {
  return null
}

// -----------------------------------
GroupsPage.layout = (page) => (
  <AuthLayout title={titles.groups} breadcrumb={breadcrumbs.groups}>
    {page}
  </AuthLayout>
)
