import React, { Component } from "react";
import { connect } from "react-redux";

class QuestionView extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {

        const question = this.props.questions[this.props.id];
        const author = this.props.users[question.author];

        return (
            <div>
                {author && author.name}
                <h3>Would you rather</h3>
                <p>...{question.optionOne.text}...</p>
            </div>
        );
    }
}

const mapStateToProps = ({authedUser, users, questions}) => {
    return {
        authedUser,
        users,
        questions
    }
}

export default connect(mapStateToProps)(QuestionView);