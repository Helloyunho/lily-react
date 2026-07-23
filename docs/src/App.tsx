import { SearchIcon } from 'lucide-react'
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon
} from '@/registry/ui/input-group'

function App () {
  return (
    <div className='w-full h-screen bg-white flex flex-col gap-4 justify-center items-center'>
      <div className='flex w-full max-w-sm flex-col gap-3'>
        <InputGroup>
          <InputGroupAddon>$</InputGroupAddon>
          <InputGroupInput type='number' placeholder='0.00' />
          <InputGroupAddon align='inline-end'>USD</InputGroupAddon>
        </InputGroup>
        <InputGroup>
          <InputGroupAddon>
            <SearchIcon aria-hidden='true' />
          </InputGroupAddon>
          <InputGroupInput placeholder='Search…' />
        </InputGroup>
      </div>
    </div>
  )
}

export default App
