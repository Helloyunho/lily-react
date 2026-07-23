import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from '@/registry/ui/hover-card'
import { Avatar } from '@/registry/ui/avatar'

function App () {
  return (
    <div className='w-full h-screen flex flex-col gap-4 justify-center items-center'>
      <HoverCard>
        <HoverCardTrigger
          href='https://example.com'
          target='_blank'
          rel='noreferrer'
          className='link font-medium tracking-[-0.39px]'
        >
          @example
        </HoverCardTrigger>
        <HoverCardContent>
          <div className='flex gap-3'>
            <Avatar src='/levish_avatar.png' alt='example' />
            <div className='flex flex-col gap-1'>
              <p className='font-medium'>example</p>
              <p className='text-xs leading-normal text-(--text)/56'>
                Building lily — a Svelte component library.
              </p>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  )
}

export default App
