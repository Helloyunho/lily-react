import { Kbd } from '@/registry/ui/kbd'

function App () {
  return (
    <div className='w-full h-screen bg-white flex flex-col gap-4 justify-center items-center'>
      <div
        className='flex items-center gap-2 text-sm tracking-[-0.39px] text-(--text)/72'
      >
        Press
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
        to open search
      </div>
    </div>
  )
}

export default App
