import type { ComponentProps } from 'react'
import { cn } from '@/registry/lib/utils'

export type ButtonVariant = 'default' | 'ghost' | 'destructive'
export type ButtonSize = 'default' | 'sm' | 'lg' | 'icon'

export function Button ({ className, variant = 'default', size = 'default', href, disabled, children, ...props }: ComponentProps<'button'> & ComponentProps<'a'> & { variant?: ButtonVariant, size?: ButtonSize, href?: string }) {
  const base = 'inline-flex cursor-pointer select-none items-center justify-center whitespace-nowrap outline-none transition-all duration-150 [&_svg]:pointer-events-none [&_svg]:shrink-0 disabled:pointer-events-none disabled:opacity-40'

  const variants: Record<ButtonVariant, string> = {
    default: 'bg-(--text) text-(--bg) hover:bg-(--text)/90 font-medium',
    ghost: 'bg-(--text)/5 text-(--text)/72 hover:bg-(--text)/8 hover:text-(--text)',
    destructive: 'bg-red-500/10 text-red-600 hover:bg-red-500/20 font-medium dark:text-red-400'
  }
  const sizes: Record<ButtonSize, string> = {
    default: 'h-10 rounded-3xl px-4 text-sm',
    sm: 'h-9 rounded-3xl px-3.5 text-sm',
    lg: 'h-11 rounded-3xl px-5 text-base',
    icon: 'size-10 rounded-3xl shrink-0'
  }

  return (
    (href
      ? (
        <a data-slot='button' className={cn(base, variants[variant], sizes[size], className)} href={href} aria-disabled={disabled} role={disabled ? 'link' : undefined} tabIndex={disabled ? -1 : undefined} {...props}>
          {children}
        </a>
        )
      : (
        <button data-slot='button' className={cn(base, variants[variant], sizes[size], className)} disabled={disabled} {...props}>
          {children}
        </button>
        ))
  )
}
