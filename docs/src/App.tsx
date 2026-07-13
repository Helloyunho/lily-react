import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/registry/ui/card'
import { Button } from '@/registry/ui/button'

function App () {
  return (
    <div className='w-full h-screen flex flex-col gap-4 justify-center items-center'>
      <Card>
        <CardHeader>
          <CardTitle>Upgrade to Pro</CardTitle>
          <CardDescription>Unlock every component and priority support.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className='text-sm tracking-[-0.39px] text-(--text)/72'>
            Your trial ends in 7 days. Upgrade now to keep going.
          </p>
        </CardContent>
        <CardFooter>
          <Button>Upgrade</Button>
          <Button variant='ghost'>Maybe later</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default App
