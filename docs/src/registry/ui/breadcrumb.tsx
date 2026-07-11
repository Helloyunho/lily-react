import type { ComponentProps, ElementType } from 'react'
import { cn } from '@/registry/lib/utils'
import { EllipsisIcon, ChevronRightIcon } from 'lucide-react'

export function Breadcrumb ({ className, children, ...props }: ComponentProps<'nav'>) {
  return (
    <nav data-slot='breadcrumb' className={cn('text-sm tracking-[-0.39px]', className)} {...props}>
      {children}
    </nav>
  )
}

export function BreadcrumbEllipsis ({ className, ...props }: Omit<ComponentProps<'span'>, 'children'>) {
  return (
    <span data-slot='breadcrumb-ellipsis' role='presentation' aria-hidden='true' className={cn('flex size-5 items-center justify-center', className)} {...props}>
      <EllipsisIcon className='size-4' aria-hidden='true' />
      <span className='sr-only'>More</span>
    </span>
  )
}

export function BreadcrumbItem ({ className, children, ...props }: ComponentProps<'li'>) {
  return (
    <li data-slot='breadcrumb-item' className={cn('inline-flex items-center gap-1.5', className)} {...props}>
      {children}
    </li>
  )
}

export function BreadcrumbLink ({ className, href, Child, children, ...props }: ComponentProps<'a'> & {
  Child?: ElementType<ComponentProps<'a'>>
}) {
  const childProps = {
    'data-slot': 'breadcrumb-link',
    className: cn('transition-colors duration-150 hover:text-(--text)', className),
    href,
    ...props
  }

  return (
    (Child ? <Child {...childProps} /> : <a {...childProps}>{children}</a>)
  )
}

export function BreadcrumbList ({ className, children, ...props }: ComponentProps<'ol'>) {
  return (
    <ol data-slot='breadcrumb-list' className={cn('flex flex-wrap items-center gap-1.5 wrap-break-word text-(--text)/56', className)} {...props}>
      {children}
    </ol>
  )
}

export function BreadcrumbPage ({ className, children, ...props }: ComponentProps<'span'>) {
  return (
    <span data-slot='breadcrumb-page' role='link' aria-disabled='true' aria-current='page' className={cn('font-medium text-(--text)', className)} {...props}>
      {children}
    </span>
  )
}

export function BreadcrumbSeparator ({ className, children, ...props }: ComponentProps<'li'>) {
  return (
    <li data-slot='breadcrumb-separator' role='presentation' aria-hidden='true' className={cn('text-(--text)/40 [&>svg]:size-3.5', className)} {...props}>
      {children ?? <ChevronRightIcon aria-hidden='true' />}
    </li>
  )
}
