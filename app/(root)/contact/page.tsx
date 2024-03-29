import Image from "next/image"

const Help = () => {
    return (
        <>
            <section className="bg-lime-200 bg-dotted-pattern bg-cover bg-center py-5 md:py-0">
                <div className="wrapper flex items-center justify-center sm:justify-between">
                    <h3 className='h5-bold text-center sm:text-center'>CONTACT US</h3>
                </div>
            </section>
            <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
                <Image
                    src="/assets/icons/location-grey.svg"
                    alt="location"
                    width={24}
                    height={24}
                />
                AHMEDABAD
            </div>

            <div className="wrapper mx-3 py-3 my-4 group relative flex min-h-[260px] max-w-[400px] flex-col overflow-hidden rounded-xl shadow-md transition-all hover:shadow-lg
             bg-gray-800">
                <p className="p-medium-16 md:p-medium-20 line-clamp-2 mx-3 py-1 flex-1 text-white">B2B TERMS & CONDITION:</p>
                <p className="p-medium-16 md:p-medium-20 line-clamp-2 mx-3 py-1 flex-1 text-white"># Company Will Charge 83.53 Rupees For Per Ticket Of Any Type Of Free Seminar.</p>
                <p className="p-2 text-white"># We'll Charge 835.30 Rupees For Any Kind Of Event Promotion.</p>
                <p className=" p-2 text-white"># If Other People Or A Company Create Event Through Our Website We Will Take Commission Of 20% Of Their Profit(For 6 Months).</p>
                <p className=" p-2 text-white"># After Completion Of Six Months If The Company Wants To Maintain Its Event On The Website Then They Have To Renew The Event.</p>
                <p className=" p-2 text-white"># For Any Further Information Contact Us Via Whatsapp: +91-8866*****</p>
            </div>
            <div className="wrapper mx-3 py-3 my-4 group relative flex min-h-[260px] max-w-[400px] flex-col overflow-hidden rounded-xl shadow-md transition-all hover:shadow-lg
             bg-gray-800">
                <p className="p-medium-16 md:p-medium-20 line-clamp-2 mx-3 py-1 flex-1 text-black text-white">HELP & SUPPORT:</p>
                <p className="p-2 text-white"> # My Tickets & Booking Issue : Contact - GUPTA LUCKY - +91-8866*****</p>
                <p className=" p-2 text-white"> # B2B Issue(Create Event, Profit Margin ) : Contact - VISHESH SHAH - +91-8866*****</p>
                <p className=" p-2 text-white"> # Photo & Video Issue(EDITING & OTHER) : Contact - DHRUMIL PATEL - +91-8866*****</p>
                <p className=" p-2 text-white"> # Decoration & Food Issue : Contact - KINJAL PATIL - +91-8866*****</p>
                <p className=" p-2 text-white"> # Information Regarding  : Contact - DEV PATEL - +91-8866*****</p>
                <p className=" p-2 text-white"> # In case Any One Can't Attain Your Call  : Contact - MILAN SAVJADIYA - +91-8866*****</p>
            </div>
        </>
    )
}

export default Help
