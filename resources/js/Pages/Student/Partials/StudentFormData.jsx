import Input from '@/Components/Input'
import { Label, Radio } from 'flowbite-react'

// ================================================
export default function StudentFormData({
  data = {},
  errors = {},
  readOnly = false,
}) {
  return (
    <section className='mb-4'>
      {/* NOME DO ALUNO */}
      <Input.Text
        id='name'
        type='text'
        label='Nome completo'
        placeholder='insira o nome do aluno...'
        defaultValue={data.name}
        readOnly={readOnly}
        autoFocus
        required
      />
      <Input.Error message={errors.name} />

      <br />

      {/* EMAIL DO ALUNO */}
      <Input.Text
        id='email'
        type='email'
        label='Email'
        placeholder='insira o email do aluno...'
        defaultValue={data.email}
        readOnly={readOnly}
      />
      <Input.Error message={errors.email} />

      <br />

      {/* TELEFONE CELULAR DO ALUNO */}
      <Input.Text
        id='phone'
        type='tel'
        label='Telefone celular'
        placeholder='insira o telefone do aluno...'
        defaultValue={data.phone}
        readOnly={readOnly}
      />
      <Input.Error message={errors.phone} />

      <br />

      {/* GÊNERO DO ALUNO */}
      <section className='flex max-w-md flex-col gap-3'>
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

      <br />

      {/* CPF DO ALUNO */}
      <Input.Text
        id='cpf'
        type='text'
        label='CPF'
        placeholder='insira o cpf do aluno...'
        defaultValue={data.cpf}
        readOnly={readOnly}
      />
      <Input.Error message={errors.cpf} />

      <br />

      {/* RG DO ALUNO */}
      <Input.Text
        id='rg'
        type='text'
        label='RG'
        placeholder='insira o rg do aluno...'
        defaultValue={data.rg}
        readOnly={readOnly}
      />
      <Input.Error message={errors.rg} />

      <br />

      {/* DATA DE NASCIMENTO DO ALUNO */}
      <Input.Text
        id='birthday'
        type='date'
        label='Data de nascimento'
        defaultValue={data.birthday}
        readOnly={readOnly}
      />
      <Input.Error message={errors.birthday} />

      <br />

      {/* LOCAL DE NASCIMENTO DO ALUNO */}
      <Input.Text
        id='birthplace'
        type='text'
        label='Local de nascimento'
        placeholder='insira o local de nascimento do aluno...'
        defaultValue={data.birthplace}
        readOnly={readOnly}
      />
      <Input.Error message={errors.birthplace} />

      <br />

      {/* BENEFíCIO DO GOVERNO DO ALUNO */}
      <Input.Text
        id='gov_benefits'
        type='text'
        label='Benefício'
        placeholder='insira os benefícios do governo do aluno...'
        defaultValue={data.gov_benefits}
        readOnly={readOnly}
      />
      <Input.Error message={errors.gov_benefits} />

      <br />

      {/* PROBLEMAS DE SAúDE DO ALUNO */}
      <Input.Text
        id='health_problems'
        type='text'
        label='Problemas de saúde'
        placeholder='insira os problemas de saúde do aluno...'
        defaultValue={data.health_problems}
        readOnly={readOnly}
      />
      <Input.Error message={errors.health_problems} />

      <br />

      {/* OBSERVAÇÕES REFERENTES AO ALUNO */}
      <Input.Textarea
        id='note'
        label='Observações'
        placeholder='insira as observações...'
        rows={4}
        defaultValue={data.note}
        readOnly={readOnly}
      />
      <Input.Error message={errors.note} />
    </section>
  )
}
