import { InputOTP, InputOTPSlot, InputOTPSeparator, InputOTPGroup } from '@/registry/ui/input-otp'

function App () {
  return (
    <div className='w-full h-screen bg-white flex flex-col gap-4 justify-center items-center'>
      <InputOTP length={6}>
        <InputOTPGroup>
          {[0, 1, 2].map((_, index) => (
            <InputOTPSlot key={index} />
          ))}
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          {[3, 4, 5].map((_, index) => (
            <InputOTPSlot key={index} />
          ))}
        </InputOTPGroup>
      </InputOTP>
    </div>
  )
}

export default App
