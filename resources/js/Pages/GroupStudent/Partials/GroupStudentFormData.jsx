import Input from '@/Components/Input'

// ====================================
export default function GroupStudentFormData({ data = {} }) {
  return (
    <>
      <Input.Text
        id='id'
        type='number'
        label='Id do aluno'
        value={data.id}
        className='w-16'
        readOnly
      />

      <Input.Text
        id='name'
        type='text'
        label='Nome do aluno'
        value={data.name}
        readOnly
      />

      <Input.Text
        id='cpf'
        type='text'
        label='CPF do aluno'
        value={data.cpf || 'Sem CPF'}
        readOnly
      />
    </>
  )
}
