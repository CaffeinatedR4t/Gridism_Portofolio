"use client";

const FooterSection = () => {
  return (
    <section
      className="relative w-full bg-white"
      data-theme="light"
    >
      {/* ── White upper footer ── */}
      <div
        className="relative w-full bg-white"
        style={{ height: "1000px" }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center">

          {/* Three-column logo row */}
          <div className="flex items-center justify-center gap-32 mb-16 w-full px-[10%]">
            <p
              className="text-black text-[24px] tracking-[0.3em]"
              style={{ fontFamily: "'Switzer', sans-serif" }}
            >
              G R I D I S M
            </p>

            <img
              src="/images/gridism-logo.svg"
              alt="Gridism Logo"
              style={{ width: "418px", height: "434px" }}
            />

            <div className="flex flex-col gap-4 text-right">
              <p
                className="text-black text-[24px] leading-[29px]"
                style={{ fontFamily: "'Switzer', sans-serif" }}
              >
                Web Development<br />& Branding Agency
              </p>
              <a
                href="mailto:hello@gridism.com"
                className="text-black text-[24px] leading-[29px] cursor-pointer hover:opacity-60 transition-opacity"
                style={{ fontFamily: "'Switzer', sans-serif", textDecoration: "none" }}
              >
                —&nbsp; Contact Us &nbsp;—
              </a>
            </div>
          </div>

          {/* Full-width line */}
          <div style={{ width: "100vw", height: "1px", backgroundColor: "#000000" }} />

          {/* Bottom bar */}
          <div
            className="flex justify-between items-center"
            style={{
              width: "100%",
              paddingLeft: "24px",
              paddingRight: "24px",
              paddingTop: "20px",
              paddingBottom: "20px",
              boxSizing: "border-box",
            }}
          >
            <p
              className="text-black text-[16px] leading-[19px]"
              style={{ fontFamily: "'Switzer', sans-serif", margin: 0 }}
            >
              @2025
            </p>

            <div className="flex gap-20">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black text-[16px] leading-[19px] cursor-pointer hover:opacity-60 transition-opacity"
                style={{ fontFamily: "'Switzer', sans-serif", textDecoration: "none" }}
              >
                -&nbsp; Instagram &nbsp;-
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black text-[16px] leading-[19px] cursor-pointer hover:opacity-60 transition-opacity"
                style={{ fontFamily: "'Switzer', sans-serif", textDecoration: "none" }}
              >
                -&nbsp; LinkedIn &nbsp;-
              </a>
            </div>

            <a
              href="/legals"
              className="text-black text-[16px] leading-[19px] cursor-pointer hover:opacity-60 transition-opacity"
              style={{ fontFamily: "'Switzer', sans-serif", textDecoration: "none" }}
            >
              Legals
            </a>
          </div>

        </div>
      </div>

      {/* ── Group 75 horse image section ── */}
      <div className="relative w-full">
        <img
          src="/images/Group 75.png"
          alt="Footer Background"
          className="w-full h-auto object-cover"
        />

        {/* Gradient overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0) 16.83%, rgba(88,88,88,0.497596) 52.24%, rgba(44,44,44,0.629461) 68.3%, rgba(34,34,34,0.659135) 76.8%, rgba(22,22,22,0.69655) 92.85%, rgba(12,12,12,0.723844) 101.35%, rgba(4,4,4,0.75) 115.05%)",
            mixBlendMode: "multiply",
          }}
        />

        {/* Bottom overlay — buttons left side, logo far right */}
        <div
          className="absolute inset-0 flex items-end"
          style={{ paddingBottom: "48px" }}
        >
          <div
            className="w-full flex flex-row items-end justify-between"
            style={{
              paddingLeft: "60px",
              paddingRight: "60px",
              boxSizing: "border-box",
            }}
          >
            {/* Left — both buttons side by side */}
            <div
              className="flex flex-row items-end"
              style={{ gap: "48px" }}
            >
              {/* OUR WORKS (DETAILED) */}
              <button
                className="text-white cursor-pointer hover:opacity-70 transition-opacity"
                style={{
                  fontFamily: "'Switzer', sans-serif",
                  fontSize: "16px",
                  lineHeight: "22px",
                  textAlign: "left",
                  background: "none",
                  border: "none",
                  padding: 0,
                }}
              >
                OUR WORKS<br />(DETAILED)
              </button>

              {/* LET'S DISCUSS — right beside OUR WORKS */}
              <button
                className="text-white cursor-pointer hover:opacity-70 transition-opacity"
                style={{
                  fontFamily: "'Switzer', sans-serif",
                  fontSize: "16px",
                  lineHeight: "22px",
                  background: "none",
                  border: "none",
                  padding: 0,
                  paddingBottom: "2px", /* align baseline with bottom of OUR WORKS (DETAILED) */
                }}
              >
                LET&apos;S DISCUSS
              </button>
            </div>

            {/* Right — Gridism logo, same bottom alignment as buttons */}
            <img
              src="/images/gridism-logo.svg"
              alt="Gridism Icon"
              style={{
                width: "120px",
                height: "120px",
                filter: "brightness(0) invert(1)",
                flexShrink: 0,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;