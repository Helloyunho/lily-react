import { useState } from 'react'
import { NumberField } from '@/registry/ui/number-field'

function App () {
  const [value, setValue] = useState<number | null>(0)
  console.log(value)

  return (
    <div className='w-full h-screen bg-white flex flex-col gap-4 justify-center items-center'>
      <div className='flex max-w-xs flex-col gap-2'>
        <NumberField value={value} onChange={setValue} min={0} max={10} />
      </div>
    </div>
  )
}

export default App
