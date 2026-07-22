import type { ComponentProps } from 'react'
import { cn } from '@/registry/lib/utils'

export function Empty ({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot='empty'
      className={cn('flex w-full flex-col items-center justify-center gap-2 rounded-3xl px-6 py-12 text-center', className)}
      {...props}
    />
  )
}

export function EmptyDescription ({ className, ...props }: ComponentProps<'p'>) {
  return (
    <p
      data-slot='empty-description'
      className={cn('max-w-sm text-sm leading-[1.6] tracking-[-0.39px] text-(--text)/56', className)}
      {...props}
    />
  )
}

export function EmptyMedia ({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot='empty-media'
      className={cn('mb-2 flex size-12 items-center justify-center rounded-2xl bg-(--text)/5 text-(--text)/56 [&_svg]:size-6', className)}
      {...props}
    />
  )
}

export function EmptyTitle ({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot='empty-title'
      className={cn('text-base font-medium tracking-[-0.48px]', className)}
      {...props}
    />
  )
}
