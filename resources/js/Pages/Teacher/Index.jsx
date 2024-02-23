import { Link } from '@inertiajs/react'
import { Button } from 'flowbite-react'

import Searchbar from '@/Components/Searchbar'
import Table from '@/Components/Table'
import AuthLayout from '@/Layouts/AuthenticatedLayout'
import { breadcrumbs, titles } from './pagesInfo'

import useSearchbarFilteredItems from '@/Hooks/useSearchbarFilteredItems'

// ====================================
export default function TeacherIndex() {
  const { filter, filteredItems, handleFilterChange } =
    useSearchbarFilteredItems()

  return (
    <>
      {/* Teacher Searchbar */}
      <Searchbar>
        <Searchbar.Left value={filter} onChange={handleFilterChange} />
        <Searchbar.Right>
          <Button as={Link} href={route('teacher.create')} color='blue'>
            Cadastrar professor
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
          <Table.Row key={item.id} item={item} />
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
