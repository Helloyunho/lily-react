import { useState } from 'react'
import { ChoiceGroup, ChoiceGroupItem } from '@/registry/ui/choice-group'

function App () {
  const [value, setValue] = useState<string>('daily')
  console.log(value)

  return (
    <div className='w-full h-screen bg-white flex flex-col gap-4 justify-center items-center'>
      <div className='flex max-w-xs flex-col gap-2'>
        <ChoiceGroup value={value} onValueChange={(v) => setValue(v)} size='lg'>
          <ChoiceGroupItem value='daily'>Daily</ChoiceGroupItem>
          <ChoiceGroupItem value='weekly'>Weekly</ChoiceGroupItem>
          <ChoiceGroupItem value='monthly'>Monthly</ChoiceGroupItem>
        </ChoiceGroup>
      </div>
    </div>
  )
}

export default App
