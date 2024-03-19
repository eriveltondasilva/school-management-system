import { Link, router, usePage } from '@inertiajs/react'
import { Button } from 'flowbite-react'
import { Eye, Plus, Trash2, XCircle } from 'lucide-react'
import { twJoin } from 'tailwind-merge'

import Alert from '@/Components/Alert'
import NotFound from '@/Components/NotFound'
import Table from '@/Components/Table'
import Title from '@/Components/Title'

import AuthLayout from '@/Layouts/AuthLayout'
import formatId from '@/Utils/formatId'

import { breadcrumbs, titles } from './data'

// ==============================================
export default function PageGroupTeacherIndex({ group = {}, teachers = [] }) {
  const flash = usePage().props.flash || {}

  const pageTitle = `${titles.index} - ${group.name}`
  const hasTeachers = teachers.length > 0

  return (
    <>
      {/* Mensagem flash */}
      {flash.message && (
        <Alert color='success' className='mb-4'>
          {flash.message}
        </Alert>
      )}

      {/* Título */}
      <Title>
        <Title.Left title={pageTitle} />
        <Title.Right>
          <Button
            as={Link}
            href={route('group-teachers.create', group.id)}
            color='blue'
            className=''>
            <Plus className='mr-2 h-5 w-5' />
            Adicionar professor
          </Button>
        </Title.Right>
        {/* TODO: implementar PDF */}
      </Title>

      <br />

      {/* Exibe mensagem se não houver alunos */}
      {!hasTeachers && <GroupTeacherNotFound />}

      {/* Tabela de alunos */}
      {hasTeachers && <TeacherTable {...{ group, teachers }} />}
    </>
  )
}

// ----------------------------------------------
function TeacherTable({ group = {}, teachers = [] }) {
  const handleDestroyTeacher = (id, name) => {
    const message = `Tem certeza que deseja remover professor(a)\n${name}, id ${formatId(id)}?`

    router.delete(
      route('group-teachers.destroy', { group: group.id, teacher: id }),
      { onBefore: () => confirm(message) }
    )
  }

  return (
    <Table>
      {/* Table Header */}
      <Table.Header>
        <Table.HeaderCell className='w-0'></Table.HeaderCell>
        <Table.HeaderCell>Nome</Table.HeaderCell>
        <Table.HeaderCell>email</Table.HeaderCell>
        <Table.HeaderCell></Table.HeaderCell>
      </Table.Header>

      {/* Table Body */}
      <Table.Body>
        {teachers.map(({ id, name, email }, index) => (
          <Table.Row key={id}>
            <Table.RowCell className='font-medium'>{++index}</Table.RowCell>
            <Table.RowCell
              className={twJoin(
                'whitespace-nowrap font-medium',
                'text-gray-900 dark:text-white'
              )}>
              {name}
            </Table.RowCell>
            <Table.RowCell>{email}</Table.RowCell>
            <Table.RowCell className='flex justify-end'>
              <Button.Group>
                <Button
                  as={Link}
                  href={route('teacher.show', id)}
                  color='blue'
                  size='xs'>
                  <Eye className='h-4 w-4' />
                </Button>
                <Button
                  as='button'
                  color='failure'
                  onClick={() => handleDestroyTeacher(id, name)}
                  size='xs'>
                  <Trash2 className='mx-1 h-4 w-4' />
                </Button>
              </Button.Group>
            </Table.RowCell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}

// ----------------------------------------------
function GroupTeacherNotFound() {
  return (
    <NotFound>
      <XCircle />
      Nenhum professor na turma...
    </NotFound>
  )
}

// ==============================================
PageGroupTeacherIndex.layout = (page) => (
  <AuthLayout title={titles.index} breadcrumb={breadcrumbs.index}>
    {page}
  </AuthLayout>
)
