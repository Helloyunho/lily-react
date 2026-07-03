import type { ComponentProps } from 'react'
import { cn } from '@/registry/lib/utils'

export type AlertVariant = 'default' | 'destructive'
export function alertVariants (variant: AlertVariant = 'default') {
  const base = 'relative grid w-full grid-cols-[0_1fr] items-start gap-x-3 gap-y-1 rounded-3xl px-4 py-3.5 text-sm tracking-[-0.39px] has-[>svg]:grid-cols-[1.25rem_1fr] [&>svg]:size-5 [&>svg]:translate-y-0.5'
  const variants: Record<AlertVariant, string> = {
    default: 'bg-(--text)/5 text-(--text)',
    destructive: 'bg-red-500/8 text-red-600 dark:text-red-400'
  }

  return cn(base, variants[variant])
}

export function Alert ({ children, className, variant = 'default', ...props }: ComponentProps<'div'> & { variant?: AlertVariant }) {
  return (
    <div
      data-slot='alert'
      role='alert'
      className={cn(alertVariants(variant), className)}
      {...props}
    >
      {children}
    </div>
  )
}

export function AlertTitle ({ children, className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot='alert-title'
      className={cn('col-start-2 font-medium tracking-[-0.42px]', className)}
      {...props}
    >
      {children}
    </div>
  )
}

export function AlertDescription ({ children, className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot='alert-description'
      className={cn('col-start-2 leading-[1.6] opacity-72 [&_a]:underline [&_a]:underline-offset-2', className)}
      {...props}
    >
      {children}
    </div>
  )
}
