import Input from '@/Components/Input'
import formatId from '@/Utils/formatId'
import { Label, Radio } from 'flowbite-react'

// ==============================================
export default function StudentFormData({
  data = {},
  errors = {},
  readOnly = false,
}) {
  const isCreateRoute = route().current('*.create')

  return (
    <section className='mb-4'>
      {/* ID DO ALUNO */}
      {!isCreateRoute && (
        <Input.Text
          id='display-id'
          label='Matrícula'
          className='w-24'
          value={formatId(data.id)}
          readOnly
        />
      )}

      {/* NOME DO ALUNO */}
      <Input.Text
        id='name'
        type='text'
        label='Nome completo'
        placeholder='Insira o nome do aluno...'
        error={errors.name}
        defaultValue={data.name}
        readOnly={readOnly}
        autoFocus
        required
      />

      {/* EMAIL DO ALUNO */}
      <Input.Text
        id='email'
        type='email'
        label='Email'
        placeholder='Insira o email do aluno...'
        error={errors.email}
        defaultValue={data.email}
        readOnly={readOnly}
      />

      {/* TELEFONE CELULAR DO ALUNO */}
      <Input.Text
        id='phone'
        type='tel'
        label='Telefone celular'
        placeholder='Insira o telefone do aluno...'
        error={errors.phone}
        defaultValue={data.phone}
        readOnly={readOnly}
      />

      {/* GÊNERO DO ALUNO */}
      <section className='mb-6 flex max-w-md flex-col gap-3'>
        <Label>Gênero do aluno</Label>
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
      </section>

      {/* CPF DO ALUNO */}
      <Input.Text
        id='cpf'
        type='text'
        label='CPF'
        placeholder='Insira o cpf do aluno...'
        error={errors.cpf}
        defaultValue={data.cpf}
        readOnly={readOnly}
      />

      {/* RG DO ALUNO */}
      <Input.Text
        id='rg'
        type='text'
        label='RG'
        placeholder='Insira o rg do aluno...'
        error={errors.rg}
        defaultValue={data.rg}
        readOnly={readOnly}
      />

      {/* DATA DE NASCIMENTO DO ALUNO */}
      <Input.Text
        id='birthday'
        type='date'
        label='Data de nascimento'
        error={errors.birthday}
        defaultValue={data.birthday}
        readOnly={readOnly}
      />

      {/* LOCAL DE NASCIMENTO DO ALUNO */}
      <Input.Text
        id='birthplace'
        type='text'
        label='Local de nascimento'
        placeholder='Insira o local de nascimento do aluno...'
        error={errors.birthplace}
        defaultValue={data.birthplace}
        readOnly={readOnly}
      />

      {/* BENEFíCIO DO GOVERNO DO ALUNO */}
      <Input.Text
        id='gov_benefits'
        type='text'
        label='Benefício'
        placeholder='Insira os benefícios do governo do aluno...'
        error={errors.gov_benefits}
        defaultValue={data.gov_benefits}
        readOnly={readOnly}
      />

      {/* PROBLEMAS DE SAúDE DO ALUNO */}
      <Input.Text
        id='health_problems'
        type='text'
        label='Problemas de saúde'
        placeholder='Insira os problemas de saúde do aluno...'
        error={errors.health_problems}
        defaultValue={data.health_problems}
        readOnly={readOnly}
      />

      {/* OBSERVAÇÕES REFERENTES AO ALUNO */}
      <Input.Textarea
        id='note'
        label='Observações'
        placeholder='Insira as observações...'
        rows={4}
        error={errors.note}
        defaultValue={data.note}
        readOnly={readOnly}
      />
    </section>
  )
}
