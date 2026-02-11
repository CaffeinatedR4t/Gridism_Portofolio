"use client";

const PortfolioCarouselSection = () => {
  const portfolioImages = [
    { width: 310, height: 253 },  // View 1ggfrr
    { width: 310, height: 253 },  // FEEDS IG NEW EZZRALE
    { width: 263, height: 253 },  // image 11
    { width: 316, height: 252 },  // image-gen (3)
    { width: 257, height: 254 },  // Kobe IX Elite
    { width: 407, height: 254 },  // Screenshot
  ];

  return (
    <section 
      className="relative w-full bg-black py-16 overflow-hidden"
      data-theme="dark"
    >
      <div className="flex gap-5 px-[295px]">
        {portfolioImages.map((image, index) => (
          <div 
            key={index}
            className="flex-none"
            style={{
              width: `${image.width}px`,
              height: `${image.height}px`,
            }}
          >
            <img
              src="/images/ezzralef.png"
              alt={`Portfolio ${index + 1}`}
              className="w-full h-full object-cover rounded"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioCarouselSection;