import React, { Component } from "react";
import { connect } from "react-redux";
import QuestionView from "../components/QuestionView";

class QuestionList extends Component {

    constructor(props) {
        super(props);
        this.changeTab = this.changeTab.bind(this);
    }

    state = {
        currentTab: 1
    }

    changeTab(e, tab) {
        e.preventDefault();
        this.setState({ currentTab: tab })
    }

    filterQuestions(currentTab) {
        let listQuestions = [];

        const { questions, authedUser, users } = this.props;
        const questionsIds = Object.keys(questions);
        const currentUser = users[authedUser];

        if (currentUser) {
            questionsIds.forEach(
                id => {
                    if (
                        (!!currentUser.answers[id] && currentTab === 2) || 
                        (!currentUser.answers[id] && currentTab === 1)
                    ) listQuestions.push(questions[id]);
                }
            )
            
        }

        return listQuestions.sort((a, b) => b.timestamp - a.timestamp);
    }

    render() {
        const { currentTab } = this.state;
        const questionList = this.filterQuestions(currentTab);

        return (
            <div className="card-list">
                <h3>Questions</h3>
                <ul className="tab-questions">
                    <li><button onClick={e => this.changeTab(e, 1)} className={currentTab === 1 ? "active" : ""}>Not Answared</button></li>
                    <li><button onClick={e => this.changeTab(e, 2)} className={currentTab === 2 ? "active" : ""}>Answared</button></li>
                </ul>
                <div>
                    {
                        questionList.length ? questionList.map(question => {
                            return <QuestionView key={question.id} question={question} />
                        }) : 
                        <div><p className="text-center">No data for this tab!</p></div>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(QuestionList);