import type { ComponentProps } from 'react'
import { cn } from '@/registry/lib/utils'

export function Badge ({ href, className, ...props }: ComponentProps<'span' | 'a'> & { href?: string }) {
  const Comp = href ? 'a' : 'span'

  return (
    // @ts-expect-error can you please stfu
    <Comp
      data-slot='badge' href={href} className={cn('inline-flex w-fit shrink-0 items-center gap-1 rounded-full bg-(--text)/8 px-3 py-1 text-xs leading-normal tracking-[-0.3px] text-(--text)/56', href && 'transition-colors duration-150 hover:bg-(--text)/12 hover:text-(--text)/72', className)} {...props}
    />
  )
}
