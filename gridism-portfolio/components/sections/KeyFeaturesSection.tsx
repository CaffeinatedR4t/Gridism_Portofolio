"use client";

const KeyFeaturesSection = () => {
  return (
    <section 
      className="relative w-full bg-white py-24"
      data-theme="light"
    >
      <div className="max-w-[1440px] mx-auto px-[23.75%]">
        {/* Heading */}
        <h2 
          className="text-[96px] font-medium leading-[127px] text-center text-black mb-12"
          style={{
            fontFamily: 'Switzer, sans-serif',
          }}
        >
          KEY FEATURES THAT DEFINE US
        </h2>

        {/* Chess Pieces Image */}
        <div className="flex justify-center mt-16">
          <img
            src="/images/Thumbnail Website Porto.png"
            alt="Chess Pieces Illustration"
            className="w-auto h-auto"
            style={{
              maxWidth: '517px',
              maxHeight: '829.53px',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default KeyFeaturesSection;