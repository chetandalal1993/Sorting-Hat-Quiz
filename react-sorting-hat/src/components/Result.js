import React from 'react';
import Results from '../api/Results'

const Result = (props) => {

    console.log(props.quizResult);

    let result = props.quizResult;
    let houses = Results.map(item => item.house);
    let index;
    if (houses[0] === result){index=0}
    if (houses[1] === result){index=1}
    if (houses[2] === result){index=2}
    if (houses[3] === result){index=3}

    return (
        <div className={`result ${props.quizResult}`}>
            <header className="App-header Result-header">
                <div>
                    <h1> -- {props.quizResult} -- </h1>
                </div>
            </header>
            <div className="App-section">
                <img className="App-gif" src={Results[index].imgSrc} alt={Results[index].imgAlt}/>
                <p>
                    <span className="lrg-qt">&ldquo; </span> {Results[index].motto} <span className="lrg-qt"> &rdquo;</span><br></br>
                    <span className="sm-qt">- Harry Potter and the Philosopher's Stone: (Ch. 7) The Sorting Hat -- J.K. Rowling -</span>
                </p>
                <div className="result-btns">
                    <a href={Results[index].website} target="_blank"><div className="App-btn result-btn">Learn More</div></a>
                    <a href="index.html"><div className="App-btn result-btn">Start Over</div></a>
                </div>
            </div>
        </div>
    );
}

export default Result;