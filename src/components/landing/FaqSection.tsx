
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How long does it take to see results?",
    answer:
      "Results vary depending on individual factors like your starting fitness level, consistency, diet, and genetics. However, most clients start noticing positive changes within 4-6 weeks of consistent training and proper nutrition.",
  },
  {
    question: "Do you offer online coaching?",
    answer:
      "Yes, we offer comprehensive online coaching programs that include personalized workout plans, nutrition guidance, and regular virtual check-ins to keep you on track, no matter where you are.",
  },
  {
    question: "What if I have dietary restrictions?",
    answer:
      "No problem! Our nutrition plans are fully customizable. We can accommodate various dietary needs, including vegetarian, vegan, gluten-free, and other allergies or preferences. Just let us know your requirements during the initial consultation.",
  },
  {
    question: "How often should I work out?",
    answer:
      "The ideal frequency depends on your goals and current fitness level. For beginners, we often recommend 2-3 sessions per week. More advanced clients might train 4-5 times a week. We'll determine the best schedule for you during your assessment.",
  },
  {
    question: "What kind of support can I expect?",
    answer:
      "You'll receive ongoing support through weekly check-ins, access to your trainer via email or messaging for quick questions, and regular progress reviews to adjust your plan as needed. We are committed to your success.",
  },
];

export const FaqSection = () => {
  return (
    <section id="faq" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <HelpCircle className="mx-auto h-12 w-12 text-primary" />
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Have questions? We've got answers. Here are some of the most common inquiries we receive.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-left text-lg hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
