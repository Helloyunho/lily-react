import { Avatar } from '@/registry/ui/avatar'

function App () {
  return (
    <div className='w-full h-screen flex flex-col gap-4 justify-center items-center'>
      <div className='w-full max-w-sm'>
        <Avatar size='xs' />
        <Avatar size='sm' />
        <Avatar />
        <Avatar size='lg' src='https://avatars.githubusercontent.com/u/10192625?v=4' />
        <Avatar size='xl' src='https://avatars.githubusercontent.com/u/10192625?v=4' />
      </div>
    </div>
  )
}

export default App
