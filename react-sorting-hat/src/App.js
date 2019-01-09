import React, { Component } from 'react';

import Quiz from './components/Quiz';
import Questions from './api/Questions'
import Result from './components/Result'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {
        Gryffindor: 0,
        Hufflepuff: 0,
        Ravenclaw: 0,
        Slytherin: 0
      },
      result: ''
    };
  }

  componentWillMount = () => {
    const shuffledAnswerOptions = Questions.map((question) => this.shuffleArray(question.answers)); // Setting new random order of possible answer array by calling suffle function

    this.setState({
      question: Questions[0].question, // Setting first question -- Displaying first question from Question data array
      answerOptions: shuffledAnswerOptions[0] // Setting first answers -- Displaying first question's posisble answers randomly from Question data array 
    });
  }

  shuffleArray = (array) => { // Shuffle function being called
    let currentIndex = array.length, temporaryValue, randomIndex; // Setting current index from answer option length (4) and other variables

    while (0 !== currentIndex) { // Will continue so long as there are still items in the array. (First index of 4 then --)
      randomIndex = Math.floor(Math.random() * currentIndex); // Set random new index (ex. 2)
      currentIndex -= 1; // Current index now 3
      temporaryValue = array[currentIndex]; // Value set to array[3] or third answer option
      array[currentIndex] = array[randomIndex]; // array[3] = array[2]
      array[randomIndex] = temporaryValue; // array[2] = array [3] :: This is essentially swapping to answer option positions using third variable
    } // Process continues for each index (4 times)

    return array; // return new random array
  }

  setUserAnswer = (answer) => { // for each selected answer new state to be added
    this.setState((state) => ({
      answersCount: { // setting new state of answersCount object containing key (house) and values (current score)
        ...state.answersCount, // utilizing previus state
        [answer]: state.answersCount[answer] + 1 // taking the key that matches the selected answer and adding 1 to its value
      },
      answer: answer // answer previously empty string now the selected answer
    }));
  }

  setNextQuestion = () => {
    const counter = this.state.counter + 1; // Counter starts at zero and increments by one each question (counter = 0)
    const questionId = this.state.questionId + 1; // Start at 1 (Question 1) and increments by one (id =1)
    this.setState({
      counter: counter, // return new counter (counter = 1)
      questionId: questionId, // return new id (id = 2)
      question: Questions[counter].question, // replace last question with next one from Question data array (question = Questions[1].question)
      answerOptions: Questions[counter].answers, // replace last answer options with next one from Question data array
      answer: '' // resetting selected answer
    });
  }

  handleAnswerSelected = (e) => { // called when answer is selected
    this.setUserAnswer(e.currentTarget.value); // calling setUserAnswer function with selected answer
    if (this.state.questionId < Questions.length) { // continue for all items in Question Array
        setTimeout(() => this.setNextQuestion(), 500); // calling setNextQUestion function after given time
      } else { // return once all questions answered
        setTimeout(() => this.setResults(this.getResults()), 500); // calling setResults function after given time using the results from the called getResults function
      }
  }

  getResults = () => { // to determine result
    const answersCount = this.state.answersCount; // setting answer object of current state (exObj= {H: 5, G: 1, R: 1, S: 1})
    const answersCountKeys = Object.keys(answersCount); // setting key array from answer object (exArr= [H, G, R, S])
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]); // iterate over key array and set value array to be the answer object value at that key index (exVals = [5, 1, 1, 1])
    const maxAnswerCount = Math.max(...answersCountValues); // spread operator to get max number from array (ex. 5)

    return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount); // returns answer object item who has max (exResult. [H] : exObg[H] = 5)
  }

  setResults = (result) => { // takes in calculated result array (ex. [H])
    if (result.length === 1) { // if only one max value in array 
      this.setState({ result: result[0] }); // returns only item (ex. H)
    } else { // if more than one max value like a tie (ex. [H, G, S])
      this.setState({ result: result[getRandomInt(result.length)]}); // returns result at random index (ex. length=3 => random index expected 0, 1, or 2)
    }
  }

  renderQuiz = () => {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={Questions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  renderResult = () => {
    return (
      <Result quizResult={this.state.result} />
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={require("./designFiles/hogwarts-crest.png")} className="App-logo" alt="Hogwarts Crest" />
          <h1>Welcome to Hogwarts</h1>
          <h2>- School of Witchcraft and Wizardry -</h2>
        </header>

        <div className="App-section App-intro">
          <img src={require("./designFiles/great-hall.gif")} className="App-gif" alt="Hogwart Great Hall" />
          <p> <span className="lrg-qt">&ldquo; </span>Welcome to Hogwarts. The start-of-term banquet will begin shortly, but before you take your seats in the Great Hall, you will be sorted into your houses. 
              ... The four houses are called Gryffindor, Hufflepuff, Ravenclaw, and Slytherin. 
              Each house has its own noble history and each has produced outstanding witches and wizards. 
              ... I hope each of you will be a credit to whichever house becomes yours.<span className="lrg-qt"> &rdquo;</span><br></br>
              <span className="sm-qt">- Harry Potter and the Philosopher's Stone: (Ch. 7) The Sorting Hat -- J.K. Rowling -</span>
          </p>
          <div className="App-btn">Be sorted and discover your house!</div>
        </div>

        <div className="App-section App-quiz App-results">
          {this.state.result ? this.renderResult() : this.renderQuiz()}
        </div>

      </div>
    );
  }
}

export default App;
