import { Link, usePage } from '@inertiajs/react'
import { Button } from 'flowbite-react'
import { Eye, Plus, Trash2, XCircle } from 'lucide-react'

import Alert from '@/Components/Alert'
import NotFound from '@/Components/NotFound'
import Table from '@/Components/Table'
import Title from '@/Components/Title'
import AuthLayout from '@/Layouts/AuthLayout'

import { breadcrumbs, titles } from './data'

// ====================================
export default function GroupStudentIndexPage({ group = {}, students = [] }) {
  const hasStudents = students?.length > 0
  const { flash = {} } = usePage().props || {}

  return (
    <>
      {/* flash message */}
      {flash?.message && (
        <Alert color='success' className='mb-4'>
          <span className='font-medium'>{flash.message}</span>
        </Alert>
      )}

      {/* título */}
      <Title>
        <Title.Left title={`${titles.index}: ${group.name}`} />
        <Title.Right>
          <Button
            as={Link}
            href={route('group-students.add', group.id)}
            color='blue'
            className=''>
            <Plus className='mr-2 h-5 w-5' />
            Adicionar alunos
          </Button>
        </Title.Right>
        {/* TODO: implementar PDF */}
      </Title>

      <br />

      {/* Exibe mensagem se não houver alunos */}
      {!hasStudents && <GroupStudentNotFound />}

      {/* student Table */}
      {hasStudents && <StudentTable students={students} group={group} />}
    </>
  )
}

function StudentTable({ students = [], group = {} }) {
  return (
    <Table>
      <Table.Header>
        <Table.HeaderCell className='w-0'></Table.HeaderCell>
        <Table.HeaderCell>Nome</Table.HeaderCell>
        <Table.HeaderCell></Table.HeaderCell>
      </Table.Header>

      <Table.Body>
        {students.map(({ id, name }, index) => (
          <Table.Row key={id}>
            <Table.RowCell className='font-medium'>{++index}</Table.RowCell>
            <Table.RowCell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
              {name}
            </Table.RowCell>
            <Table.RowCell className='flex justify-end'>
              <TableButtons studentId={id} groupId={group.id} />
            </Table.RowCell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}

function GroupStudentNotFound() {
  return (
    <NotFound>
      <XCircle />
      Nenhum aluno na turma...
    </NotFound>
  )
}

function TableButtons({ studentId = 0, groupId = 0 }) {
  return (
    <Button.Group>
      <Button
        as={Link}
        href={route('student.show', studentId)}
        color='blue'
        size='xs'>
        <Eye className='h-4 w-4' />
      </Button>
      <Button
        as={Link}
        method='delete'
        href={route('group-students.destroy', {
          group: groupId,
          student: studentId,
        })}
        color='red'
        size='xs'>
        <Trash2 className='h-4 w-4' />
      </Button>
    </Button.Group>
  )
}

// -----------------------------------
GroupStudentIndexPage.layout = (page) => (
  <AuthLayout title={titles.index} breadcrumb={breadcrumbs.index}>
    {page}
  </AuthLayout>
)
