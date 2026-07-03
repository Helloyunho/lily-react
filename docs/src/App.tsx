import { Alert, AlertTitle, AlertDescription } from '@/registry/ui/alert'
import { InfoIcon, TriangleAlert } from 'lucide-react'

function App () {
  return (
    <div className='w-full h-screen flex flex-col gap-4 justify-center items-center'>
      <Alert className='w-96'>
        <InfoIcon aria-hidden='true' />
        <AlertTitle>AAAAAAAA</AlertTitle>
        <AlertDescription>
          You so dumb
        </AlertDescription>
      </Alert>
      <Alert className='w-96' variant='destructive'>
        <TriangleAlert aria-hidden='true' />
        <AlertTitle>AAAAAAAA</AlertTitle>
        <AlertDescription>
          You so dumb
        </AlertDescription>
      </Alert>
    </div>
  )
}

export default App
