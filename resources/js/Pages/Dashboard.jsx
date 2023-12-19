import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, usePage } from '@inertiajs/react'

export default function Dashboard() {
  const { name } = usePage().props.auth.user

  return (
    <AuthenticatedLayout header='Dashboard'>
      <Head title='Dashboard' />

      <div className='py-12'>
        <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
          <div className='overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg'>
            <div className='p-6 text-gray-900 dark:text-gray-100'>
              You're, logged in! 1234567890 <br />
              {name} <br />
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}
