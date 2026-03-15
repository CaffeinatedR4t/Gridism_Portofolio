"use client";

const FloatingLogo = () => {
  return (
    <div
      className="fixed z-30 pointer-events-none"
      style={{
        /* Stick to the very left edge of screen */
        left: "0px",
        top: "50%",
        transform: "translateY(-50%) rotate(-90deg)",
        transformOrigin: "center center",
        /* mix-blend-mode: difference — auto contrast on any bg */
        mixBlendMode: "difference",
        /* 80% opacity as requested */
        opacity: 0.8,
      }}
    >
      <img
        src="/images/gridism-logo-tilted.svg"
        alt=""
        aria-hidden="true"
        className="select-none h-auto"
        style={{
          width: "124px",
          /* always white — difference blend handles the inversion */
          filter: "invert(1)",
        }}
      />
    </div>
  );
};

export default FloatingLogo;