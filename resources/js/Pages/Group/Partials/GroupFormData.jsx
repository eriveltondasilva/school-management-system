import Input from '@/Components/Input'
import { usePage } from '@inertiajs/react'

// ================================================
export default function GroupFormData({ data = {}, errors = {} }) {
  const { currentAcademicYear } = usePage().props.auth || {}

  return (
    <>
      <Input.Text
        id='academicYear'
        type='text'
        label='Ano Letivo'
        value={currentAcademicYear.year}
        disabled
      />

      <Input.Select
        id='name'
        label='Turma'
        defaultValue={data.name}
        disabled={data.name}
        values={['6° Ano', '7° Ano', '8° Ano', '9° Ano']}
        required
      />
      <Input.Error message={errors.name} />

      <Input.Text
        id='classroom'
        type='text'
        label='Sala'
        placeholder='insira a sala...'
        defaultValue={data.classroom}
      />
      <Input.Error message={errors.classroom} />

      <Input.Select
        id='shift'
        label='turno'
        defaultValue={data.shift || 'Vespertino'}
        values={['Matutino', 'Vespertino']}
      />
      <Input.Error message={errors.shift} />

      <br />
    </>
  )
}
