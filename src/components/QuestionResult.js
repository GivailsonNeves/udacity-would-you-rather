import React from 'react';

const QuestionResult = props => {
    const { question, answer } = props;
    const totalOne = question.optionOne.votes.length;
    const totalTwo = question.optionTwo.votes.length;
    const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length;
    return (
        <div className="question-result">
            <h3>Added by {props.author.name}</h3>
            <div className="card">
                <div className="card-body">
                    <div className="image-area">
                        <img src={props.author.avatarURL} />
                    </div>
                    <div className="question-result-detail">
                        <h4>Results:</h4>
                        <div>
                            <p>
                                {question.optionOne.text}
                                {
                                    answer === 'optionOne' && <small> (your vote)</small>
                                }
                            </p>
                            <div className="progress">
                                <small>{totalOne} of {totalVotes}</small>
                                <span style={ {width : `${totalOne / totalVotes * 100}%`} } className="progress-bar"></span>
                            </div>
                        </div>
                        <div>
                            <p>
                                {question.optionTwo.text}
                                {
                                    answer === 'optionTwo' && <small> (your vote)</small>
                                }
                            </p>
                            <div className="progress">
                                <small>{totalTwo} of {totalVotes}</small>
                                <span style={ {width : `${totalTwo / totalVotes * 100}%`} } className="progress-bar"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default QuestionResult;