import Image from "next/image";

const MISSION_TEXT = [
    "Gridism is a brand and digital studio built for the global market.",
    "We do Branding and Web for the Global Market."
];

const STRATEGY_GROUPS = [
    ["Personal Branding", "Consulting", "E-commerce strategy", "Brand & Strategy"],
    ["User Experience (UX)", "User Interface (UI)", "Wireframes & Prototyping", "User Analysis Research"],
    ["Creative Development", "Research & Development", "Front-end Development", "Back-end Development"]
];

const SectionAbout = () => {
    // Shared class for the mission statement headers
    const missionHeaderClass = "text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-light text-black tracking-wider leading-relaxed";
    

    return (
        <section data-navbar-theme='white' className="w-full">
            {/* HERO SECTION: Cyborg + Absolute Text */}
            <div className="relative overflow-hidden bg-white">
                <div className="relative w-full h-full">
                    <Image
                        src="/images/about-hero.webp"
                        alt="Gridism Hero Cyborg"
                        width={5760}
                        height={6780}
                        className="object-contain object-right"
                        priority
                    />
                </div>

                <div className="absolute inset-0 -top-25 right-5 flex flex-col items-end justify-center px-10 md:px-20 text-right">
                    <h1 className="text-white 2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl font-light leading-tight tracking-tighter drop-shadow-2xl">
                        BUILDING <span className="font-bold">ICONIC</span><br />
                        BRANDS AND DIGITAL<br />
                        EXPERIENCES
                    </h1>
                </div>
            </div>

            {/* DESCRIPTION SECTION */}
            <div className="flex flex-col items-center justify-center py-0 sm:py-10 md:py-20">
                <div className="w-[90%] max-w-4xl flex flex-col items-center gap-5 text-center px-5">
                    {/* Mapped Mission Headers */}
                    {MISSION_TEXT.map((text, index) => (
                        <p key={index} className={missionHeaderClass}>
                            {text}
                        </p>
                    ))}

                    <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light text-neutral-500 tracking-wide max-w-3xl leading-relaxed">
                        Full-service creative solutions for lifestyle and tech brands. From Jakarta to the world.
                        Driving Global Scale Through Brand Identity and Digital Innovation.
                    </p>
                </div>
            </div>

            {/* STRATEGY & OVERLAY SECTION */}
            <div className="relative overflow-hidden w-full h-auto">
                <div className="relative w-full h-full overflow-hidden">
                    <Image
                        src="/images/about-section-2.webp"
                        alt="girl"
                        width={1632}
                        height={2536}
                        className="w-full h-auto scale-120 origin-top object-top md:object-[center_10%]"
                        priority
                    />
                </div>

                <div className="absolute top-180 flex flex-col gap-[10vw] text-white text-center">
                    <div className="flex gap-30 p-10 bg-black items-center">
                        <h3 className="text-base sm:text-sm md:text-lg lg:text-3xl xl:text-4xl font-semibold leading-normal">Outcomes Over Process.</h3>
                        <p className="text-base sm:text-sm md:text-md lg:text-2xl xl:text-3xl font-regular tracking-wider text-justify">
                            We help brands and products build premium experiences that deliver ROI through rapid prototyping (AI), sharp decision-making, and meticulous detail crafting from start to finish. My process is flexible—what remains consistent are the outcome, quality, and impact.
                        </p>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-50">
                        <h3 className="text-3xl">IDEAS AND STRATEGY</h3>
                        
                        {/* Mapped Strategy Groups */}
                        {STRATEGY_GROUPS.map((group, groupIndex) => (
                            <div key={groupIndex} className="flex gap-40 text-2xl">
                                {group.map((item, itemIndex) => (
                                    <p key={itemIndex}>{item}</p>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionAbout;