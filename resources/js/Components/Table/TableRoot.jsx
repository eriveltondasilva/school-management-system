import { Table } from 'flowbite-react'

// ====================================
export default function TableRoot({ children }) {
  return (
    <div className=''>
      <div className='overflow-x-auto'>
        <Table hoverable>{children}</Table>
      </div>
    </div>
  )
}
