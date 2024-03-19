import Input from '@/Components/Input'

// ====================================
export default function GroupTeacherFormData({ data = {} }) {
  return (
    <section>
      <Input.Text
        id='id'
        type='number'
        label='ID do professor'
        value={data.id}
        className='w-24'
        readOnly
      />

      <Input.Text
        id='name'
        type='text'
        label='Nome do professor'
        value={data.name}
        readOnly
      />

      <Input.Text
        id='cpf'
        type='text'
        label='CPF do professor'
        value={data.cpf || 'Sem CPF'}
        readOnly
      />
    </section>
  )
}
