// prettier-ignore
export const titles = {
  index       : 'Listar turmas',
  create      : 'Cadastrar turma',
  edit        : 'Editar turma',
  //
  listStudents: 'Listar alunos da turma',
  addStudent  : 'Adicionar aluno à turma',
  //
  listTeachers: 'Listar professores da turma',
  addTeacher  : 'Adicionar professor à turma',
}

// ------------------------------------
const baseBreadcrumb = [
  { title: 'Painel', routeName: 'dashboard' },
  { title: titles.index, routeName: 'group.index' },
]

// prettier-ignore
export const breadcrumbs = {
  index       : [baseBreadcrumb[0], { title: titles.index }],
  create      : [...baseBreadcrumb, { title: titles.create }],
  edit        : [...baseBreadcrumb, { title: titles.edit }],
  //
  listStudents: [...baseBreadcrumb, { title: titles.listStudents }],
  addStudent  : [...baseBreadcrumb, { title: titles.addStudent }],
  //
  listTeachers: [...baseBreadcrumb, { title: titles.listTeachers }],
  addTeacher  : [...baseBreadcrumb, { title: titles.addTeacher }],
}
