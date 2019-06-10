# Hogwarts Sorting Hat Quiz - React Application

## Overview

Two day solo project to build a Web Quiz using React. This quiz mimics the Sorting Hat process that takes place for incoming  students at Hogwarts, the School of Whitchcraft and Wizardy. A user (a new student stepping into the great hall at Hogwarts) is greeted with a message and can click a button to initiate the sorting process. The user is then asked a sequence of 7 questions to determine which Hogwarts House the student is destined for. Once the user is sorted, they are directed to their corresponding House Page which includes a link to more information about the house and a button to restart the quiz.

If you are unfamilar with Hogwarts and its sorting process, don't fret! You can still take the quiz and answer instinctively. At the end you can get more information on the type of student that gets selected into the house you were destined for. You can also read more about the Hogwarts Houses [here](https://harrypotter.fandom.com/wiki/Hogwarts_Houses). 

## Deployment

Deployed via netlify at [https://catolnai-sorting-hat.netlify.com](https://catolnai-sorting-hat.netlify.com)

## Tech Stack

JavaScript | React | CSS

## Application

### Dependencies

`react` | `react-dom` | `react-scripts`

### File Structure

- `react-sorting-hat`
	- package.json and yarn.lock
	- `public` directory
    - index.html: HTML file to run React App
    - sorting-hat.ico: tab icon image
  - `src` directory
    - index.js: JavaScript file to run React App
    - index.css: CSS file for styling of general elements
    - App.js: App's main react component to render sub-components, handle state, and perform handler functions
    - App.css: CSS file for styling of specific app elements
    - `designFiles` directory
      - All images and gifs for app  
    - `components` directory
      - Quiz.js: Reusable page component for each of the quizes questions with its corresponding answer options
      - Answer.js: Reusable component to display list of radio option answers for each question
      - Results.js: Page component to display which house the user belongs to based on answers
    - `api` directory
       - Questions.js: Array of objects of each quiz question and corresponding answer options
       - Results.js: Array of objects of each quiz result options


### Initializing

- `Fork and clone` this project and cd into your cloned version.
- `cd` into `react-sorting-hat` directory
- run `yarn install` to retrieve dependancies.
- run `yarn start` to spin up the `webpack development server`

### Components

#### *`<App />`*

All application state, data and `handler` functions are stored within `<App />`. It is also the container for all secondary Components. Landing page of quiz application display header, initial greeting message and gif, and button to begin quiz. Once a user clicks the `Be sorted and discover your house!` button it toggle hides the landing page and toggle displays the first question page component. 

So long as there is not yet a house result based on the seven questions the `<App />` components renders the `<Quiz />` component page. Once results are obtained `<App />` renders the `<Result />` component page.
  
#### *`<Quiz />`*

`<Quiz />` receives the quiz's current question data from the `<App />` component's state and renders the page for each question including the questions header and question count, the question's text and gif content, and the question's answer options. The `<Quiz />` component renders each `<Answer />` component in a randomized shuffle list. 
  
#### *`<Answer />`*

`<Answer />` receives the quiz's current answer option data from the `<Quiz />` component and renders each answer option in a randomized shuffled list. Each answer option corresponds to one of the four Hogwart Houses. 

Once an answer option is selected, the corresponding answer option house type count in the `<App />` component's state is increased by one. (For example if a user selects an answer that a typical 'Ravenclaw' student would choose then the `Ravenclaw` counter in the App's `answersCount` state would be increased.)

Then the question id and question count are both increased by one and the `<Quiz />` component re-renders with the next question so long as there is a next question to render using the `<App />` component's `setNextQuestion` handler function.

If there are no more questions to answer, the `<App />` component instead runs the `setResults` handler function.

#### *`<Result />`*

`<Result />` receives the quiz `result` data from `<App />` component's state. The results are retrieved from the `<App />` component `setResults` handler function. 

This function goes through the `<App />` component's state `answersCount` object and creates an array of the house key with the correpsonding count value. It then grabs the max count value and correponding house. (In other words it grabs the house that the user selected the most questions that corresponded with that house's type.) In the event of a tie it grabs a random house from the max value array.

`<Result />` then displays the correpsonding house page component including the specific Hogwart's House header, colors, and crest; the House name, image, and motto; a link to that house's page for more information as to the house; and a button to restart the quiz if desired. 

### Array & Object Models

#### Questions

The quiz questions are an array of objects with the following key value pairs: 

| Key      | Value              | Type             | Desription                                                        |
| :------- | :------------------| :----------------| :-----------------------------------------------------------------|
| imgSrc   | image              | require(string)  | image string represents location of image in designFile directory |
| imgAlt   | image alt tag      | string           | string represents image alt tag                                   |
| question | question text      | string           | the content text of each question                                 |
| answers  | answer options     | array of objects | array of answer options with type and content keys                |
| type     | answer result type | string           | corresponding house the answer option represents                  |
| content  | answer option text | string           | the content text of each answer option                            |

```js
[
    {
        imgSrc: require("../designFiles/wand.gif"),
        imgAlt: "Wizard getting first wand",
        question: "Before your arrival at Hogwarts you obtained your first wand at Ollivanders. The wand you were destined for has which type of wand core?",
        answers: [
            {
                type: "Hufflepuff",
                content: "Unicorn Tail Hair"
            },
            {
                type: "Gryffindor",
                content: "Phoenix Feather"
            },
            {
                type: "Ravenclaw",
                content: "Dragon Heartstring"
            },
            {
                type: "Slytherin",
                content: "Horned Serpent Horn"
            }
        ]
    },
    ...
];
```

#### Results

The quiz questions are an array of objects with the following key value pairs: 

| Key      | Value              | Type             | Desription                                                        |
| :------- | :------------------| :----------------| :-----------------------------------------------------------------|
| house    | house name         | string           | name of Hogwarts house user was chosen for                        |
| imgSrc   | image              | require(string)  | image string represents location of image in designFile directory |
| imgAlt   | image alt tag      | string           | string represents image alt tag                                   |
| motto    | house motto text   | string           | the content text the house motto                                  |
| website  | house website      | string           | house website to get more information as to house                 |

```js
[
    {   
        house: "Hufflepuff",
        imgSrc: require("../designFiles/hufflepuff.gif"),
        imgAlt: "Hufflepuff crest",
        motto: "You might belong in Hufflepuff, Where they are just and loyal, Those patient Hufflepuffis are true, And unafraid of toil.",
        website: "http://harrypotter.wikia.com/wiki/Hufflepuff"
    },
    ...
];
```

