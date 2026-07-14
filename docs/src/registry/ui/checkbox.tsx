import { Checkbox as CheckboxPrimitive } from '@base-ui/react/checkbox'
import { cn } from '@/registry/lib/utils'
import { MinusIcon, CheckIcon } from 'lucide-react'

export function Checkbox ({ className, checked, indeterminate, ...props }: CheckboxPrimitive.Root.Props) {
  return (
    <CheckboxPrimitive.Root
      data-slot='checkbox' className={cn('peer flex size-5 shrink-0 items-center justify-center rounded-md border border-(--text)/24 outline-none transition-colors duration-150 data-checked:border-(--text) data-checked:bg-(--text) data-checked:text-(--bg) disabled:cursor-not-allowed disabled:opacity-50', className)} {...props}
    >
      <CheckboxPrimitive.Indicator className='flex items-center justify-center'>
        {indeterminate
          ? (
            <MinusIcon className='size-3.5' aria-hidden='true' />
            )
          : (
            <CheckIcon className='size-3.5' aria-hidden='true' />
            )}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}
