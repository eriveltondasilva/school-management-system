import { breadcrumbs, titles } from './data'

// ===============================================
export default function PageSubjectIndex() {
  return <></>
}

// -----------------------------------------------
PageSubjectIndex.layout = (page) => (
  <Layout title={titles.index} breadcrumb={breadcrumbs.index} children={page} />
)
