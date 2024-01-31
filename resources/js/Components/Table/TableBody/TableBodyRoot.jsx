export default function TableBodyRoot({ children }) {
  return (
    <div className='overflow-x-auto'>
      <Table hoverable>{children}</Table>
    </div>
  )
}
