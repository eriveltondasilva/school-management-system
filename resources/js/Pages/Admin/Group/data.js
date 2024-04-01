// prettier-ignore
export const titles = {
  index        : 'Listar turmas',
  indexStudents: 'Listar alunos da turma',
  indexTeachers: 'Listar professores da turma',
  create       : 'Cadastrar turma',
  createStudent: 'Adicionar aluno à turma',
  createTeacher: 'Adicionar professor à turma',
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
