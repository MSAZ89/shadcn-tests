import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Maccordion() {
  return (
    <Accordion className="lg:w-1/2" type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it easy?</AccordionTrigger>
        <AccordionContent>Yes. The easiest</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
