import { useState } from 'react'

type ClipboardStatus = 'success' | 'failure'

export const copyText = async (text: string): Promise<ClipboardStatus> => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text)
      return 'success'
    }

    // insecure contexts have no clipboard API — fall back to a hidden textarea
    const textarea = document.createElement('textarea')
    textarea.value = text
    textarea.style.position = 'fixed'
    textarea.style.opacity = '0'
    document.body.appendChild(textarea)
    textarea.select()
    const ok = document.execCommand('copy')
    document.body.removeChild(textarea)

    return ok ? 'success' : 'failure'
  } catch {
    return 'failure'
  }
}

export const useClipboard = (delay: number = 2000): { delay: number; copy: (text: string) => Promise<ClipboardStatus | undefined>; copied: boolean; status: ClipboardStatus | undefined } => {
  const [timeoutNum, setTimeoutNum] = useState<ReturnType<typeof setTimeout> | null>(null)
  const [status, setStatus] = useState<ClipboardStatus | undefined>(undefined)

  const copy = async (text: string) => {
    if (timeoutNum) {
      clearTimeout(timeoutNum)
      setStatus(undefined)
    }
    setStatus(await copyText(text))
    setTimeoutNum(setTimeout(() => setStatus(undefined), delay))

    return status
  }

  return {
    delay,
    copy,
    copied: status === 'success',
    status
  }
}
