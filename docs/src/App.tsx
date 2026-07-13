import { useState } from 'react'
import { Calendar } from '@/registry/ui/calendar'

function App () {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

  return (
    <div className='w-full h-screen flex flex-col gap-4 justify-center items-center'>
      <Calendar mode='single' selected={selectedDate} onSelect={setSelectedDate} />
    </div>
  )
}

export default App
