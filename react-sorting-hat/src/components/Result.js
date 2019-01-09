import React from 'react';

const Result = (props) => {
  return (
    <div className="result">
      <strong>{props.quizResult}</strong>
    </div>
  );
}

export default Result;