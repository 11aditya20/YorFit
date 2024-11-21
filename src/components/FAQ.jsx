import React, { useState } from 'react';
import '../styles/FAQ.css'
function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'How does the auto-custom fitting work?',
      answer: 'Our technology uses your phone to measure your body accurately, creating custom clothes just for you.',
    },
    {
      question: 'Do I have to purchase before getting measured?',
      answer: 'No, you can get measured first and then decide which clothes to buy.',
    },
    {
      question: 'How does the money-back guarantee work?',
      answer: 'If you’re not satisfied with your custom clothes, we’ll remake them or give you your money back.',
    },
    {
      question: 'What happens if my clothes don’t fit?',
      answer: 'We offer free remakes and returns to ensure you get the perfect fit.',
    },
  ];

  return (
    <section className="faq">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`faq-item ${openIndex === index ? 'open' : ''}`}
          onClick={() => toggleFAQ(index)}
        >
          <h3>{faq.question}</h3>
          <p className="answer">{faq.answer}</p>
          <span className="arrow">{openIndex === index ? '▲' : '▼'}</span>
        </div>
      ))}
    </section>
  );
}

export default FAQ;
