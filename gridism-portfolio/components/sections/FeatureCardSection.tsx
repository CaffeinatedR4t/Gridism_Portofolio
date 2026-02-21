"use client";

interface Image {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface FeatureCardProps {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  images: Image[];
  chessPiece: string;
  chessPieceSize: { width: number; height: number };
}

const FeatureCardSection = ({ 
  number, 
  title, 
  subtitle, 
  description, 
  images,
  chessPiece,
  chessPieceSize,
}: FeatureCardProps) => {
  return (
    <section 
      className="relative w-full bg-white overflow-hidden"
      data-theme="light"
      style={{
        paddingTop: '34px',
        paddingBottom: '40px',
      }}
    >
      {/* Centered Container */}
      <div className="max-w-[1440px] mx-auto">
        {/* Black Info Box with Chess Piece */}
        <div className="flex justify-center px-[6.67%]">
          <div 
            className="bg-black p-12 flex flex-col gap-12 relative min-h-fit"
            style={{
              width: '1300px',
            }}
          >
            {/* Title */}
            <h3 className="text-[40px] leading-[48px] text-white font-normal pl-[14.54%]">
              {title}
            </h3>

            {/* Info Row with Chess Piece Space */}
            <div className="flex gap-6 pl-[55px] pr-[180px]">
              {/* Number - NO BORDER */}
              <div 
                className="text-white text-[20px] leading-[24px] px-2 flex items-center justify-center flex-shrink-0"
                style={{
                  width: '109px',
                  height: '21px',
                }}
              >
                {number}
              </div>

              {/* Subtitle - NO BORDER */}
              <div 
                className="text-white text-[20px] leading-[24px] px-2 flex items-center justify-center flex-shrink-0"
                style={{
                  width: '195px',
                  height: '21px',
                }}
              >
                {subtitle}
              </div>

              {/* Description - Flexible width, won't collide with chess piece */}
              <p 
                className="text-white text-[20px] leading-[24px] text-justify flex-1"
              >
                {description}
              </p>
            </div>

            {/* Chess Piece - Middle Right (Absolute positioned outside flow) */}
            <div 
              className="absolute right-8 top-1/2 -translate-y-1/2"
              style={{
                width: `${chessPieceSize.width}px`,
                height: `${chessPieceSize.height}px`,
              }}
            >
              <img
                src={chessPiece}
                alt="Chess Piece"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery - Centered */}
      <div className="max-w-[1440px] mx-auto">
        <div className="flex gap-5 mt-16 px-[2.08%] overflow-x-auto">
          {images.map((image, index) => (
            <div 
              key={index}
              className="flex-none"
              style={{
                width: `${image.width}px`,
                height: `${image.height}px`,
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCardSection;