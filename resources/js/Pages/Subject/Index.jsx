import AuthLayout from '@/Layouts/AuthLayout'

import { breadcrumbs, titles } from './data'

// ===============================================
export default function PageSubjectIndex({ subjects, teachers }) {
  console.log(subjects)
  console.log(teachers)
  return <pre>{JSON.stringify(subjects, null, 2)}</pre>
}

// -----------------------------------------------
PageSubjectIndex.layout = (page) => (
  <AuthLayout
    title={titles.index}
    breadcrumb={breadcrumbs.index}
    children={page}
  />
)
