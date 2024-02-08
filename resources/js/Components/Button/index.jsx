import { twJoin } from 'tailwind-merge'
import { COLOR_VARIANTS, DEFAULT_VARIANTS, SIZE_VARIANTS } from './styles'

// ====================================
export default function Button({
  variant,
  size,
  full,
  disabled,
  children,
  ...props
}) {
  return (
    <button
      disabled={disabled}
      className={twJoin(
        DEFAULT_VARIANTS,
        SIZE_VARIANTS[size || 'base'],
        COLOR_VARIANTS[variant || 'primary'],
        full && 'w-full',
        disabled && 'cursor-not-allowed opacity-25'
      )}
      {...props}>
      {children}
    </button>
  )
}
