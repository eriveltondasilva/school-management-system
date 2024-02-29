import AuthLayout from '@/Layouts/AuthLayout'
import { breadcrumbs, titles } from './data'

// ====================================
export default function AcademicYearPage({ academicYears }) {
  return (
    <>
      {academicYears?.map((academicYear) => (
        <div key={academicYear.id}>
          <h1>{academicYear.year}</h1>
          <p>{academicYear.is_current ? 'Ano Ativo' : 'Ano Inativo'}</p>
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
