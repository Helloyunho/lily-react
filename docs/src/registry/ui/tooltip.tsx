import { Tooltip as TooltipPrimitive } from '@base-ui/react/tooltip'
import { cn } from '@/registry/lib/utils'

export function Tooltip ({ ...props }: TooltipPrimitive.Root.Props) {
  return (
    <TooltipPrimitive.Root {...props} />
  )
}

export function TooltipPortal ({ ...props }: TooltipPrimitive.Portal.Props) {
  return (
    <TooltipPrimitive.Portal {...props} />
  )
}

export function TooltipContent ({ className, sideOffset = 6, side = 'top', children, arrowClasses, portalProps, ...props }: TooltipPrimitive.Popup.Props & {
  sideOffset?: TooltipPrimitive.Positioner.Props['sideOffset']
  side?: TooltipPrimitive.Positioner.Props['side']
  arrowClasses?: string
  portalProps?: TooltipPrimitive.Portal.Props
}) {
  return (
    <TooltipPortal {...portalProps}>
      <TooltipPrimitive.Positioner side={side} sideOffset={sideOffset}>
        <TooltipPrimitive.Popup
          className={cn('lily-tooltip-content-1 z-50 w-fit max-w-xs origin-(--transform-origin) rounded-xl bg-(--text) px-3 py-1.5 text-xs font-medium tracking-[-0.3px] text-(--bg) shadow-lg',
            'data-ending-style:animate-out data-ending-style:fade-out-0 data-ending-style:zoom-out-95 not-data-instant:animate-in not-data-instant:fade-in-0 not-data-instant:zoom-in-95',
            className)} {...props}
        >
          {children}
          <TooltipPrimitive.Arrow
            className={arrowClasses} render={(props) => (
              <div
                className={cn('lily-tooltip-content-2 z-50 size-2.5 rotate-45 rounded-xs bg-(--text)',
                  'data-[side=top]:translate-x-1/2 data-[side=top]:translate-y-[calc(-50%+2px)]',
                  'data-[side=bottom]:-translate-x-1/2 data-[side=bottom]:-translate-y-[calc(-50%+1px)]',
                  'data-[side=right]:translate-x-[calc(50%+2px)] data-[side=right]:translate-y-1/2',
                  'data-[side=left]:-translate-y-[calc(50%-3px)]',
                  arrowClasses)}
                {...props}
              />
            )}
          />
        </TooltipPrimitive.Popup>
      </TooltipPrimitive.Positioner>
    </TooltipPortal>
  )
}

export function TooltipProvider ({ delay = 0, ...props }: TooltipPrimitive.Provider.Props) {
  return (
    <TooltipPrimitive.Provider delay={delay} {...props} />
  )
}

export function TooltipTrigger ({ ...props }: TooltipPrimitive.Trigger.Props) {
  return (
    <TooltipPrimitive.Trigger {...props} />
  )
}
