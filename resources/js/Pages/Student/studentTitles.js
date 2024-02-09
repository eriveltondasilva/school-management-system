export const title = {
  create: 'Cadastrar aluno',
  edit: 'Editar aluno',
  index: 'Listar alunos',
  show: 'Visualizar aluno',
}

// ------------------------------------
const baseBreadcrumb = { title: title.index, route: 'student.index' }

export const breadcrumb = {
  edit: [baseBreadcrumb, { title: title.edit }],
  create: [baseBreadcrumb, { title: title.create }],
  show: [baseBreadcrumb, { title: title.show }],
  index: [baseBreadcrumb, { title: title.index }],
}
