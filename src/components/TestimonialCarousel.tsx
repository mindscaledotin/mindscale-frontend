import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "Partnering with this team was a game changer.",
    detail: "They understood our vision from day one and transformed it into a seamless mobile app. Their attention to detail and communication were outstanding. Their attention to detail and communication were outstanding. Their attention to detail and communication were outstanding",
    name: "Aarav Mehta",
    role: "Product Manager at Nexora"
  },
  // Add more testimonials as needed
  {
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "Exceptional service and support throughout.",
    detail: "The team delivered beyond expectations and was always available for feedback and improvements.",
    name: "Priya Singh",
    role: "CTO at InnovateX"
  },
  {
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    quote: "A truly collaborative experience.",
    detail: "We felt like partners, not just clients. The results speak for themselves.",
    name: "John Doe",
    role: "CEO at TechFlow"
  }
];

const TestimonialCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const next = () => {
    setDirection("left");
    setIndex((prev) => (prev + 1) % testimonials.length);
  };
  const prev = () => {
    setDirection("right");
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(next, 4000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line
  }, [index]);

  // const t = testimonials[index];

  // Animation classes
  const [animating, setAnimating] = useState(false);
  const [displayedIndex, setDisplayedIndex] = useState(index);

  useEffect(() => {
    setAnimating(true);
    const timer = setTimeout(() => {
      setDisplayedIndex(index);
      setAnimating(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className="w-full flex flex-col items-center gap-10 max-w-[1507px] mx-auto py-8">
      {/* Title */}
      <h2 className="font-lato font-bold text-[8vw] md:text-[120px] leading-none text-center bg-gradient-to-r from-[#35FEFE] to-white/75 bg-clip-text text-transparent">
        Voices That Inspire Us
      </h2>
      {/* Testimonial Card */}
      <div className="relative flex flex-col items-center rounded-xl px-6 py-10 gap-6 w-full h-[350px]">
        {/* Arrows INSIDE the card */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#06257F] bg-opacity-60 rounded-full w-[66px] h-[66px] flex items-center justify-center text-white hover:bg-opacity-80 transition z-10"
          onClick={prev}
          aria-label="Previous testimonial"
        >
          <FaChevronLeft size={36} />
        </button>
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#06257F] bg-opacity-60 rounded-full w-[66px] h-[66px] flex items-center justify-center text-white hover:bg-opacity-80 transition z-10"
          onClick={next}
          aria-label="Next testimonial"
        >
          <FaChevronRight size={36} />
        </button>
        {/* Animated Testimonial */}
        <div
          className={`
            flex flex-col items-center transition-all duration-300
            ${animating
              ? direction === "left"
                ? "opacity-0 -translate-x-20"
                : "opacity-0 translate-x-20"
              : "opacity-100 translate-x-0"
            }
          `}
          key={displayedIndex}
        >
          <img
            src={testimonials[displayedIndex].image}
            alt={testimonials[displayedIndex].name}
            className="w-24 h-24 rounded-full border-4 border-[#35FEFE] object-cover mx-auto mb-2"
          />
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[40px] font-bold text-transparent bg-gradient-to-r from-[#35FEFE] to-[#7B2CFF] bg-clip-text">“</span>
              <span className="font-lato font-bold text-white text-xl md:text-2xl">{testimonials[displayedIndex].quote}</span>
            </div>
            <p className="text-white/80 text-base md:text-lg text-center max-w-2xl">{testimonials[displayedIndex].detail}</p>
            <div className="mt-4 text-white/80 italic text-base">
              — {testimonials[displayedIndex].name}, <span className="not-italic">{testimonials[displayedIndex].role}</span>
              <span className="ml-2 text-[32px] font-bold text-transparent bg-gradient-to-r from-[#35FEFE] to-[#7B2CFF] bg-clip-text">”</span>
            </div>
          </div>
        </div>
      </div>
      {/* Counter */}
      <div className="text-white text-lg font-lato">{index + 1}/{testimonials.length}</div>
    </div>
  );
};

export default TestimonialCarousel;
