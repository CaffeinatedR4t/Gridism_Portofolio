"use client";

const OurCoreServiceSection = () => {
  const services = [
    {
      title: "Web Design & Development",
      image: "/images/Artboard 1sssdwsdws.png",
      width: 750,
      imageWidth: 1303,
      imageHeight: 977,
      marginLeft: "110px",
    },
    {
      title: "Branding & Visual Identity",
      image: "/images/ezzrale 1 portos.png",
      width: 800,
      imageWidth: 1299,
      imageHeight: 974,
      marginLeft: "388px",
    },
    {
      title: "Digital Transformation Consulting",
      image: "/images/gridism 2@2x.png",
      width: 800,
      imageWidth: 1300,
      imageHeight: 977,
      marginLeft: "113px",
    },
  ];

  return (
    <section 
      className="relative w-full bg-black py-24"
      data-theme="dark"
    >
      <div className="max-w-[1440px] mx-auto px-[4.8%]">
        {/* OUR CORE SERVICE Heading (Icon + Text Combined PNG) */}
        <div className="flex justify-center mb-16">
          <img
            src="/images/icon-our core service.png"
            alt="Our Core Service"
            className="w-auto"
            style={{ maxWidth: '1049px' }}
          />
        </div>

        {/* Service Cards */}
        <div className="space-y-24">
          {services.map((service, index) => (
            <div 
              key={index}
              className="flex flex-col items-start gap-8"
              style={{
                marginLeft: service.marginLeft,
              }}
            >
              {/* Service Title */}
              <div 
                className="bg-white flex items-center justify-center"
                style={{
                  width: `${service.width}px`,
                  height: '120px',
                }}
              >
                <h3 className="text-[40px] font-normal text-black text-center leading-[48px]">
                  {service.title}
                </h3>
              </div>

              {/* Service Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-auto"
                style={{
                  maxWidth: `${service.imageWidth}px`,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Line */}
      <div 
        className="absolute left-[-227px] top-[1127px] w-[1571px] border-l border-white"
        style={{
          height: '16011px',
          borderWidth: '1.5px',
          boxShadow: '0px 4px 4px #000000',
        }}
      />
    </section>
  );
};

export default OurCoreServiceSection;