# I Drink and I Know Quotes: A Game of Thrones Quote Trivia Game

A [Front-End Project](https://github.com/rdtho2525/Niche_GoT) by [Reggie Thompson](https://github.com/rdtho2525).



1. [Overview](#overview)
2. [Planning Resources](#planning-resources)
3. [Set Up](#setup-instructions)
4. [Learning Goals](#learning-goals)
5. [Technologies](#technologies)
6. [Features](#features)
7. [Challenges](#challenges)
8. [Wins](#wins)
9. [Future Iterations](#future-iterations)


## Overview

_Niche Audience_ is the final solo project of the Module 3 at [Turing School of Software and Design](https://turing.io/). The purpose is to demonstrate an understanding and mastery of all the technologies learned over the course of the module, including: React, React-Router, Asynchronous JavaScript, and end-to-end testing with Cypress.

The intent behind _I Drink and I Know Quotes_ is to serve users who are tremendous fans for the HBO series _Game of Thrones_ developed primarily for mobile users.  This app tests the users' knowledge of some of the most well-known quotes from the series.  The game itself plays much like a multiple choice quiz.  When selecting the "play" button in the bottom center of the UI, the user will be shown a single quote and four possible characters to attribute said quote.  Upon making a selection, the user will be given immediate feedback on whether or not the answer they provide is correct.  Users also have the option to skip to the next quote or save the current quote of their choosing, a list of which can be viewed in the "Saved Quotes" tab on the bottom right.


## Planning Resources

* [GitHub Project Board](https://github.com/rdtho2525/Niche_GoT/projects)
* [Miro Board - Wireframes and Component Structure](https://miro.com/app/board/o9J_lVSt2Q0=/)


## Setup Instructions


Clone down this repository to your local machine:

```
git clone git@github.com:rdtho2525/Niche_GoT.git
```

Then install the library dependencies by running:

```
npm install
```

To start application, run:

```
npm start
```

If you see `Compiled successfully!` in your terminal, the application is running and the app can be veiwed at `http://localhost:3000/` in your browser.


## Learning Goals

* Solidify React architecture and fundamentals
* Conduct throrough end-to-end testing
* Create a multi-page UX using Router
* Create personas and user stories to describe your target audience
* Work within constraints to deliver a product for your niche audience, which provides a unique service


## Technologies

<img alt="React" src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
<img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
<img alt="Git" src="https://img.shields.io/badge/git%20-%23F05033.svg?&style=for-the-badge&logo=git&logoColor=white"/>
<img alt="HTML5" src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/>
<img alt="CSS3" src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/>
<img alt="Cypress" src='https://img.shields.io/badge/cypress%20-%23404d59.svg?&style=for-the-badge&logo=Cypress&logoColor=white'/>

---
## Features


#### Application Demo

![demo-vid]()

#### Landing Page

![landing-page]()

#### Movie Details

![trivia-page]()

#### Saved Quotes
![saved-quotes]()

#### Desktop View
![mobile-landing page]()


---
## Challenges

* Leveraging the React hook `useEffect` to timely format data in a way that's usable for a quiz app
* Developing the logic behind providing immediate feedback in gameplay upon user input
* Sudden issues with the API server from which the app requests data


---
## Wins

* Recognizing just how much I've learned over the course of module 3

---
## Future Iterations

* Adding a short timer for each prompt
* Creating more creative and dynamic ways to provide immediate feedback
* Tracking the user's current score
* Implementing sorting and filtering capabilites in the "Saved Quotes" section
