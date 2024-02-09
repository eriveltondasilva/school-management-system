// prettier-ignore
export const title = {
  create: 'Cadastrar aluno',
  edit  : 'Editar aluno',
  index : 'Listar alunos',
  show  : 'Visualizar aluno',
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
