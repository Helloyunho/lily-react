import { ButtonGroup, ButtonGroupSeparator } from '@/registry/ui/button-group'
import { Button } from '@/registry/ui/button'

function App () {
  return (
    <div className='w-full h-screen flex flex-col gap-4 justify-center items-center'>
      <ButtonGroup>
        <Button variant='ghost'>Day</Button>
        <ButtonGroupSeparator />
        <Button variant='ghost'>Week</Button>
        <ButtonGroupSeparator />
        <Button variant='ghost'>Month</Button>
      </ButtonGroup>
    </div>
  )
}

export default App
