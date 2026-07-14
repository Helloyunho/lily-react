import { Collapsible as CollapsiblePrimitive } from '@base-ui/react/collapsible'
import { cn } from '@/registry/lib/utils'

export function Collapsible ({ ...props }: CollapsiblePrimitive.Root.Props) {
  return (
    <CollapsiblePrimitive.Root data-slot='collapsible' {...props} />
  )
}

export function CollapsibleTrigger ({ ...props }: CollapsiblePrimitive.Trigger.Props) {
  return (
    <CollapsiblePrimitive.Trigger
      data-slot='collapsible-trigger'
      {...props}
    />
  )
}

export function CollapsibleContent ({ className, ...props }: CollapsiblePrimitive.Panel.Props) {
  return (
    <CollapsiblePrimitive.Panel
      data-slot='collapsible-content'
      className={cn('overflow-hidden data-open:animate-collapsible-down data-closed:animate-collapsible-up', className)}
      {...props}
    />
  )
}
