import AuthLayout from '@/Layouts/AuthLayout'
import { breadcrumbs, titles } from './data'

export default function EditPage({ academicYear }) {
  return <>{JSON?.stringify(academicYear)}</>
}

// -----------------------------------
EditPage.layout = (page) => (
  <AuthLayout title={titles.edit} breadcrumb={breadcrumbs.edit}>
    {page}
  </AuthLayout>
)
