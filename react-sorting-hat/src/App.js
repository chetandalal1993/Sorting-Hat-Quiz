import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={require("./designFiles/hogwarts-crest.png")} className="App-logo" alt="Hogwarts Crest" />
          <h1>Welcome to Hogwarts</h1>
          <h2>- School of Witchcraft and Wizardry -</h2>
        </header>
        <div className="App-intro">
          <img src={require("./designFiles/great-hall.gif")} className="App-gif" alt="Hogwart Great Hall" />
          <p> <span className="lrg-qt">&ldquo; </span>Welcome to Hogwarts. The start-of-term banquet will begin shortly, but before you take your seats in the Great Hall, you will be sorted into your houses. 
              ... While you are here, your house will be something like your family within Hogwarts. 
              The four houses are called Gryffindor, Hufflepuff, Ravenclaw, and Slytherin. 
              Each house has its own noble history and each has produced outstanding witches and wizards. 
              ... I hope each of you will be a credit to whichever house becomes yours.<span className="lrg-qt"> &rdquo;</span>
          </p>
          <div className="App-btn">Be sorted and discover your house!</div>
        </div>
      </div>
    );
  }
}

export default App;
