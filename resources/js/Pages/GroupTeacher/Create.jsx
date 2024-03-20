import { Link, router, usePage } from '@inertiajs/react'
import { Button, Tooltip } from 'flowbite-react'
import { Eye, Plus, XCircle } from 'lucide-react'
import { twJoin } from 'tailwind-merge'

import Alert from '@/Components/Alert'
import NotFound from '@/Components/NotFound'
import Table from '@/Components/Table'
import Title from '@/Components/Title'

import AuthLayout from '@/Layouts/AuthLayout'

import { breadcrumbs, titles } from './data'

// ==============================================
export default function PageGroupTeacherCreate({ group = {}, teachers = [] }) {
  const flash = usePage().props.flash || {}

  const pageTitle = `${titles.create} - ${group.name}`
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
      </Title>

      {/* Verificar se o professor não foi encontrado */}
      {!hasTeachers && <GroupTeacherNotFound />}

      {/* Formulário do professor */}
      {hasTeachers && <GroupTeacherTable {...{ group, teachers }} />}
    </>
  )
}

// ----------------------------------------------
function GroupTeacherTable({ group = {}, teachers = [] }) {
  const handleAddTeacher = (id, name, cpf) => {
    const message = `Tem certeza que deseja adicionar professor(a)\n${name}, CPF ${cpf},\nà turma do ${group.name}?`

    if (!confirm(message)) return

    router.post(
      route('group-teachers.add-teacher', { group: group.id, teacher: id })
    )
  }

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
        {teachers.map(({ id, name, cpf }, index) => (
          <Table.Row key={id}>
            <Table.RowCell className='font-bold'>{++index}</Table.RowCell>
            <Table.RowCell
              className={twJoin(
                'whitespace-nowrap font-medium',
                'text-gray-900 dark:text-white'
              )}>
              {name}
            </Table.RowCell>
            <Table.RowCell>{cpf}</Table.RowCell>
            <Table.RowCell className='flex justify-end'>
              <Button.Group>
                <Button
                  as={Link}
                  href={route('teacher.show', id)}
                  color='green'
                  size='xs'>
                  <Tooltip content='Visualizar Professor'>
                    <Eye className='h-4 w-4' />
                  </Tooltip>
                </Button>
                <Button
                  as='button'
                  color='blue'
                  onClick={() => handleAddTeacher(id, name, cpf)}
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
function GroupTeacherNotFound() {
  return (
    <NotFound>
      <XCircle />
      Nenhum professor disponível para adicionar à turma...
    </NotFound>
  )
}

// ==============================================
PageGroupTeacherCreate.layout = (page) => (
  <AuthLayout title={titles.create} breadcrumb={breadcrumbs.create}>
    {page}
  </AuthLayout>
)
