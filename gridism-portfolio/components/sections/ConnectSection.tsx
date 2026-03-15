const theme =  {
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
        inputStyle: "border-b-2 border-gray-300 bg-transparent py-2 focus:outline-none focus:ring-0"
    }
}

const ConnectSection = () => {

    return (
        <section className="min-h-screen flex flex-col-reverse md:grid grid-cols-2 justify-items-center items-end py-15 bg-white">
            <div className="h-full max-h-[300px] md:max-h-[400px] flex flex-1 flex-col gap-10 p-15">
                <div className={theme.spacing.primarySpacing}>
                    <p className={theme.typography.fontBold}>Address</p>
                    <p className={`max-w-[50%] md:max-w-[35%] ${theme.typography.fontLight}`}>Summit Tower, 17th Floor Jl. Jendral Sudirman No. 45 SCBD, Jakarta 12190 Indonesia</p>
                    <div className={`flex gap-5 ${theme.typography.fontBold}`}>
                        <a href="#">Instagram</a>
                        <a href="#">LinkedIn</a>
                        <a href="#">X</a>
                    </div>
                </div>
                <h1 className={`mt-auto text-5xl font-light md:text-[64px]`}>Let's Connect</h1>
            </div>
            <div className={`flex flex-1 w-[80%] ${theme.spacing.primarySpacing}`}>
                <form className={`${theme.spacing.primarySpacing}`}>
                    <div className={`${theme.spacing.secondarySpacing}`}>
                        <label>Name</label>
                        <input
                            type="name"
                            name="userName"
                            placeholder="Hello..."
                            required
                            className={`${theme.input.inputStyle}`}
                        />
                    </div>

                    <div className={`${theme.spacing.secondarySpacing}`}>
                        <label>Email</label>
                        <input
                            type="email"
                            name="userEmail"
                            placeholder="HappyJohn@gmail.com"
                            required
                            className={`${theme.input.inputStyle}`}
                        />
                    </div>

                      <div className={`${theme.spacing.secondarySpacing}`}>
                        <label>Company Name</label>
                        <input
                            type="company"
                            name="userCompany"
                            placeholder="Your company or website"
                            required
                            className={`${theme.input.inputStyle}`}
                        />
                    </div>

                      <div className={`${theme.spacing.secondarySpacing}`}>
                        <label>Social Media</label>
                        <input
                            type="socialMedia"
                            name="userSocialMedia"
                            placeholder="Your social media"
                            required
                            className={`${theme.input.inputStyle}`}
                        />
                    </div>

                    <div className={`${theme.spacing.tertiarySpacing}`}>
                    <label>Message</label>
                    <textarea
                        name="message"
                        placeholder="How can I help?"
                        required
                        rows={4}
                        className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-0"
                    />
                    </div>
                    <button className='text-4xl font-light py-3 px-12 bg-black w-fit text-white self-end'>Submit</button>
                </form>
            </div>
        </section>
    )
}

export default ConnectSection