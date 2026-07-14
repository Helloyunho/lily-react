import { Collapsible, CollapsibleTrigger, CollapsibleContent } from './registry/ui/collapsible'
import { ChevronsUpDownIcon } from 'lucide-react'

function App () {
  return (
    <div className='w-full h-screen flex flex-col gap-4 justify-center items-center'>
      <Collapsible className='flex w-full max-w-sm flex-col'>
        <div className='flex flex-col gap-2'>
          <div className='flex items-center justify-between gap-4'>
            <span className='text-sm font-medium tracking-[-0.39px]'>@example starred 3 repositories</span>
            <CollapsibleTrigger
              className='inline-flex size-8 items-center justify-center rounded-xl text-(--text)/40 transition-colors duration-150 hover:bg-(--text)/8 hover:text-(--text)'
            >
              <ChevronsUpDownIcon
                className='size-4'
                aria-hidden='true'
              />
            </CollapsibleTrigger>
          </div>
          <div
            className='rounded-2xl bg-(--text)/5 px-4 py-2.5 text-sm tracking-[-0.39px]'
          >
            @lily/ui
          </div>
        </div>
        <CollapsibleContent>
          <div className='flex flex-col gap-2 pt-2'>
            <div
              className='rounded-2xl bg-(--text)/5 px-4 py-2.5 text-sm tracking-[-0.39px]'
            >
              sveltejs/svelte
            </div>
            <div
              className='rounded-2xl bg-(--text)/5 px-4 py-2.5 text-sm tracking-[-0.39px]'
            >
              huntabyte/bits-ui
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}

export default App
