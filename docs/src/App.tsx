import { Badge } from '@/registry/ui/badge'

function App () {
  return (
    <div className='w-full h-screen flex flex-col gap-4 justify-center items-center'>
      <Badge>Default</Badge>
      <Badge>New</Badge>
      <Badge href='https://github.com/levish0/lily-svelte'>Link</Badge>
    </div>
  )
}

export default App
