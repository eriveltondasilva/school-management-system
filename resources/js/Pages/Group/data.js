// prettier-ignore
export const titles = {
  index : 'Listar turmas',
  create: 'Cadastrar turma',
  edit  : 'Editar turma',
  // show  : 'Visualizar ano letivo',
}

// ------------------------------------
const baseBreadcrumb = [
  { title: 'Painel', routeName: 'dashboard' },
  { title: titles.index, routeName: 'group.index' },
]

// prettier-ignore
export const breadcrumbs = {
  index : [baseBreadcrumb[0], { title: titles.index }],
  create: [...baseBreadcrumb, { title: titles.create }],
  edit  : [...baseBreadcrumb, { title: titles.edit }],
  // show  : [...baseBreadcrumb, { title: titles.show }],
}
