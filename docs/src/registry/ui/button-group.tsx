import type { ComponentProps, ElementType } from 'react'
import { cn } from '@/registry/lib/utils'

export function ButtonGroup ({
  className,
  orientation = 'horizontal',
  ...props
}: ComponentProps<'div'> & {
  orientation?: 'horizontal' | 'vertical'
}) {
  const orientationClasses = {
    horizontal: '[&>*:not(:last-child)]:rounded-r-none [&>*:not(:first-child)]:rounded-l-none',
    vertical:
      'flex-col [&>*:not(:last-child)]:rounded-b-none [&>*:not(:first-child)]:rounded-t-none'
  }

  return (
    <div
      role='group'
      data-slot='button-group'
      className={cn(
        'flex w-fit items-stretch *:focus-visible:relative *:focus-visible:z-10',
        orientationClasses[orientation],
        className
      )}
      {...props}
    />
  )
}

export function ButtonGroupText ({
  className,
  children,
  Child,
  ...props
}: ComponentProps<'div'> & {
  Child?: ElementType
}) {
  const propsToPass = {
    ...props,
    className: cn(
      'flex items-center rounded-3xl bg-(--text)/5 px-4 text-sm tracking-[-0.39px] text-(--text)/72 [&_svg]:pointer-events-none [&_svg]:size-4',
      className
    ),
    'data-slot': 'button-group-text'
  }

  if (Child) {
    return <Child {...propsToPass} />
  } else {
    return (
      <div {...propsToPass}>
        {children}
      </div>
    )
  }
}

export function ButtonGroupSeparator ({ className, orientation = 'vertical', ...props }: ComponentProps<'div'> & {
  orientation?: 'horizontal' | 'vertical'
}) {
  return (
    <div
      role='separator'
      data-slot='button-group-separator'
      className={cn('self-stretch bg-(--bg)', orientation === 'vertical' ? 'my-px w-px' : 'mx-px h-px', className)}
      {...props}
    />
  )
}
