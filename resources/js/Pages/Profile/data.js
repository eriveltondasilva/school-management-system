// prettier-ignore
export const titles = {
  profile: 'Profile',
}

// ------------------------------------
const baseBreadcrumb = [{ title: 'Painel', route: 'dashboard' }]

// prettier-ignore
export const breadcrumbs = {
  profile : [...baseBreadcrumb, { title: titles.profile }],
}
