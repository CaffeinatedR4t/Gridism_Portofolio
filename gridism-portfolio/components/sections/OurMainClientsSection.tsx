"use client";

const OurMainClientsSection = () => {
  return (
    <section 
      className="relative w-full bg-black py-16"
      data-theme="dark"
    >
      <div className="relative max-w-[2088px] mx-auto" style={{ marginLeft: '-273px' }}>
        {/* Heading - Above Cards */}
        <h2 
          className="text-[96px] leading-[116px] text-white font-normal mb-8"
          style={{
            fontFamily: 'Inter, sans-serif',
            width: '953px',
            marginLeft: '627px',
          }}
        >
          Our Main Clients
        </h2>

        {/* Client Cards Container */}
        <div className="flex gap-12">
          {/* Client 1 */}
          <div className="relative flex-none">
            <img
              src="/images/Frame 62.png"
              alt="EZZRALE"
              className="w-[955px] h-[913px] object-cover"
            />
          </div>

          {/* Client 2 */}
          <div className="relative flex-none">
            <img
              src="/images/Frame 64.png"
              alt="Alfred Situmorang"
              className="w-[1088px] h-[1104px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMainClientsSection;