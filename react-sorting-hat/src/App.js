import React, { Component } from 'react';

import Quiz from './components/Quiz';
import Questions from './api/Questions'

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
    const shuffledAnswerOptions = Questions.map((question) => this.shuffleArray(question.answers));  

    this.setState({
      question: Questions[0].question,
      answerOptions: shuffledAnswerOptions[0]
    });
  }

  shuffleArray = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

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

        <div className="App-section App-quiz">
          <Quiz
            answer={this.state.answer}
            answerOptions={this.state.answerOptions}
            questionId={this.state.questionId}
            question={this.state.question}
            questionTotal={Questions.length}
            onAnswerSelected={this.handleAnswerSelected}
          />
        </div>

      </div>
    );
  }
}

export default App;
