import AuthLayout from '@/Layouts/AuthLayout'
import { breadcrumbs, titles } from './data'

// ====================================
export default function GroupsPage({ groups }) {
  return (
    <>
      {groups?.map((group) => (
        <div key={group.id}>
          <h1>{group.name}</h1>
          <p>{group.academic_year_id}</p>
          <br />
        </div>
      ))}
    </>
  )
}

// -----------------------------------
GroupsPage.layout = (page) => (
  <AuthLayout title={titles.groups} breadcrumb={breadcrumbs.groups}>
    {page}
  </AuthLayout>
)
