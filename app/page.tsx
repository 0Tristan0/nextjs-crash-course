import ExploreButton from "@/components/ExploreButton"
import EventCard from "@/components/EventCard"
import events from "@/lib/constants"

const Page = () => {
  return (
    // This will automatically use the fonts defined in layout.tsx beacuse its a h1
    <section>
      <h1 className="text-center">The Hub for Every Dev <br/> Even You Can't Miss!</h1>
      <p className="text-center mt-5">Hakcathons, Meetputs, and Conferences, All in One Place</p>
      <ExploreButton />

      <div className="mt-20 space-y-7" id="events">
        <h3>Featured Events</h3>

        <ul className="events">
          {/* Here we make an array and map it to all the events */}
          {events.map((event) => (
            <li className="list-none" key={event.title}> <EventCard title={event.title} image={event.image} slug={event.slug} location={event.location} date={event.date} time={event.time} /></li>
          ))}
        </ul>
      </div>

    </section>
    
  )
}

export default Page