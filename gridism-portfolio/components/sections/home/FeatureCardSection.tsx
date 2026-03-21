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
  bgColor?: "white" | "black";
}

const FeatureCardSection = ({
  number,
  title,
  subtitle,
  description,
  images,
  chessPiece,
  chessPieceSize,
  bgColor = "white",
}: FeatureCardProps) => {
  const theme = bgColor === "black" ? "dark" : "light";
  const sectionBg = bgColor === "black" ? "#000000" : "#FFFFFF";

  return (
    <section
      className="relative w-full"
      data-theme={theme}
      style={{ backgroundColor: sectionBg }}
    >
      {/* Outer wrapper — centers the 1300px black box */}
      <div
        style={{
          paddingTop: "34px",
          paddingBottom: "40px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* Black box — 1300px, centered */}
        <div
          style={{
            position: "relative",
            width: "1300px",
            backgroundColor: "#000000",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "50px",
            overflow: "visible",
          }}
        >
          {/* Title row — height=92px */}
          <div
            style={{
              width: "1300px",
              height: "92px",
              display: "flex",
              alignItems: "flex-end",
              paddingLeft: "58px",
              paddingRight: "59px",
              boxSizing: "border-box",
            }}
          >
            <p
              style={{
                fontFamily: "'Switzer', sans-serif",
                fontWeight: 400,
                fontSize: "40px",
                lineHeight: "53px",
                color: "#FFFFFF",
                margin: 0,
              }}
            >
              {title}
            </p>
          </div>

          {/* Info row — number, subtitle, description */}
          <div
            style={{
              width: "1300px",
              paddingLeft: "55px",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                gap: "25px",
                width: "1245px",
                paddingBottom: "50px",
              }}
            >
              {/* Number — no border */}
              <p
                style={{
                  flexShrink: 0,
                  width: "109px",
                  height: "21px",
                  fontFamily: "'Switzer', sans-serif",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "26px",
                  color: "#FFFFFF",
                  margin: 0,
                }}
              >
                {number}
              </p>

              {/* Subtitle — no border */}
              <p
                style={{
                  flexShrink: 0,
                  width: "195px",
                  height: "21px",
                  fontFamily: "'Switzer', sans-serif",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "26px",
                  color: "#FFFFFF",
                  margin: 0,
                }}
              >
                {subtitle}
              </p>

              {/* Description — capped so chess piece is visible */}
              <p
                style={{
                  width: "600px",
                  fontFamily: "'Switzer', sans-serif",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "26px",
                  textAlign: "justify",
                  color: "#FFFFFF",
                  margin: 0,
                }}
              >
                {description}
              </p>
            </div>
          </div>

          {/* Chess piece — right side of black box */}
          <div
            style={{
              position: "absolute",
              right: "40px",
              top: "50%",
              transform: "translateY(-50%)",
              width: `${chessPieceSize.width}px`,
              height: `${chessPieceSize.height}px`,
              zIndex: 20,
            }}
          >
            <img
              src={chessPiece}
              alt="Chess Piece"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                display: "block",
              }}
            />
          </div>
        </div>
      </div>

      {/* Image gallery */}
      <div style={{ backgroundColor: sectionBg, overflowX: "auto" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "20px",
            paddingLeft: "30px",
            paddingBottom: "40px",
          }}
        >
          {images.map((image, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                width: `${image.width}px`,
                height: `${image.height}px`,
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCardSection;