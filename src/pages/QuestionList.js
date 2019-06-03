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

    render() {
        const { questions, authedUser, users } = this.props;
        const questionsIds = Object.keys(questions);
        const { currentTab } = this.state;
        const currentUser = users[authedUser];

        return (
            <div>
                <ul className="tab-questions">
                    <li><button onClick={e => this.changeTab(e, 1)} className={currentTab === 1 ? "active" : ""}>Not Answared</button></li>
                    <li><button onClick={e => this.changeTab(e, 2)} className={currentTab === 2 ? "active" : ""}>Answared</button></li>
                </ul>
                <h3>questoes</h3>
                <ul>
                    {
                        currentUser && questionsIds.map(id => {
                            if (!!currentUser.answers[id] && currentTab === 2)
                                return <li key={id}><QuestionView question={questions[id]} /></li>
                            else if (!currentUser.answers[id] && currentTab === 1)
                                return <li key={id}><QuestionView question={questions[id]} /></li>
                            return null;
                        })
                    }
                </ul>
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