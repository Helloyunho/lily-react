import { useContext, useState, createContext, useEffect } from 'react'
import { RadioGroup } from '@base-ui/react/radio-group'
import { Radio } from '@base-ui/react/radio'
import { cn } from '@/registry/lib/utils'

const ChoiceGroupContext = createContext<{
  size: 'sm' | 'lg'
  setSize: (size: 'sm' | 'lg') => void
}>({
      size: 'sm',
      setSize: () => {}
    })

const useChoiceGroupContext = () => {
  const context = useContext(ChoiceGroupContext)
  if (!context) {
    throw new Error('useChoiceGroupContext must be used within a ChoiceGroupContextProvider')
  }
  return context
}

export function ChoiceGroup ({ ...props }: RadioGroup.Props & { size?: 'sm' | 'lg' }) {
  const [size, setSize] = useState<'sm' | 'lg'>('sm')
  return (
    <ChoiceGroupContext.Provider value={{ size, setSize }}>
      <ChoiceGroupInner {...props} />
    </ChoiceGroupContext.Provider>
  )
}

function ChoiceGroupInner ({ className, size = 'sm', ...props }: RadioGroup.Props & { size?: 'sm' | 'lg' }) {
  const { setSize } = useChoiceGroupContext()
  useEffect(() => {
    setSize(size)
  }, [size, setSize])

  return (
    <RadioGroup
      data-slot='choice-group' className={cn(
        'lily-choice-group-base inline-flex w-fit max-w-full items-stretch gap-1 rounded-3xl bg-(--text)/5 p-1',
        size === 'lg' && 'lily-choice-group-large p-1',
        className
      )} {...props}
    />
  )
}

export function ChoiceGroupItem ({ className, ...props }: Radio.Root.Props) {
  const { size } = useChoiceGroupContext()
  return (
    <Radio.Root
      nativeButton
      render={(buttonProps) => (
        <label>
          <button {...buttonProps} />
        </label>
      )}
      data-slot='choice-group-item' className={cn(
        'lily-choice-group-item-base inline-flex flex-1 items-center justify-center rounded-full px-4 py-1.5 text-sm whitespace-nowrap text-(--text)/56 outline-none disabled:pointer-events-none disabled:opacity-50 data-checked:bg-(--bg-elevated) data-checked:font-medium data-checked:text-(--text) data-checked:shadow-sm',
        size === 'lg' && 'lily-choice-group-item-large px-5 py-2 text-base',
        className
      )} {...props}
    />
  )
}
