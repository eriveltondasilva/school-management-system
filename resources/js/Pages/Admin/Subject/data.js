// prettier-ignore
export const titles = {
  index       : 'Listar disciplinas',
  listTeachers: 'Listar professors da disciplina',
  addTeacher  : 'Adicionar professor à disciplina',
}

// ------------------------------------
const baseBreadcrumb = [
  { title: 'Painel', route: 'admin.dashboard' },
  { title: titles.index, route: 'admin.subjects.index' },
]

// prettier-ignore
export const breadcrumbs = {
  index       : [...baseBreadcrumb, { title: titles.index }],
  listTeachers: [...baseBreadcrumb, { title: titles.listTeachers }],
  addTeacher  : [...baseBreadcrumb, { title: titles.addTeacher }],
}
