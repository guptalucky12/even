import Image from "next/image"

const About = () => {
    return (
        <>
            <section className="bg-lime-200 bg-dotted-pattern bg-cover bg-center py-5 md:py-0">
                <div className="wrapper flex items-center justify-center sm:justify-between">
                    <h3 className='h5-bold text-center sm:text-center'>ABOUT-US</h3>
                </div>
            </section>
            <div className="wrapper mx-3 py-2 my-8 px-3 group relative flex min-h-[480px] max-w-[350px] flex-col overflow-hidden rounded-xl shadow-md transition-all hover:shadow-lg bg-gray-800">
                <p className="p-medium-16 md:p-medium-20 line-clamp-2 mx-3 py-1 flex-1 text-white">eVenTO:</p>
                <p className="p-2  text-white">
                    # Welcome to eVenTO - your premier destination for seamless event management services! At eVenTO, we specialize in organizing a wide array of events, ranging from intimate gatherings to grand celebrations. With our commitment to excellence and attention to detail, we ensure that every occasion is meticulously planned and flawlessly executed.
                </p>
                <p className="p-2  text-white">
                    # Whether it's a joyous birthday party, a heartfelt farewell, a vibrant fresher's bash, or a prestigious corporate seminar, we have the expertise to handle it all. Our experienced team understands the nuances of different types of events and works closely with clients to bring their vision to life. From conceptualization to execution, we take care of every aspect, leaving our clients free to enjoy their special moments.
                </p>
                <p className="p-2  text-white">
                    # In the realm of weddings, eVenTO is a name synonymous with perfection. From traditional ceremonies like haldi, mehndi, and garba nights to modern-day celebrations like engagements, pre-wedding shoots, and the big day itself, we orchestrate every element with finesse. Our comprehensive wedding services cover everything from venue selection and décor to entertainment and catering, ensuring a memorable and stress-free experience for our clients.
                </p>
                <p className="p-2  text-white">
                    # What sets us apart is our dedication to customer satisfaction. Our past reviews speak volumes about the quality of service we provide. Whether it's a glowing testimonial from a satisfied client or a positive endorsement from a partner, our track record speaks for itself.
                </p>
                <p className="p-2  text-white">
                    # At eVenTO, we cater to both business-to-business (B2B) and business-to-consumer (B2C) clients, offering tailored solutions to meet their specific needs. Whether you're a corporate entity looking to host a professional event or an individual planning a personal celebration, we have the expertise and resources to exceed your expectations.
                </p>
                <p className="p-2  text-white">
                    # With eVenTO by your side, you can rest assured that your event will be nothing short of extraordinary. Let us turn your vision into reality and create unforgettable memories that will last a lifetime. Get in touch with us today and let's start planning your next unforgettable event!
                </p>
            </div>
        </>
    )
}

export default About