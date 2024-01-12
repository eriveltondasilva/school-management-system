import { Breadcrumb } from 'flowbite-react'

// ==================================
export default function BreadcrumbRoot({ children }) {
  return (
    <Breadcrumb aria-label='breadcrumb'>
      {children}
    </Breadcrumb>
  )
}
