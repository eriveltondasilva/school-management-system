import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'

// ====================================
export default function Calendar() {
  const pageTitle = 'Listar alunos'

  // prettier-ignore
  const breadcrumbItems = [
    { title: 'Painel', route: 'dashboard' },
    { title: pageTitle }
  ]

  return (
    <AuthenticatedLayout title={pageTitle} breadcrumbItems={breadcrumbItems}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam ducimus sit voluptatum blanditiis, ipsa laborum error eaque obcaecati sapiente placeat? Animi quasi vitae laudantium ut nobis dolorum commodi sint aspernatur eius est nihil excepturi numquam autem pariatur, maxime fugit inventore dolorem mollitia deleniti possimus aut atque. Fugiat in impedit adipisci fuga. Tempore consequatur vel eligendi possimus officia pariatur nemo, architecto quis nulla ea mollitia nostrum vero deleniti commodi consequuntur dolore libero fuga illum ullam eaque est? Ducimus ut alias molestias asperiores, enim sunt, placeat neque eius deserunt quidem odio, quibusdam magni cum expedita id cumque obcaecati accusamus mollitia distinctio? Ullam!
    </AuthenticatedLayout>
  )
}
