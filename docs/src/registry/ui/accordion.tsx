import { cn } from '@/registry/lib/utils'
import { Accordion as AccordionPrimitive } from '@base-ui/react/accordion'
import { ChevronDownIcon } from 'lucide-react'

export function Accordion ({ children, className, ...props }: AccordionPrimitive.Root.Props) {
  return (
    <AccordionPrimitive.Root data-slot='accordion' className={cn('flex w-full flex-col', className)} {...props}>
      {children}
    </AccordionPrimitive.Root>
  )
}

export function AccordionTrigger ({ children, className, ...props }: AccordionPrimitive.Trigger.Props) {
  return (
    <AccordionPrimitive.Header className='flex'>
      <AccordionPrimitive.Trigger
        data-slot='accordion-trigger'
        className={cn(
          'group/accordion flex flex-1 items-center justify-between gap-4 py-4 text-left text-sm font-medium tracking-[-0.39px] outline-none transition-colors duration-150 hover:text-(--text)/72 active:transform-none disabled:pointer-events-none disabled:opacity-50',
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className='size-4 shrink-0 text-(--text)/40 transition-transform duration-200 ease-out group-aria-expanded/accordion:rotate-180' aria-hidden='true' />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

export function AccordionItem ({ children, className, ...props }: AccordionPrimitive.Item.Props) {
  return (
    <AccordionPrimitive.Item data-slot='accordion-item' className={cn('border-b border-(--text)/8', className)} {...props}>
      {children}
    </AccordionPrimitive.Item>
  )
}

export function AccordionContent ({ children, className, ...props }: AccordionPrimitive.Panel.Props) {
  return (
    <AccordionPrimitive.Panel
      data-slot='accordion-content'
      className='overflow-hidden data-closed:animate-accordion-up data-open:animate-accordion-down'
      {...props}
    >
      <div className={
        cn('pb-4 text-sm leading-[1.6] tracking-[-0.39px] text-(--text)/72', className)
      }
      >
        {children}
      </div>
    </AccordionPrimitive.Panel>
  )
}
