import Input from '@/Components/Input'
import { usePage } from '@inertiajs/react'

// ==============================================
export default function GroupFormData({ data = {}, errors = {} }) {
  const { year } = usePage().props.auth.activeAcademicYear || {}

  return (
    <>
      <Input.Text
        id='academicYear'
        type='text'
        label='Ano Letivo'
        value={year}
        disabled
      />

      <Input.Select
        id='name'
        label='Turma'
        defaultValue={data.name || '6° Ano'}
        disabled={!!data.name}
        error={errors.name}
        values={['6° Ano', '7° Ano', '8° Ano', '9° Ano']}
        autoFocus
        required
      />

      <Input.Text
        id='classroom'
        type='text'
        label='Sala'
        placeholder='insira a sala...'
        defaultValue={data.classroom || ''}
        error={errors.classroom}
      />

      <Input.Select
        id='shift'
        label='Turno'
        defaultValue={data.shift || 'Vespertino'}
        values={['Matutino', 'Vespertino']}
        error={errors.shift}
      />
    </>
  )
}
