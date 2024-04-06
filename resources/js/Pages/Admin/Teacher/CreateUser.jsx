import { breadcrumbs, titles } from './data'

export default function PageTeacherCreateUser({ teacher = {} }) {
  return null
}

// ------------------------------------
PageTeacherCreateUser.layout = (page) => (
  <AuthLayout
    title={titles.createUser}
    breadcrumb={breadcrumbs.createUser}
    children={page}
  />
)
