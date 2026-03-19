"use client";

import { useState } from "react";

const theme = {
    typography: {
        fontBold: "font-medium text-xl",
        fontLight: "font-light text-base",
        fontLightBig: "font-light text-[64px]"
    },
    spacing: {
        primarySpacing: "flex flex-col gap-8",
        secondarySpacing: "flex flex-col gap-1",
        tertiarySpacing: "flex flex-col gap-3"
    },
    input: {
        inputStyle: "border-b-2 border-gray-300 bg-transparent py-2 focus:outline-none focus:border-black transition-colors rounded-none"
    }
}

const ConnectSection = () => {
    // State to handle button UI changes
    const [result, setResult] = useState("Submit");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setResult("Sending...");
        
        const form = event.currentTarget;
        const formData = new FormData(form);

        // --- IMPORTANT: Paste your Web3Forms Access Key here ---
<<<<<<< HEAD
        formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY as string);
=======
        formData.append("access_key", "b99ce09a-763c-4be9-9e91-3d9d8cb51178");
>>>>>>> cccfe2f0e50efd0a3583d03f40175f8def404ae2

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Message Sent");
                form.reset(); // Clear the form
                
                // Reset button text after 3 seconds
                setTimeout(() => setResult("Submit"), 3000);
            } else {
                console.log("Error", data);
                setResult("Error! Try Again");
            }
        } catch (error) {
            console.log("Submit Error:", error);
            setResult("Error! Try Again");
        }
    };

    return (
        <section className="min-h-screen bg-white w-full flex items-center justify-center py-16">
            <div className="w-full max-w-[1440px] mx-auto px-[5%] flex flex-col-reverse md:grid md:grid-cols-2 gap-16 md:gap-24 items-stretch">
                
                {/* Left Side: Address & Socials */}
                <div className="flex flex-col justify-end w-full h-full gap-12 md:gap-16">
                    <div className={theme.spacing.primarySpacing}>
                        <p className={theme.typography.fontBold}>Address</p>
                        <p className={`max-w-[80%] md:max-w-[70%] ${theme.typography.fontLight}`}>
                            Summit Tower, 17th Floor<br/>
                            Jl. Jendral Sudirman No. 45<br/>
                            SCBD, Jakarta 12190 Indonesia
                        </p>
                        <div className={`flex gap-5 ${theme.typography.fontBold}`}>
                            <a href="https://instagram.com/gridism.co" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">Instagram</a>
                            <a href="https://id.linkedin.com/company/gridismco" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">LinkedIn</a>
                            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">X</a>
                        </div>
                    </div>
                    <h1 className={`text-5xl md:${theme.typography.fontLightBig}`}>
                        Let's Connect
                    </h1>
                </div>

                {/* Right Side: Form */}
                <div className="w-full h-full">
                    {/* Add the onSubmit handler here */}
                    <form onSubmit={handleSubmit} className={`${theme.spacing.primarySpacing} w-full h-full flex flex-col justify-between`}>
                        
                        <div className={`${theme.spacing.secondarySpacing}`}>
                            <label className={theme.typography.fontBold}>Name</label>
                            <input
                                type="text"
                                name="name" // Changed name to match standard email formatting
                                placeholder="Hello..."
                                required
                                className={`${theme.input.inputStyle}`}
                            />
                        </div>

                        <div className={`${theme.spacing.secondarySpacing}`}>
                            <label className={theme.typography.fontBold}>Email</label>
                            <input
                                type="email"
                                name="email" 
                                placeholder="Your email @gmail.com"
                                required
                                className={`${theme.input.inputStyle}`}
                            />
                        </div>

                        <div className={`${theme.spacing.secondarySpacing}`}>
                            <label className={theme.typography.fontBold}>Company Name</label>
                            <input
                                type="text"
                                name="company" 
                                placeholder="Your company or website"
                                required
                                className={`${theme.input.inputStyle}`}
                            />
                        </div>

                        <div className={`${theme.spacing.secondarySpacing}`}>
                            <label className={theme.typography.fontBold}>Social Media</label>
                            <input
                                type="text"
                                name="social"
                                placeholder="Your social media"
                                required
                                className={`${theme.input.inputStyle}`}
                            />
                        </div>

                        <div className={`${theme.spacing.tertiarySpacing}`}>
                            <label className={theme.typography.fontBold}>Message</label>
                            <textarea
                                name="message"
                                placeholder="How can I help?"
                                required
                                rows={4}
                                className={`${theme.input.inputStyle} resize-none`} 
                            />
                        </div>
                        
                        <button 
                            type="submit"
                            // Disable the button while sending to prevent double-clicks
                            disabled={result === "Sending..."} 
                            className={`mt-8 md:mt-auto text-2xl md:text-4xl font-light py-3 px-12 w-fit self-end transition-all duration-300 ${
                                result === "Message Sent" 
                                    ? "bg-green-600 text-white" 
                                    : "bg-black text-white hover:bg-black/80 disabled:opacity-50"
                            }`}
                        >
                            {result}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ConnectSection;