"use client";

const LogoStripSection = () => {
  const logos = [
    "5", "1", "2", "3", "4", "EZZRALE 02 11.png", 
    "OSTON 04 6", "131", "107", "BE8", "BE19"
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
            className="flex-none bg-gray-700 rounded"
            style={{
              width: index === 0 ? '122px' : '123px',
              height: index === 0 ? '86px' : '87px',
            }}
          >
            {/* Placeholder - will add logo images later */}
            <div className="w-full h-full flex items-center justify-center text-white text-xs">
              {logo}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogoStripSection;