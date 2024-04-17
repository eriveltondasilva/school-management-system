import { Link, usePage } from '@inertiajs/react'
import { Button, Card } from 'flowbite-react'

import Title from '@/Components/Title'

import AuthLayout from '@/Layouts/AuthLayout'

import GroupNotFound from './Partials/GroupNotFound'
import { breadcrumbs, titles } from './data'

// ==============================================
export default function PageGroupIndex({ groups = [] }) {
  const { activeYear } = usePage().props.auth || ''

  const pageTitle = `${titles.index} - ${activeYear}`
  const hasGroups = groups.length > 0

  return (
    <>
      {/* Título */}
      <Title>
        <Title.Left title={pageTitle} />
      </Title>

      <br />

      {/* Exibe mensagem se não houver grupos */}
      {!hasGroups && <GroupNotFound />}

      {/* Exibe os cards das turmas */}
      {hasGroups && <GroupCard {...{ groups }} />}
    </>
  )
}

// ----------------------------------------------
function GroupCard({ groups = [] }) {
  return (
    <section className='grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {groups.map((group) => (
        <Card key={group.id} className='max-w-sm'>
          <header className='flex justify-between'>
            <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              {group.name}
            </h5>
          </header>

          <footer className='space-y-4'>
            <Button
              as={Link}
              href={route('admin.groups.students.index', { group })}
              color='blue'
              size='sm'
              className='uppercase'
              fullSized>
              Alunos
            </Button>
            <Button
              as={Link}
              href={route('admin.groups.teachers.index', { group })}
              color='warning'
              size='sm'
              className='uppercase'
              fullSized>
              Professores
            </Button>
          </footer>
        </Card>
      ))}
    </section>
  )
}

// ==============================================
PageGroupIndex.layout = (page) => (
  <AuthLayout
    title={titles.index}
    breadcrumb={breadcrumbs.index}
    children={page}
  />
)
