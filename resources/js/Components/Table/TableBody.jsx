import { Link } from '@inertiajs/react'
import { Button, Table } from 'flowbite-react'
import { Eye, Pencil } from 'lucide-react'

// ====================================
export default function TableBody({ items }) {
  if (!items) return null

  return (
    <div className='overflow-x-auto'>
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Nome</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Gênero</Table.HeadCell>
          <Table.HeadCell className='text-center'>Ações</Table.HeadCell>
        </Table.Head>
        <Table.Body className='divide-y'>
          {items.map((item) => (
            <TableRow key={item.id} item={item} />
          ))}
        </Table.Body>
      </Table>
    </div>
  )
}

// ------------------------------------
function TableRow({ item }) {
  const { name, email, gender } = item.user

  return (
    <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
      <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
        {name}
      </Table.Cell>
      <Table.Cell>{email}</Table.Cell>
      <Table.Cell>{gender === 'M' ? 'Masculino' : 'Feminino'}</Table.Cell>
      <Table.Cell className='flex justify-center space-x-2'>
        <Button as={Link} href={route('student.show', item)} color='blue' size='xs'>
          <Eye className='h-4 w-4' />
        </Button>
        <Button as={Link} href={route('student.edit', item)} color='blue' size='xs'>
          <Pencil className='h-4 w-4' />
        </Button>
      </Table.Cell>
    </Table.Row>
  )
}
