"use client";

import { useJakartaTime } from "@/hooks/useJakartaTime";
import { useColorDetection } from "@/hooks/useColorDetection";

const HeroSection = () => {
  const jakartaTime = useJakartaTime();
  const isDark = useColorDetection(400);

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
      className="absolute whitespace-nowrap"
      style={{
        fontFamily: "'Silka', sans-serif",
        fontWeight: 400,
        fontSize: "10px",
        lineHeight: "12px",
        color: "#FFFFFF",
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
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "1251px" }}
      data-theme="dark"
    >
      {/* Background Image — fills edge to edge, no gaps */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/images/1.webp"
          alt=""
          aria-hidden="true"
          className="w-full h-full"
          style={{
            objectFit: "cover",
            objectPosition: "center top",
            display: "block",
          }}
        />
      </div>

      {/* Grid Lines */}
      <div className="absolute inset-0 pointer-events-none">
        {[160, 394, 628, 862, 1096, 1330].map((leftPx, i) => (
          <div
            key={i}
            className="absolute top-0 h-full"
            style={{
              left: `${leftPx}px`,
              width: "1px",
              background: "rgba(255,255,255,0.3)",
              mixBlendMode: "overlay",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full">

        {/* Vertical Labels */}
        <VerticalText leftPercent={12}   topPercent={8.2} >Human Centric Approach</VerticalText>
        <VerticalText leftPercent={27.3} topPercent={16.3}>Commitment to Crafting</VerticalText>
        <VerticalText leftPercent={57.8} topPercent={8.5} >Structure with Purpose</VerticalText>
        <VerticalText leftPercent={12}   topPercent={31}  >Consistency Loyalty</VerticalText>
        <VerticalText leftPercent={42.6} topPercent={30.2}>Growth by Design</VerticalText>
        <VerticalText leftPercent={73.2} topPercent={40}  >Creativity within Order</VerticalText>
        <VerticalText leftPercent={88.4} topPercent={42.6}>Digital Creative Agency</VerticalText>
        <VerticalText leftPercent={50.3} topPercent={50.6}>Grit Builds Precision</VerticalText>

        {/* "A NEW ORDER OF DESIGN" */}
        <div
          className="absolute"
          style={{ left: "283px", top: "384px", width: "870px", height: "269px" }}
        >
          {/* NO white overlay — that was causing the white border */}

          <div className="relative flex flex-col items-center justify-center h-full">
            <h1
              className="font-normal text-white leading-[1.1] text-center"
              style={{ fontFamily: "'Silka', sans-serif", fontSize: "90px" }}
            >
              A NEW ORDER
            </h1>

            <div className="flex items-center justify-center gap-6">
              <h2
                className="font-normal text-white leading-[1.1]"
                style={{ fontFamily: "'Silka', sans-serif", fontSize: "90px" }}
              >
                OF
              </h2>

              <div className="relative inline-block">
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(90deg, #000000 0%, rgba(174,174,174,0) 100%)",
                    mixBlendMode: "overlay",
                    zIndex: 0,
                  }}
                />
                <h2
                  className="relative font-normal text-white leading-[1.1] px-4"
                  style={{
                    fontFamily: "'Silka', sans-serif",
                    fontSize: "90px",
                    zIndex: 1,
                  }}
                >
                  DESIGN
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Live Time & Coordinates — your exact position reference */}
        <p
          className="absolute text-[8px] lg:text-[10px] leading-none whitespace-nowrap font-semibold"
          style={{
            color: isDark ? "#FFFFFF" : "#000000",
            right: "2%",
            top: "50%",
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