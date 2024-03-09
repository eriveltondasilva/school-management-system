import { Link, usePage } from '@inertiajs/react'
import { Button, Card, Tooltip } from 'flowbite-react'
import { Pencil, Plus, XCircle } from 'lucide-react'

import NotFound from '@/Components/NotFound'
import Title from '@/Components/Title'
import AuthLayout from '@/Layouts/AuthLayout'

import { breadcrumbs, titles } from './data'

// ====================================
export default function GroupIndexPage({ groups = [] }) {
  const hasGroups = groups.length > 0
  const year = usePage().props.auth.activeAcademicYear.year || ''

  return (
    <>
      {/* título */}
      <Title>
        <Title.Left title={titles.index + ': ' + year} />
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

function GroupCard({ groups = [] }) {
  return (
    <section className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
      {groups.map(({ id, name, students_count }) => (
        <Card className='max-w-sm'>
          <header className='flex justify-between'>
            <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              {name}
            </h5>
            <EditPageButton href={route('group.edit', id)} text='Editar Turma'>
              <Pencil className='h-3 w-3' />
            </EditPageButton>
          </header>
          <p className='font-normal text-gray-700 dark:text-gray-400'>
            Alunos: {students_count || 'sem alunos'}
          </p>
          <footer>
            <Button
              as={Link}
              href={route('group-students.index', id)}
              color='blue'
              className=''
              fullSized>
              Ver Alunos
            </Button>
          </footer>
        </Card>
      ))}
    </section>
  )
}

function GroupNotFound() {
  return (
    <NotFound>
      <XCircle />
      Não existem turmas criadas para o ano letivo atual.
    </NotFound>
  )
}

function EditPageButton({ text = '', href = '', children }) {
  return (
    <Tooltip content={text}>
      <Button href={href} color='light' size='xs' as={Link}>
        {children}
      </Button>
    </Tooltip>
  )
}

// -----------------------------------
GroupIndexPage.layout = (page) => (
  <AuthLayout title={titles.index} breadcrumb={breadcrumbs.index}>
    {page}
  </AuthLayout>
)
