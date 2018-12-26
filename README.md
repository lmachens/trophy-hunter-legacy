# Trophy Hunter

Trophy Hunter is a League of Legends appp for [Overwolf](https://www.overwolf.com/).

## Download app

You can download the app from https://www.overwolf.com/app/trophy_hunter-trophy_hunter.

## Develop

1. Clone this project with activated symlink support on Windows with `git clone -c core.symlinks=true git@github.com:lmachens/lol-trophy-hunter.git`. In the `overwolf/dist` folder you find the dev and production apps.
1. Install Meteor from https://www.meteor.com/install.
1. Install dependencies with `meteor npm install`.
1. Copy `template.settings.json` to `app/settings.json` and update fields.
1. Start the dev server with `meteor npm run app`. The app is available on http://localhost:3000.
1. Download the [Developers version of Overwolf](https://download.overwolf.com/install/Download?Channel=Developers). You can skip this step if you already installed Overwolf.
1. Start Overwolf and click on Settings (either the wrench icon on the dock, or the Settings button on the tray icon menu).
1. Go to the Support tab, you will see a link labelled "Development Options". Click that.
1. Click on "Load unpacked extension" and navigate to `overwolf/dist/development`.
1. The app will connect to http://localhost:3000. 

## UI Development without Meteor

We added storybook to allow developing of React components without the need to run Meteor.
`npm run storybook` will process all `.stories.js` files. 
