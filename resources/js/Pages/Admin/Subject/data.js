// prettier-ignore
export const titles = {
  index        : 'Listar disciplinas',
  indexTeachers: 'Listar professors da disciplina',
  createTeacher: 'Adicionar professor à disciplina',
}

// ------------------------------------
const baseBreadcrumb = [
  { title: 'Painel', route: 'admin.dashboard' },
  { title: titles.index, route: 'admin.subjects.index' },
]

// prettier-ignore
export const breadcrumbs = {
  index        : [...baseBreadcrumb, { title: titles.index }],
  indexTeachers: [...baseBreadcrumb, { title: titles.indexTeachers }],
  createTeacher: [...baseBreadcrumb, { title: titles.createTeacher }],
}
