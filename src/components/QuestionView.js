import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class QuestionView extends Component {

    render() {

        const { question } = this.props;
        const author = this.props.users[question.author];

        return (
            <div className="card">
                <div className="card-body">
                    <div className="image-area">
                        <img alt={author.name} src={author.avatarURL} />
                    </div>
                    <div className="question-info">
                        {author && author.name}
                        <h3>Would you rather</h3>
                        <p>...{question.optionOne.text}...</p>
                        <NavLink to={`/question/${question.id}`}>see</NavLink>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ authedUser, users, questions }) => {
    return {
        authedUser,
        users,
        questions
    }
}

export default connect(mapStateToProps)(QuestionView);