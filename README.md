This is a [Next.js](https://nextjs.org) project.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Automatic Updates

When changes are merged into the ```main``` branch they are automatticly built into the ```gh-pages``` branch which is use used to serve the static elements of the website.

<!--### `npm run deploy`

This deploys the static elements to the gh-pages branch for the github page-->

## Add/Updating Teams

1. To create a new team for a new year make a copy of the file ```teamData2024_2025.js``` in the ```/src``` directory and change the year to the respective year at the top of the file.

2. Then go to ```/src/pages/OurTeam.js``` and import the new year's file as is done for other years and add it to the `allTeamData` array.
   
3. Adjust the ``year === '{active year}}'`` parameter to change which year is expanded by default.

## Add/Updating Team Members

1. To add/update team members for a given year's roster go to they year's teamData file, for example ```teamData2024_2025.js```.

2. Then edit the text as needed, images should be placed in ```/public/team_pictures/{year}``` based on the year variable at the top of the data file. The image name should be copied exactly as it appears in the folder.

3. To add social media, add the user's social media links to the respective section. Leave blank platforms that the user does not have.
