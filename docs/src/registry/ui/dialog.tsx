import type { ComponentProps } from 'react'
import { Dialog as DialogPrimitive } from '@base-ui/react/dialog'
import { XIcon } from 'lucide-react'
import { cn } from '@/registry/lib/utils'

export function Dialog ({ ...props }: DialogPrimitive.Root.Props) {
  return (
    <DialogPrimitive.Root data-slot='dialog' {...props} />
  )
}

export function DialogClose ({ ...props }: DialogPrimitive.Close.Props) {
  return (
    <DialogPrimitive.Close
      data-slot='dialog-close'
      {...props}
    />
  )
}

export function DialogPortal ({ ...props }: DialogPrimitive.Portal.Props) {
  return (
    <DialogPrimitive.Portal data-slot='dialog-portal' {...props} />
  )
}

export function DialogOverlay ({ className, ...props }: DialogPrimitive.Backdrop.Props) {
  return (
    <DialogPrimitive.Backdrop
      data-slot='dialog-overlay'
      className={cn('fixed inset-0 z-50 bg-black/40 backdrop-blur-sm data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0', className)}
      {...props}
    />
  )
}

export function DialogContent ({
  className,
  portalProps,
  showCloseButton = true,
  children,
  ...props
}: DialogPrimitive.Popup.Props & {
  portalProps?: Omit<DialogPrimitive.Portal.Props, 'children'>
  showCloseButton?: boolean
}) {
  return (
    <DialogPortal {...portalProps}>
      <DialogOverlay />
      <DialogPrimitive.Popup
        data-slot='dialog-content'
        className={cn('fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 rounded-2xl bg-(--bg-elevated) p-6 shadow-lg outline-none data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95', className)}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogClose
            className='absolute inset-e-4 top-4 inline-flex size-8 items-center justify-center rounded-xl text-(--text)/40 transition-colors duration-150 hover:bg-(--text)/8 hover:text-(--text) focus-visible:outline-non'
          >
            <span className='sr-only'>Close</span>
            <XIcon className='size-4' aria-hidden='true' />
            <span className='sr-only'>Close</span>
          </DialogClose>
        )}
      </DialogPrimitive.Popup>
    </DialogPortal>
  )
}

export function DialogDescription ({ className, ...props }: DialogPrimitive.Description.Props) {
  return (
    <DialogPrimitive.Description
      data-slot='dialog-description'
      className={cn('text-sm leading-[1.6] tracking-[-0.39px] text-(--text)/56', className)}
      {...props}
    />
  )
}

export function DialogFooter ({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot='dialog-footer'
      className={cn('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className)}
      {...props}
    />
  )
}

export function DialogHeader ({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot='dialog-header'
      className={cn('flex flex-col gap-1.5 pe-6', className)}
      {...props}
    />
  )
}

export function DialogTitle ({ className, ...props }: DialogPrimitive.Title.Props) {
  return (
    <DialogPrimitive.Title
      data-slot='dialog-title'
      className={cn('text-lg font-semibold tracking-[-0.6px]', className)}
      {...props}
    />
  )
}

export function DialogTrigger ({ ...props }: DialogPrimitive.Trigger.Props) {
  return (
    <DialogPrimitive.Trigger data-slot='dialog-trigger' {...props} />
  )
}
