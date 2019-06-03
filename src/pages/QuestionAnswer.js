import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAnswerQuestion } from "../actions/questions";

class QuestionAnswer extends Component {

    constructor(props) {
        super(props);
        this.answerQuestion = this.answerQuestion.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {

    }

    answerQuestion(qid, answer) {
        const { dispatch, history } = this.props
        dispatch(handleAnswerQuestion({ qid, answer }));
        history.push('/');
    }

    render() {

        const { match: { params } } = this.props;
        const { id } = params;
        const question = this.props.questions[id];

        return (
            <div className="form form-answer">
                {
                    !!question ? (
                        <div>
                            <h3>Would you rather?</h3>
                            <form onSubmit={this.handleSubmit}>
                                <div>
                                    <label>
                                        <input 
                                            type="radio" 
                                            checked={this.state.answer === 'optionOne'} 
                                            value="optionOne" onChange={() => this.answerQuestion(id, 'optionOne')}/>
                                        {question.optionOne.text}
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            checked={this.state.answer === 'optionTwo'}
                                            value="optionTwo" onChange={() => this.answerQuestion(id, 'optionTwo')} />
                                        {question.optionTwo.text}
                                    </label>                                   
                                </div>
                                <div className="text-center">
                                    <button type="submit">submit</button>
                                </div>
                            </form>
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