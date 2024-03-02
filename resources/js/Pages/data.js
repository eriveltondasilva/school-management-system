// prettier-ignore
export const titles = {
  dashboard: 'Painel',
  //
  calendar : 'Calendário',
  groups   : 'Turmas',
}

// ------------------------------------
const baseBreadcrumb = [{ title: titles.dashboard, routeName: 'dashboard' }]

// prettier-ignore
export const breadcrumbs = {
  dashboard: [{ title: titles.dashboard }],
  //
  calendar : [...baseBreadcrumb, { title: titles.calendar }],
  groups   : [...baseBreadcrumb, { title: titles.groups }],
}
