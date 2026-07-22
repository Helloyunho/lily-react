import type { ComponentProps } from 'react'
import { cn } from '@/registry/lib/utils'

export function Field ({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot='field'
      className={cn('flex flex-col gap-2', className)}
      {...props}
    />
  )
}

export function FieldDescription ({ className, ...props }: ComponentProps<'p'>) {
  return (
    <p
      data-slot='field-description'
      className={cn('text-xs leading-normal tracking-[-0.3px] text-(--text)/56', className)}
      {...props}
    />
  )
}

export function FieldError ({ className, ...props }: ComponentProps<'p'>) {
  return (
    <p
      data-slot='field-error'
      className={cn('text-xs leading-normal tracking-[-0.3px] text-red-600 dark:text-red-400', className)}
      {...props}
    />
  )
}

export function FieldGroup ({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot='field-group'
      className={cn('flex flex-col gap-5', className)}
      {...props}
    />
  )
}

export function FieldLabel ({ className, ...props }: ComponentProps<'label'>) {
  return (
    <label
      data-slot='field-label'
      className={cn('text-sm font-medium tracking-[-0.39px] select-none', className)}
      {...props}
    />
  )
}
