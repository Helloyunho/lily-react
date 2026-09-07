import { type ComponentProps, useState } from 'react'
import { MinusIcon, PlusIcon } from 'lucide-react'
import { cn } from '@/registry/lib/utils'

export function NumberField ({ className, value = 0, min, max, step = 1, disabled = false, onChange, ...props }: Omit<ComponentProps<'input'>, 'type' | 'value' | 'min' | 'max' | 'step' | 'onChange'> & {
  value?: number | null
  onChange?: (value: number | null) => void
  min?: number
  max?: number
  step?: number
  disabled?: boolean
}) {
  const [internalValue, setInternalValue] = useState<number | null>(value)

  const clamp = (n: number) => {
    if (min !== undefined) n = Math.max(min, n)
    if (max !== undefined) n = Math.min(max, n)
    return n
  }

  const atMin = min !== undefined && internalValue !== null && internalValue <= min
  const atMax = max !== undefined && internalValue !== null && internalValue >= max

  const stepBy = (direction: 1 | -1) => {
    const newValue = clamp((internalValue ?? 0) + direction * step)
    setInternalValue(newValue)
    if (onChange) {
      onChange(newValue)
    }
  }

  return (
    <div data-slot='number-field' className={cn('inline-flex w-fit items-center rounded-3xl bg-(--text)/5 transition-colors duration-150 focus-within:bg-(--text)/8 hover:bg-(--text)/8', disabled && 'pointer-events-none opacity-50', className)}>
      <button
        type='button'
        aria-label='Decrement'
        disabled={disabled || atMin}
        onClick={() => stepBy(-1)}
        className='inline-flex size-10 shrink-0 items-center justify-center rounded-l-3xl text-(--text)/56 transition-colors duration-150 hover:bg-(--text)/8 hover:text-(--text) disabled:pointer-events-none disabled:opacity-40'
      >
        <MinusIcon className='size-4' aria-hidden='true' />
      </button>
      <input
        type='number'
        value={internalValue ?? ''}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        onChange={(e) => {
          const newValue = e.target.value === '' ? null : Number(e.target.value)
          setInternalValue(newValue)
        }}
        onBlur={() => {
          if (internalValue !== null) {
            const newValue = clamp(internalValue)
            setInternalValue(newValue)
            if (onChange) {
              onChange(newValue)
            }
          }
        }}
        className='w-14 [appearance:textfield] bg-transparent text-center text-sm tracking-[-0.39px] outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
        {...props}
      />
      <button
        type='button'
        aria-label='Increment'
        disabled={disabled || atMax}
        onClick={() => stepBy(1)}
        className='inline-flex size-10 shrink-0 items-center justify-center rounded-r-3xl text-(--text)/56 transition-colors duration-150 hover:bg-(--text)/8 hover:text-(--text) disabled:pointer-events-none disabled:opacity-40'
      >
        <PlusIcon className='size-4' aria-hidden='true' />
      </button>
    </div>
  )
}
