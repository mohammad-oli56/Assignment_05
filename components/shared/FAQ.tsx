"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How do I rent a property?",
    answer:
      "Browse available properties, view the details, and submit a rental request. Once the landlord approves your request, you can complete the payment securely online.",
  },
  {
    question: "How do online payments work?",
    answer:
      "After your rental request is approved, you'll receive a payment option. Payments are processed securely through our integrated payment gateway.",
  },
  {
    question: "Can I cancel my rental request?",
    answer:
      "Yes. You can cancel your rental request before it is approved by the landlord. Once approved and paid, please contact the landlord for further assistance.",
  },
  {
    question: "Are all properties verified?",
    answer:
      "Yes. We encourage landlords to provide complete and accurate property information. Verified properties are reviewed before being listed.",
  },
  {
    question: "How can I become a landlord?",
    answer:
      "Register an account, choose the landlord role, and start listing your properties. You can manage rental requests and payments directly from your dashboard.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-4xl px-6">
        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-600">
            Frequently Asked Questions
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Have Questions?
          </h2>

          <p className="mt-4 text-gray-600">
            Find answers to the most common questions about renting,
            payments, landlords, and our platform.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
            >
              <button
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left transition hover:bg-gray-50"
              >
                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`h-6 w-6 text-blue-600 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  openIndex === index
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 leading-7 text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;