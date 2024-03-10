import Input from '@/Components/Input'

// ===============================================
export default function QuarterFormData({ data = {}, errors = {} }) {
  const isCreateRoute = route().current('*.create')

  return (
    <>
      <Input.Text
        id='quarter[start_date]'
        type='date'
        label='Início do bimestre'
        defaultValue={data.start_date}
      />
      <Input.Error message={errors.start_date} />

      <Input.Text
        id='quarter[end_date]'
        type='date'
        label='Fim do bimestre'
        defaultValue={data.end_date}
      />
      <Input.Error message={errors.end_date} />

      <br />
    </>
  )
}
