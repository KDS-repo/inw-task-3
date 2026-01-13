# Task

Innowise JS Internship: Task 3: Создание SPA-приложения

Find the hosted solution at https://gleeful-sherbet-d034f1.netlify.app/

A News site built as a React Single Page Application. Front page of the site shows short summaries of a number of articles loaded from DummyJSON. Full version of the article can be opened with a click. Login page available with password check at DummyJSON. Try username: emilys, password: emilyspass, this is one of the users from DummyJSON database at https://dummyjson.com/users.

#### Lighthouse check
![W3C HTML check](image-1.png)

#### W3C HTML check
![W3C HTML check](image-1.png)

# How to run the app

Option 1. Website\
Go to https://gleeful-sherbet-d034f1.netlify.app/ in your browser.

Option 2. Local server\
Open the root folder of the project (it contains package.json and this README.md) in a terminal of your choice.\
Run `npm install` to install all the necessary dependencies.\
Run `npm run dev` to start a webpack server on port 5173.\
Go to http://localhost:5173/ in a browser of your choice.

# Directory Structure

-/ - Root directory of the project. Contains package.json, this README.md and config files

-fonts/ - Font styles

-img/ - Images for the site

-public - Contains index.html for use in webpack and _redirects that is necessary for Netlify to function with SPAs

-src/ - jsx, js and css files organized by function with css styles in the same folder as the element that imports them and named in a similar way. Contains the entry point that is main.jsx and purely functional App.jsx.

-src/api - Redux Query API handlers

-src/components - Reusable React components

-src/pages - React elements for displaying content of the central area of the page, such as articles or login

-src/store - Redux Store slices and storage

-svg/ - SVG images
	