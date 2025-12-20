import ExploreButton from "@/components/ExploreButton"

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
          
        </ul>
      </div>

    </section>
    
  )
}

export default Page