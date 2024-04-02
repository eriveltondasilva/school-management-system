import { Link, usePage } from '@inertiajs/react'
import { Button, Tooltip } from 'flowbite-react'
import { Eye, Plus, XCircle } from 'lucide-react'
import { twJoin } from 'tailwind-merge'

import Alert from '@/Components/Alert'
import NotFound from '@/Components/NotFound'
import Table from '@/Components/Table'
import Title from '@/Components/Title'

import useActionsHandler from '@/Hooks/useActionsHandler'
import AuthLayout from '@/Layouts/AuthLayout'

import { breadcrumbs, titles } from './data'

// ==============================================
export default function PageGroupCreateTeacher({ group = {}, teachers = [] }) {
  const { message } = usePage().props.flash || {}

  const pageTitle = `${titles.create} - ${group.name}`
  const hasTeachers = teachers.length > 0

  return (
    <>
      {/* Mensagem */}
      {message && (
        <Alert color='success' className='mb-4'>
          {message}
        </Alert>
      )}

      {/* Título */}
      <Title>
        <Title.Left title={pageTitle} />
      </Title>

      {/* Verificar se o professor não foi encontrado */}
      {!hasTeachers && <TeacherNotFound />}

      {/* Formulário do professor */}
      {hasTeachers && <TeacherTable {...{ group, teachers }} />}
    </>
  )
}

// ----------------------------------------------
function TeacherTable({ group = {}, teachers = [] }) {
  const actionOptions = {
    route: 'admin.groups.teachers.store',
    message: 'Tem certeza que deseja adicionar professor(a)?',
  }
  const { isLoading, handleStoreItem } = useActionsHandler(actionOptions)

  return (
    <Table>
      {/* Table Header */}
      <Table.Header>
        <Table.HeaderCell className='w-0'></Table.HeaderCell>
        <Table.HeaderCell>Nome</Table.HeaderCell>
        <Table.HeaderCell>CPF</Table.HeaderCell>
        <Table.HeaderCell></Table.HeaderCell>
      </Table.Header>

      {/* Table Body */}
      <Table.Body>
        {teachers.map((teacher, index) => (
          <Table.Row key={teacher.id}>
            <Table.RowCell className='font-bold'>{++index}</Table.RowCell>
            <Table.RowCell
              className={twJoin(
                'whitespace-nowrap font-medium',
                'text-gray-900 dark:text-white'
              )}>
              {teacher.name}
            </Table.RowCell>
            <Table.RowCell>{teacher.cpf}</Table.RowCell>
            <Table.RowCell className='flex justify-end'>
              <Button.Group>
                <Button
                  as={Link}
                  href={route('admin.teachers.show', { teacher: teacher.id })}
                  color='green'
                  size='xs'>
                  <Tooltip content='Visualizar Professor'>
                    <Eye className='h-4 w-4' />
                  </Tooltip>
                </Button>
                <Button
                  as='button'
                  color='blue'
                  onClick={() =>
                    handleStoreItem({ group: group.id, teacher: teacher.id })
                  }
                  disabled={isLoading}
                  size='xs'>
                  <Tooltip content='Adicionar Professor'>
                    <Plus className='mx-1 h-4 w-4' />
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
function TeacherNotFound() {
  return (
    <NotFound>
      <XCircle />
      Nenhum professor disponível para adicionar à turma...
    </NotFound>
  )
}

// ==============================================
PageGroupCreateTeacher.layout = (page) => (
  <AuthLayout
    title={titles.createTeacher}
    breadcrumb={breadcrumbs.createTeacher}
    children={page}
  />
)
