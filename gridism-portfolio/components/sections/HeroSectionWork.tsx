


const HeroSectionWork = () => {

    return (
        <>
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

            <section className="grid grid-cols-2 grid-flow-dense grid-rows-10 gap-4 justify-items-center mx-auto">
                <div className="relative row-span-2">
                    <img src="/images/ezzralef.png" className="aspect-square h-full object-cover"></img>
                    <div className="absolute flex items-center justify-center space-x-80 bottom-0 bg-white/75 w-[100%] h-[12%]">
                    <p className=" text-black text-center text-[1.75rem]">Branding</p>
                    <p className="text-black text-center text-[1.75rem]">EZZRALE</p>
                    </div>
                </div>
                <div className="relative row-span-3">
                    <img src="/images/ijaakrta.png" className="aspect-[2/3] h-full object-cover"></img>
                    <div className="absolute flex items-center justify-center space-x-80 bottom-0 bg-white/75 w-[100%] h-[8%]">
                    <p className=" text-black text-center text-[1.75rem]">Revamp</p>
                    <p className="text-black text-center text-[1.75rem]">iJakarta</p>
                    </div>
                </div>
                <div className="relative row-span-2">
                    <img src="/images/dummy.png" className="aspect-square h-full object-cover"></img>
                   <div className="absolute flex items-center justify-center space-x-80 bottom-0 bg-white/75 w-[100%] h-[12%]">
                    <p className=" text-black text-center text-[1.75rem]">Revamp</p>
                    <p className="text-black text-center text-[1.75rem]">iJakarta</p>
                    </div>
                </div>
                <div className="relative row-span-3 aspect-[2/3]">
                    <img src="/images/Legacy in Every Line.svg" className="aspect-[2/3] h-full object-cover"></img>
                    <div className="absolute flex items-center justify-center space-x-80 bottom-0 bg-white/75 w-[100%] h-[8%]">
                    <p className=" text-black text-center text-[1.75rem]">Revamp</p>
                    <p className="text-black text-center text-[1.75rem]">iJakarta</p>
                    </div>
                </div>
                <div className="relative row-span-2 aspect-square">
                    <img src="/images/Legacy in Every Line.svg" className="aspect-square h-full object-cover"></img>
                    <div className="absolute flex items-center justify-center space-x-80 bottom-0 bg-white/75 w-[100%] h-[12%]">
                    <p className=" text-black text-center text-[1.75rem]">Revamp</p>
                    <p className="text-black text-center text-[1.75rem]">iJakarta</p>
                    </div>
                </div>
                <div className="relative row-span-2 aspect-square">
                    <img src="/images/Legacy in Every Line.svg" className="aspect-square h-full object-cover"></img>
                    <div className="absolute flex items-center justify-center space-x-80 bottom-0 bg-white/75 w-[100%] h-[12%]">
                    <p className=" text-black text-center text-[1.75rem]">Revamp</p>
                    <p className="text-black text-center text-[1.75rem]">iJakarta</p>
                    </div>
                </div>
                <div className="relative row-span-3 aspect-[2/3]">
                    <img src="/images/Legacy in Every Line.svg" className="aspect-[2/3] h-full object-cover"></img>
                    <div className="absolute flex items-center justify-center space-x-80 bottom-0 bg-white/75 w-[100%] h-[8%]">
                    <p className=" text-black text-center text-[1.75rem]">Revamp</p>
                    <p className="text-black text-center text-[1.75rem]">iJakarta</p>
                    </div>
                </div>
            </section>
        </>
    )
} 

export default HeroSectionWork;