import Image from "next/image";
const projects = [
    { title: "Campaign Branding", desc: "IKEA", src: "/images/ezzralef.png", span: "row-span-2", ratio: "aspect-square" },
    { title: "Web Development", desc: "KINGSMAN", src: "/images/ijaakrta.png", span: "row-span-3", ratio: "aspect-[2/3]" },
    { title: "Branding", desc: "EZZRALE", src: "/images/ezzralef.png", span: "row-span-2", ratio: "aspect-square" },
    { title: "Revamp", desc: "iJakarta", src: "/images/ijaakrta.png", span: "row-span-3", ratio: "aspect-[2/3]" },
    { title: "Branding", desc: "EZZRALE", src: "/images/dummy.png", span: "row-span-2", ratio: "aspect-square" },
    { title: "Branding", desc: "EZZRALE", src: "/images/dummy.png", span: "row-span-3", ratio: "aspect-[2/3]" },
    { title: "Branding", desc: "EZZRALE", src: "/images/Legacy in Every Line.svg", span: "row-span-3", ratio: "aspect-[2/3]" },
]

const SectionWork = () => {

    return (
        <>
        <section data-navbar-theme="dark" className="bg-black">
            <section className="max-w-[1440px] min-h-[100vh] flex justify-center items-center mx-auto">
                <div className="relative mt-[3rem] w-[80%] min-h-[500px]">
                    <div className="flex">
                        <img src="/images/Kuda.svg" alt="Horse Chess Piece" className="h-auto w-20" />
                        <h1 className="text-[6vw] lg:text-[90px] font-normal tracking-[0.5em]">GRIDISM</h1>
                    </div>

                    <h2 className="text-2xl font-normal pl-4">All works that we proud to show</h2>

                    <div className="max-w-[45%] absolute bottom-0 right-0 text-sm text-right">
                        <p>We are a full-service creative agency, based in Jakarta,specializing in lifestyle and technology</p><br />
                        <p>By crafting bespoke concepts, we create emotional connections between brands and their audiences. Combining our savoir-faire in strategy, art direction and production, we deliver creativity for high-end campaigns, social narratives and digital objects.</p>
                    </div>
                </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 grid-flow-dense auto-rows-[250px] gap-6 max-w-[1440px] mx-auto px-6">
                {projects.map((project, index) => (
                    <div key={index} className={`relative ${project.span} group overflow-hidden bg-zinc-900`}>
                        <img
                            src={project.src}
                            alt={project.desc}
                            className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${project.ratio}`}
                        />
                        {/* Overlay Label */}
                        <div className="absolute bottom-0 flex h-[60px] w-full items-center justify-between bg-white/90 px-8 text-black backdrop-blur-sm transition-opacity duration-300">
                            <span className="text-xs md:text-sm font-bold uppercase tracking-widest">{project.title}</span>
                            <span className="text-xs md:text-sm font-bold uppercase tracking-widest">{project.desc}</span>
                        </div>
                    </div>
                ))}
            </section>

            <section className="flex justify-evenly items-center w-full max-w-[1440px] h-200 mx-auto text-white relative">
                <h1 className="text-[1.75rem] tracking-[0.5em]">GRIDISM</h1>
                <Image src="/images/gridisim-blur bgblack.png" alt="gridism logo" width={400} height={400}></Image>
                <div className="grid text-center leading-loose text-[1rem] w-[15%] tracking-[0.2em] gap-20">
                    <p>Web development & Branding Agency</p>
                    <p>- Contact Us -</p>
                </div>

                <footer className="absolute bottom-0 flex border-t-1 w-full">
                    <div className="flex justify-between w-[50%] p-3">
                        <p>2025</p>
                        <p>Instagram</p>
                    </div>
                    <div className="flex justify-between w-[50%] p-3">
                        <p>LinkedIn</p>
                        <p>Legals</p>
                    </div>
                </footer>
            </section>

            <section className="relative w-full h-[1536px] bg-white">
                {/* 1. The Background Image - Fills everything */}
                <div className="absolute inset-0 z-0" >
                    <Image
                        src="/images/footer works page.png" // Replace with your actual image path
                        alt="Artistic Footer Image"
                        fill
                        priority
                        className="w-full h-full object-cover object-[50%_17%]"
                    />
                </div>

                <div className="flex w-full justify-between items-center absolute bottom-0 px-10 pb-5">
                    <div className="flex gap-10 text-black">
                    <p>OUR WORKS<br/>(DETAILED)</p>
                    <p>LET'S DISCUSS</p>
                    </div>

                    <Image src="/images/gridism-logo.svg" alt="Gridism Logo" width={150} height={150}></Image>
                </div>
            </section>
        </section>
        </>
    )
}

export default SectionWork;