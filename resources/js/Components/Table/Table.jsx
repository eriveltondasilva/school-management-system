import { Table } from 'flowbite-react'
import { memo } from 'react'

// ====================================
export function TableRoot({ children }) {
  return (
    <div className='overflow-x-auto'>
      <Table hoverable>{children}</Table>
    </div>
  )
}

// ====================================
export function TableHeader() {
  return (
    <Table.Head>
      <Table.HeadCell>Id</Table.HeadCell>
      <Table.HeadCell>Nome</Table.HeadCell>
      <Table.HeadCell>Email</Table.HeadCell>
      <Table.HeadCell>Gênero</Table.HeadCell>
      <Table.HeadCell className='text-center'>Ações</Table.HeadCell>
    </Table.Head>
  )
}

// ====================================
export function TableBody({ children }) {
  return <Table.Body className='divide-y'>{children}</Table.Body>
}

// ====================================
export const TableRow = memo(function TableRow({ item, children }) {
  if (!item) return null

  const { id, name, email, gender } = item
  const genderLabel = gender === 'M' ? 'Masculino' : 'Feminino'

  return (
    <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
      <Table.Cell className='whitespace-nowrap font-medium text-gray-900/50 dark:text-white/50'>
        {id}
      </Table.Cell>
      <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
        {name}
      </Table.Cell>
      <Table.Cell>{email}</Table.Cell>
      <Table.Cell>{genderLabel}</Table.Cell>
      <Table.Cell className='flex justify-center space-x-2'>
        {children}
      </Table.Cell>
    </Table.Row>
  )
})

// <Button
//           as={Link}
//           href={route('student.show', item)}
//           color='blue'
//           size='xs'>
//           <Eye className='h-4 w-4' />
//         </Button>
//         {/* Botão de editar */}
//         <Button
//           as={Link}
//           href={route('student.edit', item)}
//           color='blue'
//           size='xs'>
//           <Pencil className='h-4 w-4' />
//         </Button>
