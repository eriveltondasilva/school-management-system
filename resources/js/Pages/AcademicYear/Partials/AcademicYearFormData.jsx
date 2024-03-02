import Input from '@/Components/Input'

// ================================================
export default function AcademicYearFormData({ data = {}, errors = {} }) {
  return (
    <>
      {route().current('academic-year.edit') && (
        <Input.Switch
          id='is_current'
          text='Status do Ano letivo'
          label={data.is_current ? 'Ativo' : 'Inativo'}
          checked={data.is_current}
          onClick={() => (!data.is_current ? alert('clicou') : undefined)}
          readOnly
        />
      )}

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

      <br />

      <Input.Text
        id='start_date'
        type='date'
        label='Data do início do ano letivo'
        placeholder='insira o início do ano letivo...'
        defaultValue={data.start_date}
      />
      <Input.Error message={errors.start_date} />

      <Input.Text
        id='end_date'
        type='date'
        label='Data do fim do ano letivo'
        placeholder='insira o fim do ano letivo...'
        defaultValue={data.end_date}
      />
      <Input.Error message={errors.end_date} />

      <br />
    </>
  )
}
