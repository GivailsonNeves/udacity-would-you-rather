import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/auth";

class LoginForm extends Component {

    constructor(props) {
        super(props);

        this.changeUser = this.changeUser.bind(this);
    }

    changeUser(e) {
        const { value } = e.target;
        const { dispatch } = this.props;        

        dispatch(setAuthedUser(value));
    }

    render() {
        
        const {users} = this.props;
        const keys = Object.keys(users);

        return (
            <form>
                <label>
                    <select onChange={this.changeUser}>
                        <option value="">--select--</option>
                        {
                            keys && keys.map(key =>(
                                <option value={key} key={key}>{users[key].name}</option>
                            ))
                        }
                    </select>
                </label>
            </form>
        );
    }

}

const mapStateToProps = ({users}) => {    
    return ({
        users
    });
}

export default connect(mapStateToProps)(LoginForm);