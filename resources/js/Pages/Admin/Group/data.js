// prettier-ignore
export const titles = {
  index        : 'Listar turmas',
  indexStudents: 'Listar alunos',
  indexTeachers: 'Listar professores',
  create       : 'Cadastrar turma',
  createStudent: 'Adicionar aluno',
  createTeacher: 'Adicionar professor',
  edit         : 'Editar turma',
}

// ------------------------------------
const baseBreadcrumb = [
  { title: 'Painel', route: 'admin.dashboard' },
  { title: titles.index, route: 'admin.groups.index' },
]

// prettier-ignore
export const breadcrumbs = {
  index        : [baseBreadcrumb[0], { title: titles.index }],
  indexStudents: [...baseBreadcrumb, { title: titles.indexStudents }],
  indexTeachers: [...baseBreadcrumb, { title: titles.indexTeachers }],
  create       : [...baseBreadcrumb, { title: titles.create }],
  createStudent: [...baseBreadcrumb, { title: titles.createStudent }],
  createTeacher: [...baseBreadcrumb, { title: titles.createTeacher }],
  edit         : [...baseBreadcrumb, { title: titles.edit }],
}
