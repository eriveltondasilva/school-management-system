import { Card } from 'flowbite-react'

import AuthLayout from '@/Layouts/AuthLayout'
import { breadcrumbs, titles } from './data'

// ====================================
export default function AcademicYearPage({ academicYears }) {
  console.log(academicYears)
  return (
    <>
      <section className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        {academicYears &&
          academicYears?.map((academicYear) => (
            <AcademicYearCard
              academicYear={academicYear}
              key={academicYear.id}
            />
          ))}
      </section>
    </>
  )
}

function AcademicYearCard({ academicYear }) {
  const { year, start_date, end_date } = academicYear
  return (
    <Card href='#' className='max-w-sm'>
      <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
        Ano Letivo: {year}
      </h5>
      <p className='font-normal text-gray-700 dark:text-gray-400'>
        Data de Início: {start_date ? start_date : 'Não definido'}
        {/* {start_date && new Date(start_date).toLocaleDateString()} */}
      </p>
      <p className='font-normal text-gray-700 dark:text-gray-400'>
        Data de Fim: {end_date ? end_date : 'Não definido'}
      </p>
    </Card>
  )
}

// -----------------------------------
AcademicYearPage.layout = (page) => (
  <AuthLayout title={titles.academicYear} breadcrumb={breadcrumbs.academicYear}>
    {page}
  </AuthLayout>
)
