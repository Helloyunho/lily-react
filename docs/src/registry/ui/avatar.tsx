import { type ComponentProps, useState } from 'react'
import { cn } from '@/registry/lib/utils'
import { UserIcon } from 'lucide-react'

export function Avatar ({ src, alt = '', size = 'default', className, ...props }: ComponentProps<'div'> & { src?: string, alt?: string, size?: 'xs' | 'sm' | 'default' | 'lg' | 'xl' }) {
  const [imgError, setImgError] = useState(false)

  const sizes = {
    xs: 'size-5',
    sm: 'size-8',
    default: 'size-9',
    lg: 'size-12',
    xl: 'size-16'
  }

  return (
    <div
      data-slot='avatar' className={cn('relative shrink-0 overflow-hidden rounded-full bg-(--text)/8', sizes[size], className)} {...props}
    >
      {src && !imgError
        ? (
          <img
            src={src}
            alt={alt}
            loading='lazy'
            decoding='async'
            className='size-full object-cover'
            onError={() => setImgError(true)}
          />
          )
        : (
          <div className='flex size-full items-center justify-center text-(--text)/40'>
            <UserIcon className='size-[55%]' aria-hidden='true' />
          </div>
          )}
    </div>
  )
}
