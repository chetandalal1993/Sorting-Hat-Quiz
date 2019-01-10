import React from 'react';
import Question from '../components/Question';
import QuestionCount from '../components/QuestionCount';
import Answer from '../components/Answer';

const Quiz = (props) => {
    const renderAnswerOptions = (key) => {
        return (
          <Answer
            key={key.content}
            answerContent={key.content}
            answerType={key.type}
            answer={props.answer}
            questionId={props.questionId}
            onAnswerSelected={props.onAnswerSelected}
          />
        );
    }

    return (
       <div className="quiz">
        <QuestionCount
            counter={props.questionId}
            total={props.questionTotal}
        />
        <div className="App-section">
            <img className="App-gif" src={props.imgSrc} alt={props.imgAlt}/>
            <Question content={props.question} />
            <ul className="answerOptions">
                {props.answerOptions.map(renderAnswerOptions)}
            </ul>
        </div>
       </div>
    );
  }

export default Quiz;