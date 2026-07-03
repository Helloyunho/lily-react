import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/registry/ui/accordion'

function App () {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <Accordion className='w-96'>
        <AccordionItem>
          <AccordionTrigger>Trigger 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionTrigger>Trigger 2</AccordionTrigger>
          <AccordionContent>Content 2</AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionTrigger>Trigger 3</AccordionTrigger>
          <AccordionContent>Content 3</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default App
