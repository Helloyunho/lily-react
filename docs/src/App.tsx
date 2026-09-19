// import { useState } from 'react'
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/registry/ui/tooltip'

function App () {
  // const [value, setValue] = useState<string>('daily')
  // console.log(value)

  return (
    <div className='w-full h-screen bg-white flex flex-col gap-4 justify-center items-center'>
      <div className='flex max-w-xs flex-col gap-2'>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              Hover me
            </TooltipTrigger>
            <TooltipContent>
              Add to library
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  )
}

export default App
