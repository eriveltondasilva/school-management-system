import { Link } from '@inertiajs/react'
import { Button, Card } from 'flowbite-react'
import { Plus, XCircle } from 'lucide-react'
import { twJoin } from 'tailwind-merge'

import HorizontalLine from '@/Components/HorizontalLine'
import Indicator from '@/Components/Indicator'
import NotFound from '@/Components/NotFound'
import AuthLayout from '@/Layouts/AuthLayout'
import formatDate from '@/Utils/formatDate'

import { breadcrumbs, titles } from './data'

// ====================================
export default function AcademicYearIndexPage({ academicYears = [] }) {
  const hasAcademicYears = academicYears.length > 0

  return (
    <>
      {/* Botão para criar um novo ano letivo */}
      <div className='mb-8 flex'>
        <Button as={Link} href={route('academic-year.create')} color='blue'>
          <Plus className='mr-2 h-5 w-5' />
          Cadastrar Novo Ano Letivo
        </Button>
      </div>

      {/* Título */}
      <h2 className='mb-3 text-lg font-medium text-gray-900 dark:text-gray-100'>
        Anos Letivos
      </h2>
      <HorizontalLine />
      <br />

      {/* Exibe mensagem se não houver anos letivos */}
      {!hasAcademicYears && (
        <NotFound>
          <XCircle />
          Não existem anos letivos criados...
        </NotFound>
      )}

      {/* Exibe os cards dos anos letivos */}
      {hasAcademicYears && (
        <section className='grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-4'>
          {academicYears.map((academicYear) => (
            <AcademicYearCard
              key={academicYear.id}
              academicYear={academicYear}
            />
          ))}
        </section>
      )}
    </>
  )
}

function AcademicYearCard({ academicYear = {} }) {
  const { id, year, is_active, start_date, end_date, groups_count } =
    academicYear

  return (
    <Link href={route('academic-year.edit', id)}>
      <Card className='relative max-w-sm'>
        <Indicator type={is_active ? 'success' : 'secondary'} />
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
          <li className='font-semibold'>Turmas: {groups_count}</li>
        </ul>
      </Card>
    </Link>
  )
}

// -----------------------------------
AcademicYearIndexPage.layout = (page) => (
  <AuthLayout title={titles.index} breadcrumb={breadcrumbs.index}>
    {page}
  </AuthLayout>
)
