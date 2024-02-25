// prettier-ignore
export const titles = {
  dashboard   : 'Painel',
  //
  academicYear: 'Ano Letivo',
  calendar    : 'Calendário',
  groups      : 'Turmas',
}

// ------------------------------------
const baseBreadcrumb = [{ title: titles.dashboard, routeName: 'dashboard' }]

// prettier-ignore
export const breadcrumbs = {
  dashboard   : [{ title: titles.dashboard }],
  //
  academicYear: [...baseBreadcrumb, { title: titles.academicYear }],
  calendar    : [...baseBreadcrumb, { title: titles.calendar }],
  groups      : [...baseBreadcrumb, { title: titles.groups }],
}
