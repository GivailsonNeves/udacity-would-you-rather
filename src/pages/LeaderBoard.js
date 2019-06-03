import React, { Component } from "react";
import { connect } from 'react-redux';

class LeaderBoard extends Component {
    render() {
        const { users } = this.props;
        console.log(users)
        return (
            <div className="card-list">
                {
                    users.map(u => (
                        <div key={u.id} className="card">
                            <div className="card-body">
                                <div>
                                    <img src={u.avatarURL} />
                                </div>
                                <div className="card-inner-score">
                                    <h4>{u.name}</h4>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>Answered questions</td>
                                                <td>{Object.keys(u.answers).length}</td>
                                            </tr>
                                            <tr>
                                                <td>Created questions</td>
                                                <td>{u.questions.length}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div>
                                    <div className="card-score">
                                        <div className="card-header">
                                            <p>Score</p>
                                        </div>
                                        <div className="score-point">
                                            {u.score}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    }
}

const mapStateToProps = ({ users }) => {
    let _users = [];
    for (let i in users) {
        users[i].score = users[i].questions.length + Object.keys(users[i].answers).length;
        _users.push(users[i]);
    }
    console.log(_users)
    return (
        {
            users: _users.sort((a, b) => b.score - a.score)
        }
    );
}

export default connect(mapStateToProps)(LeaderBoard);