import { Link, usePage } from '@inertiajs/react'
import { Button, Card, Tooltip } from 'flowbite-react'
import { Eye, PencilLine, Plus, XCircle } from 'lucide-react'

import NotFound from '@/Components/NotFound'
import Title from '@/Components/Title'
import AuthLayout from '@/Layouts/AuthLayout'

import { breadcrumbs, titles } from './data'

// ==============================================
export default function PageGroupIndex({ groups = [] }) {
  const year = usePage().props.auth.activeAcademicYear.year || ''

  const groupPageTitle = `${titles.index} - ${year}`
  const hasGroups = groups.length > 0

  return (
    <>
      {/* Título */}
      <Title>
        <Title.Left title={groupPageTitle} />
        <Title.Right>
          <Button
            as={Link}
            href={route('group.create')}
            color='blue'
            className=''>
            <Plus className='mr-2 h-5 w-5' />
            Cadastrar Turma
          </Button>
        </Title.Right>
      </Title>

      <br />

      {/* Exibe mensagem se não houver grupos */}
      {!hasGroups && <GroupNotFound />}

      {/* Exibe os cards das turmas */}
      {hasGroups && <GroupCard groups={groups} />}
    </>
  )
}

// ----------------------------------------------
function GroupCard({ groups = [] }) {
  return (
    <section className='grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {groups.map(({ id, name, students_count }) => (
        <Card key={id} className='max-w-sm'>
          <header className='flex justify-between'>
            <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              {name}
            </h5>

            <Tooltip content='Editar Turma'>
              <Button
                href={route('group.edit', id)}
                color='green'
                size='xs'
                as={Link}>
                <PencilLine className='h-4 w-4' />
              </Button>
            </Tooltip>
          </header>

          <p className='font-normal text-gray-700 dark:text-gray-400'>
            Alunos: {students_count || 'sem aluno'}
          </p>

          <footer>
            <Button
              as={Link}
              href={route('group-students.index', id)}
              color='blue'
              fullSized>
              <Eye className='mr-2 h-5 w-5' />
              Ver Alunos
            </Button>
          </footer>
        </Card>
      ))}
    </section>
  )
}

// ----------------------------------------------
function GroupNotFound() {
  return (
    <NotFound>
      <XCircle />
      Não existem turmas criadas para o ano letivo atual.
    </NotFound>
  )
}

// ==============================================
PageGroupIndex.layout = (page) => (
  <AuthLayout title={titles.index} breadcrumb={breadcrumbs.index}>
    {page}
  </AuthLayout>
)
