import type { ComponentProps } from 'react'
import { cn } from '@/registry/lib/utils'
import { AlertDialog as AlertDialogPrimitive } from '@base-ui/react/alert-dialog'

export function AlertDialog ({ children, ...props }: AlertDialogPrimitive.Root.Props) {
  return (
    <AlertDialogPrimitive.Root {...props}>
      {children}
    </AlertDialogPrimitive.Root>
  )
}

export function AlertDialogAction ({ children, className, ...props }: ComponentProps<'button'>) {
  return (
    <button
      data-slot='alert-dialog-action'
      className={cn('inline-flex h-10 items-center justify-center rounded-3xl bg-(--text) px-4 text-sm font-medium tracking-[-0.39px] text-(--bg) outline-none transition-colors duration-150 hover:bg-(--text)/90', className)}
      {...props}
    >
      {children}
    </button>
  )
}

export function AlertDialogCancel ({ children, className, ...props }: AlertDialogPrimitive.Close.Props) {
  return (
    <AlertDialogPrimitive.Close
      data-slot='alert-dialog-cancel'
      className={cn('inline-flex h-10 items-center justify-center rounded-3xl px-4 text-sm font-medium tracking-[-0.39px] text-(--text)/72 outline-none transition-colors duration-150 hover:bg-(--text)/8 hover:text-(--text)', className)}
      {...props}
    >
      {children}
    </AlertDialogPrimitive.Close>
  )
}

export function AlertDialogContent ({ children, className, portalProps, ...props }: AlertDialogPrimitive.Popup.Props & { portalProps?: AlertDialogPrimitive.Portal.Props }) {
  return (
    <AlertDialogPrimitive.Portal {...portalProps}>
      <AlertDialogPrimitive.Backdrop data-slot='alert-dialog-overlay' className='fixed inset-0 z-50 bg-black/40 backdrop-blur-sm data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0' />
      <AlertDialogPrimitive.Popup
        data-slot='alert-dialog-content'
        className={cn('fixed top-1/2 left-1/2 z-50 flex w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 flex-col gap-4 rounded-3xl bg-(--bg-elevated) p-6 shadow-lg outline-none data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95', className)}
        {...props}
      >
        {children}
      </AlertDialogPrimitive.Popup>
    </AlertDialogPrimitive.Portal>
  )
}

export function AlertDialogDescription ({ children, className, ...props }: AlertDialogPrimitive.Description.Props) {
  return (
    <AlertDialogPrimitive.Description
      data-slot='alert-dialog-description'
      className={cn('text-sm leading-[1.6] tracking-[-0.39px] text-(--text)/56', className)}
      {...props}
    >
      {children}
    </AlertDialogPrimitive.Description>
  )
}

export function AlertDialogFooter ({ children, className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot='alert-dialog-footer'
      className={cn('mt-2 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className)}
      {...props}
    >
      {children}
    </div>
  )
}

export function AlertDialogHeader ({ children, className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot='alert-dialog-header'
      className={cn('flex flex-col gap-1.5', className)}
      {...props}
    >
      {children}
    </div>
  )
}

export function AlertDialogTitle ({ children, className, ...props }: AlertDialogPrimitive.Title.Props) {
  return (
    <AlertDialogPrimitive.Title
      data-slot='alert-dialog-title'
      className={cn('text-lg font-semibold tracking-[-0.6px]', className)}
      {...props}
    >
      {children}
    </AlertDialogPrimitive.Title>
  )
}

export function AlertDialogTrigger ({ children, className, ...props }: AlertDialogPrimitive.Trigger.Props) {
  return (
    <AlertDialogPrimitive.Trigger
      data-slot='alert-dialog-trigger'
      {...props}
    >
      {children}
    </AlertDialogPrimitive.Trigger>
  )
}
