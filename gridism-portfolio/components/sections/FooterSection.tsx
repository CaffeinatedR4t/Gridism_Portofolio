"use client";

const FooterSection = () => {
  return (
    <section 
      className="relative w-full bg-white"
      data-theme="light"
    >
      {/* White Background Section - Extended Height */}
      <div 
        className="relative w-full bg-white"
        style={{
          height: '1000px',
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center px-[10%]">
          {/* Logo Row - Centered, 3 Columns */}
          <div className="flex items-center justify-center gap-32 mb-16">
            {/* Left - GRIDISM Text */}
            <p 
              className="text-black text-[24px] tracking-[0.3em]"
              style={{
                fontFamily: 'Silka, sans-serif',
              }}
            >
              G R I D I S M
            </p>

            {/* Center - Big Logo Icon (2x bigger) */}
            <img
              src="/images/gridism-logo.svg"
              alt="Gridism Logo"
              style={{
                width: '418px',
                height: '434px',
              }}
            />

            {/* Right - Agency Info */}
            <div className="flex flex-col gap-4 text-right">
              {/* Web Development & Branding Agency */}
              <p 
                className="text-black text-[24px] leading-[29px]"
                style={{
                  fontFamily: 'Silka, sans-serif',
                }}
              >
                Web Development<br />& Branding Agency
              </p>

              {/* Contact Us */}
              <p 
                className="text-black text-[24px] leading-[29px]"
                style={{
                  fontFamily: 'Silka, sans-serif',
                }}
              >
                — Contact Us —
              </p>
            </div>
          </div>

          {/* Full Width Horizontal Line */}
          <div className="w-full h-[1px] bg-black my-8" />

          {/* Bottom Links Row */}
          <div className="w-full flex justify-between items-center">
            {/* Left */}
            <p 
              className="text-black text-[16px] leading-[19px]"
              style={{
                fontFamily: 'Silka, sans-serif',
              }}
            >
              @2025
            </p>

            {/* Center */}
            <div className="flex gap-12">
              <p 
                className="text-black text-[16px] leading-[19px]"
                style={{
                  fontFamily: 'Silka, sans-serif',
                }}
              >
                — Instagram —
              </p>
              <p 
                className="text-black text-[16px] leading-[19px]"
                style={{
                  fontFamily: 'Silka, sans-serif',
                }}
              >
                — LinkedIn —
              </p>
            </div>

            {/* Right */}
            <p 
              className="text-black text-[16px] leading-[19px]"
              style={{
                fontFamily: 'Silka, sans-serif',
              }}
            >
              Legals
            </p>
          </div>
        </div>
      </div>

      {/* Group 75.png Image Section - Below White Section */}
      <div className="relative w-full">
        {/* Background Image */}
        <img
          src="/images/Group 75.png"
          alt="Footer Background"
          className="w-full h-auto object-cover"
        />

        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 16.83%, rgba(88, 88, 88, 0.497596) 52.24%, rgba(44, 44, 44, 0.629461) 68.3%, rgba(34, 34, 34, 0.659135) 76.8%, rgba(22, 22, 22, 0.69655) 92.85%, rgba(12, 12, 12, 0.723844) 101.35%, rgba(4, 4, 4, 0.75) 115.05%)',
            mixBlendMode: 'multiply',
          }}
        />

        {/* Content Overlay on Image */}
        <div className="absolute inset-0">
          {/* Bottom Section - CTA Buttons + White Logo */}
          <div className="absolute bottom-32 left-0 right-0 flex justify-between items-end px-[10%]">
            {/* Left - CTA Buttons (NO BORDERS) */}
            <div className="flex gap-8">
              <button 
                className="text-white text-[16px] leading-[19px] px-4 py-3"
                style={{
                  fontFamily: 'Silka, sans-serif',
                }}
              >
                OUR WORKS<br />(DETAILED)
              </button>
              <button 
                className="text-white text-[16px] leading-[19px] px-4 py-2"
                style={{
                  fontFamily: 'Silka, sans-serif',
                }}
              >
                LET'S DISCUSS
              </button>
            </div>

            {/* Right - White Gridism Icon */}
            <div>
              <img
                src="/images/gridism-logo.svg"
                alt="Gridism Icon"
                className="w-[160px] h-[160px]"
                style={{
                  filter: 'brightness(0) invert(1)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;