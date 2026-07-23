import type { ComponentProps } from 'react'
import { cn } from '@/registry/lib/utils'

export function InputGroup ({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot='input-group'
      className={cn('flex h-10 w-full items-center overflow-hidden rounded-3xl bg-(--text)/5 transition-colors duration-150 focus-within:bg-(--text)/8', className)}
      {...props}
    />
  )
}

export function InputGroupInput ({ className, ...props }: ComponentProps<'input'>) {
  return (
    <input
      data-slot='input-group-input'
      className={cn('h-full w-full min-w-0 flex-1 bg-transparent px-4 text-sm tracking-[-0.39px] text-(--text) outline-none [appearance:textfield] placeholder:text-(--text)/40 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none disabled:pointer-events-none disabled:opacity-50', className)}
      {...props}
    />
  )
}

export function InputGroupAddon ({ className, align = 'inline-start', ...props }: ComponentProps<'div'> & {
  align?: 'inline-start' | 'inline-end'
}) {
  return (
    <div
      data-slot='input-group-addon'
      data-align={align}
      className={cn('flex shrink-0 items-center text-sm tracking-[-0.39px] text-(--text)/56 [&_svg]:size-4', align === 'inline-start' ? 'ps-4' : 'pe-2', className)}
      {...props}
    />
  )
}
