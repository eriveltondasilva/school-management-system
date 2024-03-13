import Input from '@/Components/Input'
import { Label, Radio } from 'flowbite-react'

// ================================================
export default function TeacherFormData({
  data = {},
  errors = {},
  readOnly = false,
}) {
  return (
    <section className='mb-4'>
      {/* NOME DO PROFESSOR */}
      <Input.Text
        id='name'
        type='text'
        label='Nome completo'
        placeholder='Insira o nome do professor...'
        defaultValue={data.name}
        readOnly={readOnly}
        error={errors.name}
        autoFocus
        required
      />

      {/* EMAIL DO PROFESSOR */}
      <Input.Text
        id='email'
        type='email'
        label='Email'
        placeholder='Insira o email do professor...'
        error={errors.email}
        defaultValue={data.email}
        readOnly={readOnly}
      />

      {/* TELEFONE CELULAR DO PROFESSOR */}
      <Input.Text
        id='phone'
        type='tel'
        label='Telefone celular'
        placeholder='Insira o telefone do professor...'
        error={errors.phone}
        defaultValue={data.phone}
        readOnly={readOnly}
      />

      {/* GÊNERO DO PROFESSOR */}
      <fieldset className='mb-6 flex max-w-md flex-col gap-3'>
        <Label htmlFor='gender'>Gênero do Professor</Label>
        <div className='flex items-center gap-2'>
          <Radio
            id='gender-male'
            name='gender'
            defaultValue='M'
            defaultChecked={data.gender === 'M'}
            disabled={readOnly}
          />
          <Label htmlFor='gender-male'>Masculino</Label>
        </div>
        <div className='flex items-center gap-2'>
          <Radio
            id='gender-female'
            name='gender'
            defaultValue='F'
            defaultChecked={data.gender === 'F'}
            disabled={readOnly}
          />
          <Label htmlFor='gender-female'>Feminino</Label>
        </div>
      </fieldset>

      {/* CPF DO PROFESSOR */}
      <Input.Text
        id='cpf'
        type='text'
        label='CPF'
        placeholder='Insira o cpf do professor...'
        error={errors.cpf}
        defaultValue={data.cpf}
        readOnly={readOnly}
      />

      {/* RG DO PROFESSOR */}
      <Input.Text
        id='rg'
        type='text'
        label='RG'
        placeholder='Insira o rg do professor...'
        error={errors.rg}
        defaultValue={data.rg}
        readOnly={readOnly}
      />

      {/* DATA DE NASCIMENTO DO PROFESSOR */}
      <Input.Text
        id='birthday'
        type='date'
        label='Data de nascimento'
        error={errors.birthday}
        defaultValue={data.birthday}
        readOnly={readOnly}
      />
    </section>
  )
}
