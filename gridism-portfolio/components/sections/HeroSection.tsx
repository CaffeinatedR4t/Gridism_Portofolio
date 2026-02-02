"use client";

import { useJakartaTime } from "@/hooks/useJakartaTime";

const HeroSection = () => {
  const jakartaTime = useJakartaTime();

  // Vertical text component for rotated labels
  const VerticalText = ({
    children,
    leftPercent,
    topPercent,
  }: {
    children: string;
    leftPercent: number;
    topPercent: number;
  }) => (
    <p
      className="absolute text-[10px] leading-[12px] text-white whitespace-nowrap"
      style={{
        left: `${leftPercent}%`,
        top: `${topPercent}%`,
        transform: "rotate(90deg)",
        transformOrigin: "left top",
      }}
    >
      {children}
    </p>
  );

  return (
    <section className="relative w-full h-[160vw] max-h-[2293px] min-h-[100vh] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url('/images/Illustration37grg.png')",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Grid Lines (6 vertical lines) */}
      <div className="absolute inset-0 pointer-events-none">
        {[11.1, 26.4, 41.7, 56.9, 72.2, 87.5].map((percent, index) => (
          <div
            key={index}
            className="absolute top-0 w-px h-full bg-white/20"
            style={{ left: `${percent}%`, mixBlendMode: "overlay" }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full">
        {/* Vertical Labels */}
        <VerticalText leftPercent={12} topPercent={8.2}>Human Centric Approach</VerticalText>
        <VerticalText leftPercent={27.3} topPercent={16.3}>Commitment to Crafting</VerticalText>
        <VerticalText leftPercent={57.8} topPercent={8.5}>Structure with Purpose</VerticalText>
        <VerticalText leftPercent={12} topPercent={31}>Consistency Loyalty</VerticalText>
        <VerticalText leftPercent={42.6} topPercent={30.2}>Growth by Design</VerticalText>
        <VerticalText leftPercent={73.2} topPercent={40}>Creativity within Order</VerticalText>
        <VerticalText leftPercent={88.4} topPercent={42.6}>Digital Creative Agency</VerticalText>
        <VerticalText leftPercent={50.3} topPercent={50.6}>Grit Builds Precision</VerticalText>

        {/* "A NEW ORDER OF DESIGN" - Main Title */}
        <div
          className="absolute left-1/2 -translate-x-1/2 text-center"
          style={{ top: "21.7%" }}
        >
          {/* "A NEW ORDER" - NO background, just white text, SMALLER */}
          <h1 className="text-[6vw] lg:text-[90px] font-normal text-white leading-[1.1]">
            A NEW ORDER
          </h1>
          
          {/* "OF DESIGN" - "OF" has no background, "DESIGN" has black background */}
          <div className="flex items-center justify-center gap-4 lg:gap-6">
            {/* "OF" - NO background, SMALLER */}
            <h2 className="text-[6vw] lg:text-[90px] font-normal text-white leading-[1.1]">
              OF
            </h2>

            {/* "DESIGN" - WITH BLACK BACKGROUND */}
            <div className="relative inline-block">
              <div
                className="absolute inset-0 -z-10"
                style={{
                  background: "linear-gradient(90deg, #000000 0%, rgba(174, 174, 174, 0) 100%)",
                  backgroundBlendMode: "overlay",
                }}
              />
              <h2 className="text-[6vw] lg:text-[90px] font-normal text-white leading-[1.1] px-4">
                DESIGN
              </h2>
            </div>
          </div>
        </div>

        {/* Live Time & Coordinates - SINGLE LINE, SMALL SIZE */}
        <p
          className="absolute text-[8px] lg:text-[10px] leading-none text-white whitespace-nowrap font-semibold"
          style={{
            right: "2%",
            top: "20%",
            transform: "rotate(90deg)",
            transformOrigin: "right top",
            letterSpacing: "1.5px",
          }}
        >
          {jakartaTime || "00:00"} | 6°10′06″ S, 106°45′32″ E
        </p>
      </div>
    </section>
  );
};

export default HeroSection;