import { Link } from '@inertiajs/react'
import { Button } from 'flowbite-react'
import { Eye, Search, Undo2, UserPlus } from 'lucide-react'
import { useState } from 'react'

import Input from '@/Components/Input'
import NotFound from '@/Components/NotFound'
import Pagination from '@/Components/Pagination'
import Searchbar from '@/Components/Searchbar'
import Table from '@/Components/Table'
import Title from '@/Components/Title'
import useFormDate from '@/Hooks/useFormDate'
import AuthLayout from '@/Layouts/AuthLayout'

import { breadcrumbs, titles } from './data'

// ====================================
export default function TeacherIndexPage({ teachers = [] }) {
  const paramsSearch = route().params.search || ''
  const hasTeachers = teachers.data?.length > 0
  const [search, setSearch] = useState(paramsSearch)

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const formDataOptions = {
    routeName: 'teacher.index',
  }
  const { handleSubmit, isLoading } = useFormDate(formDataOptions)

  console.log(teachers)
  return (
    <>
      {/* título */}
      <Title>
        <Title.Left title={titles.index} />
        <Title.Right>
          <Button
            as={Link}
            href={route('teacher.create')}
            color='blue'
            className=''>
            <UserPlus className='mr-2 h-5 w-5' />
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
              href={route('teacher.index')}
              color='blue'
              disabled={isLoading}>
              <Undo2 className='h-5 w-5' />
            </Button>
          </Button.Group>
        </Searchbar.Left>
      </Searchbar>

      {!hasTeachers && <TeacherNotFound />}

      {/* Teacher Table */}
      {hasTeachers && <TeacherTable teachers={teachers.data} />}

      {/* Pagination */}
      {/* {hasTeachers && <TeacherPagination links={teachers.links} />} */}
    </>
  )
}

// ------------------------------------
function TeacherTable({ teachers = [] }) {
  return (
    <Table>
      <Table.Header>
        <Table.HeaderCell className='w-0'>Id</Table.HeaderCell>
        <Table.HeaderCell>Nome</Table.HeaderCell>
        <Table.HeaderCell>Email</Table.HeaderCell>
        <Table.HeaderCell></Table.HeaderCell>
      </Table.Header>

      <Table.Body>
        {teachers.map(({ id, name, email }) => (
          <Table.Row key={id}>
            <Table.RowCell className='font-bold'>{id}</Table.RowCell>
            <Table.RowCell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
              {name}
            </Table.RowCell>
            <Table.RowCell>{email}</Table.RowCell>
            <Table.RowCell className='flex justify-center'>
              <Button
                as={Link}
                href={route('teacher.show', id)}
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

function TeacherNotFound() {
  return <NotFound icon>Nenhum professor encontrado...</NotFound>
}

function TeacherPagination() {
  return (
    <Pagination>
      <Pagination.Trigger />
    </Pagination>
  )
}

// ------------------------------------
TeacherIndexPage.layout = (page) => (
  <AuthLayout title={titles.index} breadcrumb={breadcrumbs.index}>
    {page}
  </AuthLayout>
)
