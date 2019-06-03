import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAnswerQuestion } from "../actions/questions";

class QuestionAnswer extends Component {

    constructor(props) {
        super(props);
        this.answerQuestion = this.answerQuestion.bind(this);
    }

    answerQuestion(qid, answer) {
        const { dispatch, history } = this.props
        dispatch(handleAnswerQuestion({qid, answer}));
        history.push('/');
    }

    render() {

        const { match: { params } } = this.props;
        const { id } = params;
        const question = this.props.questions[id];

        return (
            <div>
                {
                    !!question ? (
                        <div>
                            <h3>Would you rather?</h3>
                            <div>
                                <button onClick={ () => this.answerQuestion(id, 'optionOne')}>
                                    {question.optionOne.text}
                                </button>
                                <button onClick={ () => this.answerQuestion(id, 'optionTwo')}>
                                    {question.optionTwo.text}
                                </button>
                            </div>
                        </div>
                    ) : <p>Questão não encontrada!</p>
                }

            </div>
        );
    }
}

const mapStateToProps = ({ authedUser, questions, dispatch }) => ({
    authedUser,
    questions,
    dispatch
});

export default connect(mapStateToProps)(QuestionAnswer);