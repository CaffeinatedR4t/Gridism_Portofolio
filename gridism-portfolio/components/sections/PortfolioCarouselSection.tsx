"use client";

const PortfolioCarouselSection = () => {
  // Placeholder images - replace with actual images later
  const portfolioImages = [
    { id: 1, name: "View 1ggfrr.png" },
    { id: 2, name: "FEEDS IG NEW EZZRALE 2026 (3)ds.png" },
    { id: 3, name: "image.png" },
    { id: 4, name: "image-gen (3).jpg" },
    { id: 5, name: "Kobe IX Elite Low EM Protro@2x.png" },
    { id: 6, name: "Screenshot 2026-02-08 200555.png" },
  ];

  return (
    <section 
      className="relative w-full bg-black py-16 overflow-hidden"
      data-theme="dark"
    >
      <div className="flex gap-5 px-[295px]">
        {portfolioImages.map((image, index) => (
          <div 
            key={image.id}
            className="flex-none bg-gray-700 rounded"
            style={{
              width: index === 2 ? '263px' : index === 4 ? '257px' : index === 5 ? '407px' : '310px',
              height: '253px',
            }}
          >
            {/* Placeholder - will add images later */}
            <div className="w-full h-full flex items-center justify-center text-white text-sm">
              {image.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioCarouselSection;