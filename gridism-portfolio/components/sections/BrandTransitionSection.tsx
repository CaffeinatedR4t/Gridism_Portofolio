"use client";

const BrandTransitionSection = () => {
  return (
    <section 
      className="relative w-full bg-black py-24"
      data-theme="dark"
    >
      <div className="max-w-[1440px] mx-auto px-[4.86%]">
        {/* GRIDISM Horizontal Logo - No Border */}
        <div className="flex items-center justify-center">
          <img
            src="/images/Salinan hero-logo-horizontal.png"
            alt="Gridism"
            className="h-[180px] w-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default BrandTransitionSection;