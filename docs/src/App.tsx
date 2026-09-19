// import { useState } from 'react'
import { PMCommand } from '@/registry/ui/pm-command'

function App () {
  // const [value, setValue] = useState<string>('daily')
  // console.log(value)

  return (
    <div className='w-full h-screen bg-white flex flex-col gap-4 justify-center items-center'>
      <div className='flex max-w-md flex-col gap-2'>
        <PMCommand command='execute' args={['lily-svelte@latest', 'add', 'button']} />
      </div>
    </div>
  )
}

export default App
