import type { ComponentProps } from 'react'
import { OTPField as InputOTPPrimitive } from '@base-ui/react/otp-field'
import { cn } from '@/registry/lib/utils'

export function InputOTP ({ className, ...props }: InputOTPPrimitive.Root.Props) {
  return (
    <InputOTPPrimitive.Root
      data-slot='input-otp'
      spellCheck={false}
      className={cn('flex items-center gap-2 disabled:cursor-not-allowed has-disabled:opacity-50', className)}
      {...props}
    />
  )
}

export function InputOTPSlot ({ className, ...props }: InputOTPPrimitive.Input.Props) {
  return (
    <InputOTPPrimitive.Input
      data-slot='input-otp-slot'
      className={cn('relative text-center flex size-12 items-center justify-center rounded-2xl bg-(--text)/5 text-base font-medium tracking-[-0.39px] transition-colors duration-150 outline-none data-active:z-10 data-active:bg-(--text)/12', className)}
      {...props}
    />
  )
}

export function InputOTPSeparator ({ className, children, ...props }: InputOTPPrimitive.Separator.Props) {
  return (
    <InputOTPPrimitive.Separator
      data-slot='input-otp-separator'
      role='separator'
      className={cn('flex items-center text-(--text)/40', className)}
      {...props}
    >
      {children ?? <div className='h-px w-2.5 bg-(--text)/24' />}
    </InputOTPPrimitive.Separator>
  )
}

export function InputOTPGroup ({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot='input-otp-group'
      className={cn('flex items-center gap-2', className)}
      {...props}
    />
  )
}
