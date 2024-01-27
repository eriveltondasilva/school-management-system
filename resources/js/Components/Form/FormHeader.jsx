export default function FormHeader({ text }) {
  return (
    <header className='mb-4'>
      <h1 className='text-xl font-semibold'>{text || 'Formulário'}</h1>
    </header>
  )
}
