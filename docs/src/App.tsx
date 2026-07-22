import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuLabel,
  ContextMenuGroup
} from '@/registry/ui/context-menu'

function App () {
  return (
    <div className='w-full h-screen flex flex-col gap-4 justify-center items-center'>
      <ContextMenu>
        <ContextMenuTrigger
          className='flex h-32 w-full max-w-sm items-center justify-center rounded-3xl border border-dashed border-(--text)/12 text-sm tracking-[-0.39px] text-(--text)/56'
        >
          Right-click here
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuGroup>
            <ContextMenuLabel>Actions</ContextMenuLabel>
            <ContextMenuItem>Back</ContextMenuItem>
            <ContextMenuItem>Reload</ContextMenuItem>
          </ContextMenuGroup>
          <ContextMenuSeparator />
          <ContextMenuGroup>
            <ContextMenuItem variant='destructive'>Delete</ContextMenuItem>
          </ContextMenuGroup>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  )
}

export default App
