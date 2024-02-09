import { Label, TextInput, Textarea } from 'flowbite-react'

import Form from '@/Components/Form'
import AuthLayout from '@/Layouts/AuthenticatedLayout'
import { breadcrumb, title } from './studentInfo'

// ====================================
export default function StudentCreate() {
  function handleSubmit(e) {
    e.preventDefault()
    alert('submit')
  }
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Header text='Formulário de Cadastro de Aluno' />
        <FormPersonalData />
        <Form.Footer />
      </Form>
    </>
  )
}

// ------------------------------------
function FormPersonalData() {
  return (
    <section className='mb-4'>
      {/* name input */}
      <div className='mb-2 block'>
        <Label htmlFor='name' value='Nome completo' />
      </div>
      <TextInput
        id='name'
        type='text'
        placeholder='insira o nome do aluno...'
        required
      />

      <br />
      {/* email input */}
      <div className='mb-2 block'>
        <Label htmlFor='email' value='Email' />
      </div>
      <TextInput
        id='email'
        type='text'
        placeholder='insira o email do aluno...'
      />

      <br />
      {/* telephone input */}
      <div className='mb-2 block'>
        <Label htmlFor='telephone' value='Telefone celular' />
      </div>
      <TextInput
        id='telephone'
        type='tel'
        placeholder='insira o telephone do aluno...'
      />

      <br />
      {/* cpf input */}
      <div className='mb-2 block'>
        <Label htmlFor='cpf' value='CPF' />
      </div>
      <TextInput id='cpf' type='text' placeholder='insira o cpf do aluno...' />

      <br />
      {/* cpf input */}
      <div className='mb-2 block'>
        <Label htmlFor='birth_place' value='Local de nascimento' />
      </div>
      <TextInput
        id='birth_place'
        type='date'
        placeholder='insira o local de nascimento do aluno...'
      />

      <br />
      {/* note input */}
      <div className='mb-2 block'>
        <Label htmlFor='note' value='Observações' />
      </div>
      <Textarea id='note' placeholder='observações...' rows={4} />
    </section>
  )
}

// ------------------------------------
StudentCreate.layout = (page) => (
  <AuthLayout title={title.create} breadcrumbItems={breadcrumb.create}>
    {page}
  </AuthLayout>
)
