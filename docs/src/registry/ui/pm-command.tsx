import { useState, useEffect } from 'react'
import type { Agent, Command } from 'package-manager-detector'
import { resolveCommand } from 'package-manager-detector/commands'
import { cn } from '@/registry/lib/utils'
import { ChoiceGroup, ChoiceGroupItem } from '@/registry/ui/choice-group'
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/registry/ui/tooltip'
import { useClipboard } from '@/registry/lib/use-clipboard'
import { TerminalIcon, CheckIcon, XIcon, ClipboardIcon } from 'lucide-react'

export type PMCommandVariant = 'default' | 'secondary'
export type PMCommandProps = {
  className?: string
  variant?: PMCommandVariant
  command: Command
  args: string[]
  agents?: Agent[]
  agent?: Agent
  setAgent?: (agent: Agent) => void
}

const variants: Record<PMCommandVariant, string> = {
  default: 'bg-(--text)/5',
  secondary: 'bg-(--text)/8'
}

export function PMCommand ({ className, variant = 'default', command, args, agents = ['npm', 'pnpm', 'yarn', 'bun'], agent = 'npm', setAgent }: PMCommandProps) {
  const { copy, status } = useClipboard()
  const [agent_, setAgent_] = useState<Agent>(agent)
  const resolved = resolveCommand(agent_, command, args)
  const text = resolved ? `${resolved.command} ${resolved.args.join(' ')}`.trim() : ''

  useEffect(() => {
    if (setAgent) {
      setAgent(agent_)
    }
  }, [agent_, setAgent])

  return (
    <div data-slot='pm-command' className={cn('lily-pm-command-1 overflow-hidden rounded-3xl', variants[variant], className)}>
      <div className='lily-pm-command-2 flex items-center gap-2 border-b border-(--text)/8 px-3 py-2'>
        <TerminalIcon className='lily-pm-command-3 size-4 shrink-0 text-(--text)/40' aria-hidden='true' />
        <ChoiceGroup className='lily-pm-command-picker bg-transparent p-0' value={agent_} onValueChange={setAgent_}>
          {agents.map((agent) => (
            <ChoiceGroupItem key={agent} value={agent} className='lily-pm-command-option px-2.5 py-1 text-xs'>
              {agent}
            </ChoiceGroupItem>
          ))}
        </ChoiceGroup>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger aria-label='Copy command' onClick={() => copy(text)} className='lily-pm-command-6 ms-auto inline-flex size-7 items-center justify-center rounded-xl bg-(--text)/8 text-(--text)/56 transition-colors duration-150 hover:bg-(--text)/12 hover:text-(--text) focus-visible:outline-none'>
              {status === 'success'
                ? (
                  <CheckIcon className='lily-pm-command-7 size-4' aria-hidden='true' />
                  )
                : status === 'failure'
                  ? (
                    <XIcon className='lily-pm-command-8 size-4' aria-hidden='true' />
                    )
                  : (
                    <ClipboardIcon className='lily-pm-command-9 size-4' aria-hidden='true' />
                    )}
            </TooltipTrigger>
            <TooltipContent>
              {status === 'success'
                ? 'Copied!'
                : status === 'failure'
                  ? 'Failed to copy'
                  : 'Copy'}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className='lily-pm-command-11 no-scrollbar overflow-x-auto px-5 py-3.5'>
        <code className='lily-pm-command-10 font-mono text-sm text-nowrap text-(--text)/72'>
          {text}
        </code>
      </div>
    </div>
  )
}
