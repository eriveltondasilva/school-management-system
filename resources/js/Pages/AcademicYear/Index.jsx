import { Card } from 'flowbite-react'
import { twJoin } from 'tailwind-merge'

import Indicator from '@/Components/Indicator'
import useFormDate from '@/Hooks/useFormDate'
import AuthLayout from '@/Layouts/AuthLayout'

import { breadcrumbs, titles } from './data'

// ====================================
export default function IndexPage({ academicYears }) {
  const { handleSubmit, isLoading, errors } = useFormDate('academicYear')
  return (
    <>
      <TitleAcademicYearPage>Anos Letivos</TitleAcademicYearPage>
      {/*  CARDS DOS ANOS LETIVOS */}
      <section className='grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4'>
        {academicYears &&
          academicYears?.map(({ year, id, is_current }) => (
            <Card
              key={id}
              href={route('academicYear.create', id)}
              className='relative max-w-sm'>
              <Indicator type={is_current ? 'success' : 'secondary'} />
              <h5
                className={twJoin(
                  'text-2xl font-bold tracking-tight',
                  'text-gray-900 dark:text-white'
                )}>
                {year}
              </h5>
              <p className='font-normal text-gray-700 dark:text-gray-400'>
                Ano Letivo
              </p>
            </Card>
          ))}
      </section>
    </>
  )
}

function TitleAcademicYearPage({ children }) {
  return (
    <>
      <h2 className='mb-3 text-lg font-medium text-gray-900 dark:text-gray-100'>
        {children}
      </h2>
      <div className='border-b border-gray-300 dark:border-gray-700'></div>
      <br />
    </>
  )
}

// -----------------------------------
IndexPage.layout = (page) => (
  <AuthLayout title={titles.index} breadcrumb={breadcrumbs.index}>
    {page}
  </AuthLayout>
)
