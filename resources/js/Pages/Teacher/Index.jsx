import { Link } from '@inertiajs/react'
import { Button, Tooltip } from 'flowbite-react'
import { Eye, Pencil, UserRoundPlus } from 'lucide-react'

import Searchbar from '@/Components/Searchbar'
import Table from '@/Components/Table'
import useSearchbarFilteredItems from '@/Hooks/useSearchbarFilteredItems'
import AuthLayout from '@/Layouts/AuthLayout'

import { breadcrumbs, titles } from './data'

// ====================================
export default function TeacherIndexPage({ teachers }) {
  const { filter, filteredItems, handleFilterChange } =
    useSearchbarFilteredItems(teachers)

  return (
    <>
      {/* Teacher Searchbar */}
      <Searchbar>
        <Searchbar.Left value={filter} onChange={handleFilterChange} />
        <Searchbar.Right>
          <Button as={Link} href={route('teacher.create')} color='blue'>
            <UserRoundPlus className='mr-2 h-5 w-5' />
            cadastrar professor
          </Button>
        </Searchbar.Right>
      </Searchbar>

      {/* Teacher Table */}
      <TeacherTable items={filteredItems} filter={filter} />
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
            <ButtonIndex
              text='visualizar professor'
              href={route('teacher.show', item)}>
              <Eye className='h-4 w-4' />
            </ButtonIndex>

            {/* Botão de editar */}
            <ButtonIndex
              text='editar professor'
              href={route('teacher.edit', item)}>
              <Pencil className='h-4 w-4' />
            </ButtonIndex>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}

function ButtonIndex({ text, href, children }) {
  return (
    <Tooltip content={text}>
      <Button href={href} color='blue' size='xs' as={Link}>
        {children}
      </Button>
    </Tooltip>
  )
}

// ------------------------------------
TeacherIndexPage.layout = (page) => (
  <AuthLayout title={titles.index} breadcrumb={breadcrumbs.index}>
    {page}
  </AuthLayout>
)
