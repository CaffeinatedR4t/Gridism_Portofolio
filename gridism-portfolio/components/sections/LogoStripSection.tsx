"use client";

const LogoStripSection = () => {
  const logos = [
    { width: 122, height: 86 },  // Logo 1 (5)
    { width: 123, height: 87 },  // Logo 2 (1)
    { width: 123, height: 87 },  // Logo 3 (2)
    { width: 123, height: 87 },  // Logo 4 (3)
    { width: 123, height: 87 },  // Logo 5 (4)
    { width: 123, height: 87 },  // Logo 6 (EZZRALE 02 11)
    { width: 124, height: 87 },  // Logo 7 (OSTON 04 6)
    { width: 124, height: 87 },  // Logo 8 (131)
    { width: 123, height: 87 },  // Logo 9 (107)
    { width: 123, height: 87 },  // Logo 10 (BE8)
    { width: 123, height: 87 },  // Logo 11 (BE19)
  ];

  return (
    <section 
      className="relative w-full bg-black py-12 overflow-hidden"
      data-theme="dark"
    >
      <div className="flex gap-5 items-end px-[4.8%]">
        {logos.map((logo, index) => (
          <div 
            key={index}
            className="flex-none"
            style={{
              width: `${logo.width}px`,
              height: `${logo.height}px`,
            }}
          >
            <img
              src="/images/ezzralef.png"
              alt={`Logo ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogoStripSection;