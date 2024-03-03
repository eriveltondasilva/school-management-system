import { Link } from '@inertiajs/react'
import { Button, Card } from 'flowbite-react'
import { Plus } from 'lucide-react'

import AuthLayout from '@/Layouts/AuthLayout'

import { breadcrumbs, titles } from './data'

// ====================================
export default function GroupIndexPage({ groups }) {
  return (
    <>
      {/*  CRIAR TURMA */}
      <div className='mb-8 flex'>
        <Button as={Link} href={route('group.create')} color='blue'>
          <Plus className='mr-2 h-5 w-5' />
          Cadastrar Novo Turma
        </Button>
      </div>

      {/*  */}
      <h2 className='mb-3 text-lg font-medium text-gray-900 dark:text-gray-100'>
        Turmas
      </h2>
      <div className='border-b border-gray-300 dark:border-gray-700'></div>
      <br />

      <section className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        {groups.length
          ? groups.map((item) => <GroupCard item={item} key={item.id} />)
          : 'Não existem turmas criadas.'}
      </section>
    </>
  )
}

function GroupCard({ item }) {
  const { id, name, academic_year } = item || {}

  return (
    <Link href={route('group.edit', id)}>
      <Card className='max-w-sm'>
        <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
          {name}
        </h5>
        <p className='font-normal text-gray-700 dark:text-gray-400'>
          {academic_year.year}
        </p>
      </Card>
    </Link>
  )
}

// -----------------------------------
GroupIndexPage.layout = (page) => (
  <AuthLayout title={titles.index} breadcrumb={breadcrumbs.index}>
    {page}
  </AuthLayout>
)
