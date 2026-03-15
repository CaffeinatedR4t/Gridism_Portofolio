"use client";

const LogoStripSection = () => {
  // Figma Frame 28: flex row, align-items flex-end, gap=20px
  // width=1562px, height=87px, left=-69px (bleed)
  // logos use absolute positions within Frame 29 (694px wide)
  // then continue as absolute positioned items
  const logos = [
    { w: 122, h: 86, left: 69  },  // 5
    { w: 123, h: 87, left: 211 },  // 1
    { w: 123, h: 87, left: 354 },  // 2
    { w: 123, h: 87, left: 497 },  // 3
    { w: 123, h: 87, left: 640 },  // 4
    { w: 123, h: 87, left: 781 },  // EZZRALE 02 11
    { w: 124, h: 87, left: 922 },  // OSTON 04 6
    { w: 124, h: 87, left: 1064 }, // 131
    { w: 123, h: 87, left: 1206 }, // 107
    { w: 123, h: 87, left: 1347 }, // BE8
    { w: 123, h: 87, left: 1479 }, // BE19
  ];

  return (
    <section
      className="relative w-full bg-black overflow-hidden"
      style={{ height: "87px" }}
      data-theme="dark"
    >
      {/* Frame 28: left=-69px, absolute positioned logos */}
      <div
        className="absolute"
        style={{ left: "-69px", top: "0px", width: "1562px", height: "87px" }}
      >
        {logos.map((logo, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${logo.left}px`,
              top: `${87 - logo.h}px`, // align-items: flex-end
              width: `${logo.w}px`,
              height: `${logo.h}px`,
            }}
          >
            <img
              src="/images/ezzralef.png"
              alt={`Logo ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogoStripSection;