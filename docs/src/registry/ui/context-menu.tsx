import { ContextMenu as ContextMenuPrimitive } from '@base-ui/react/context-menu'
import { cn } from '@/registry/lib/utils'

export function ContextMenu ({ ...props }: ContextMenuPrimitive.Root.Props) {
  return (
    <ContextMenuPrimitive.Root data-slot='context-menu' {...props} />
  )
}

export function ContextMenuTrigger ({ ...props }: ContextMenuPrimitive.Trigger.Props) {
  return (
    <ContextMenuPrimitive.Trigger
      data-slot='context-menu-trigger'
      {...props}
    />
  )
}

export function ContextMenuContent ({
  className,
  align = 'start',
  alignOffset = 4,
  side = 'right',
  sideOffset = 0,
  ...props
}: ContextMenuPrimitive.Popup.Props &
  Pick<
    ContextMenuPrimitive.Positioner.Props,
    'align' | 'alignOffset' | 'side' | 'sideOffset'
  >) {
  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Positioner
        className='isolate z-50 outline-none'
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
      >
        <ContextMenuPrimitive.Popup
          data-slot='context-menu-content'
          className={cn('z-50 min-w-44 origin-(--transform-origin) overflow-y-auto rounded-2xl bg-(--bg-elevated) p-1.5 shadow-lg outline-none data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95', className)}
          {...props}
        />
      </ContextMenuPrimitive.Positioner>
    </ContextMenuPrimitive.Portal>
  )
}

export function ContextMenuGroup ({
  ...props
}: ContextMenuPrimitive.Group.Props) {
  return (
    <ContextMenuPrimitive.Group
      data-slot='context-menu-group'
      {...props}
    />
  )
}

export function ContextMenuLabel ({
  className,
  ...props
}: ContextMenuPrimitive.GroupLabel.Props) {
  return (
    <ContextMenuPrimitive.GroupLabel
      data-slot='context-menu-label'
      className={cn('px-3 py-1.5 text-xs font-medium tracking-[-0.3px] text-(--text)/56', className)}
      {...props}
    />
  )
}

export function ContextMenuItem ({
  className,
  variant = 'default',
  ...props
}: ContextMenuPrimitive.Item.Props & {
  variant?: 'default' | 'destructive';
}) {
  return (
    <ContextMenuPrimitive.Item
      data-slot='context-menu-item'
      data-variant={variant}
      className={cn('relative flex cursor-default items-center gap-2 rounded-xl px-3 py-2 text-sm tracking-[-0.39px] outline-none select-none transition-colors duration-150 data-highlighted:bg-(--text)/8 data-disabled:pointer-events-none data-disabled:opacity-50 data-[variant=destructive]:text-red-600 data-[variant=destructive]:data-highlighted:bg-red-500/10 dark:data-[variant=destructive]:text-red-400 [&_svg]:size-4 [&_svg]:shrink-0', className)}
      {...props}
    />
  )
}

export function ContextMenuSeparator ({
  className,
  ...props
}: ContextMenuPrimitive.Separator.Props) {
  return (
    <ContextMenuPrimitive.Separator
      data-slot='context-menu-separator'
      className={cn('-mx-1.5 my-1.5 h-px bg-(--text)/8', className)}
      {...props}
    />
  )
}
