import Searchbar from '@/Components/Searchbar'
import Table from '@/Components/Table'
import AuthLayout from '@/Layouts/AuthLayout'
import { breadcrumbs, titles } from './data'

import useSearchbarFilteredItems from '@/Hooks/useSearchbarFilteredItems'

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
          <Searchbar.RightButton href={route('teacher.create')}>
            cadastrar professor
          </Searchbar.RightButton>
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
            <Table.RowButtonShow routeName='teacher.show' item={item} />
            {/* Botão de editar */}
            <Table.RowButtonEdit routeName='teacher.edit' item={item} />
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}

// ------------------------------------
TeacherIndexPage.layout = (page) => (
  <AuthLayout title={titles.index} breadcrumb={breadcrumbs.index}>
    {page}
  </AuthLayout>
)
