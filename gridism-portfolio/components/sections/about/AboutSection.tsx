import Image from "next/image";
import { cn } from "@/utils/cn";

const theme = {
    typography: {
        fontHeader: "text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-light text-black tracking-wider leading-relaxed"
    }
}

const MISSION_TEXT = [
    "Gridism is a brand and digital studio built for the global market.",
    "We do Branding and Web for the Global Market."
];

const STRATEGY_GROUPS = [
    ["Personal Branding", "Consulting", "E-commerce strategy", "Brand & Strategy"],
    ["User Experience (UX)", "User Interface (UI)", "Wireframes & Prototyping", "User Analysis Research"],
    ["Creative Development", "Research & Development", "Front-end Development", "Back-end Development"]
];

const AboutSection = () => {
    // Shared class for the mission statement headers
    return (
        <section className="bg-white">
            {/* HERO SECTION: Cyborg + Absolute Text */}
            <div className="relative min-h-screen">
                <div className="relative min-h-screen bg-yellow">
                </div>
                <Image src="icon.svg" alt="gridism logo" width={200} height={200} className="absolute inset-0 m-auto" />
            </div>

            {/* DESCRIPTION SECTION */}
            <div className="min-h-screen flex flex-col items-center justify-center">
                <div className="w-[90%] max-w-4xl flex flex-col items-center gap-10 text-center">
                    {/* Mapped Mission Headers */}
                    <h1 className="text-3xl md:text-4xl lg:text-[64px] font-light">BUILDING <span className="font-medium">ICONIC</span> BRANDS AND DIGITAL EXPERIENCES</h1>
                    {MISSION_TEXT.map((text, index) => (
                        <p key={index} className={cn(theme.typography.fontHeader)}>
                            {text}
                        </p>
                    ))}

                    <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light text-neutral-500 tracking-wide max-w-3xl leading-relaxed">
                        Full-service creative solutions for lifestyle and tech brands. From Jakarta to the world.
                        Driving Global Scale Through Brand Identity and Digital Innovation.
                    </p>
                </div>
            </div>
            <div className="flex gap-30 p-10 bg-black items-center text-white">
                <h3 className="text-base sm:text-sm md:text-lg lg:text-2xl xl:text-3xl font-semibold leading-normal">Outcomes Over Process.</h3>
                <p className="text-base sm:text-sm md:text-md lg:text-xl xl:text-2xl font-regular tracking-wider text-justify">
                    We help brands and products build premium experiences that deliver ROI through rapid prototyping (AI), sharp decision-making, and meticulous detail crafting from start to finish. My process is flexible—what remains consistent are the outcome, quality, and impact.
                </p>
            </div>

            {/* STRATEGY & OVERLAY SECTION */}
            <div className="relative overflow-hidden w-full min-h-screen my-30">
                <div className="flex flex-col gap-[8vw] text-black text-center">

                    <div className="flex flex-col gap-20">
                        <h3 className="text-[48px] md:text-[96px]">IDEAS AND STRATEGY</h3>

                        {/* Mapped Strategy Groups - The Infinite Marquee */}
                        {STRATEGY_GROUPS.map((group, groupIndex) => {
                            // Determine direction: Evens go left, Odds go right
                            const isEven = groupIndex % 2 === 0;
                            const animationClass = isEven ? "run-marquee-left" : "run-marquee-right";

                            return (
                                // The main wrapper MUST have overflow-hidden
                                <div key={groupIndex} className="flex w-full overflow-hidden bg-white/5 py-4">

                                    {/* The animated moving track */}
                                    <div className={cn("flex shrink-0 w-max", animationClass)}>

                                        {/* Block 1 (Original) */}
                                        <div className="flex shrink-0 gap-20 px-10 items-center">
                                            {group.map((item, itemIndex) => (
                                                <p key={`original-${itemIndex}`} className="text-2xl md:text-3xl  font-light whitespace-nowrap">
                                                    {item}
                                                </p>
                                            ))}
                                        </div>

                                        {/* Block 2 (The Clone Illusion) */}
                                        <div className="flex shrink-0 gap-20 px-10 items-center">
                                            {group.map((item, itemIndex) => (
                                                <p key={`clone-${itemIndex}`} className="text-2xl md:text-3xl font-light whitespace-nowrap">
                                                    {item}
                                                </p>
                                            ))}
                                        </div>

                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

        </section>
    );
};

export default AboutSection;