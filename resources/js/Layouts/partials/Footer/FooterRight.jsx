import { Footer } from 'flowbite-react'
import { Facebook, Instagram, Youtube } from 'lucide-react'

// ====================================
export default function FooterRight() {
  return (
    <div className='mt-4 flex space-x-6 sm:mt-0 sm:justify-center'>
      <Footer.Icon href='#' icon={Facebook} />
      <Footer.Icon href='#' icon={Instagram} />
      <Footer.Icon href='#' icon={Youtube} />
    </div>
  )
}
