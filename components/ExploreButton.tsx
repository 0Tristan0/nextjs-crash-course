"use client"

import Image from "next/image"
import posthog from "posthog-js"

const ExploreButton = () => {
  const handleExploreClick = () => {
    posthog.capture('explore_events_clicked', {
      button_location: 'hero_section',
    });
  };

  return (
    <button type="button" id="explore-btn" className="mt-7 mx-auto" onClick={handleExploreClick}>
        <a href="#events">
            Explore Events
            <Image src="/icons/arrow-down.svg" alt="Down Arrow" width={24} height={24}/>
        </a>
    </button>
  )
}

export default ExploreButton