import React, { useState } from "react";
import "../styles/FAQ.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is mental health?",
      answer:
        "Mental health refers to the overall psychological well-being and emotional state of an individual.",
    },
    {
      question: "What is Psychotherapy?",
      answer:
        "Psychotherapy is a form of treatment that involves talking to a trained therapist to explore and resolve emotional or psychological issues.",
    },
    {
      question: "What are the benefits of psychotherapy?",
      answer:
        "Psychotherapy can help improve coping skills, enhance self-awareness, build resilience, and manage mental health conditions.",
    },
    {
      question: "How can I recognize if I need Psychotherapy?",
      answer:
        "If you're experiencing persistent emotional distress, difficulty coping with life events, or changes in behavior, it may be time to consider psychotherapy.",
    },
    {
      question:
        "Is it possible for me to refer individuals I know to one of your therapists?",
      answer:
        "Our team prioritizes the task of matching the most suitable therapists with the individuals you recommend to us. Additionally, we offer a range of AMHS Gift Coupons, entitling you to complimentary therapy sessions for each successful referral.",
    },
    {
      question:
        "Is there any provision for me if I am unable to afford your current therapy prices?",
      answer:
        "We offer prices of psychotherapy on a sliding scale. This allows our team to meet your financial expectations in a better way. We also provide pro-bono sessions to those clients who have special kinds of circumstances as mentioned in detail in our company policy documents.",
    },
    {
      question: "How long does psychotherapy usually last?",
      answer:
        "The duration of psychotherapy varies depending on individual needs and the type of therapy, ranging from a few sessions to several months or longer.",
    },
    {
      question: "Is psychotherapy effective for all mental health conditions?",
      answer:
        "Psychotherapy can be effective for various mental health conditions, but its success may depend on the specific condition and the individual.",
    },
    {
      question: "Can I do psychotherapy online?",
      answer:
        "Yes, online therapy, also known as teletherapy, is an accessible and effective option for many individuals seeking mental health support.",
    },
    {
      question:
        "What is the difference between a psychologist and a psychiatrist?",
      answer:
        "Psychologists provide psychotherapy and counseling, while psychiatrists are medical doctors who can prescribe medications for mental health conditions.",
    },
    {
      question: "How confidential is psychotherapy?",
      answer:
        "Confidentiality is a fundamental aspect of psychotherapy. Therapists are bound by ethical guidelines to protect client privacy.",
    },
    {
      question: "Can I choose my therapist?",
      answer:
        "Yes, you can usually choose your therapist based on their specialization, approach, and compatibility with your needs.",
    },
    {
      question: "Is psychotherapy covered by insurance?",
      answer:
        "Many health insurance plans provide coverage for psychotherapy, but it's essential to check with your insurance provider to confirm.",
    },
    {
      question: "Can I stop therapy whenever I want?",
      answer:
        "Yes, you can stop therapy at any time, but discussing your decision with your therapist can be beneficial for a proper conclusion.",
    },
    {
      question: "What can I expect during my first therapy session?",
      answer:
        "In the first session, your therapist will typically gather information about your background, concerns, and goals to develop a treatment plan.",
    },
    {
      question: "Will my therapist diagnose me with a mental health condition?",
      answer:
        "Therapists may diagnose mental health conditions based on symptoms, but it's not the primary focus of therapy.",
    },
    {
      question: "Can therapy be helpful for managing stress?",
      answer:
        "Yes, therapy can provide coping strategies and stress management techniques to improve your ability to handle stress.",
    },
    {
      question: "Can I attend therapy if I'm not dealing with a crisis?",
      answer:
        "Absolutely, therapy can be beneficial for personal growth, self-exploration, and improving overall well-being.",
    },
    {
      question: "Are there any age restrictions for psychotherapy?",
      answer:
        "Psychotherapy is available for individuals of all ages, including children, teenagers, adults, and older adults.",
    },
    {
      question: "Can I involve my family in therapy sessions?",
      answer:
        "Family therapy is a specialized form of psychotherapy that involves family members to address relational issues and improve communication.",
    },
    {
      question: "Is it normal to feel nervous before starting therapy?",
      answer:
        "Feeling nervous is common, but remember that therapy is a supportive and non-judgmental space to explore your feelings and concerns.",
    },
  ];

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <div className="faq-container">
        <h2>Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
          >
            <button className="faq-question" onClick={() => handleClick(index)}>
              {faq.question}
              <FontAwesomeIcon
                icon={activeIndex === index ? faChevronUp : faChevronDown}
                className="icon"
              />
            </button>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
