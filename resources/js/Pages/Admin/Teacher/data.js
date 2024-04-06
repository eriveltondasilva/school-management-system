// prettier-ignore
export const titles = {
  index     : 'Listar professores',
  create    : 'Cadastrar professores',
  createUser: 'Cadastrar usuário',
  edit      : 'Editar professores',
  show      : 'Visualizar professores',
}

// ------------------------------------
const baseBreadcrumb = [
  { title: 'Painel', route: 'admin.dashboard' },
  { title: titles.index, route: 'admin.teachers.index' },
]

// prettier-ignore
export const breadcrumbs = {
  index     : [baseBreadcrumb[0], { title: titles.index }],
  create    : [...baseBreadcrumb, { title: titles.create }],
  createUser: [...baseBreadcrumb, { title: titles.createUser }],
  edit      : [...baseBreadcrumb, { title: titles.edit }],
  show      : [...baseBreadcrumb, { title: titles.show }],
}
