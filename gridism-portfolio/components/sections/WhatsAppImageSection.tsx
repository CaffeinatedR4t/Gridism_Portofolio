"use client";

const WhatsAppImageSection = () => {
  return (
    <section 
      className="relative w-full bg-white"
      data-theme="light"
    >
      <div className="relative w-full" style={{ height: '2408px' }}>
        {/* Background Image - Full Screen */}
        <img
          src="/images/WhatsApp Image 2026-02-08 at 23.39.11 (1) 1.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Chess Piece Overlay - Exact Size 514×1152px */}
        <div 
          className="absolute"
          style={{
            left: '50%',
            top: '70%',
            transform: 'translate(-50%, -50%)',
            width: '1500px',
            height: '3000px',
          }}
        >
          <img
            src="/images/Salinan Raja png.png"
            alt="King Chess Piece"
            className="w-full h-full object-contain"
            style={{
              filter: 'drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.3))',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default WhatsAppImageSection;