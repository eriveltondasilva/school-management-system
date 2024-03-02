// prettier-ignore
export const titles = {
  index   : 'Listar anos letivos',
  //
  create: 'Cadastrar ano letivo',
  edit  : 'Editar ano letivo',
  show  : 'Visualizar ano letivo',
}

// ------------------------------------
const baseBreadcrumb = [
  { title: 'Painel', routeName: 'dashboard' },
  { title: titles.index, routeName: 'academic-year.index' },
]

// prettier-ignore
export const breadcrumbs = {
  index : [baseBreadcrumb[0], { title: titles.index }],
  //
  create: [...baseBreadcrumb, { title: titles.create }],
  edit  : [...baseBreadcrumb, { title: titles.edit }],
  show  : [...baseBreadcrumb, { title: titles.show }],
}
