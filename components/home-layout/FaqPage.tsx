import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqDetails } from "@/lib/constants";

const FaqPage = () => {
  return (
    <section className="p-5 md:p-16 bg-myColors-secondary">
      <h2 className="font-bold text-2xl md:text-5xl mb-6 md:mb-12 text-center">
        FAQS
      </h2>

      <Accordion
        type="single"
        collapsible
        className="max-w-md mx-auto lg:max-w-lg"
      >
        {faqDetails.map((content, index) => (
          <AccordionItem value={`item-${index + 1}`} key={index}>
            <AccordionTrigger className="text-left font-semibold">
              {content.question}
            </AccordionTrigger>
            <AccordionContent>{content.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FaqPage;
