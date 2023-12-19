import * as Icon from '@/Components/Icon'
import * as Avatar from '@radix-ui/react-avatar'

export default function AvatarRadix({ user }) {
  const { name, avatar_url } = user || {}

  return (
    <Avatar.Root className='inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-white align-middle'>
      <Avatar.Image
        className='h-full w-full rounded-[inherit] object-cover'
        src={avatar_url}
        alt={name}
      />
      <Avatar.Fallback
        className='text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white font-medium uppercase'
        delayMs={600}>
        <Icon.User className='text-slate-600'/>
      </Avatar.Fallback>
    </Avatar.Root>
  )
}
