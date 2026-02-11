"use client";

const FloatingLogo = () => {
  return (
    <div
      className="fixed z-30 pointer-events-none"
      style={{
        left: "0px",
        top: "50%",
        transform: "translateY(-50%) rotate(-90deg)",
        transformOrigin: "center center",
      }}
    >
      {/* Using img tag to avoid Next.js Image optimization issues with SVG */}
      <img
        src="/images/gridism-logo-tilted.svg"
        alt=""
        className="select-none h-auto"
        aria-hidden="true"
        style={{
          width: "124px",
          mixBlendMode: "difference",
          filter: "invert(1)",
        }}
      />
    </div>
  );
};

export default FloatingLogo;