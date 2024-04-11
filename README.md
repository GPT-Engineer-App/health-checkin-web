# health-checkin-web

- A web app, for daily health checkins.
- The web app has a mobile style. It can also be accessed with desktop, but the style will be the same as in mobile, the width of the web app will expand to a max of 600px.
- The web app has two pages: Home, Results.
- A bottom menu bar shows the navigation for Home and Results pages.
- To access any page, you need to be authenticated, using Supabase passwordless solution.
- The Home page shows "Your score” title at the top, centre aligned. Bellow it shows the health score, which is picked up from the user Supabase database.
- Below the score in the home page there is a list of your latest activities. If the activity list is empty it shows "Add your first activity”.
- The Results page is kept empty for now.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/health-checkin-web.git
cd health-checkin-web
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
