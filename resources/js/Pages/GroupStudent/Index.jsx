import AuthLayout from '@/Layouts/AuthLayout'

import { breadcrumbs, titles } from './data'

// ====================================
export default function GroupStudentIndexPage({ group = {}, students = [] }) {
  console.log(group)
  return (
    <>
      {students.map((student, index) => (
        <p key={student.id}>
          {++index} - {student.name}
        </p>
      ))}
      {!students.length && <div>Sem alunos</div>}
      <br />
      <p>{group.name}</p>
    </>
  )
}

// -----------------------------------
GroupStudentIndexPage.layout = (page) => (
  <AuthLayout title={titles.index} breadcrumb={breadcrumbs.index}>
    {page}
  </AuthLayout>
)
