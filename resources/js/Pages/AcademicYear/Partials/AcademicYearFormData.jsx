import Input from '@/Components/Input'

// ================================================
export default function AcademicYearFormData({
  data = {},
  errors = {},
  readOnly = false,
}) {
  return (
    <>
      <Input.Text
        id='year'
        name='year'
        type='number'
        label='Ano Letivo'
        placeholder='insira o ano letivo...'
        maxLength='4'
        minLength='4'
      />
      <Input.Error message={errors.year} />
    </>
  )
}
