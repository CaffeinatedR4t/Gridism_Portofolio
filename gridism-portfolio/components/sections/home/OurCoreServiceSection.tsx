"use client";

const OurCoreServiceSection = () => {
  const services = [
    {
      label: "Web Design & Development",
      image: "/images/Artboard 1sssdwsdws.png",
      titleLeft: 113,
      titleWidth: 750,
      imageTop: 120,
      imageWidth: 1303,
      imageHeight: 461,
      blockHeight: 581,
    },
    {
      label: "Branding & Visual Identity",
      image: "/images/ezzrale 1 portos.png",
      titleLeft: 388,
      titleWidth: 800,
      imageTop: 120,
      imageWidth: 1299,
      imageHeight: 461,
      blockHeight: 581,
    },
    {
      label: "Digital Transformation Consulting",
      image: "/images/gridism 2@2x.png",
      titleLeft: 109,
      titleWidth: 800,
      imageTop: 240,
      imageWidth: 1300,
      imageHeight: 466,
      blockHeight: 706,
    },
  ];

  return (
    <section
      className="relative w-full bg-black overflow-hidden"
      data-theme="dark"
    >
      <div className="relative mx-auto" style={{ maxWidth: "1440px" }}>

        {/* Heading row */}
        <div
          className="relative"
          style={{
            marginLeft: "67px",
            paddingTop: "60px",
            paddingBottom: "40px",
          }}
        >
          <div
            className="relative"
            style={{ width: "1049px", height: "94px", marginLeft: "-121px" }}
          >
            {/* "Our Core Service" text */}
            <h2
              className="absolute text-white"
              style={{
                fontFamily: "'Switzer', sans-serif",
                fontWeight: 400,
                fontSize: "96px",
                lineHeight: "127px",
                left: "122px",
                top: "0px",
                width: "1009px",
                whiteSpace: "nowrap",
              }}
            >
              Our Core Service
            </h2>

            {/* Horse chess piece icon — Salinan Kuda png.png */}
            <div
              className="absolute"
              style={{
                left: "1155px",
                top: "11px",
                width: "47.74px",
                height: "72px",
              }}
            >
              <img
                src="/images/Salinan Kuda png.png"
                alt=""
                aria-hidden="true"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Service blocks */}
        <div
          className="relative"
          style={{ marginLeft: "67px", width: "1303px" }}
        >
          {services.map((service, i) => (
            <div
              key={i}
              className="relative"
              style={{ height: `${service.blockHeight}px` }}
            >
              {/* Title white box */}
              <div
                className="absolute bg-white flex items-center justify-center"
                style={{
                  left: `${service.titleLeft}px`,
                  top: i === 2 ? "120px" : "0px",
                  width: `${service.titleWidth}px`,
                  height: "120px",
                }}
              >
                <p
                  className="text-black text-center"
                  style={{
                    fontFamily: "'Switzer', sans-serif",
                    fontWeight: 400,
                    fontSize: "40px",
                    lineHeight: "53px",
                  }}
                >
                  {service.label}
                </p>
              </div>

              {/* Service image */}
              <img
                src={service.image}
                alt={service.label}
                className="absolute object-cover"
                style={{
                  left: i === 1 ? "0px" : "-1px",
                  top: `${service.imageTop}px`,
                  width: `${service.imageWidth}px`,
                  height: `${service.imageHeight}px`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCoreServiceSection;