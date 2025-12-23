# PostHog post-wizard report

The wizard has completed a deep integration of your DevEvent Next.js application. PostHog has been configured using the modern `instrumentation-client.ts` approach (recommended for Next.js 15.3+), which provides automatic pageview tracking, session recording, and exception capture. Custom event tracking has been added to key user interaction points to capture business-critical actions like exploring events, clicking on event cards, and navigating through the application.

## Integration Summary

- **PostHog SDK**: `posthog-js` installed via npm
- **Initialization**: `instrumentation-client.ts` at project root
- **Environment Variables**: `.env` file with `NEXT_PUBLIC_POSTHOG_KEY` and `NEXT_PUBLIC_POSTHOG_HOST`
- **Features Enabled**: Autocapture, session replay, exception tracking, custom events

## Events Added

| Event Name | Description | File |
|------------|-------------|------|
| `explore_events_clicked` | User clicked the 'Explore Events' CTA button to scroll to featured events section | `components/ExploreButton.tsx` |
| `event_card_clicked` | User clicked on an event card to view event details (includes event properties: title, slug, location, date, time) | `components/EventCard.tsx` |
| `nav_home_clicked` | User clicked 'Home' navigation link | `components/NavBar.tsx` |
| `nav_events_clicked` | User clicked 'Events' navigation link | `components/NavBar.tsx` |
| `nav_create_event_clicked` | User clicked 'Create Event' navigation link - high conversion intent | `components/NavBar.tsx` |
| `logo_clicked` | User clicked the logo to return to homepage | `components/NavBar.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

### Dashboard
- [Analytics basics](https://us.posthog.com/project/271482/dashboard/937340) - Main dashboard with all insights

### Insights
- [Event Card Clicks Over Time](https://us.posthog.com/project/271482/insights/4L609OKN) - Track how often users click on event cards
- [Explore to Event Click Conversion](https://us.posthog.com/project/271482/insights/oCfHjQMO) - Funnel showing users who click Explore and then an event card
- [Navigation Usage Breakdown](https://us.posthog.com/project/271482/insights/SUFQW4ID) - Which navigation links users click most
- [Create Event Intent](https://us.posthog.com/project/271482/insights/D6CZlooP) - Track high-conversion intent signals
- [Popular Events by Click](https://us.posthog.com/project/271482/insights/PpnI3ClV) - Breakdown of which events get the most clicks
