import { Link } from '@inertiajs/react'
import { Button } from 'flowbite-react'
import { Eye, Pencil, UserRoundPlus } from 'lucide-react'

import Searchbar from '@/Components/Searchbar'
import Table from '@/Components/Table'
import AuthLayout from '@/Layouts/AuthLayout'
import { breadcrumbs, titles } from './pagesInfo'

import useSearchbarFilteredItems from '@/Hooks/useSearchbarFilteredItems'

// ====================================
export default function TeacherIndex({ teachers }) {
  const { filter, filteredItems, handleFilterChange } =
    useSearchbarFilteredItems(teachers)

  return (
    <>
      {/* Teacher Searchbar */}
      <Searchbar>
        <Searchbar.Left value={filter} onChange={handleFilterChange} />
        <Searchbar.Right>
          {/* Botão de cadastrar */}
          <Button as={Link} href={route('teacher.create')} color='blue'>
            <UserRoundPlus className='mr-2 h-5 w-5' />
            cadastrar professor
          </Button>
        </Searchbar.Right>
      </Searchbar>

      {/* Teacher Table */}
      <TeacherTable items={filteredItems} />
    </>
  )
}

// ------------------------------------
function TeacherTable({ items }) {
  if (!items?.length) {
    return <Table.NotFoundItems text='Nenhum professor encontrado...' />
  }

  return (
    <Table>
      <Table.Header />
      <Table.Body>
        {items.map((item) => (
          <Table.Row key={item.id} item={item}>
            {/* Botão de visualizar */}
            <Button
              as={Link}
              href={route('teacher.show', item)}
              color='blue'
              size='xs'>
              <Eye className='h-4 w-4' />
            </Button>
            {/* Botão de editar */}
            <Button
              as={Link}
              href={route('teacher.edit', item)}
              color='blue'
              size='xs'>
              <Pencil className='h-4 w-4' />
            </Button>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}

// ------------------------------------
TeacherIndex.layout = (page) => (
  <AuthLayout title={titles.index} breadcrumb={breadcrumbs.index}>
    {page}
  </AuthLayout>
)
