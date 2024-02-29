import { Card } from 'flowbite-react'

import AuthLayout from '@/Layouts/AuthLayout'
import { breadcrumbs, titles } from './data'

// ====================================
export default function GroupsPage({ groups }) {
  console.log(groups)
  return (
    <>
      <section className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        {groups &&
          groups?.map((group) => <GroupsCard group={group} key={group.id} />)}
      </section>
    </>
  )
}

function GroupsCard({ group }) {
  const { name, academic_year } = group
  return (
    <Card href={'#'} className='max-w-sm'>
      <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
        {name}
      </h5>
      <p className='font-normal text-gray-700 dark:text-gray-400'>
        {academic_year.year}
      </p>
    </Card>
  )
}

// -----------------------------------
GroupsPage.layout = (page) => (
  <AuthLayout title={titles.groups} breadcrumb={breadcrumbs.groups}>
    {page}
  </AuthLayout>
)
