import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";

const faqItems = [
  {
    id: "item-1",
    question: "How is gHRig different from other Sourcing platforms?",
    answer:
      "We are amongst the first to take this initiative towards setting up an Online Recruitment / Training Marketplace, where you get plenty of relevant options within a short span of time and with a far better commercials compared to any other player. We stand up for Speed, Quality and best of Rates in the market.",
  },
  {
    id: "item-2",
    question: "What are the main Features available at gHRig platform as an Employer?",
    answer:
      "Real time Dashboard bringing transparency to the entire Hiring process with progress state of each candidate. As an Employer, you can post your open vacancies / Trainer requirement mandates freely at our platform. Also you can have access to the shared resumes 24/7 as uploaded and validated by our TA and Quality team.",
  },
  {
    id: "item-3",
    question: "How often will I get notifications?",
    answer:
      "You will receive notifications on below occasions: a.Upon each successful posting of Jobs b.Upon submission of resumes by our Team c.Upon joining of any selected candidate",
  },
  {
    id: "item-4",
    question: "Do I get a mobile app for easy access?",
    answer:
      "Yes, mobile app of our platform is available in Android as well as i OS, where you get regular notifications.",
  },
  {
    id: "item-5",
    question: "What type of HR Staffing solution does gHRig provide?",
    answer:
      "gHRig People Solutions provides Permanent Staffing solutions along with Trainer requirements on short term assignments across various Sectors and Functions.",
  },
];

export const FaqSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-start justify-center gap-6 lg:gap-[60px] px-4 lg:px-[60px] py-16 lg:py-[100px] w-full bg-white rounded-lg overflow-hidden">
      <div className="flex flex-col w-full lg:w-[464px] items-start gap-6 lg:gap-8 relative">
        <h2 className="self-stretch [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-black text-3xl lg:text-4xl tracking-[-1.80px] leading-8 lg:leading-9">
          Frequently Asked Question
        </h2>

        <p className="self-stretch [font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#141414b2] text-sm lg:text-base tracking-[-0.48px] leading-5 lg:leading-6">
          You can return any item within 30 days of purchase as long as
          it&apos;s in its original condition with tags still attached. Simply
          contact our customer service team, and they will guide you through the
          process. Please note that certain items, such as swimwear and final
          sale items, are non-returnable.
        </p>
      </div>

      <div className="flex flex-col w-full lg:w-[482px] items-start px-4 lg:px-[22px] py-8 lg:py-[30px] bg-[#f8fbff] rounded-lg">
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="w-full space-y-6 lg:space-y-[30px]"
        >
          {faqItems.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="border-none"
            >
              <AccordionTrigger className="flex items-center gap-2 w-full hover:no-underline py-3 lg:py-0">
                <span className="flex-1 text-left [font-family:'Inter',Helvetica] font-semibold text-[#1b263b] text-sm tracking-[-0.28px] leading-[normal]">
                  {item.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-0">
                <p className="[font-family:'Inter',Helvetica] font-light text-[#1b263b] text-xs lg:text-sm tracking-[-0.24px] leading-[normal]">
                  {item.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};