import type { ComponentProps } from 'react'
import { cn } from '@/registry/lib/utils'

export function Card ({ className, children, ...props }: ComponentProps<'div'>) {
  return (
    <div data-slot='card' className={cn('flex flex-col gap-5 rounded-3xl bg-(--bg-elevated) p-5', className)} {...props}>
      {children}
    </div>
  )
}

export function CardContent ({ className, children, ...props }: ComponentProps<'div'>) {
  return (
    <div data-slot='card-content' className={cn('flex flex-col gap-3', className)} {...props}>
      {children}
    </div>
  )
}

export function CardDescription ({ className, children, ...props }: ComponentProps<'p'>) {
  return (
    <p data-slot='card-description' className={cn('text-sm leading-[1.6] tracking-[-0.39px] text-(--text)/72', className)} {...props}>
      {children}
    </p>
  )
}

export function CardFooter ({ className, children, ...props }: ComponentProps<'div'>) {
  return (
    <div data-slot='card-footer' className={cn('flex items-center gap-2', className)} {...props}>
      {children}
    </div>
  )
}

export function CardHeader ({ className, children, ...props }: ComponentProps<'div'>) {
  return (
    <div data-slot='card-header' className={cn('flex flex-col gap-1', className)} {...props}>
      {children}
    </div>
  )
}

export function CardTitle ({ className, children, ...props }: ComponentProps<'h3'>) {
  return (
    <h3 data-slot='card-title' className={cn('text-base leading-normal font-medium tracking-[-0.48px] text-(--text)', className)} {...props}>
      {children}
    </h3>
  )
}
