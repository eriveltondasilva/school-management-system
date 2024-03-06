import { Link } from '@inertiajs/react'
import { Button, Card } from 'flowbite-react'
import { Plus, XCircle } from 'lucide-react'

import HorizontalLine from '@/Components/HorizontalLine'
import NotFound from '@/Components/NotFound'
import AuthLayout from '@/Layouts/AuthLayout'

import { breadcrumbs, titles } from './data'

// ====================================
export default function GroupIndexPage({ groups = [] }) {
  const hasGroups = groups.length > 0

  return (
    <>
      {/* Botão para criar uma nova turma */}
      <div className='mb-8 flex'>
        <Button as={Link} href={route('group.create')} color='blue'>
          <Plus className='mr-2 h-5 w-5' />
          Cadastrar Novo Turma
        </Button>
      </div>

      {/* Título */}
      <h2 className='mb-3 text-lg font-medium text-gray-900 dark:text-gray-100'>
        Turmas
      </h2>
      <HorizontalLine />
      <br />

      {/* Exibe mensagem se não houver grupos */}
      {!hasGroups && (
        <NotFound>
          <XCircle />
          Não existem turmas criadas para o ano letivo atual.
        </NotFound>
      )}

      {/* Exibe os cards das turmas */}
      {hasGroups && (
        <section className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
          {groups.map((group) => (
            <GroupCard group={group} key={group.id} />
          ))}
        </section>
      )}
    </>
  )
}

function GroupCard({ group = {} }) {
  const { id, name, academic_year } = group

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
