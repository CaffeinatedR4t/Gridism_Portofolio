"use client";

const BrandTransitionSection = () => {
  return (
    <section
      className="relative w-full bg-black flex flex-col items-center"
      data-theme="dark"
    >
      {/* Logo */}
      <div className="flex items-center justify-center w-full" style={{ paddingTop: "160px", paddingBottom: "64px" }}>
        <img
          src="/images/Salinan hero-logo-horizontal.png"
          alt="G R I D I S M"
          style={{
            width: "1000px",
            height: "auto",
            objectFit: "contain",
          }}
        />
      </div>

      {/* Tagline */}
      <p
        className="text-center text-white"
        style={{
          fontFamily: "'Switzer', sans-serif",
          fontWeight: 400,
          fontSize: "36px",
          lineHeight: "48px",
          width: "852px",
          paddingBottom: "160px",
        }}
      >
        Driving Global Scale Through Brand Identity and Digital Innovation.
      </p>
    </section>
  );
};

export default BrandTransitionSection;