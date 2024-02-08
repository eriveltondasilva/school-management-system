import { Link } from '@inertiajs/react'
import { Button, Table } from 'flowbite-react'
import { Eye, Pencil } from 'lucide-react'
import { memo } from 'react'

// ====================================
export default memo(function TableRow({ item }) {
  const { id, name, email, gender } = item.user
  const genderLabel = gender === 'M' ? 'Masculino' : 'Feminino'

  if (!item) return

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
        {/* Botão de visualizar */}
        <Button
          as={Link}
          href={route('student.show', item)}
          color='blue'
          size='xs'>
          <Eye className='h-4 w-4' />
        </Button>
        {/* Botão de editar */}
        <Button
          as={Link}
          href={route('student.edit', item)}
          color='blue'
          size='xs'>
          <Pencil className='h-4 w-4' />
        </Button>
      </Table.Cell>
    </Table.Row>
  )
})
