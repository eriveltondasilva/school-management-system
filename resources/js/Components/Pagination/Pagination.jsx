import { Pagination } from 'flowbite-react'
import { useState } from 'react'

export function PaginationRoot({ children }) {
  return (
    <footer className='relative overflow-hidden rounded-b-lg bg-white shadow-md dark:bg-gray-800'>
      <nav
        className='flex flex-col items-start justify-between space-y-3 p-4 md:flex-row md:items-center md:space-y-0'
        aria-label='Table navigation'>
        {children}
      </nav>
    </footer>
  )
}

export function PaginationTrigger() {
  const [currentPage, setCurrentPage] = useState(1)

  const onPageChange = (page) => setCurrentPage(page)

  return (
    <div className='flex overflow-x-auto sm:justify-center'>
      <Pagination
        layout='table'
        currentPage={currentPage}
        totalPages={20}
        onPageChange={onPageChange}
        showIcons
      />
    </div>
  )
}
