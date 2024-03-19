// prettier-ignore
export const titles = {
  index : 'Listar professores da turma',
  create: 'Adicionar professor à turma',
}

// ------------------------------------
const baseBreadcrumb = [
  { title: 'Painel', routeName: 'dashboard' },
  { title: 'Listar turmas', routeName: 'group.index' },
]

// prettier-ignore
export const breadcrumbs = {
  index : [...baseBreadcrumb, { title: titles.index }],
  create: [...baseBreadcrumb, { title: titles.create }],
}
