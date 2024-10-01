import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

const Faq = () => {
  return (
    <div className='flex items-center justify-center p-4'>
      <div className='w-full max-w-3xl text-lg md:text-2xl'>
        <h1 className='text-center text-3xl font-semibold mb-6'>Frequently Asked Questions</h1>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger><h2 className='text-xl'>Is it accessible?</h2></AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-2">
            <AccordionTrigger><h2 className='text-xl'>What is your return policy?</h2></AccordionTrigger>
            <AccordionContent>
              You can return any item within 30 days for a full refund.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-3">
            <AccordionTrigger><h2 className='text-xl'>How long does shipping take?</h2></AccordionTrigger>
            <AccordionContent>
              Shipping usually takes 5-7 business days.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-4">
            <AccordionTrigger><h2 className='text-xl'>Do you offer international shipping?</h2></AccordionTrigger>
            <AccordionContent>
              Yes, we ship to over 100 countries worldwide.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default Faq;
