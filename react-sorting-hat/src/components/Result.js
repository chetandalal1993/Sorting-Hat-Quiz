import React from 'react';

const Result = (props) => {
    return (
        <div className="result">
            <header className="App-header Result-header">
                <div>
                    <h1>{props.quizResult}</h1>
                </div>
            </header>
            <div className="App-section">
                <img className="App-gif" src="***" alt="***"/>
                <span className="lrg-qt">&ldquo; </span> *** <span className="lrg-qt"> &rdquo;</span><br></br>
                <span className="sm-qt">- Harry Potter and the Philosopher's Stone: (Ch. 7) The Sorting Hat -- J.K. Rowling -</span>
                <a href="***"><div className="App-btn">Learn More</div></a>
                <a href="index.html"><div className="App-btn">Start Over</div></a>
            </div>
        </div>
    );
}

export default Result;