import React, { Component } from "react";
import { connect } from "react-redux";
import QuestionView from "../components/QuestionView";

class QuestionListPage extends Component {

    render() {
        return (
            <div>
                <ul className="tab-questions">
                    <li><a>Not Answared</a></li>
                    <li><a>Answared</a></li>
                </ul>
                <h3></h3>
                <ul>
                    {
                        this.props.questionsIds.map(id => (
                            <li key={id}>
                                <QuestionView id={id} />
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = ({ questions }) => {    
    return {
        questionsIds: Object.keys(questions)
    }
}

export default connect(mapStateToProps)(QuestionListPage);