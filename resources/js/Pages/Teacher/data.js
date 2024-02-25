// prettier-ignore
export const titles = {
  index : 'Listar professores',
  //
  create: 'Cadastrar professores',
  edit  : 'Editar professores',
  show  : 'Visualizar professores',
}

// ------------------------------------
const baseBreadcrumb = [
  { title: 'Painel', routeName: 'dashboard' },
  { title: titles.index, routeName: 'teacher.index' },
]

// prettier-ignore
export const breadcrumbs = {
  index : [baseBreadcrumb[0], { title: titles.index }],
  //
  create: [...baseBreadcrumb, { title: titles.create }],
  edit  : [...baseBreadcrumb, { title: titles.edit }],
  show  : [...baseBreadcrumb, { title: titles.show }],
}