import {
  Empty,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription
} from '@/registry/ui/empty'
import { Button } from '@/registry/ui/button'
import { InboxIcon } from 'lucide-react'

function App () {
  return (
    <div className='w-full h-screen flex flex-col gap-4 justify-center items-center'>
      <Empty className='max-w-sm'>
        <EmptyMedia>
          <InboxIcon aria-hidden='true' />
        </EmptyMedia>
        <EmptyTitle>No messages</EmptyTitle>
        <EmptyDescription>
          You're all caught up. New messages will show up here.
        </EmptyDescription>
        <Button size='sm' variant='ghost' className='mt-2'>Refresh</Button>
      </Empty>
    </div>
  )
}

export default App
