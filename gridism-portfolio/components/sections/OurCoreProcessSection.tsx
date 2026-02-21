"use client";

import { useRef } from "react";

const OurCoreProcessSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const processCards = [
    {
      number: "01",
      title: "ALIGN",
      color: "#FF0000",
      description: "Aligning the Goals & ROI. We quickly align on what \"success\" means—business goal, user outcome, key metrics, and constraints timeline tech brand",
      result: "Result? everyone shares the same target and priorities.",
      descriptionWeight: 700,
      resultTop: "1798px",
    },
    {
      number: "02",
      title: "PROTO",
      color: "#2436FF",
      description: "We create a few solution directions and turn the best ones into interactive prototypes to test and validate early. AI helps speed up exploration, but decisions stay human and intentional.",
      result: "Results? we choose the right direction before spending time polishing.",
      descriptionWeight: 400,
      resultTop: "1813px",
    },
    {
      number: "03",
      title: "CRAFT",
      color: "#FFFFFF",
      description: "We refine the chosen direction with ruthless attention to detail layout, typography, microcopy, interactions, states, and edge cases, so it ends up premium and consistent.",
      result: "Results? the product feels \"finished,\" not just \"designed.\"",
      descriptionWeight: 400,
      resultTop: "1764px",
    },
    {
      number: "04",
      title: "SHIP",
      color: "#FFC400",
      description: "We prepare clean handoff assets, specs, and guidance, then support implementation through reviews and QA to keep design quality intact.",
      result: "Results? what gets built matches the intended experience.",
      descriptionWeight: 400,
      resultTop: "1764px",
    },
  ];

  return (
    <section 
      className="relative w-full bg-white overflow-hidden"
      data-theme="light"
    >
      {/* Heading */}
      <div className="max-w-[1440px] mx-auto py-16 px-8">
        <h2 
          className="text-[128px] leading-[169px] text-center text-black font-medium"
          style={{
            fontFamily: 'Switzer, sans-serif',
            letterSpacing: '-0.02em',
          }}
        >
          OUR CORE PROCESS
        </h2>
      </div>

      {/* Horizontal Slider Container */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        style={{
          scrollBehavior: 'smooth',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {/* Process Cards - Horizontal Slides */}
        {processCards.map((card, index) => (
          <div 
            key={index}
            className="relative flex-none snap-center snap-always"
            style={{ 
              width: '100vw',
              maxWidth: '1442px',
              height: '2219px',
            }}
          >
            {/* Background Image */}
            <img
              src="/images/envato-labs-image-edit - 2026-02-17T205414.760S 2.png"
              alt={`${card.title} background`}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Content Overlay */}
            <div className="absolute inset-0">
              {/* Number */}
              <h3 
                className="absolute font-bold"
                style={{
                  fontFamily: 'Switzer, sans-serif',
                  fontSize: '128px',
                  lineHeight: '169px',
                  letterSpacing: '-0.02em',
                  color: '#FFFFFF',
                  left: '5.96%',
                  top: '44.98%',
                }}
              >
                {card.number}
              </h3>

              {/* Title */}
              <h2 
                className="absolute font-semibold flex items-center justify-center"
                style={{
                  fontFamily: 'Switzer, sans-serif',
                  fontSize: '400px',
                  lineHeight: '528px',
                  letterSpacing: '-0.02em',
                  color: card.color,
                  top: '47.72%',
                  left: card.title === "ALIGN" ? '0%' : card.title === "SHIP" ? '-10.89%' : '3.33%',
                  right: card.title === "ALIGN" ? '6.66%' : card.title === "SHIP" ? '17.55%' : '3.33%',
                }}
              >
                {card.title}
              </h2>

              {/* Description */}
              <p 
                className="absolute text-white text-justify"
                style={{
                  fontFamily: 'Switzer, sans-serif',
                  fontSize: '32px',
                  lineHeight: '42px',
                  fontWeight: card.descriptionWeight,
                  width: '581px',
                  left: '384px',
                  top: '1502px',
                }}
              >
                {card.description}
              </p>

              {/* Result */}
              <p 
                className="absolute text-white text-justify font-semibold"
                style={{
                  fontFamily: 'Switzer, sans-serif',
                  fontSize: '32px',
                  lineHeight: '42px',
                  fontWeight: 600,
                  width: '420px',
                  left: '384px',
                  top: card.resultTop,
                }}
              >
                {card.result}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots (Optional) */}
      <div className="flex justify-center gap-4 py-8">
        {processCards.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (scrollContainerRef.current) {
                const slideWidth = scrollContainerRef.current.offsetWidth;
                scrollContainerRef.current.scrollTo({
                  left: slideWidth * index,
                  behavior: 'smooth',
                });
              }
            }}
            className="w-3 h-3 rounded-full bg-gray-400 hover:bg-black transition-colors"
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default OurCoreProcessSection;