# React boilerplate

A super simple react based Chrome extension boilerplate.

## Stack
This template supports React, Typescript, Tailwind and Webpack.

It also has Firebase setup along with Chrome Identity and React router. (You have to edit the firebase config and client id in manifest)

It also uses Jest and React testing library for testing the components

The template supports HMR by default!

* The entrypoint(manifest.json) is present in static folder.
* The popup folder contains the UI for the extension.
* The contentScript folder acts as a message passing interface and to manipulate DOM.
* Additional scripts like background script can be added by creating a file anywhere and adding it to entrypoint webpack config.

## How to use?

You can install and run the extension by using the following command:

* npm run build - this will create a 'dist' folder.
* Go to chrome/edge extensions tab chrome://extensions or edge://extensions.
* Enable developer mode
* Click on Load Unpackaged
* Select the 'dist' folder

* This will load the extension to your browser, you can pin it if you want.

Refer this site for more info: https://developer.chrome.com/docs/extensions/mv3/getstarted/extensions-101/