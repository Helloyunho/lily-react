import type { ComponentProps } from 'react'
import { cn } from '@/registry/lib/utils'

export function Input ({ className, type, ...props }: ComponentProps<'input'>) {
  const base = 'flex h-10 w-full min-w-0 rounded-3xl bg-(--text)/5 px-4 py-2 text-sm tracking-[-0.39px] outline-none transition-colors duration-150 placeholder:text-(--text)/40 hover:bg-(--text)/8 focus-visible:bg-(--text)/12 disabled:pointer-events-none disabled:opacity-50'

  return (
    (type === 'file'
      ? (
        <input
          data-slot='input'
          className={cn(base, 'file:mr-3 file:inline-flex file:border-0 file:bg-transparent file:text-sm file:font-medium', className)}
          type={type}
          {...props}
        />
        )
      : (
        <input
          data-slot='input'
          className={cn(base, className)}
          type={type}
          {...props}
        />
        ))
  )
}
