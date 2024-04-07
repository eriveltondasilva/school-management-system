// prettier-ignore
export const titles = {
  create: 'Cadastrar usuário',
  index : 'Listar professores',
}

// ------------------------------------
const baseBreadcrumb = [
  { title: 'Painel', route: 'admin.dashboard' },
  { title: titles.index, route: 'admin.teachers.index' },
]

// prettier-ignore
export const breadcrumbs = {
  create: [...baseBreadcrumb, { title: titles.create }],
}
