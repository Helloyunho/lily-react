import { Menu as DropdownMenuPrimitive } from '@base-ui/react/menu'
import { cn } from '@/registry/lib/utils'

export function DropdownMenu ({ ...props }: DropdownMenuPrimitive.Root.Props) {
  return (
    <DropdownMenuPrimitive.Root {...props} />
  )
}

export function DropdownMenuContent ({ align, alignOffset, side, sideOffset, className, ...props }: DropdownMenuPrimitive.Popup.Props & Pick<DropdownMenuPrimitive.Positioner.Props, 'align' | 'alignOffset' | 'side' | 'sideOffset'>) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Positioner
        className='isolate z-50 outline-none'
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
      >
        <DropdownMenuPrimitive.Popup
          data-slot='dropdown-menu-content'
          className={cn('z-50 min-w-44 origin-(--transform-origin) overflow-y-auto rounded-2xl bg-(--bg-elevated) p-1.5 shadow-lg outline-none data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95', className)}
          {...props}
        />
      </DropdownMenuPrimitive.Positioner>
    </DropdownMenuPrimitive.Portal>
  )
}

export function DropdownMenuItem ({ className, variant = 'default', ...props }: DropdownMenuPrimitive.Item.Props & {
  variant?: 'default' | 'destructive'
}) {
  return (
    <DropdownMenuPrimitive.Item
      data-slot='dropdown-menu-item'
      data-variant={variant}
      className={cn('relative flex cursor-default items-center gap-2 rounded-xl px-3 py-2 text-sm tracking-[-0.39px] outline-none select-none transition-colors duration-150 data-highlighted:bg-(--text)/8 data-disabled:pointer-events-none data-disabled:opacity-50 data-[variant=destructive]:text-red-600 data-[variant=destructive]:data-highlighted:bg-red-500/10 dark:data-[variant=destructive]:text-red-400 [&_svg]:size-4 [&_svg]:shrink-0', className)}
      {...props}
    />
  )
}

export function DropdownMenuGroup ({ ...props }: DropdownMenuPrimitive.Group.Props) {
  return <DropdownMenuPrimitive.Group data-slot='dropdown-menu-group' {...props} />
}

export function DropdownMenuLabel ({ className, ...props }: DropdownMenuPrimitive.GroupLabel.Props) {
  return (
    <DropdownMenuPrimitive.GroupLabel
      data-slot='dropdown-menu-label'
      className={cn('px-3 py-1.5 text-xs font-medium tracking-[-0.3px] text-(--text)/56', className)}
      {...props}
    />
  )
}

export function DropdownMenuSeparator ({ className, ...props }: DropdownMenuPrimitive.Separator.Props) {
  return (
    <DropdownMenuPrimitive.Separator
      data-slot='dropdown-menu-separator'
      className={cn('-mx-1.5 my-1.5 h-px bg-(--text)/8', className)}
      {...props}
    />
  )
}

export function DropdownMenuTrigger ({ className, ...props }: DropdownMenuPrimitive.Trigger.Props) {
  return (
    <DropdownMenuPrimitive.Trigger
      data-slot='dropdown-menu-trigger'
      {...props}
    />
  )
}
