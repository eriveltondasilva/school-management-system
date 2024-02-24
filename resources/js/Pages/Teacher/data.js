// prettier-ignore
export const titles = {
  create: 'Cadastrar professores',
  edit  : 'Editar professores',
  index : 'Listar professores',
  show  : 'Visualizar professores',
}

// ------------------------------------
const baseBreadcrumb = [
  { title: 'Painel', route: 'dashboard' },
  { title: titles.index, route: 'teacher.index' },
]

// prettier-ignore
export const breadcrumbs = {
  index : [baseBreadcrumb[0], { title: titles.index }],
  create: [...baseBreadcrumb, { title: titles.create }],
  edit  : [...baseBreadcrumb, { title: titles.edit }],
  show  : [...baseBreadcrumb, { title: titles.show }],
}
