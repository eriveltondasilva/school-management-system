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
import getGenderName from '@/Utils/getGenderName'

import { breadcrumbs, titles } from './data'

// ==============================================
export default function GroupStudentIndexPage({ group = {}, students = [] }) {
  const hasStudents = students?.length > 0
  const flash = usePage().props.flash || {}

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
        <Title.Left title={`${titles.index} - ${group.name}`} />
        <Title.Right>
          <Button
            as={Link}
            href={route('group-students.create', group.id)}
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

      {/* Tabela de alunos */}
      {hasStudents && <StudentTable {...{ group, students }} />}
    </>
  )
}

// ----------------------------------------------
function StudentTable({ group = {}, students = [] }) {
  const handleDestroyStudent = (id, name, gender) => {
    const genderText = gender === 'M' ? 'o aluno' : 'a aluna'
    const message = `Tem certeza que deseja remover ${genderText}\n${name}, matrícula ${formatId(id)}?`

    router.delete(
      route('group-students.destroy', { group: group.id, student: id }),
      { onBefore: () => confirm(message) }
    )
  }

  return (
    <Table>
      <Table.Header>
        <Table.HeaderCell className='w-0'></Table.HeaderCell>
        <Table.HeaderCell>Nome</Table.HeaderCell>
        <Table.HeaderCell>Gênero</Table.HeaderCell>
        <Table.HeaderCell></Table.HeaderCell>
      </Table.Header>

      <Table.Body>
        {students.map(({ id, name, gender }, index) => (
          <Table.Row key={id}>
            <Table.RowCell className='font-medium'>{++index}</Table.RowCell>
            <Table.RowCell
              className={twJoin(
                'whitespace-nowrap font-medium',
                'text-gray-900 dark:text-white'
              )}>
              {name}
            </Table.RowCell>
            <Table.RowCell>{getGenderName(gender)}</Table.RowCell>
            <Table.RowCell className='flex justify-end'>
              <Button.Group>
                <Button
                  as={Link}
                  href={route('student.show', id)}
                  color='blue'
                  size='xs'>
                  <Eye className='h-4 w-4' />
                </Button>
                <Button
                  as='button'
                  color='failure'
                  onClick={() => handleDestroyStudent(id, name, gender)}
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
function GroupStudentNotFound() {
  return (
    <NotFound>
      <XCircle />
      Nenhum aluno na turma...
    </NotFound>
  )
}

// ==============================================
GroupStudentIndexPage.layout = (page) => (
  <AuthLayout title={titles.index} breadcrumb={breadcrumbs.index}>
    {page}
  </AuthLayout>
)
