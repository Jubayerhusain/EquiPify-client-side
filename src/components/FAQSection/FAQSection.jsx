import React from "react";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is Equipify?",
      answer:
        "Equipify is a platform designed to help users find, compare, and choose the best equipment for their needs.",
    },
    {
      question: "How does Equipify work?",
      answer:
        "Equipify provides curated equipment lists, detailed comparisons, and expert reviews to help you make informed decisions.",
    },
    {
      question: "Is Equipify free to use?",
      answer:
        "Yes, Equipify is completely free to use for browsing and researching equipment.",
    },
    {
      question: "Can I suggest equipment to be added?",
      answer:
        "Absolutely! You can contact us via our support form or email us at suggestions@equipify.com.",
    },
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-6 ">
        <h2 className="text-4xl font-bold text-center  mb-12">
          Frequently Asked <span className="text-blue-500">Questions</span>?
        </h2>
        <p className="text-center my-2">
          Have questions? Find the answers to the most common inquiries below.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="collapse collapse-plus">
              <input
                type="radio"
                name="faq-accordion"
                defaultChecked={index === 0} // The first item is open by default
              />
              <div className="collapse-title text-lg font-medium">
                {faq.question}
              </div>
              <div className="collapse-content">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
