import { Link, usePage } from '@inertiajs/react'
import { Button, Tooltip } from 'flowbite-react'
import { Eye, Plus, Trash2, XCircle } from 'lucide-react'
import { twJoin } from 'tailwind-merge'

import Alert from '@/Components/Alert'
import NotFound from '@/Components/NotFound'
import Table from '@/Components/Table'
import Title from '@/Components/Title'

import AuthLayout from '@/Layouts/AuthLayout'

import useActionsHandler from '@/Hooks/useActionsHandler'
import formatId from '@/Utils/formatId'
import getGenderName from '@/Utils/getGenderName'

import { breadcrumbs, titles } from './data'

// ==============================================
export default function PageGroupIndexStudents({ group = {}, students = [] }) {
  const { message } = usePage().props.flash || {}

  const pageTitle = `${titles.index} - ${group.name}`
  const hasStudents = students.length > 0

  return (
    <>
      {/* Mensagem flash */}
      {message && (
        <Alert color='failure' className='mb-4'>
          {message}
        </Alert>
      )}

      {/* Título */}
      <Title>
        <Title.Left title={pageTitle} />
        <Title.Right>
          <Button
            as={Link}
            href={route('admin.groups.students.create', { group: group.id })}
            color='blue'
            className='uppercase'>
            <Plus className='mr-2 h-5 w-5' />
            Adicionar alunos
          </Button>
        </Title.Right>
        {/* TODO: implementar PDF */}
      </Title>

      <br />

      {/* Exibe mensagem se não houver alunos */}
      {!hasStudents && <StudentNotFound />}

      {/* Tabela de alunos */}
      {hasStudents && <StudentTable {...{ group, students }} />}
    </>
  )
}

// ----------------------------------------------
function StudentTable({ group = {}, students = [] }) {
  const actionOptions = {
    route: 'admin.groups.students.destroy',
    message: 'Tem certeza que deseja remover o aluno(a)?',
  }
  const { isLoading, handleDeleteItem } = useActionsHandler(actionOptions)

  return (
    <Table>
      {/* Table Header */}
      <Table.Header>
        <Table.HeaderCell className='w-0'></Table.HeaderCell>
        <Table.HeaderCell>Nome</Table.HeaderCell>
        <Table.HeaderCell>Matrícula</Table.HeaderCell>
        <Table.HeaderCell>Gênero</Table.HeaderCell>
        <Table.HeaderCell></Table.HeaderCell>
      </Table.Header>

      {/* Table Body */}
      <Table.Body>
        {students.map((student, index) => (
          <Table.Row key={student.id}>
            <Table.RowCell className='font-medium'>{++index}</Table.RowCell>
            <Table.RowCell
              className={twJoin(
                'whitespace-nowrap font-medium',
                'text-gray-900 dark:text-white'
              )}>
              {student.name}
            </Table.RowCell>
            <Table.RowCell>{formatId(student.id)}</Table.RowCell>
            <Table.RowCell>{getGenderName(student.gender)}</Table.RowCell>
            <Table.RowCell className='flex justify-end'>
              <Button.Group>
                <Button
                  as={Link}
                  href={route('admin.students.show', { student: student.id })}
                  color='blue'
                  size='xs'>
                  <Tooltip content='Visualizar Aluno(a)'>
                    <Eye className='h-4 w-4' />
                  </Tooltip>
                </Button>
                <Button
                  as='button'
                  color='failure'
                  onClick={() =>
                    handleDeleteItem({ group: group.id, student: student.id })
                  }
                  disabled={isLoading}
                  size='xs'>
                  <Tooltip content='Remover Aluno(a)'>
                    <Trash2 className='mx-1 h-4 w-4' />
                  </Tooltip>
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
function StudentNotFound() {
  return (
    <NotFound>
      <XCircle />
      Nenhum aluno encontrado na turma...
    </NotFound>
  )
}

// ==============================================
PageGroupIndexStudents.layout = (page) => (
  <AuthLayout
    title={titles.indexStudents}
    breadcrumb={breadcrumbs.indexStudents}
    children={page}
  />
)
