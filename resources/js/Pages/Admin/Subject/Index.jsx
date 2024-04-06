import { Link, usePage } from '@inertiajs/react'
import { Button, Card } from 'flowbite-react'
import { Eye, XCircle } from 'lucide-react'

import NotFound from '@/Components/NotFound'
import Title from '@/Components/Title'

import AuthLayout from '@/Layouts/AuthLayout'

import { breadcrumbs, titles } from './data'

// ===============================================
export default function PageSubjectIndex({ subjects }) {
  const hasSubjects = subjects.length > 0

  const { activeYear } = usePage().props.auth
  const pageTitle = `${titles.index} - Ano Letivo: ${activeYear}`

  return (
    <>
      <Title>
        <Title.Left title={pageTitle} />
      </Title>

      <br />

      {/* Exibe mensagem se não houver grupos */}
      {!hasSubjects && <NotFoundSubject />}

      {/* Exibe os cards das turmas */}
      {hasSubjects && <CardSubject {...{ subjects }} />}
    </>
  )
}

function CardSubject({ subjects = [] }) {
  return (
    <section className='grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {subjects.map((subject) => (
        <Card key={subject.id} className='max-w-sm'>
          <header className=''>
            <h5
              className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'
              title={subject.name}>
              {subject.abbr}
            </h5>
          </header>

          <p className='my-3 font-normal text-gray-700 dark:text-gray-400'>
            Professores: {subject.teachers_count || 'sem prof.'}
          </p>

          <footer>
            <Button
              as={Link}
              href={route('admin.subjects.teachers.index', { subject })}
              color='blue'
              className='uppercase'
              fullSized>
              <Eye className='mr-2 h-5 w-5' />
              Professores
            </Button>
          </footer>
        </Card>
      ))}
    </section>
  )
}

function NotFoundSubject() {
  return (
    <NotFound>
      <XCircle />
      Não existem disciplinas criadas para o ano letivo atual.
    </NotFound>
  )
}

// -----------------------------------------------
PageSubjectIndex.layout = (page) => (
  <AuthLayout
    title={titles.index}
    breadcrumb={breadcrumbs.index}
    children={page}
  />
)
