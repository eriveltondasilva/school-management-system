import Input from '@/Components/Input'

// ====================================
export default function GroupStudentFormData({ data = {} }) {
  return (
    <>
      <Input.Text
        id='group_student[student_id]'
        type='text'
        label='Nome do Aluno'
        defaultValue={data.name}
        readOnly
      />
    </>
  )
}
