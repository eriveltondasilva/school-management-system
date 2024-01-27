import { useForm } from '@inertiajs/react'
import { Label, TextInput } from 'flowbite-react'

import FormFooter from './FormFooter'
import FormHeader from './FormHeader'
import FormRoot from './FormRoot'

// ===================================
export default function Form() {
  const { data, setData, post, processing, errors } = useForm({
    name: '',
    email: '',
  })

  return (
    <>
      {/* <Tabs aria-label='tabs' style='underline'> */}
      {/* <Tabs.Item title='Dados Pessoais'> */}
      {/* Form */}
      {/* </Tabs.Item> */}
      {/* </Tabs> */}

      <FormRoot onSubmit={() => console.log('submit')}>
        {/*  */}
        <FormHeader text='Formulário de Cadastro' />

        {/* Dados Pessoais */}
        <div>
          <div className='mb-2 block'>
            <Label htmlFor='name' value='Nome Completo:' />
          </div>
          <TextInput
            id='name'
            name='name'
            type='text'
            placeholder='Insira o nome do aluno...'
          />
        </div>

        <FormFooter />
        {/*  */}
      </FormRoot>
    </>
  )
}
