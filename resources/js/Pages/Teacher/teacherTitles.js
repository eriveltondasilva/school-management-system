export const title = {
  create: 'Cadastrar professores',
  edit: 'Editar professores',
  index: 'Listar professores',
  show: 'Visualizar professores',
}

// ------------------------------------
const baseBreadcrumb = { title: title.index, route: 'student.index' }

export const breadcrumb = {
  edit: [baseBreadcrumb, { title: title.edit }],
  create: [baseBreadcrumb, { title: title.create }],
  show: [baseBreadcrumb, { title: title.show }],
  index: [baseBreadcrumb, { title: title.index }],
}
