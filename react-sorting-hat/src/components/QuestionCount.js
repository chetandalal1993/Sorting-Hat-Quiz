import React from 'react';

const QuestionCount = (props) => {
  return (
    <div className="questionCount">
        <header className="App-header">
            <h1>Question <span>{props.counter}</span> of <span>{props.total}</span></h1>
        </header>
    </div>
  );
}

export default QuestionCount;