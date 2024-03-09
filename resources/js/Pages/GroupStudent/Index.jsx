import { Link } from '@inertiajs/react'
import { Button } from 'flowbite-react'
import { Eye, XCircle } from 'lucide-react'

import NotFound from '@/Components/NotFound'
import Table from '@/Components/Table'
import Title from '@/Components/Title'
import AuthLayout from '@/Layouts/AuthLayout'

import { breadcrumbs, titles } from './data'

// ====================================
export default function GroupStudentIndexPage({ group = {}, students = [] }) {
  const hasStudents = students?.length > 0

  console.log(group)
  console.log(students)
  return (
    <>
      {/* título */}
      <Title>
        <Title.Left title={titles.index} />
        {/* TODO: implementar PDF */}
      </Title>

      <br />

      {/* Exibe mensagem se não houver alunos */}
      {!hasStudents && <GroupStudentNotFound />}

      {/* student Table */}
      {hasStudents && <StudentTable students={students} />}
    </>
  )
}

function StudentTable({ students = [] }) {
  return (
    <Table>
      <Table.Header>
        <Table.HeaderCell className='w-0'>ID</Table.HeaderCell>
        <Table.HeaderCell>Nome</Table.HeaderCell>
        <Table.HeaderCell></Table.HeaderCell>
      </Table.Header>

      <Table.Body>
        {students.map(({ id, name }) => (
          <Table.Row key={id}>
            <Table.RowCell className='font-medium'>{id}</Table.RowCell>
            <Table.RowCell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
              {name}
            </Table.RowCell>
            <Table.RowCell className='flex justify-end'>
              <Button
                as={Link}
                href={route('student.show', id)}
                color='blue'
                size='xs'>
                <Eye className='mr-1 h-4 w-4' />
                visualizar
              </Button>
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

// -----------------------------------
GroupStudentIndexPage.layout = (page) => (
  <AuthLayout title={titles.index} breadcrumb={breadcrumbs.index}>
    {page}
  </AuthLayout>
)
