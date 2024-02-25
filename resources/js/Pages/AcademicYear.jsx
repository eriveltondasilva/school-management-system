import AuthLayout from '@/Layouts/AuthLayout'
import { breadcrumbs, titles } from './data'

// ====================================
export default function AcademicYearPage({ academicYear }) {
  if (!academicYear) return null

  console.log(academicYear)
  return (
    <>
      {academicYear?.map((academicYear) => (
        <div key={academicYear.id}>
          <h1>{academicYear.id}</h1>
          {/* <p>{academicYear.start_date}</p> */}
          {/* <p>{academicYear.end_date}</p> */}
          <br />
        </div>
      ))}
    </>
  )
}

// -----------------------------------
AcademicYearPage.layout = (page) => (
  <AuthLayout title={titles.academicYear} breadcrumb={breadcrumbs.academicYear}>
    {page}
  </AuthLayout>
)
