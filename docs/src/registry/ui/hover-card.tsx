import { PreviewCard as PreviewCardPrimitive } from '@base-ui/react/preview-card'
import { cn } from '@/registry/lib/utils'

export function HoverCard ({ ...props }: PreviewCardPrimitive.Root.Props) {
  return (
    <PreviewCardPrimitive.Root data-slot='hover-card' {...props} />
  )
}

export function HoverCardTrigger ({ ...props }: PreviewCardPrimitive.Trigger.Props) {
  return (
    <PreviewCardPrimitive.Trigger
      data-slot='hover-card-trigger'
      {...props}
    />
  )
}

export function HoverCardContent ({
  className,
  align = 'center',
  alignOffset = 0,
  side = 'top',
  sideOffset = 8,
  ...props
}: PreviewCardPrimitive.Popup.Props &
  Pick<
    PreviewCardPrimitive.Positioner.Props,
    'align' | 'alignOffset' | 'side' | 'sideOffset'
  >) {
  return (
    <PreviewCardPrimitive.Portal>
      <PreviewCardPrimitive.Positioner
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
      >
        <PreviewCardPrimitive.Popup
          data-slot='hover-card-content'
          className={cn('z-50 w-64 origin-(--transform-origin) rounded-3xl bg-(--bg-elevated) p-4 text-sm tracking-[-0.39px] shadow-lg outline-none data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95', className)}
          {...props}
        />
      </PreviewCardPrimitive.Positioner>
    </PreviewCardPrimitive.Portal>
  )
}
