import { Input } from '@/registry/ui/input'

function App () {
  return (
    <div className='w-full h-screen bg-white flex flex-col gap-4 justify-center items-center'>
      <Input type='email' placeholder='you@example.com' className='max-w-xs' />
    </div>
  )
}

export default App
