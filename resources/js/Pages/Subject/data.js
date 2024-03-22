// prettier-ignore
export const titles = {
  index       : 'Listar disciplinas',
  listTeachers: 'Listar professors da disciplina',
  addTeacher  : 'Adicionar professor à disciplina',
}

// ------------------------------------
const baseBreadcrumb = [
  { title: 'Painel', routeName: 'dashboard' },
  { title: titles.index, routeName: 'subject.index' },
]

// prettier-ignore
export const breadcrumbs = {
  index       : [...baseBreadcrumb, { title: titles.index }],
  listTeachers: [...baseBreadcrumb, { title: titles.listTeachers }],
  addTeacher  : [...baseBreadcrumb, { title: titles.addTeacher }],
}
