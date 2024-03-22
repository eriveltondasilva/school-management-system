import { Link, router, usePage } from '@inertiajs/react'
import { Button, Tooltip } from 'flowbite-react'
import { Eye, Plus, Trash2, XCircle } from 'lucide-react'
import { useState } from 'react'
import { twJoin } from 'tailwind-merge'

import Alert from '@/Components/Alert'
import NotFound from '@/Components/NotFound'
import Table from '@/Components/Table'
import Title from '@/Components/Title'

import AuthLayout from '@/Layouts/AuthLayout'

import { breadcrumbs, titles } from './data'

// ==============================================
export default function PageSubjectListTeachers({
  subject = {},
  teachers = [],
}) {
  const flash = usePage().props.flash || {}

  const pageTitle = `${titles.listTeachers} - ${subject.name}`
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
            href={route('subject.add-teacher', subject.id)}
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
      {!hasTeachers && <NotFoundTeacher />}

      {/* Tabela de professores */}
      {hasTeachers && <TableTeacher {...{ subject, teachers }} />}
    </>
  )
}

// ----------------------------------------------
function TableTeacher({ subject = {}, teachers = [] }) {
  const [isLoading, setIsLoading] = useState(false)

  const handleDeleteTeacher = (id, name, cpf) => {
    const message = `Tem certeza que deseja remover professor(a)\n${name}, CPF ${cpf},\nda disciplina do ${subject.name}?`

    if (!confirm(message)) return

    try {
      setIsLoading(true)

      router.delete(
        route('subject.destroy-teacher', { subject: subject.id, teacher: id })
      )
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
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
            <Table.RowCell className='font-medium'>{++index}</Table.RowCell>
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
                  color='blue'
                  size='xs'>
                  <Tooltip content='Visualizar Professor(a)'>
                    <Eye className='h-4 w-4' />
                  </Tooltip>
                </Button>
                <Button
                  as='button'
                  color='failure'
                  onClick={() => handleDeleteTeacher(id, name, cpf)}
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
function NotFoundTeacher() {
  return (
    <NotFound>
      <XCircle />
      Nenhum professor encontrado na disciplina...
    </NotFound>
  )
}

// ==============================================
PageSubjectListTeachers.layout = (page) => (
  <AuthLayout
    title={titles.listTeachers}
    breadcrumb={breadcrumbs.listTeachers}
    children={page}
  />
)
