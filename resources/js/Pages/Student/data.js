// prettier-ignore
export const titles = {
  create: 'Cadastrar aluno',
  edit  : 'Editar aluno',
  index : 'Listar alunos',
  show  : 'Visualizar aluno',
}

// ------------------------------------
const baseBreadcrumb = [
  { title: 'Painel', route: 'dashboard' },
  { title: titles.index, route: 'student.index' },
]

// prettier-ignore
export const breadcrumbs = {
  index : [baseBreadcrumb[0], { title: titles.index }],
  create: [...baseBreadcrumb, { title: titles.create }],
  edit  : [...baseBreadcrumb, { title: titles.edit }],
  show  : [...baseBreadcrumb, { title: titles.show }],
}
