import FloatingLogo from "@/components/FloatingLogo";

const HeroSection = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/wallpaper-utama.png')",
        minHeight: "2293px",
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Floating tilted logo */}
      <FloatingLogo />

      {/* Content Container */}
      <div className="relative z-10 w-full h-full max-w-[1920px] mx-auto px-8 pt-32">
        
        {/* Main Grid Layout */}
        <div className="relative h-full">

          {/* "Human Centric Approach" - Top Left */}
          <div className="absolute top-[80px] left-[5%]">
            <p className="text-white/60 text-sm tracking-widest uppercase">
              Human Centric Approach
            </p>
          </div>

          {/* "Structure with Purpose" - Top Center-Left */}
          <div className="absolute top-[160px] left-[25%]">
            <p className="text-white/60 text-sm tracking-widest uppercase">
              Structure with Purpose
            </p>
          </div>

          {/* "Commitment to Crafting" - Top Right area */}
          <div className="absolute top-[120px] right-[20%]">
            <p className="text-white/60 text-sm tracking-widest uppercase">
              Commitment to Crafting
            </p>
          </div>

          {/* "DESIGN" - Large centered text */}
          <div className="absolute top-[300px] left-1/2 -translate-x-1/2">
            <h1 className="text-[180px] md:text-[280px] font-bold text-white tracking-tighter leading-none">
              DESIGN
            </h1>
          </div>

          {/* Coordinates - Below DESIGN */}
          <div className="absolute top-[600px] left-1/2 -translate-x-1/2">
            <p className="text-white/50 text-sm tracking-[0.3em] font-light">
              20: 36 &nbsp;&nbsp;|&nbsp;&nbsp; 6°10′06″ S, 106°45′32″ E
            </p>
          </div>

          {/* "Consistency Loyalty" - Left side, middle */}
          <div className="absolute top-[750px] left-[8%]">
            <p className="text-white/60 text-sm tracking-widest uppercase">
              Consistency Loyalty
            </p>
          </div>

          {/* "Growth by Design" - Center-left, below middle */}
          <div className="absolute top-[900px] left-[15%]">
            <p className="text-white/60 text-sm tracking-widest uppercase">
              Growth by Design
            </p>
          </div>

          {/* "Creativity within Order" - Right side */}
          <div className="absolute top-[850px] right-[15%]">
            <p className="text-white/60 text-sm tracking-widest uppercase">
              Creativity within Order
            </p>
          </div>

          {/* "Digital Creative Agency" - Large text, lower section */}
          <div className="absolute top-[1100px] left-[10%]">
            <h2 className="text-[60px] md:text-[100px] font-bold text-white/90 tracking-tight leading-none">
              Digital Creative
              <br />
              Agency
            </h2>
          </div>

          {/* "Grit Builds Precision" - Bottom area */}
          <div className="absolute top-[1500px] left-[5%]">
            <p className="text-white/60 text-sm tracking-widest uppercase">
              Grit Builds Precision
            </p>
          </div>

          {/* Decorative grid lines (optional) */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Vertical line left */}
            <div className="absolute left-[10%] top-0 bottom-0 w-px bg-white/10" />
            {/* Vertical line right */}
            <div className="absolute right-[10%] top-0 bottom-0 w-px bg-white/10" />
            {/* Horizontal line */}
            <div className="absolute left-0 right-0 top-[50%] h-px bg-white/10" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;