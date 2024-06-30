# Blackjack Game

This is a simple Blackjack game built with React, TypeScript, Redux, and Redux-Saga.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Technologies Used](#technologies-used)
- [License](#license)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/blackjack.git
cd blackjack

Install the dependencies:
yarn install
npm install 
Usage
To start the development server, run:
yarn start
The app will be available at http://localhost:3000.

Project Structure
blackjack/
├── node_modules/
├── public/
│   ├── index.html
│   ├── background.jpg
│   ├── cards/
│   │   ├── hidden.png
│   │   ├── c2.png
│   │   ├── c3.png
│   │   ├── ...
│   └── ...
├── src/
│   ├── components/
│   │   ├── Deck.tsx
│   │   ├── Game.tsx
│   │   ├── Menu.tsx
│   │   ├── Result.tsx
│   │   └── Settings.tsx
│   ├── store/
│   │   ├── exampleReducer.ts
│   │   ├── exampleSaga.ts
│   │   ├── index.ts
│   │   ├── rootReducer.ts
│   │   └── rootSaga.ts
│   ├── App.tsx
│   ├── index.tsx
│   ├── index.css
│   └── react-app-env.d.ts
├── .eslintrc.json
├── package.json
├── tsconfig.json
└── yarn.lock


Available Scripts
In the project directory, you can run:

yarn start
Runs the app in development mode. Open http://localhost:3000 to view it in the browser.

yarn build
Builds the app for production to the build folder.

yarn test
Launches the test runner in interactive watch mode.

yarn eject
Ejects the configuration files from react-scripts so you can customize them.

Technologies Used
React: A JavaScript library for building user interfaces.
TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.
Redux: A predictable state container for JavaScript apps.
Redux-Saga: A library that aims to make application side effects (e.g., asynchronous actions) easier to manage.
@reduxjs/toolkit: The official, recommended way to write Redux logic.
qrcode.react: A React component to generate QR codes.