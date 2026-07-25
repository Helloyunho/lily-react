import { Label } from '@/registry/ui/label'
import { Input } from '@/registry/ui/input'

function App () {
  return (
    <div className='w-full h-screen bg-white flex flex-col gap-4 justify-center items-center'>
      <div className='flex max-w-xs flex-col gap-2'>
        <Label htmlFor='email'>Email</Label>
        <Input id='email' type='email' placeholder='you@example.com' />
      </div>
    </div>
  )
}

export default App
