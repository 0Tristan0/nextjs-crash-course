'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import posthog from 'posthog-js'

const Navbar = () => {
  const handleLogoClick = () => {
    posthog.capture('logo_clicked', {
      navigation_source: 'navbar',
    });
  };

  const handleNavHomeClick = () => {
    posthog.capture('nav_home_clicked', {
      navigation_source: 'navbar',
    });
  };

  const handleNavEventsClick = () => {
    posthog.capture('nav_events_clicked', {
      navigation_source: 'navbar',
    });
  };

  const handleNavCreateEventClick = () => {
    posthog.capture('nav_create_event_clicked', {
      navigation_source: 'navbar',
    });
  };

  return (
    <header>
        <nav>
            <Link href="/" className="logo" onClick={handleLogoClick}>
                <Image src="/icons/logo.png" alt="Logo" width={40} height={40}/>

                <p>DevEvent</p>
            </Link>

            <ul>
                <Link href="/" onClick={handleNavHomeClick}>Home</Link>
                <Link href="/" onClick={handleNavEventsClick}>Events</Link>
                <Link href="/" onClick={handleNavCreateEventClick}>Create Event</Link>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar