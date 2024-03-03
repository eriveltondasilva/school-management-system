import Input from '@/Components/Input'

// ================================================
export default function AcademicYearFormData({ data = {}, errors = {} }) {
  return (
    <>
      <Input.Text
        id='year'
        type='number'
        label='Ano Letivo'
        placeholder='insira o ano letivo...'
        defaultValue={data.year}
        maxLength='4'
        minLength='4'
        readOnly={!route().current('academic-year.create')}
      />
      <Input.Error message={errors.year} />

      <Input.Text
        id='start_date'
        type='date'
        label='Início do ano letivo'
        placeholder='insira o início do ano letivo...'
        defaultValue={data.start_date}
      />
      <Input.Error message={errors.start_date} />

      <Input.Text
        id='end_date'
        type='date'
        label='Fim do ano letivo'
        placeholder='insira o fim do ano letivo...'
        defaultValue={data.end_date}
      />
      <Input.Error message={errors.end_date} />

      <br />
    </>
  )
}
