import { useForm } from '@inertiajs/react'

// ========================================
export default function useFormStudent(student = {}) {
  const { data, setData, post, put, processing, errors } = useForm({
    name: student.name || '',
    email: student.email || '',
    phone: student.phone || '',
    gender: student.gender || 'M',
    cpf: student.cpf || '',
    rg: student.rg || '',
    birthday: student.birthday || '',
    birthplace: student.birthplace || '',
    address_street: student.address_street || '',
    address_city: student.address_city || '',
    address_state: student.address_state || '',
    address_zip_code: student.address_zip_code || '',
    gov_benefits: student.gov_benefits || '',
    health_problems: student.health_problems || '',
    note: student.note || '',
  })

  const handleChange = (e) => {
    setData(e.target.id, e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (student.id) {
      put(route('student.update', student.id))
    } else {
      post(route('student.store'))
      e.target.reset()
    }
  }

  return {
    handleChange,
    handleSubmit,
    data,
    errors,
    processing,
  }
}
