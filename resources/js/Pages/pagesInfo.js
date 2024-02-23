// prettier-ignore
export const titles = {
  calendar : 'Calendário',
  dashboard: 'Painel',
}

// ------------------------------------
const baseBreadcrumb = [{ title: titles.dashboard, route: 'dashboard' }]

// prettier-ignore
export const breadcrumbs = {
  dashboard: [{ title: titles.dashboard }],
  calendar : [...baseBreadcrumb, { title: titles.calendar }],
}