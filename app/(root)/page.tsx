import CategoryFilter from "@/components/shared/CategoryFilter";
import Collection from "@/components/shared/Collection";
import Search from "@/components/shared/Search";
import { Button } from "@/components/ui/button";
import { getAllEvents } from "@/lib/actions/event.actions";
import { SearchParamProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default async function Home({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || '';
  const category = (searchParams?.category as string) || '';

  const events = await getAllEvents({
    query: searchText,
    category,
    page,
    limit: 6
  })

  return (
    <>
     {/* bg-teal-400 */}
      <section className="bg-dotted-pattern bg-contain py-5 md:py-10 bg-slate-300"> 
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">
            CELEBRATE YOUR HAPPINESS WITH OUR EXPERTISE!
            </h1>
            <p className="p-regular-20 md:p-regular-24">WE'LL FILL THE GAP BETWEEN YOU AND YOUR WISHES TO MAKE IT HAPPEN. CONTACT US TO MAKE YOUR DAY MORE SPECIAL OUR MENTORS WILL REACH YOU TO YOUR PATH.</p>
          </div>
          <Image
            src="/assets/images/fronttest.png"     // Front Page Photo
            alt="Front Page Photo"
            width={1000}
            height={1000}
            className="max-h-[80vh] object-contain object-center 2xl:max-h-[60vh]"
          />
        </div>
        <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-2 py-1">
                <Image
                    src="/assets/icons/location-grey.svg"
                    alt="location"
                    width={24}
                    height={24}
                />
                AHMEDABAD
            </div>
      </section>

      <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="h2-bold">Trust by <br /> Thousands of Events</h2>

         <div className="flex w-full flex-col gap-5 md:flex-row">
          <Search />
          <CategoryFilter/>
        </div>

        <Collection 
          data={events?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={6}
          page={page}
          totalPages={events?.totalPages}
        />
      </section>
    </>
  );
}