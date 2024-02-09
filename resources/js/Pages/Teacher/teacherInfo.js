// prettier-ignore
export const title = {
  create: 'Cadastrar professores',
  edit  : 'Editar professores',
  index : 'Listar professores',
  show  : 'Visualizar professores',
}

// ------------------------------------
const baseBreadcrumb = { title: title.index, route: 'student.index' }
// prettier-ignore
export const breadcrumb = {
  index : [{ title: title.index }],
  create: [baseBreadcrumb, { title: title.create }],
  edit  : [baseBreadcrumb, { title: title.edit }],
  show  : [baseBreadcrumb, { title: title.show }],
}
