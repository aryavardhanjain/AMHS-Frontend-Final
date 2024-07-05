import React from "react";
import HomeSection from "./HomeSection";
import CustomSlider from "./CustomSlider";

const Home = () => {
  const slides = [
    {
      id: 1,
      image: "/images/1.webp",
    },
    {
      id: 2,
      image: "/images/2.webp",
    },
    {
      id: 3,
      image: "/images/3.webp",
    },
    {
      id: 4,
      image: "/images/4.webp",
    },
    {
      id: 5,
      image: "/images/5.webp",
    },
  ];

  const testimonialSlides = [
    {
      id: 1,
      name: "Sushant",
      rating: 5,
      text: "My sessions have been fulfilling, I feel safe to discuss different aspects of my life and inner thoughts without worrying about judgement. My experience of the therapist has attentive, present and kind. although I’m willing to make accommodations or adjustments to ensure we both get the space to address and assess. they also repeat what I said and highlight with examples, which further reassures me that I’m not singular in my struggles, even if the situation is unique to me. Them being on the ND spectrum makes me feel extremely safe to speak about the big and small ways my neurodivergence impacts my life as one big area of focus.",
      image: "/images/profile.png",
    },
    {
      id: 2,
      name: "Naina",
      rating: 4,
      text: "Pretty good, I feel at ease and trying to understand how to manage my feelings. Overall the process has been important for my personal growth",
      image: "/images/profile.png",
    },
    {
      id: 3,
      name: "Dhairya",
      rating: 4,
      text: "It was good, but expecting more in-depth communication. Their approach is very professional and proactive.",
      image: "/images/profile.png",
    },
    {
      id: 4,
      name: "Ayush",
      rating: 5,
      text: "I was very relieved and happy. Till now everything is good",
      image: "/images/profile.png",
    },
    {
      id: 5,
      name: "Khusbu",
      rating: 5,
      text: "i felt that i was patiently heard and understood. It was a great experience with Dr. Gill.",
      image: "/images/profile.png",
    },
    {
      id: 6,
      name: "Chaitra",
      rating: 4,
      text: "Very good, Megha is an amazing therapist and makes me feel heard and has given me some very meaningful advice which I think will help me get on the right track.",
      image: "/images/profile.png",
    },
    {
      id: 7,
      name: "Gulfaraz",
      rating: 5,
      text: "My experience was good with ma'am. She is an excellent therapist. She gave me a new direction to live life.",
      image: "/images/profile.png",
    },
  ];

  return (
    <div>
      <HomeSection />
      <CustomSlider
        slides={slides}
        title="How are you feeling?"
        type="image-slider"
      />
      <CustomSlider
        slides={testimonialSlides}
        title="What do our clients say about us?"
        type="testimonial-slider"
      />
    </div>
  );
};

export default Home;
