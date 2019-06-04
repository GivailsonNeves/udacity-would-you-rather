import React from 'react';

const QuestionResult = props => {
    const { question, answer } = props;
    const totalOne = question.optionOne.votes.length;
    const totalTwo = question.optionTwo.votes.length;
    const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length;
    const percentVotesOne = (totalOne / totalVotes * 100) + '%';
    const percentVotesTwo = (totalTwo / totalVotes * 100) + '%';
    return (
        <div className="question-result">
            <h3>Added by {props.author.name}</h3>
            <div className="card">
                <div className="card-body">
                    <div className="image-area">
                        <img alt={props.author.name} src={props.author.avatarURL} />
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
                                <small>{percentVotesOne}</small>
                                <span style={ { width: percentVotesOne } } className="progress-bar"></span>
                            </div>
                            <small>{totalOne} of {totalVotes}</small>
                        </div>
                        <div>
                            <p>
                                {question.optionTwo.text}
                                {
                                    answer === 'optionTwo' && <small> (your vote)</small>
                                }
                            </p>
                            <div className="progress">
                                <small>{percentVotesTwo}</small>
                                <span style={ { width: percentVotesTwo} } className="progress-bar"></span>
                            </div>
                            <small>{totalTwo} of {totalVotes}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default QuestionResult;