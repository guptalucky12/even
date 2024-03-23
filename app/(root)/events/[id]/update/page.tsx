// import EventForm from "@/components/shared/EventForm"
// import { getEventById } from "@/lib/actions/event.actions"
// import { auth } from "@clerk/nextjs";

// type UpdateEventProps = {
//   params: {
//     id: string
//   }
// }

// const UpdateEvent = async ({ params: { id } }: UpdateEventProps) => {
//   const { sessionClaims } = auth();

//   const userId = sessionClaims?.userId as string;
//   const event = await getEventById(id)

//   return (
//     <>
//       <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
//         <h3 className="wrapper h3-bold text-center sm:text-left">Update Event</h3>
//       </section>

//       <div className="wrapper my-8">
//         <EventForm 
//           type="Update" 
//           event={event} 
//           eventId={event._id} 
//           userId={userId} 
//         />
//       </div>
//     </>
//   )
// }

// export default UpdateEvent

import EventForm from "@/components/shared/EventForm";
import { getEventById } from "@/lib/actions/event.actions";
import { auth } from "@clerk/nextjs";

type UpdateEventProps = {
  params: {
    id: string;
  };
};

const UpdateEvent = async ({ params: { id } }: UpdateEventProps) => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;
  const event = await getEventById(id);

  if (!event || !event._id) {
    // Handle case where event is not found or _id is missing
    // For example, redirect to an error page or display a message to the user
    return <p>Event not found.</p>;
  }

  return (
    <>
      <section className="bg-green-300 bg-dotted-pattern bg-cover bg-center py-5 md:py-0">
        <h3 className="wrapper h3-bold text-center sm:text-left">Update Event</h3>
      </section>

      <div className="wrapper my-8">
        <EventForm 
          type="Update" 
          event={event} 
          eventId={event._id} 
          userId={userId} 
        />
      </div>
    </>
  );
};

export default UpdateEvent;
