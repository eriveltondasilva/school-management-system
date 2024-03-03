export default function formatDate(dateString = '', dateStyle = 'short') {
  const date = new Date(dateString)

  if (isNaN(date)) {
    return 'Data inválida'
  }

  const locale = 'pt-BR'
  const options = { dateStyle: dateStyle, timeZone: 'UTC' }

  return date.toLocaleDateString(locale, options)
}
