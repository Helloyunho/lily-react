import type { ComponentProps } from 'react'
import { cn } from '@/registry/lib/utils'

export function Kbd ({ className, ...props }: ComponentProps<'kbd'>) {
  return (
    <kbd
      data-slot='kbd'
      className={cn('inline-flex h-5 min-w-5 items-center justify-center gap-1 rounded-md bg-(--text)/8 px-1.5 font-sans text-[0.7rem] font-medium tracking-[-0.3px] text-(--text)/56 select-none', className)}
      {...props}
    />
  )
}
