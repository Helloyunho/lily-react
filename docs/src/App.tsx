import { AspectRatio } from '@/registry/ui/aspect-ratio'

function App () {
  return (
    <div className='w-full h-screen flex flex-col gap-4 justify-center items-center'>
      <div className='w-full max-w-sm'>
        <AspectRatio ratio={16 / 9} className='bg-slate-200 flex justify-center items-center'>
          16 : 9
        </AspectRatio>
      </div>
      <div className='w-full max-w-sm'>
        <AspectRatio ratio={4 / 3} className='bg-slate-200 flex justify-center items-center'>
          4 : 3
        </AspectRatio>
      </div>
    </div>
  )
}

export default App
