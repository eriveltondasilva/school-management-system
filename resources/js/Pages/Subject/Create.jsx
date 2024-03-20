import { breadcrumbs, titles } from './data'

// ===============================================
export default function PageSubjectCreate() {
  return <></>
}

// -----------------------------------------------
PageSubjectCreate.layout = (page) => (
  <Layout
    title={titles.create}
    breadcrumb={breadcrumbs.create}
    children={page}
  />
)
