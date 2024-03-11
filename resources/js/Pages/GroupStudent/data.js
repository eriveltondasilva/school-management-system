// prettier-ignore
export const titles = {
  index : 'Listar alunos da turma',
  //
  add   : 'Adicionar alunos a turma',
  // TODO: implementar
  create: 'Cadastrar professores',
  edit  : 'Editar professores',
  show  : 'Visualizar professores',
}

// ------------------------------------
const baseBreadcrumb = [
  { title: 'Painel', routeName: 'dashboard' },
  { title: 'Listar turmas', routeName: 'group.index' },
]

// prettier-ignore
export const breadcrumbs = {
  index : [baseBreadcrumb[0], { title: titles.index }],
  //
  add   : [...baseBreadcrumb, { title: titles.add }],
  // TODO: implementar
  create: [...baseBreadcrumb, { title: titles.create }],
  edit  : [...baseBreadcrumb, { title: titles.edit }],
  show  : [...baseBreadcrumb, { title: titles.show }],
}
