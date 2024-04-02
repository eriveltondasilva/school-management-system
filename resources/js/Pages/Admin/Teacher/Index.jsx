import { Link } from '@inertiajs/react'
import { Button } from 'flowbite-react'
import { Eye, PencilLine, Plus, Search, Undo2 } from 'lucide-react'
import { useState } from 'react'

import Input from '@/Components/Input'
import NotFound from '@/Components/NotFound'
import Pagination from '@/Components/Pagination'
import Searchbar from '@/Components/Searchbar'
import Table from '@/Components/Table'
import Title from '@/Components/Title'

import useFormHandler from '@/Hooks/useFormHandler'
import AuthLayout from '@/Layouts/AuthLayout'

import { breadcrumbs, titles } from './data'

// ===============================================
export default function PageTeacherIndex({ teachers = [] }) {
  const paramsSearch = route().params.search || ''
  const [search, setSearch] = useState(paramsSearch)

  const hasTeachers = teachers.data.length > 0
  const hasPagination = teachers.total > teachers.data.length

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const formDataOptions = {
    method: 'GET',
    route: 'admin.teachers.index',
  }
  const { handleSubmit, isLoading } = useFormHandler(formDataOptions)

  return (
    <>
      {/* Título */}
      <Title>
        <Title.Left title={titles.index} />
        <Title.Right>
          <Button
            as={Link}
            href={route('admin.teachers.create')}
            color='blue'
            className=''>
            <Plus className='mr-2 h-5 w-5' />
            Cadastrar Professor
          </Button>
        </Title.Right>
        {/* TODO: implementar PDF */}
      </Title>

      {/* Teacher Searchbar */}
      <Searchbar onSubmit={handleSubmit}>
        <Searchbar.Left>
          <Input.Text
            id='search'
            type='search'
            className='mb-0'
            placeholder='Pesquisar professor...'
            defaultValue={search}
            onChange={handleChange}
            autoFocus
          />
          <Button.Group>
            <Button type='submit' color='blue' disabled={isLoading || !search}>
              <Search className='h-5 w-5' />
            </Button>
            <Button
              as={Link}
              href={route('admin.teachers.index')}
              color='light'
              disabled={isLoading}>
              <Undo2 className='h-5 w-5' />
            </Button>
          </Button.Group>
        </Searchbar.Left>
      </Searchbar>

      {/* Teacher NotFound */}
      {!hasTeachers && <TeacherNotFound />}

      {/* Teacher Table */}
      {hasTeachers && <TeacherTable teachers={teachers.data} />}

      {/* Pagination */}
      {hasPagination && <TeacherPagination teachers={teachers} />}
    </>
  )
}

// -----------------------------------------------
function TeacherTable({ teachers = [] }) {
  return (
    <Table>
      {/* Table Header */}
      <Table.Header>
        <Table.HeaderCell className='w-0'></Table.HeaderCell>
        <Table.HeaderCell>Nome</Table.HeaderCell>
        <Table.HeaderCell>Email</Table.HeaderCell>
        <Table.HeaderCell></Table.HeaderCell>
      </Table.Header>

      {/* Table Body */}
      <Table.Body>
        {teachers.map((teacher) => (
          <Table.Row key={teacher.id}>
            <Table.RowCell className='font-bold'>{teacher.id}</Table.RowCell>
            <Table.RowCell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
              {teacher.name}
            </Table.RowCell>
            <Table.RowCell>{teacher.email}</Table.RowCell>
            <Table.RowCell className='flex justify-end'>
              <Button.Group>
                <Button
                  as={Link}
                  href={route('admin.teachers.show', { teacher: teacher.id })}
                  color='blue'
                  size='xs'>
                  <Eye className='h-4 w-4' />
                </Button>
                <Button
                  as={Link}
                  href={route('admin.teachers.edit', { teacher: teacher.id })}
                  color='green'
                  size='xs'>
                  <PencilLine className='ml-2 h-4 w-4' />
                </Button>
              </Button.Group>
            </Table.RowCell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}

// -----------------------------------------------
function TeacherNotFound() {
  return <NotFound icon>Nenhum professor encontrado...</NotFound>
}

// -----------------------------------------------
function TeacherPagination({ teachers = {} }) {
  const { total, from, to, next_page_url, prev_page_url } = teachers

  return (
    <Pagination>
      <Pagination.Left to={to} from={from} total={total} />
      <Pagination.Right>
        <Pagination.Previous href={prev_page_url} />
        <Pagination.Next href={next_page_url} />
      </Pagination.Right>
    </Pagination>
  )
}

// ===============================================
PageTeacherIndex.layout = (page) => (
  <AuthLayout
    title={titles.index}
    breadcrumb={breadcrumbs.index}
    children={page}
  />
)
