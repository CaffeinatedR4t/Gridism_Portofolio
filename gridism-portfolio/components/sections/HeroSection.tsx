import FloatingLogo from "@/components/FloatingLogo";

const HeroSection = () => {
  // Vertical text component for rotated labels
  const VerticalText = ({ 
    children, 
    left, 
    top 
  }: { 
    children: string; 
    left: number; 
    top: number;
  }) => (
    <p
      className="absolute text-[10px] leading-[12px] text-white whitespace-nowrap"
      style={{
        left: `${left}px`,
        top: `${top}px`,
        transform: "rotate(90deg)",
        transformOrigin: "left top",
      }}
    >
      {children}
    </p>
  );

  return (
    <section
      className="relative w-full max-w-[1440px] mx-auto overflow-hidden"
      style={{ height: "2293px" }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/Illustration37grg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      />

      {/* Floating tilted logo */}
      <FloatingLogo />

      {/* Grid Lines (6 vertical lines) */}
      <div className="absolute inset-0 pointer-events-none">
        {[160, 380, 600, 820, 1040, 1260].map((x) => (
          <div
            key={x}
            className="absolute top-0 w-px h-full bg-white/20"
            style={{ left: `${x}px`, mixBlendMode: "overlay" }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full">

        {/* Vertical Labels - Exact Figma Positions */}
        <VerticalText left={168} top={188}>Human Centric Approach</VerticalText>
        <VerticalText left={388} top={374}>Commitment to Crafting</VerticalText>
        <VerticalText left={828} top={196}>Structure with Purpose</VerticalText>
        <VerticalText left={168} top={712}>Consistency Loyalty</VerticalText>
        <VerticalText left={610} top={693}>Growth by Design</VerticalText>
        <VerticalText left={1048} top={917}>Creativity within Order</VerticalText>
        <VerticalText left={1268} top={976}>Digital Creative Agency</VerticalText>
        <VerticalText left={724} top={1160}>Grit Builds Precision</VerticalText>

        {/* "DESIGN" - Main Title */}
        <div className="absolute" style={{ left: "612px", top: "497px" }}>
          <div
            className="absolute -z-10"
            style={{
              width: "489px",
              height: "138px",
              left: "-12px",
              top: "6px",
              background: "linear-gradient(90deg, #000000 0%, rgba(174, 174, 174, 0) 100%)",
              backgroundBlendMode: "overlay",
            }}
          />
          <h1
            className="text-[120px] leading-[144px] font-normal text-white text-center"
            style={{ width: "469px" }}
          >
            DESIGN
          </h1>
        </div>

        {/* Coordinates - Rotated 90deg */}
        <p
          className="absolute text-[16px] leading-[19px] text-white text-right whitespace-nowrap"
          style={{
            left: "1364px",
            top: "387px",
            transform: "rotate(90deg)",
            transformOrigin: "left top",
          }}
        >
          20:36 | 6°10′06″ S, 106°45′32″ E
        </p>

      </div>
    </section>
  );
};

export default HeroSection;