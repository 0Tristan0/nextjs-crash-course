"use client"

import Image from "next/image"

const ExploreButton = () => {
  return (
    <button type="button" id="explore-button" className="mt-7" onClick={() => console.log("Explore button clicked")}>
        <a href="#events">
            Explore Events
            <Image src="/icons/arrow-down.svg" alt="Down Arrow" width={24} height={24}/>
        </a>
    </button>
  )
}

export default ExploreButton