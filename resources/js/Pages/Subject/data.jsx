// prettier-ignore
export const titles = {
  index : 'Listar disciplinas',
  create: 'Adicionar professor à disciplina',
}

// ------------------------------------
const baseBreadcrumb = [
  { title: 'Painel', routeName: 'dashboard' },
  { title: titles.index, routeName: 'group.index' },
]

// prettier-ignore
export const breadcrumbs = {
  index : [...baseBreadcrumb, { title: titles.index }],
  create: [...baseBreadcrumb, { title: titles.create }],
}
