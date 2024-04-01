import { Link, usePage } from '@inertiajs/react'
import { Button, Tooltip } from 'flowbite-react'
import { Eye, Plus, Trash2, XCircle } from 'lucide-react'
import { twJoin } from 'tailwind-merge'

import Alert from '@/Components/Alert'
import NotFound from '@/Components/NotFound'
import Table from '@/Components/Table'
import Title from '@/Components/Title'

import useActionsHandler from '@/Hooks/useActionsHandler'
import AuthLayout from '@/Layouts/AuthLayout'

import { breadcrumbs, titles } from './data'

// ==============================================
export default function PageGroupIndexTeachers({ group = {}, teachers = [] }) {
  const flash = usePage().props.flash || {}

  const pageTitle = `${titles.index} - ${group.name}`
  const hasTeachers = teachers.length > 0

  return (
    <>
      {/* Mensagem flash */}
      {flash.message && (
        <Alert color='failure' className='mb-4'>
          {flash.message}
        </Alert>
      )}

      {/* Título */}
      <Title>
        <Title.Left title={pageTitle} />
        <Title.Right>
          <Button
            as={Link}
            href={route('admin.groups.teachers.create', { group: group.id })}
            color='blue'
            className='uppercase'>
            <Plus className='mr-2 h-5 w-5' />
            Adicionar professor
          </Button>
        </Title.Right>
        {/* TODO: implementar PDF */}
      </Title>

      <br />

      {/* Exibe mensagem se não houver professores */}
      {!hasTeachers && <TeacherNotFound />}

      {/* Tabela de professores */}
      {hasTeachers && <TeacherTable {...{ group, teachers }} />}
    </>
  )
}

// ----------------------------------------------
function TeacherTable({ group = {}, teachers = [] }) {
  const actionOptions = {
    route: 'admin.groups.teachers.destroy',
    message: 'Tem certeza que deseja remover professor(a)?',
  }
  const { isLoading, handleDeleteItem } = useActionsHandler(actionOptions)

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
            <Table.RowCell className='font-medium'>{++index}</Table.RowCell>
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
                  color='blue'
                  size='xs'>
                  <Tooltip content='Visualizar Professor(a)'>
                    <Eye className='h-4 w-4' />
                  </Tooltip>
                </Button>
                <Button
                  as='button'
                  color='failure'
                  onClick={() =>
                    handleDeleteItem({ group: group.id, teacher: teacher.id })
                  }
                  disabled={isLoading}
                  size='xs'>
                  <Tooltip content='Remover Professor(a)'>
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
function TeacherNotFound() {
  return (
    <NotFound>
      <XCircle />
      Nenhum professor encontrado na turma...
    </NotFound>
  )
}

// ==============================================
PageGroupIndexTeachers.layout = (page) => (
  <AuthLayout
    title={titles.indexTeachers}
    breadcrumb={breadcrumbs.indexTeachers}
    children={page}
  />
)
