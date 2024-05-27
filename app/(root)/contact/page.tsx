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
                <p className="p-medium-16 md:p-medium-20 line-clamp-2 mx-3 py-1 flex-1 text-white">CUSTOMIZED EVENTS:</p>
                <p className="p-2 text-white"># The Customer Can Customize Events On His Own That Are Not Listed On Our Site.</p>
                <p className="p-2 text-white"># The Customer Can Add His Or Her Budget, The Persons He Or She Wants To Invite.</p>
                <p className=" p-2 text-white"># The Location He Or She Wants To Host The Event, And Any Theme If He Or She Wants To Do Something Particular.</p>
                <p className=" p-2 text-white"># Than Our Staff Will Assist Them In Organizing The Event According To Their Requirements.</p>
            </div>
            <div className="wrapper mx-3 py-3 my-4 group relative flex min-h-[260px] max-w-[400px] flex-col overflow-hidden rounded-xl shadow-md transition-all hover:shadow-lg
             bg-gray-800">
                <p className="p-medium-16 md:p-medium-20 line-clamp-2 mx-3 py-1 flex-1 text-white">HELP & SUPPORT:</p>
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
