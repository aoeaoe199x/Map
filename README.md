# German Train Tracker

A real-time train tracking application for major German cities, built with Next.js, TypeScript, Material UI, Tailwind CSS, and OpenStreetMap (via Leaflet).

## Features

- Real-time train status updates that refresh automatically every 5 seconds
- Interactive map showing train locations across German cities (Berlin, Frankfurt, Hamburg, Hannover, Karlsruhe, Erfurt, ...)
- Train markers with different colors to indicate status (blue for on-time, red for delayed, black for cancelled)
- Detailed popups with train information when clicking markers
- Sidebar with filterable train list (all, on-time, delayed, cancelled)
- Manual refresh button for immediate updates
- Timestamp indicators showing when each train's status was last updated
- Responsive design that works on mobile and desktop

## Tech Stack

- **Framework**: Next.js with TypeScript
- **Styling**: Material UI, Tailwind CSS
- **Mapping**: OpenStreetMap with React-Leaflet
- **State Management**: React Context API for real-time updates
- **Data**: Simulated real-time data updates

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How it Works

- The application displays real-time train information for German cities
- Train data is simulated to change dynamically (delays, cancellations, etc.)
- Each train is represented by a marker on the map:
  - Blue: On-time trains
  - Red: Delayed trains
  - Black: Cancelled trains
- The sidebar allows filtering trains by their status
- Data refreshes automatically every 5 seconds with visual indicators

## Future Enhancements

- Integration with real-time train API (Deutsche Bahn)
- Train route visualization
- Historical delay data and analytics
- User authentication for personalized train tracking
- Push notifications for train status updates
- Weather data integration to show weather conditions at each station

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
