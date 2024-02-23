import { Table } from 'flowbite-react'

// ====================================
export default function TableRoot({ children }) {
  return (
    <div className='overflow-x-auto'>
      <Table hoverable>{children}</Table>
    </div>
  )
}
