import FloatingLogo from "@/components/FloatingLogo";

const HeroSection = () => {
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
      {/* Background Image - FIXED FILENAME */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url('/images/Illustration37grg.png')",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Floating tilted logo */}
      <FloatingLogo />

      {/* Grid Lines (6 vertical lines) - Responsive positions */}
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
        {/* Vertical Labels - Using percentage for responsiveness */}
        <VerticalText leftPercent={11.7} topPercent={8.2}>Human Centric Approach</VerticalText>
        <VerticalText leftPercent={26.9} topPercent={16.3}>Commitment to Crafting</VerticalText>
        <VerticalText leftPercent={57.5} topPercent={8.5}>Structure with Purpose</VerticalText>
        <VerticalText leftPercent={11.7} topPercent={31}>Consistency Loyalty</VerticalText>
        <VerticalText leftPercent={42.4} topPercent={30.2}>Growth by Design</VerticalText>
        <VerticalText leftPercent={72.8} topPercent={40}>Creativity within Order</VerticalText>
        <VerticalText leftPercent={88.1} topPercent={42.6}>Digital Creative Agency</VerticalText>
        <VerticalText leftPercent={50.3} topPercent={50.6}>Grit Builds Precision</VerticalText>

        {/* "DESIGN" - Main Title */}
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{ top: "21.7%" }}
        >
          <div
            className="absolute -z-10 w-full h-full scale-110"
            style={{
              background: "linear-gradient(90deg, #000000 0%, rgba(174, 174, 174, 0) 100%)",
              backgroundBlendMode: "overlay",
            }}
          />
          <h1 className="text-[8vw] lg:text-[120px] font-normal text-white text-center leading-none">
            DESIGN
          </h1>
        </div>

        {/* Coordinates - Rotated 90deg on right side */}
        <p
          className="absolute text-[12px] lg:text-[16px] leading-[19px] text-white text-right whitespace-nowrap"
          style={{
            right: "2%",
            top: "16.9%",
            transform: "rotate(90deg)",
            transformOrigin: "right top",
          }}
        >
          20:36 | 6°10′06″ S, 106°45′32″ E
        </p>
      </div>
    </section>
  );
};

export default HeroSection;