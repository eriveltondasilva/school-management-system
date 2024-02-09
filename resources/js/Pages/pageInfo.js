export const title = {
  calendar: 'Calendário',
  dashboard: 'Painel',
}

// ------------------------------------
const baseBreadcrumb = { title: title.dashboard, route: 'student.index' }

export const breadcrumb = {
  dashboard: [{ title: title.dashboard }],
  calendar: [baseBreadcrumb, { title: title.calendar }],
}
