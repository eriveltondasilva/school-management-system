import Input from '@/Components/Input'
import { Label, Radio } from 'flowbite-react'

// ================================================
export default function TeacherFormData({ data = {}, errors = {}, readOnly }) {
  return (
    <section className='mb-4'>
      {/* NOME DO PROFESSOR */}
      <Input.Text
        id='name'
        type='text'
        label='Nome completo'
        placeholder='insira o nome do professor...'
        defaultValue={data.name}
        readOnly={readOnly}
      />
      <Input.Error message={errors.name} />

      <br />

      {/* EMAIL DO PROFESSOR */}
      <Input.Text
        id='email'
        type='email'
        label='Email'
        placeholder='insira o email do professor...'
        defaultValue={data.email}
        readOnly={readOnly}
      />
      <Input.Error message={errors.email} />

      <br />

      {/* TELEFONE CELULAR DO PROFESSOR */}
      <Input.Text
        id='phone'
        type='tel'
        label='Telefone celular'
        placeholder='insira o telefone do professor...'
        defaultValue={data.phone}
        readOnly={readOnly}
      />
      <Input.Error message={errors.phone} />

      <br />

      {/* GÊNERO DO PROFESSOR */}
      <fieldset className='flex max-w-md flex-col gap-3'>
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

      <br />

      {/* CPF DO PROFESSOR */}
      <Input.Text
        id='cpf'
        type='text'
        label='CPF'
        placeholder='insira o cpf do PROFESSOR...'
        defaultValue={data.cpf}
        readOnly={readOnly}
      />
      <Input.Error message={errors.cpf} />

      <br />

      {/* RG DO PROFESSOR */}
      <Input.Text
        id='rg'
        type='text'
        label='RG'
        placeholder='insira o rg do PROFESSOR...'
        defaultValue={data.rg}
        readOnly={readOnly}
      />
      <Input.Error message={errors.rg} />

      <br />

      {/* DATA DE NASCIMENTO DO PROFESSOR */}
      <Input.Text
        id='birthday'
        type='date'
        label='Data de nascimento'
        defaultValue={data.birthday}
        readOnly={readOnly}
      />
      <Input.Error message={errors.birthday} />

      <br />
    </section>
  )
}
