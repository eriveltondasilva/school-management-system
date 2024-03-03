import { Link } from '@inertiajs/react'
import { Button, Card } from 'flowbite-react'
import { Plus } from 'lucide-react'
import { twJoin } from 'tailwind-merge'

import Indicator from '@/Components/Indicator'
import AuthLayout from '@/Layouts/AuthLayout'
import formatDate from '@/Utils/formatDate'

import { breadcrumbs, titles } from './data'

// ====================================
export default function AcademicYearIndexPage({ academicYears = [] }) {
  console.log(academicYears)
  return (
    <>
      {/*  CRIAR ANO LETIVO */}
      <div className='mb-8 flex'>
        <Button as={Link} href={route('academic-year.create')} color='blue'>
          <Plus className='mr-2 h-5 w-5' />
          Cadastrar Novo Ano Letivo
        </Button>
      </div>

      {/*  */}
      <h2 className='mb-3 text-lg font-medium text-gray-900 dark:text-gray-100'>
        Anos Letivos
      </h2>
      <div className='border-b border-gray-300 dark:border-gray-700'></div>
      <br />

      {/*  CARDS DOS ANOS LETIVOS */}
      <section className='grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-4'>
        {academicYears.length ? (
          academicYears.map((item) => (
            <AcademicYearCard key={item.id} item={item} />
          ))
        ) : (
          <NotFoundCard />
        )}
      </section>
    </>
  )
}

function AcademicYearCard({ item }) {
  const { id, year, is_current, start_date, end_date, groups_count } =
    item || {}

  return (
    <Link href={route('academic-year.edit', id)}>
      <Card className='relative max-w-sm'>
        <Indicator type={is_current ? 'success' : 'secondary'} />
        <h5
          className={twJoin(
            'text-2xl font-bold tracking-tight',
            'text-gray-900 dark:text-white'
          )}>
          {year}
        </h5>
        <ul className='font-normal text-gray-700 dark:text-gray-400'>
          <li>Início: {formatDate(start_date)}</li>
          <li>Fim: {formatDate(end_date)}</li>
          <br />
          <li className='font-semibold'>Turmas: {groups_count || '0'}</li>
        </ul>
      </Card>
    </Link>
  )
}

function NotFoundCard() {
  return <div>Not Found Card...</div>
}

// -----------------------------------
AcademicYearIndexPage.layout = (page) => (
  <AuthLayout title={titles.index} breadcrumb={breadcrumbs.index}>
    {page}
  </AuthLayout>
)
