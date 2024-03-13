import { Link } from '@inertiajs/react'
import { Button, Card } from 'flowbite-react'
import { Eye, Plus, XCircle } from 'lucide-react'
import { twJoin } from 'tailwind-merge'

import Indicator from '@/Components/Indicator'
import NotFound from '@/Components/NotFound'
import Title from '@/Components/Title'

import AuthLayout from '@/Layouts/AuthLayout'
import formatDate from '@/Utils/formatDate'

import { breadcrumbs, titles } from './data'

// ==============================================
export default function AcademicYearIndexPage({ academicYears = [] }) {
  const hasAcademicYears = academicYears.length > 0

  return (
    <>
      {/* título */}
      <Title>
        <Title.Left title={titles.index} />

        <Title.Right>
          <Button
            as={Link}
            href={route('academic-year.create')}
            color='blue'
            className=''>
            <Plus className='mr-2 h-5 w-5' />
            Cadastrar Ano Letivo
          </Button>
        </Title.Right>
      </Title>

      <br />

      {/* Exibe mensagem se não houver anos letivos */}
      {!hasAcademicYears && <AcademicYearNotFound />}

      {/* Exibe os cards dos anos letivos */}
      {hasAcademicYears && <AcademicYearCard academicYears={academicYears} />}
    </>
  )
}

// ----------------------------------------------
function AcademicYearCard({ academicYears = [] }) {
  return (
    <section className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {academicYears.map(
        ({ id, year, is_active, start_date, end_date, groups_count }) => (
          <Card key={id} className='relative max-w-sm'>
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
              <li className='font-semibold'>Turmas: {groups_count}</li>
            </ul>

            <footer>
              <Button
                as={Link}
                href={route('academic-year.edit', id)}
                color='light'
                className=''
                fullSized>
                <Eye className='mr-2 h-5 w-5' />
                Visualizar
              </Button>
            </footer>
          </Card>
        )
      )}
    </section>
  )
}

// ----------------------------------------------
function AcademicYearNotFound() {
  return (
    <NotFound>
      <XCircle />
      Não existem anos letivos criados...
    </NotFound>
  )
}

// ==============================================
AcademicYearIndexPage.layout = (page) => (
  <AuthLayout title={titles.index} breadcrumb={breadcrumbs.index}>
    {page}
  </AuthLayout>
)
