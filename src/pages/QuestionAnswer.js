import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAnswerQuestion } from "../actions/questions";
import QuestionResult from "../components/QuestionResult";

class QuestionAnswer extends Component {

    state = {
        qid: null,
        answer: null
    }
    constructor(props) {
        super(props);
        this.answerQuestion = this.answerQuestion.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const { dispatch, history } = this.props
        dispatch(handleAnswerQuestion(this.state));
    }

    answerQuestion(qid, answer) {
        this.setState({
            qid,
            answer
        });
    }

    render() {

        const { match: { params }, users, authedUser } = this.props;
        const { id } = params;
        const question = this.props.questions[id];
        const author = this.props.users[question.author];
        const user = users[authedUser];

        return (
            <div className="form-answer">
                <form onSubmit={this.handleSubmit}>
                    {
                        !!question ?
                            
                                !user.answers[id] ?
                                (
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="image-area">
                                                <img src={author.avatarURL} />
                                            </div>
                                            <div>
                                                <h3>Would you rather?</h3>

                                                <label>
                                                    <input
                                                        type="radio"
                                                        checked={this.state.answer === 'optionOne'}
                                                        value="optionOne" onChange={() => this.answerQuestion(id, 'optionOne')} />
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
                                        </div>
                                        <div className="text-center card-footer">
                                            <button disabled={this.state.answer === null} type="submit">submit</button>
                                        </div>
                                    </div>
                                ) : (
                                    <QuestionResult question={question} author={author} answer={user.answers[id]} />
                                )
                            
                        : <p>Question not founded!</p>
                    }
                </form>
            </div>
        );
    }
}

const mapStateToProps = ({ authedUser, questions, dispatch, users }) => ({
    authedUser,
    questions,
    dispatch,
    users
});

export default connect(mapStateToProps)(QuestionAnswer);