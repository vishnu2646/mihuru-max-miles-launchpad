
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "Who is eligible for the Mihuru business loan?",
      answer: "Registered travel agents with a minimum of 1 year in business operation are eligible to apply for our business loans."
    },
    {
      question: "How quickly will I receive my loan after approval?",
      answer: "In most cases, funds are disbursed within 2-3 business days after final approval of your application."
    },
    {
      question: "When will I receive my rewards?",
      answer: "Application rewards will be delivered within 7 days of completing your application. Disbursement rewards will be sent within 15 days after loan disbursement, and repeat business rewards will be delivered similarly."
    },
    {
      question: "How does the Lucky Draw work?",
      answer: "All repeat business loan applicants are automatically entered into our quarterly lucky draw. Winners are selected randomly and will be notified via registered contact details."
    },
    {
      question: "What documentation do I need to apply?",
      answer: (
        <div className="space-y-2">
          <p>You'll need to provide the following documents:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>PAN card</li>
            <li>Aadhar card</li>
            <li>Latest 6 months bank account statement as on date</li>
            <li>Latest 6 months consolidator's bank account statement</li>
            <li>Business proof - either GST number or Udyog Aadhar Certificate</li>
            <li>Company PAN card (not applicable for proprietor business)</li>
            <li>Additional Address Proof: Latest or previous month utility bill (electricity, gas or water bill) or rent agreement along with aadhar card</li>
            <li>Latest income tax return (ITR)</li>
          </ul>
        </div>
      )
    },
    {
      question: "Can I apply for a business loan if I have an existing loan?",
      answer: "Yes, as long as your current repayment record is good and your business has sufficient cash flow to support additional financing."
    }
  ];

  return (
    <div className="py-16 px-4 bg-mihuru-dark/95">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-serif font-bold mb-4 text-white">
            Frequently Asked <span className="text-mihuru-gold">Questions</span>
          </h2>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border-white/10 py-2"
            >
              <AccordionTrigger className="text-white text-left hover:text-mihuru-gold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-white/70">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mt-10 bg-white/5 border border-white/10 rounded-lg p-5 text-center">
          <p className="text-white mb-2">Still have questions?</p>
          <p className="text-mihuru-gold">
            Contact our support team at <a href="mailto:support@mihuru.com" className="underline hover:text-mihuru-gold-light">support@mihuru.com</a> or call <a href="tel:+918005678900" className="underline hover:text-mihuru-gold-light">+91 8005678900</a>
          </p>
        </div>
      </div>
    </div>
  );
};
